var chai = require('chai');
var assert = chai.assert;
var RunningAverage = require('./index');

describe('RunningAverage',function(){
    it('should correctly average data',function(done){
        var avg = new RunningAverage();
        for(var i = 1; i < 6; i++){
            avg.add(i);
        }
        assert.equal(avg.get(),3);
        done();
    });
});