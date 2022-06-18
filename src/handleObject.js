/**
 * Remove object property
 * 
 * @param {string} propertyName 
 * @param {Object} obj 
 * @returns object without the given property
 */
export const removeObjectProperty = (propertyName, obj) => (delete obj[propertyName])

/**
 * Remove object properties
 * 
 * @param {array} properties to remove
 * @param {Object} obj 
 * @returns object without properties
 */
export const removeObjectProperties = (properties, obj) => {
    properties.forEach(key => delete obj[key]);
    return obj
}