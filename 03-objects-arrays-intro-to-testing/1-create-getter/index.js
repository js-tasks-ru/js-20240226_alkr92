/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    let properties = path.split(".");
    return function getProperty(object){
        if(object === null){
            return null;
        }
        if(object === undefined || Object.keys(object).length == 0) {
            return undefined;
        }
        let currentProperty = properties.shift( );
        return properties.length == 0 ? object[currentProperty] : getProperty( object[currentProperty] );
    }
}
