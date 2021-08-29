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
            steps {
                sh "cat /home/vagrant/stack/dockerpsw.txt | sudo docker login -u samsta --password-stdin"
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