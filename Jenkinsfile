pipeline {
    agent {label 'linux'}
    environment {
        IMAGE_NAME = "msmapp"
        TARGET_IMAGE = "samsta/practice_jenkins"
    }
    tools {
        nodejs 'NodeJS 14.17.5'
    }
    stages {
        stage('install dependencies') {
            steps {
                sh "npm install"
            }
        }

        stage('build app image') {
            steps {
                sh "sudo docker build -t $IMAGE_NAME:$BUILD_NUMBER ."
            }
        }

        stage('docker-hub login') {
            environment {
                DOCKERHUB_CREDS = credentials('Dockerhub-login')
            }
            steps {
                sh "sudo docker login -u $DOCKERHUB_CREDS_USR -p $DOCKERHUB_CREDS_PSW"
            }
        }

        stage('tag image') {
            steps {
                sh "sudo docker tag $IMAGE_NAME:$BUILD_NUMBER $TARGET_IMAGE:$IMAGE_NAME$BUILD_NUMBER"
            }
        }

        stage('push image') {
            steps {
                sh "sudo docker push $TARGET_IMAGE:$IMAGE_NAME$BUILD_NUMBER"
            }
            post {
                always {
                    script {
                        sh "sudo docker rmi -f $TARGET_IMAGE:$IMAGE_NAME$BUILD_NUMBER"
                        sh "sudo docker rmi -f $TARGET_IMAGE:$BUILD_NUMBER"
                        sh "sudo docker logout"
                    }
                }
            }
        }
    }
}