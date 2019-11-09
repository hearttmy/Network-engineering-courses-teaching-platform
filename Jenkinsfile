pipeline {
  agent {
    docker {
      image 'node:10-alpine'
      args '-p 3000:8082'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'cd vue/desktop && npm install'
      }
    }
    stage('Start') {
      steps {
        sh 'npm run desktop-start'
      }
    }
  }
}