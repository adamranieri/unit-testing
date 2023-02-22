

function calculatePostage(weight, priority){

    let baseCost = 5;

    if(weight > 8){
        baseCost = baseCost + 4;
    }

    if(priority === "OVERNIGHT"){
        baseCost = baseCost + 10;
    }

    if(priority === "EXPEDITED"){
        baseCost = baseCost + 3;
    }

    return baseCost;
}