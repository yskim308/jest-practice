export function capitalize(string){
    if (!string){
        return "";
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverse(string){
    if (!string){
        return "";
    }
    
    return string.split("").reverse().join("");
}

export class Calculator{
    sum(a, b) {return a + b};
    subtract(a, b) {return a - b};
    divide(a, b) {return a / b};
    multiply(a, b) {return a * b};
}
