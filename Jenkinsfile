pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    }
    stages {
        if(env.BRANCH_NAME == 'master'){
            stage('Deploy') {
                steps {
                    bat "aws elasticbeanstalk update-environment --profile credibanco-dev --application-name credibanco --environment-id e-ckzpcrjxji"
                }
            }
        } else if(env.BRANCH_NAME == 'develop'){
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
            stage('Upload docker image') {
                steps {
                    bat "docker build -t santiagoapps4/credibanco ."
                    bat "docker push santiagoapps4/credibanco"
                }
            }
        }
    }
}