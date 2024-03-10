/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if(size == undefined){
        return string;
    }

    let result = "";

    if(size == 0 || string.length == 0) {
        return result;
    }

    const symbols = string.split("");
    result += symbols[0];
    for(let i = 1, count = 1; i < symbols.length; i++) {
        if(symbols[i] != symbols[i - 1]){
            result += symbols[i];
            count = 1;
        }else if(count < size){
            result += symbols[i];
            count++;
        }
    }
    return result;
}