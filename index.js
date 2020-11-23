#!/usr/bin/node 
import prompts from "prompts"
import exec from "await-exec"
import { spawn } from "child_process";
import colors from "colors"

let resVal;

function resolve(){
	console.log("Installing Dependencies...".blue)
	process.chdir(`${resVal}`);
	const installer = spawn("npm", ['install'], {stdio: 'inherit'})
	console.log(`Happy Hacking`.green)
}

(async () => {	
	const response = await prompts({
    	type: 'text',
    	name: 'value',
    	message: 'Name of Folder?'
	  });
	await exec(`git clone https://github.com/Sysnomid/next-ts-tailwind.git ${response.value}`);  
	resVal = response.value;
	resolve();
})();



