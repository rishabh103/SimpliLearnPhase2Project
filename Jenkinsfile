pipeline {
	agent any
	tools {nodejs "node"}		
	stages {
		stage("Check Node Version"){
			steps {
			sh "node --version"
			}
		}
		stage("install dependencies"){
			steps {
			sh "npm --version"
			sh "npm install"
			}
		}
    stage("Build"){
			steps {
			sh "ng build"
			}
    }
		stage("Release the version"){
			steps {
			echo "Release the Version"
			}
		}
	}
}
