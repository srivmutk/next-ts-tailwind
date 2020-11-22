#!/usr/bin/ts-node 

import { exec } from "child_process";
import prompts from "prompts"

(async () => {
	const response = await prompts({
    	type: 'text',
    	name: 'value',
    	message: 'Name of Folder?'
	  });

	  console.log(response)
	  
	exec(`git clone https://github.com/Sysnomid/next-ts-tailwind.git ${response.value}`)
})();
