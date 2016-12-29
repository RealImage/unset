'use strict';

const _ = require('lodash')
const jsonPath = require('json-path');


const ARRAY_IDENTIFIER = '[*]'
const PATH_SEPARATOR = '/'

module.exports = function(json, paths) {
	if(!_.isArray(paths)) {
		paths = [paths]
	}

	let unsetObject = _.cloneDeep(json)
	paths.forEach(path => {
		unsetObject = _unsetNestedAttribute(unsetObject, path)
	})
	return unsetObject
}

function _unsetNestedAttribute(json, path) {
	let parts = path.split(PATH_SEPARATOR)
	let parentPath = _.take(parts, parts.length - 1).join(PATH_SEPARATOR)
	let terminalAttribute = parts[parts.length - 1].replace('[*]', '')

	let parentObject = jsonPath.resolve(json, parentPath)
	if(_.isArray(parentObject)) {
		parentObject.forEach(e => {
			delete e[terminalAttribute]
		})
	} else {
		delete parentObject[terminalAttribute]
	}
	return json
}