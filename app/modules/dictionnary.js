// Dictionnary holds all possible commands
import config from '../../config.js';

var Dictionnary = {};

// @command SAY
// @description: say something specified after the command
// @param: 1 - infinity
Dictionnary[config.commandNames.SAY] = {
	minParams: 1,
	maxParams: Infinity,
};

// @command EAT
// @description: eat something specified after the command
// @param: 1 - infinity
Dictionnary[config.commandNames.EAT] = {
	minParams: 1,
	maxParams: Infinity,
};

module.exports = Dictionnary;
