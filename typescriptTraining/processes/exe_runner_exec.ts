const { spawn, exec } = require('child_process');
//const ls = spawn('top', ['-b', '-n', '10', '-d', '1']);
function execPromise(command: any) {
	return new Promise(function (resolve, reject) {
		exec(command, (error: any, stdout: string, stderr: any) => {
			if (error) {
				reject(error);
				return;
			}

			console.log("awefefe")

			resolve(stdout.trim());
		});
	});
}

let command

if (process.platform === 'win32') {
	command = "assets\\exe_creation-win.exe"
} else {
	command = "assets/exe_creation-linux"
}

execPromise(command).then(function (result) {
	console.log(result);
}).catch(function (e) {
	console.error(e.message);
});


/* try {
  var result = async() => await execPromise('external/exe_node-linux');
} catch (e:any) {
  console.error(e.message);
} */