pipeline {
    agent any

    stages {
        stage('Unit Test') {
            steps {
                bat "npm install"
                bat "ng test --no-watch --code-coverage"
            }
        }
        stage('Static Code Analysis') {
            steps {
                bat "sonar-scanner"
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