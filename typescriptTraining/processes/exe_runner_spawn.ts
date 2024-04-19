import { spawn } from 'child_process';

async function x()
{
  return new Promise<string>(async function (resolve) {

	const ls = spawn('assets/sleep.sh');
 
	ls.stdout.on('data', (data: any) => {
	  console.log(`stdout: ${data}`);
	});
    
	ls.stderr.on('data', (data: any) => {
	  console.log(`stderr: ${data}`);
	});

	ls.on('exit', (code: any) => {
	  console.log(`Exit code is: ${code}`);
	  resolve("Ready!")
	});
  })
} 


(async () => {
    console.log("before spawn")
    const response = await x();
    console.log("after spawn ", response)
})()