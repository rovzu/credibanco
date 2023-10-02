pipeline {
    agent any
    environment {
        AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
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
}