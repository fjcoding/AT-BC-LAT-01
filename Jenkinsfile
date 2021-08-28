pipeline {
    agent {label 'linux' }
    tools {
        nodejs 'NodeJs 16.8.0'
    }
    environment {
        DOCKER_HUB_CREDENTIALS = credentials("dockerhub")
        DOCKER_IMAGE_NAME = "daniel33gomez/metal-slug-maker"
    }
    stages {
        stage('install packages') {
            steps {
                sh "npm install"
            }
        }
        stage('execute unit tests') {
            steps {
                sh "npm test"
            }
        }
        stage('build Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE_NAME:$BUILD_NUMBER ."
            }
        }
        stage('push Image') {
            steps {
                sh "echo '$DOCKER_HUB_CREDENTIALS_PSW' | docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
            }
            post {
                always {
                    script {
                        sh "docker rmi -f $DOCKER_IMAGE_NAME:$BUILD_NUMBER"
                        sh "docker logout"
                    }
                }
            }
        }
    }
}