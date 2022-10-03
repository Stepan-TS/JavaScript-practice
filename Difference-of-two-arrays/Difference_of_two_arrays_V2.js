function getDifferenceOfArrays(firstArray,secondArray){

    let uniqueValues = [];
    uniqueValues.push(...firstArray.filter(el => !secondArray.includes(el)));
    uniqueValues.push(...secondArray.filter(el => !firstArray.includes(el)));
    
    uniqueValues = uniqueValues.filter(function(item, pos, self){ 
        return self.indexOf(item) == pos;
    })
    
    return uniqueValues.sort((a,b)=>{return a-b});
}

function runTest(firstArray, secondArray, expectedResult){
    console.log("Running new test");
    const actualResult = getDifferenceOfArrays(firstArray, secondArray);
    console.log("actual result: " + actualResult);
    console.log("expected result: " + actualResult);
    const testResult = JSON.stringify(actualResult)==JSON.stringify(expectedResult);
    console.log("Test run successfully: " + testResult);  
    console.log("Test is over");  
    console.log();  
}

function runTests(){
    runTest([1,3,3,4,4,5,6],
            [2,2,3,5,6],
            [ 1, 2, 4 ]);
            
    runTest([1,2,3,4,5,6,7,9,10,12,12,12],
            [2,5,6,8,2,3,4,5,6,7,8,322,323,22],
            [ 1, 8, 9, 10, 12, 22, 322, 323 ]);
}


runTests();