pipeline {
    agent {label 'linux' }
    tools {
        nodejs 'NodeJs 16.8.0'
    }
    environment {
        NEXUS_URL = "10.0.2.15:8082"
        NEXUS_CREDENTIALS = credentials("nexus")
        DOCKER_HUB_CREDENTIALS = credentials("dockerhub")
        PROJECT_NAME = "metal-slug-maker"
        DOCKER_IMAGE_NAME = "$DOCKER_HUB_CREDENTIALS_USR/$PROJECT_NAME"
        PRIVATE_IMAGE_NAME = "$NEXUS_URL/$PROJECT_NAME"
    }
    stages {
        stage('install packages') {
            steps {
                sh "npm install"
            }
        }
        stage('run unit tests and lint validation') {
            steps {
                sh "npm test"
                sh "npm run lint"
            }
        }
        stage('analize static code') {
            steps {
                script {
                    def scannerHome = tool 'sonarscanner4.6.2'
                    def scannerParameters = "-Dsonar.projectName=$PROJECT_NAME " +
                        "-Dsonar.projectKey=$PROJECT_NAME -Dsonar.sources=. " +
                        "-Dsonar.javascript.lcov.reportPaths=coverage/lcov.info"
                    withSonarQubeEnv('sonarqube-automation') {
                        sh "${scannerHome}/bin/sonar-scanner ${scannerParameters}"
                    }
                }
            }
        }
        stage ('quality gate') {
            steps {
                timeout(time: 1, unit: 'HOURS') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('build image') {
            // when { branch 'main'}
            steps {
                sh "sudo docker build -t $PROJECT_NAME:$BUILD_NUMBER ."
            }
            post { 
                failure{
                    script {
                        sh "docker rmi \$(docker images --filter dangling=true -q)"
                    }
                }
            }
        }
        stage('push image to private repo') {
            when { branch 'main'}
            steps {
                sh """
                sudo docker tag $PROJECT_NAME:$BUILD_NUMBER $PRIVATE_IMAGE_NAME:$BUILD_NUMBER
                echo '$NEXUS_CREDENTIALS_PSW' | sudo docker login -u $NEXUS_CREDENTIALS_USR --password-stdin $NEXUS_URL
                sudo docker push $PRIVATE_IMAGE_NAME:$BUILD_NUMBER
                """
            }
            post {
                always {
                    script {
                        sh "sudo docker rmi -f $PRIVATE_IMAGE_NAME:$BUILD_NUMBER"
                        sh "sudo docker logout"
                    }
                }
            }
        }
        // end continuous integration

        // start continuous delivery
        stage ('deploy to staging') {
            // when { branch 'main' }
            steps {
                sh "sudo docker rm -f msm"
                sh "sudo docker run --name msm -p 3000:3000 -d -v /home/vagrant/keys:/keys/ $PROJECT_NAME:$BUILD_NUMBER"
                sleep 15
            }
        }
        stage ('run user acceptance tests') {
            // when { branch 'main'}
            environment {
                API_URL = "10.0.2.15:3000"
            }
            steps {
                sh """
                curl -X PUT -H "Content-Type: application/json" -d '{}' http://$API_URL/scenario | grep 200
                curl -X POST http://$API_URL/scenario/notExistingId | grep 400
                curl -X PUT -H "Content-Type: application/json" -d '{}' http://$API_URL/actor | grep 400
                curl -X PUT -H "Content-Type: application/json" -d '{}' http://$API_URL/action | grep 400
                curl -X POST http://$API_URL/action/notExistingId | grep 400
                """
            }
        }
        stage ('tag production image') {
            // when { branch 'main' }
            steps {
                sh "sudo docker tag $PROJECT_NAME:$BUILD_NUMBER $DOCKER_IMAGE_NAME:$BUILD_NUMBER"
                sh "sudo docker tag $PROJECT_NAME:$BUILD_NUMBER $DOCKER_IMAGE_NAME:latest"
            }
        }
        stage('push image to production') {
            // when { branch 'main' }
            steps {
                sh "echo '$DOCKER_HUB_CREDENTIALS_PSW' | sudo docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
                sh "sudo docker push $DOCKER_IMAGE_NAME:$BUILD_NUMBER"
                sh "sudo docker push $DOCKER_IMAGE_NAME:latest"
            }
            post {
                always {
                    script {
                        sh "sudo docker rmi -f $DOCKER_IMAGE_NAME:$BUILD_NUMBER"
                        sh "sudo docker rmi -f $DOCKER_IMAGE_NAME:latest"
                        sh "sudo docker logout"
                    }
                }
            }
        }
        // end continuous delivery

        // start continuous deployment
        stage ('create .env file') {
            // when { branch 'main' }
            environment{ 
                ENV_FILE = ".env"
                TAG = "latest"
            }
            steps {
                sh """
                echo 'FULL_IMAGE_NAME=$DOCKER_IMAGE_NAME' > $ENV_FILE
                echo 'TAG=$TAG' >> $ENV_FILE
                """
            }
        }
        stage ('copy files to prod server') {
            // when { branch 'main' }
            environment {
                DB_KEY = "/home/vagrant/keys/db_key.json"
                SCRIPT = "deployment.sh"
                ENV_FILE = ".env"
            }
            steps {
                sshagent(['prod-key']) {
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER mkdir -p $PROJECT_NAME"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER mkdir -p keys"
                    sh "scp $ENV_FILE $SCRIPT $PROD_SERVER:/home/ubuntu/$PROJECT_NAME"
                    sh "scp $DB_KEY $PROD_SERVER:/home/ubuntu/keys"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER ls /home/ubuntu/keys"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER ls -a /home/ubuntu/$PROJECT_NAME"
                }
            }
        }

        stage ('deploy in production') {
            // when { branch 'main' }
            environment {
                SCRIPT = "deployment.sh"
                FULL_IMAGE_NAME = "$DOCKER_IMAGE_NAME:latest"
            }
            steps {
                sshagent(['prod-key']) {
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER sudo docker rm -f msm"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER sudo docker rmi $FULL_IMAGE_NAME"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER echo '$DOCKER_HUB_CREDENTIALS_PSW' | sudo docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER sudo docker pull $FULL_IMAGE_NAME"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER sudo docker run --name msm -p 3000:3000 -d -v \$HOME/keys:/keys/ $FULL_IMAGE_NAME"
                    sh "ssh -o 'StrictHostKeyChecking no' $PROD_SERVER sudo docker logout"
                }
            }
        }
    }
}