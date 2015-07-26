var runningAverage = function(){
    var self = this;
    self.store = {value:0,count:0};
    self.add = function(arg){
        if(typeof arg == 'number'){
            self.store.value += arg;
            self.store.count += 1;
        }
        else{
            throw new TypeError('Invalid type');
        }
    }
    self.get = function(){
        return self.store.value/self.store.count;
    }
}

if(typeof window !== 'undefined') window.RunningAverage = runningAverage;
module.exports = runningAverage;

