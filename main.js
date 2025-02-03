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
