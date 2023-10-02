pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    }
    stages {
        
        stage('Deploy') {
            if(env.BRANCH_NAME == 'master'){
                steps {
                    bat "aws elasticbeanstalk update-environment --profile credibanco-dev --application-name credibanco --environment-id e-ckzpcrjxji"
                }
            }
        }
    }
}