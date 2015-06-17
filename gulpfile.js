var gulp = require('gulp');









gulp.task('integrate', function() {
	console.log('\n');
	console.log('*****DEV TEAM TASKS******');
	console.log('1. ensure that you have latest known-good code. ("git pull origin master")');
	console.log('2. make sure git status is clean');
	console.log('3. build on your box ("gulp")');
	console.log('4. push to remote repository ("git push origin staging")');
	console.log('\n');
	console.log('*****SCRUM MASTER TASKS******')
	console.log('5. build on integrated box')
	console.log('\ta. walk to integration box ("git checkout staging")');
	console.log('\tb. git pull origin staging');
	console.log('\tc. gulp');
	console.log('\td. If gulp fails, stop and start over');
	console.log('6. git checkout master');
	console.log('7. git merge staging --no-ff --log');
	console.log('8. merge into master branch in remote repo ("git push origin master"')
	console.log('9. switch back to staging');
});