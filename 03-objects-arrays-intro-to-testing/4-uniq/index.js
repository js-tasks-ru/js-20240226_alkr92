/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
    let uniqValues = [];
    for (let value of new Set(arr)) uniqValues.push(value);
    return uniqValues;
}
