pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "ng build"
            }
        }
        stage('Test') {
            steps {
                sh "ng test"
            }
        }
        stage('Deploy') {
            steps {
                println "Static Codes"
            }
        }
    }
}