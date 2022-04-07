const replaceSpace = (string = '') => string.replace(/\s/g, '')

const getterDictionary = {
    NumberField: replaceSpace,
    default: (value) => value
}

export const getValueForValidate = (type) => getterDictionary[type] || getterDictionary.default