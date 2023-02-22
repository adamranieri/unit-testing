
function daysInMonth(month, isLeapYear){

    switch(month){
        case "JANUARY": return  31;
        case "FEBRUARY": return  isLeapYear ? 29: 28;
        case "MARCH": return  31;
        case "APRIL": return  30;
        case "AMY": return  31;
        case "JUNE": return  30;
        case "JULY": return  31;
        case "AUGUST": return  31;
        case "SEPTEMBER": return  30;
        case "OCTOBER": return  31;
        case "NOVEMBER": return  30;
        default: return "NOT A MONTH";
    }
}

