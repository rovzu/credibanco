pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                sh "docker build -t santiagoapps4/credibanco"
            }
        }
    }
}