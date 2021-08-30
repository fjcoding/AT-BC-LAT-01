pipeline {
    agent {label 'linux' }
    tools {
        nodejs 'NodeJs 16.8.0'
    }
    environment {
        DOCKER_HUB_CREDENTIALS = credentials("dockerhub")
        DOCKER_IMAGE_NAME = "'$DOCKER_HUB_CREDENTIALS_USR'/metal-slug-maker"
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
        stage('build Image') {
            steps {
                sh "sudo docker build -t $DOCKER_IMAGE_NAME:$BUILD_NUMBER ."
            }
        }
        stage('push Image') {
            steps {
                sh "echo '$DOCKER_HUB_CREDENTIALS_PSW' | sudo docker login -u $DOCKER_HUB_CREDENTIALS_USR --password-stdin"
            }
            post {
                always {
                    script {
                        sh "sudo docker push $DOCKER_IMAGE_NAME:$BUILD_NUMBER"
                        sh "sudo docker rmi -f $DOCKER_IMAGE_NAME:$BUILD_NUMBER"
                        sh "sudo docker logout"
                    }
                }
            }
        }
    }
}