pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID     = credentials('AWS_ACCESS_KEY_ID')
        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
    }
    stages {
        stage('Deploy') {
            steps {
                when {
                    expression { env.BRANCH_NAME == 'master' }
                }
                bat "aws elasticbeanstalk update-environment --profile credibanco-dev --application-name credibanco --environment-id e-ckzpcrjxji"
            }
        }
    }
    stages {
        stage('Unit Test') {
            steps {
                when {
                    expression { env.BRANCH_NAME == 'develop' }
                }
                bat "npm install"
                bat "ng test --no-watch --code-coverage"
            }
        }
        stage('Static Code Analysis') {
            steps {
                when {
                    expression { env.BRANCH_NAME == 'develop' }
                }
                bat "sonar-scanner"
            }
        }
        stage('Upload docker image') {
            steps {
                when {
                    expression { env.BRANCH_NAME == 'develop' }
                }
                bat "docker build -t santiagoapps4/credibanco ."
                bat "docker push santiagoapps4/credibanco"
            }
        }
    }
}