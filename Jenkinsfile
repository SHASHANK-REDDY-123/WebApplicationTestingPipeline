pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test -- --runInBand'
            }
        }
    }

    post {
        success {
            echo 'Quality Gate PASSED - Build Successful'
        }

        failure {
            echo 'Tests Failed - Build Unsuccessful'
        }
    }
}