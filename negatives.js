
function containsNegative(numbers){

    let containsNegative = false;

    for(const n of numbers){

        if(n <0){
            containsNegative = true
        }

    }

    return containsNegative;

}