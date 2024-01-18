let nemo = ["nemo"];
let everyone = ['dora','bruce','marlin','gill','bloat','nigel','darla','nemo','hank']
let largeArray = new Array(1000).fill("vikash");
function findNemo(listOfName){

    // let t1 = performance.now();

    for(let i = 0; i < listOfName.length; i++) {
        if(listOfName[i] === "vikash"){
            console.log(listOfName[i])
        }
    }

    // let t2 = performance.now();

    // console.log(`call nemo took ${t2 - t1}  millisecond`);
}


findNemo(largeArray);

