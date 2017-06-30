import { split } from 'lodash';

module.exports = {
	validate(source, content) {
		let splitContent = split(content, " ");
		console.log(splitContent);
	},
}
