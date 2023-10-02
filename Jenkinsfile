pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                sh "npm install"
                sh "ng test"
            }
        }
        stage('Deploy') {
            steps {
                sh "docker build -t santiagoapps4/credibanco"
            }
        }
    }
}