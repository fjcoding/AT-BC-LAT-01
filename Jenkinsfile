pipeline {
    agent {label 'linux'}
    parameters {
        string(name: 'image-name', defaultValue: 'msmapp')

        string(name: 'target-image', defaultValue: 'samsta/practice_jenkins')
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
                sh "sudo docker build -t ${params.image-name}:$BUILD_NUMBER ."
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
                sh "sudo docker tag ${params.image-name}:$BUILD_NUMBER ${params.target-image}:${params.image-name}$BUILD_NUMBER"
            }
        }

        stage('push image') {
            steps {
                sh "sudo docker push ${params.target-image}:${params.image-name}$BUILD_NUMBER"
            }
            post {
                always {
                    script {
                        sh "sudo docker rmi -f ${params.target-image}:${params.image-name}$BUILD_NUMBER"
                        sh "sudo docker rmi -f ${params.image-name}:$BUILD_NUMBER"
                        sh "sudo docker logout"
                    }
                }
            }
        }
    }
}