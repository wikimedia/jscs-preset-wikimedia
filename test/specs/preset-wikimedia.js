/*jshint mocha:true */
var Checker = require('jscs');
var assert = require('assert');
var fs = require('fs');

describe('presets/wikimedia', function() {
    it('should not report any errors from the sample file', function() {
        var checker = new Checker();
        checker.registerDefaultRules();
        checker.configure({
            preset: 'wikimedia'
        });

        var fileName = 'sample-wikimedia.js';
        var content = fs.readFileSync(__dirname + '/../data/' + fileName, 'utf8');
        assert(checker.checkString(content, fileName).isEmpty());
    });
});
