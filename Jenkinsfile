pipeline {
  agent any
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }
    stage('Test') {
      steps { sh 'npm test -- --runInBand' }
    }
  }
  post {
    success { echo 'Quality gate PASSED - build successful' }
    failure { echo 'Tests failed - build unsuccessful' }
  }
}