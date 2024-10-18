function calculateTax(income, expenses) {
    if(income < expenses || income < 0 || expenses < 0){
        return "Invalid Input";
    }
    else{
        let result = (income - expenses) * .20;
        return result;
    }
}







function sendNotification(email) {
    if(email.indexOf("@") === -1){
        return "Invalid Email";
    }
    else{
        let separate = email.split("@");
        let msg = separate[0] + " sent you an email from " + separate[1];
        return msg;
    }
}








function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }
    else{
        for(letter of name){
            if(!isNaN(letter)){
                return true;
            }
        }
        return false;
    }
}








function calculateFinalScore(obj) {
    let family_mark = 0;

    if(obj !== null){
        if(obj["isFFamily"]){
                family_mark += 20;
        }
        if(typeof obj !== "object" || Array.isArray(obj) || obj["testScore"] > 50 || obj["schoolGrade"] > 30){
            return "Invalid Input";
        }
        else{
            let total_marks = family_mark + obj["testScore"] + obj["schoolGrade"];
            if(total_marks >= 80){
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        return "Invalid Input"
    }
}









function  waitingTime(waitingTimes, serialNumber) {
    let sum = 0;
    let len = waitingTimes.length;
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number" || waitingTimes.length >= serialNumber){
        return "Invalid Input";
    }
    else{
        for(time of waitingTimes){
            sum += time;
        }
        let average = Math.round(sum / len);
        let diff = (serialNumber - len) - 1;
        return average * diff;
    }
}
