pipeline {
    agent any

    stages {
        stage('Unit Test') {
            steps {
                bat "npm install"
                bat "ng test"
                bat "npm run sonar"
            }
        }
        stage('Static Code Analysis') {
            steps {
                bat "npm run sonar"
            }
        }
        stage('Deploy') {
            steps {
                bat "docker build -t santiagoapps4/credibanco ."
                bat "docker push santiagoapps4/credibanco"
            }
        }
    }
}