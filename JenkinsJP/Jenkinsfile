pipeline {
    agent {label 'LinuxAgent_JP' }
    tools {
        nodejs 'NodeJs 16.8.0'
    }
    environment {
        DOCKER_HUB_CREDENTIALS = credentials("dockerhub")
        DOCKER_IMAGE_NAME = "jeanpeare/msmaker:$BUILD_NUMBER"
    }
    stages {
        stage('Install') {
            steps {
                sh "npm install"
            }
        }
        stage('Unit tests') {
            steps {
                sh "npm test"
            }
        }
        stage('Eslint validations') {
            steps {
                sh "npm run lint"
            }
        }
        stage('Build Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE_NAME ."
            }
        }
        stage('Publish Image') {
            steps {
                sh "echo '$DOCKER_HUB_CREDENTIALS_PSW' | sudo docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
                sh "sudo docker push $DOCKER_IMAGE_NAME"
            }
            post {
                always {
                    script {
                        sh "sudo docker rmi -f $DOCKER_IMAGE_NAME"
                        sh "sudo docker logout"
                    }
                }
            }
        }
    }
}
