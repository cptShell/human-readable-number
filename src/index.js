module.exports = function toReadable (num) {
    const oneToTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const decades = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundred = "hundred";

    if (num < 100) {
        if (num % 100 < 20) return oneToTwenty[num];
        return decades[Math.floor(num/10) - 2] + (num%10 === 0 ? "" :  " " + oneToTwenty[num%10]);
    } else {
        if (num % 100 < 20 && num % 100 > 0) {
            return oneToTwenty[Math.floor(num/100)] + " " + hundred + " " + oneToTwenty[num%100];
        } else if (num % 100 === 0) {
            return oneToTwenty[Math.floor(num/100)] + " " + hundred;
        }
        return oneToTwenty[Math.floor(num/100)] + " " + hundred + " " + decades[Math.floor(num/10) % 10 - 2] + (num%10 === 0 ? "" :  " " + oneToTwenty[num%10]);

    }
}