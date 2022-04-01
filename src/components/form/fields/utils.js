import { components } from './components'
import { validators } from './validators'

const buildValidators = (list) => list.map(({ type, ...validator }) => (value) => {
    const validateFn = validators[type]

    return validateFn(value, validator)
})

export const getComponent = (name) => components[name]

export const composeValidators = (list) => {
    const validatorList = buildValidators(list)

    return (value) => validatorList.reduce((error, validator) => error || validator(value), '')
}

