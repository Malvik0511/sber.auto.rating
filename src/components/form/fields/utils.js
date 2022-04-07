import { components } from './components'
import { validators } from './validators'
import { getValueForValidate } from './validate-value-getter'

const buildValidators = (list) => list.map(({ type, ...validator }) => (value) => {
    const validateFn = validators[type]

    return validateFn(value, validator)
})

export const getComponent = (name) => components[name]

export const composeValidators = (list, type) => {
    const validatorList = buildValidators(list)

    return (value) => validatorList.reduce((error, validator) => error || validator(getValueForValidate(type)(value)), '')
}

