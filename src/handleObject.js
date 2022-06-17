/**
 * Remove object property
 * 
 * @param {string} propertyName 
 * @param {Object} obj 
 * @returns object without the given property
 */
export const removeObjectProperty = (propertyName, obj) => (delete obj[propertyName])
