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


export function cipher(string, shift){
    if (!string) { return '' };
    if (!shift) { return string };
    let result = '';
    for (let i = 0; i < string.length; i++){
        let char = string[i];
        let charCode = char.codePointAt(0);

        if (charCode >= 65 && charCode <= 90){
            char = String.fromCodePoint( (charCode + shift - 65) % 26 + 65 );
        }
        else if (charCode >= 97 && charCode <= 122){
            char = String.fromCodePoint( (charCode + shift - 97) % 26 + 97 );
        }

        result += char;
    }
    return result;
}

export function analyzeArray(array){
    let length = array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let average = array.reduce((sum, num)=> sum + num, 0) / length;
    return {
        length: length,
        min: min,
        max: max,
        average: average
    };
}
