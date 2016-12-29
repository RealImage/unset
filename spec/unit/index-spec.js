'use strict';

const _ = require('lodash');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const unset = require('../../index.js');

let source = {
	name: 'tom',
	emails: [{
		id: 1234,
		email: 'tom@harry.com'
	}, {
		id: 2345,
		email: 'harry@tom.com'
	}],
	emailId: 5678
}

describe('Unset', function() {
	it('should remove the specified attribute from all members of an object array', function() {
		let modifiedSource = unset({ source: source }, '/source/emails[*]/id');
		expect(modifiedSource.source.emails[0].hasOwnProperty('id')).equal(false);
		expect(modifiedSource.source.emails[1].hasOwnProperty('id')).equal(false);
		expect(modifiedSource.source.emails[0].hasOwnProperty('email')).equal(true);
	});

	it('should remove the specified attribute from an object', function() {
		let modifiedSource = unset({ source: source }, '/source/emailId');
		expect(modifiedSource.source.hasOwnProperty('emailId')).equal(false);
		expect(modifiedSource.source.hasOwnProperty('name')).equal(true);
	});
});

