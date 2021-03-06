#!/usr/bin/node 
import exec from "await-exec";
import { spawn } from "child_process";
import colors from "colors";
import rimraf from "rimraf";

const data = {
	args: process.argv.slice(2),
	baseDir: "next-ts-tailwind"
};

data.args[0];

(async () => {	
	try {
		await exec(`git clone -b boilerplate https://github.com/Sysnomid/next-ts-tailwind.git ${data.args}`);  
		process.chdir(`${data.args}`);
        const installer = spawn("npm", ['install'], { stdio: 'inherit' });
        console.log(colors.blue(`Happy Hacking`));
        console.log(colors.green("Installing Dependencies..."));
        return installer;
	} catch(error) {
		if (data.args[0] === undefined){
			console.log(colors.red("ERROR: Please enter a project name"));
		} else {
			console.log(colors.red(error))
		}
        rimraf.sync(data.baseDir);
        return;
	}
})();



