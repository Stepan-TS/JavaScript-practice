function loadGrain(levels) {
    let endOfTank;
    let startOfTank = 0;
    let maxOfTank = startOfTank;
    let load = 0;

    if(levels <= 2) {
        return 0;
    }
    for(let i = 0; i < levels.length; i++){
        endOfTank = levels.findIndex((el,index) => 
            el >= levels[startOfTank] && index > startOfTank );

        if(endOfTank === -1){
            const max = Math.max(...levels.slice(startOfTank+1)); 
            endOfTank = levels.indexOf(max);
            maxOfTank = endOfTank ;

        }    
        if(i < endOfTank && i != startOfTank){
           load += levels[maxOfTank] - levels[i]; 
        }
        if(i === endOfTank){
            startOfTank = endOfTank;
            maxOfTank = startOfTank;
        }
    }
 return load;
}

function runTests(){
    console.log(loadGrain([4,1,3,5])==4);
    console.log(loadGrain([4,1,3,4,1,3,4])==8);
    console.log(loadGrain([4,1,3,4,4,1,3,4])==8);
    console.log(loadGrain([5,1,3,4])==4);
    console.log(loadGrain([2,4,2,2])==0);
    console.log(loadGrain([1,2,3,4,3,2,1])==0);
    console.log(loadGrain([4,1,3,5,2,1])==4);
    console.log(loadGrain([6,1,4,1,3,1,2])==6); 
}

runTests();