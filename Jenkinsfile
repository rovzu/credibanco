if(env.BRANCH_NAME.contains('feature')){
    node {
        sh "ls -lsa"
        sh "pwd"
        stage("Build"){
            sh "ng build"
        }
        stage("Unit Test"){
            sh "ng test"
        }
        stage("Static Code Analysis"){
            println "Static Codes"
        }
    }
}
if(env.BRANCH_NAME == 'develop'){
    stage("Build"){
    // Artifact repository upload steps here
    }
    stage("Unit Test"){
    // Deploy steps here
    }
    stage("Static Code Analysis"){
    // Deploy steps here
    }
}
if(env.BRANCH_NAME == 'master'){
    stage("Deploy"){
    // Deploy steps here
    }
    stage("Create Tag"){
    // Artifact repository upload steps here
    }
}