#!/usr/bin/node 

import { exec } from "child_process";
import prompts from "prompts"

(async () => {	
	const response = await prompts({
    	type: 'text',
    	name: 'value',
    	message: 'Name of Folder?'
	  });

	exec(`git clone https://github.com/Sysnomid/next-ts-tailwind.git ${response.value}`)  
	resval = response.value;
})();


//setTimeout(() => {  console.log("Resolving Dependencies.."); }, 2);

//process.chdir(`${resval}`)
//exec(`npm install`)
