export const errorMessage = 'The parameter must be a string'

/**
 * Format text to date pattern
 * 
 * @param {string} text 
 * @returns date at the pattern dd/MM/yyyy
 */
export const formatInDatePattern = text => {
    if (typeof text != 'string') {
        throw new TypeError(errorMessage)
    }

    return text
            .replace(/\D/g, '') // remove no-digits
            .replace(/(\d{4})(\d{2})(\d{2})/, '$3/$2/$1') // format dd/MM/yyyy
}
