// Parser will validate coherence whathever user inputs.
// This does not validate if the command seems logical or not, that's the oracle's job

import Dictionnary from './dictionnary.js';
import config from '../../config.js';
import { split, lowerCase, slice, size } from 'lodash';

module.exports = {
	validate(source, content) {
		// making content universal
		content = lowerCase(content);

		// Chained commands will need to be splitted by | or && before next block of code

		// extracting content
		let splitContent = split(content, " ");
		let command = splitContent[0];
		// validating content
		if (Dictionnary[command]) {

			// extracting params and command
			let params = slice(splitContent, 1);
			let sizeParams = size(params);
			let dictionnaryCommand = Dictionnary[command];

			// validating params
			if(sizeParams >= dictionnaryCommand.minParams && sizeParams <= dictionnaryCommand.maxParams) {
				return {
					validCommand: true,
					command,
					params,
					source,
				};
			}
			return {
				validCommand: false,
				message: command + " command " + (sizeParams < dictionnaryCommand.minParams ? "needs at least " + dictionnaryCommand.minParams + " parameters" : "")
												+ (sizeParams > dictionnaryCommand.maxParams ? "needs no more than " + dictionnaryCommand.maxParams + " parameters" : ""),
				source,
			};
		}
		return {
			validCommand: false,
			message: command + " command does not exist",
			source,
		};
	},
};
