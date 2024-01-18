let nemo = ["nemo"];
let everyone = ['dora','bruce','marlin','gill','bloat','nigel','darla','nemo','hank']

function findNemo(listOfName){

    for(let i = 0; i < listOfName.length; i++) {
        if(listOfName[i] === "nemo"){
            console.log(listOfName[i])
        }
    }
}


findNemo(everyone);

