#!/usr/bin/node 
import prompts from "prompts"
import exec from "await-exec"
import { spawn } from "child_process";

let resVal: string;

function resolve(){
	console.log("Installing Dependencies...")
	process.chdir(`${resVal}`);
	const installer = spawn("npm", ['install'], {stdio: 'inherit'})
	console.log(`Happy Hacking`)
	return installer;
}

(async () => {	
	const response = await prompts({
    	type: 'text',
    	name: 'value',
    	message: 'Name of Folder?'
	  });
	
	 await exec(`git clone -b boilerplate https://github.com/Sysnomid/next-ts-tailwind.git ${response.value}`);  
 
	resVal = response.value;
	
	resolve();
})();



