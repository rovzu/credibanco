
environment {
    AWS_ACCESS_KEY_ID     = credentials('jenkins-aws-secret-key-id')
    AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
}
if(env.BRANCH_NAME == 'master'){
    stage('Deploy') {
        steps {
            node {
                bat "aws elasticbeanstalk update-environment --profile credibanco-dev --application-name credibanco --environment-id e-ckzpcrjxji"
            }
        }
    }
}
    