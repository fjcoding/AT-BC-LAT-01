pipeline {
    agent {label 'linux'}
    /*parameters {
        string(name: 'image-name', defaultValue: 'msmapp')

        string(name: 'target-image', defaultValue: 'samsta/practice_jenkins')
    }*/
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
                sh "sudo docker build -t msmapp:1 ."
            }
        }

        stage('docker-hub login') {
            environment {
                DOCKERHUB_CREDS = credentials('Dockerhub-login')
            }
            steps {
                sh "sudo docker login -u samsta -p Eureka12"
            }
        }

        stage('tag image') {
            steps {
                sh "sudo docker tag msmapp:1 samsta/practice_jenkins:msmapp1"
            }
        }

        stage('push image') {
            steps {
                sh "sudo docker push samsta/practice_jenkins:msmapp1"
            }
            post {
                always {
                    script {
                        sh "sudo docker rmi -f samsta/practice_jenkins:msmapp1"
                        sh "sudo docker rmi -f msmapp:1"
                        sh "sudo docker logout"
                    }
                }
            }
        }
    }
}