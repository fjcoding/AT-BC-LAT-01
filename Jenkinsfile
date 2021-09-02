pipeline {
    agent {label 'linux' }
    tools {
        nodejs 'NodeJs 16.8.0'
    }
    environment {
        NEXUS_URL = "10.0.2.15:8082"
        NEXUS_CREDENTIALS = credentials("nexus")
        DOCKER_HUB_CREDENTIALS = credentials("dockerhub")
        DOCKER_IMAGE_NAME = "$DOCKER_HUB_CREDENTIALS_USR/metal-slug-maker"
        PROJECT_NAME = "metal-slug-maker"
        PRIVATE_IMAGE_NAME = "$NEXUS_URL/$PROJECT_NAME"
    }
    stages {
        stage('install packages') {
            steps {
                sh "npm install"
            }
        }
        stage('run unit tests') {
            steps {
                sh "npm test"
            }
        }
        stage('run lint validation') {
            steps {
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
        stage('build Image') {
            when { branch 'main'}
            steps {
                sh "sudo docker build -t $PRIVATE_IMAGE_NAME:$BUILD_NUMBER ."
            }
            post { 
                failure{
                    script {
                        sh "docker rmi \$(docker images --filter dangling=true -q)"
                    }
                }
            }
        }
        stage('push Image') {
            when { branch 'main'}
            steps {
                sh "echo '$NEXUS_CREDENTIALS_PSW' | sudo docker login -u $NEXUS_CREDENTIALS_USR --password-stdin $NEXUS_URL"
                sh "sudo docker push $PRIVATE_IMAGE_NAME:$BUILD_NUMBER"
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
    }
}