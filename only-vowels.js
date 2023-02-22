
function onlyVowels(word = ""){

    let vowels = "";

    for(const c of word){
        
        if(c === "A"){
            vowels += "A";
        }

        if(c === "E"){
            vowels += "E";
        }

        if(c === "I"){
            vowels += "I";
        }

        if(c === "O"){
            vowels += "O";
        }

        if(c === "U"){
            vowels += "U";
        }

    }


    return vowels;
}

