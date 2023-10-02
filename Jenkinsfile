pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                bat "docker build -t santiagoapps4/credibanco ."
            }
        }
    }
}