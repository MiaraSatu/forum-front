/**
 * @description Change symfony error validation to customized error object
 * @param {Object} symfonyError 
 * @param {Array} formAttributes 
 * 
 * @returns {Object} error
 */
const splitError = (symfonyError, formAttributes = []) => {
    let formError = {}
    symfonyError.forEach((error) => {
        formAttributes.forEach((attribute) => {
            // pour qu'une attribut a une erreur et elle n'a pas encore d'autre erreur
            if(error.propertyPath == attribute && !(formError[attribute]))
                formError[attribute] = error.message
        })
    })
    return formError
}

export {splitError}