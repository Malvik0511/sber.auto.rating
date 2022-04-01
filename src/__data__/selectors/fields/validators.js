import {errors} from "../constant/validation-errors";

const buildValidator = (props) => ({
    type: props.type || 'required',
    value: props.value || '',
    message: props.message || ''
})

const buildRequiredValidator = (props) => buildValidator({
    type: 'required',
    message: props.message || errors.default,
    value: ''
})

const buildMinValueValidator = (props) => {
    const value = props.value || '0'
    const message = props.message || errors.default

    return buildValidator({
        type: 'minValue',
        value,
        message
    })
}

const buildMaxValueValidator = (props) => {
    const value = props.value || '0'
    const message = props.message || errors.default

    return buildValidator({
        type: 'maxValue',
        value,
        message
    })
}


const buildMaxLengthValidator = (props) => {
    const value = props.value || '0'
    const message = props.message || errors.default

    return buildValidator({
        type: 'maxLength',
        value,
        message
    })
}

const buildIncludeRegValidator = (props) => {
    const value = props.value || ''
    const message = props.message || errors.default

    return buildValidator({
        type: 'includeReg',
        value,
        message
    })
}

const buildExcludeRegValidator = (props) => {
    const value = props.value || ''
    const message = props.message || errors.default

    return buildValidator({
        type: 'excludeReg',
        value,
        message
    })
}

export const validatorsBuildDictionary = {
    required: buildRequiredValidator,
    minValue: buildMinValueValidator,
    maxValue: buildMaxValueValidator,
    maxLength: buildMaxLengthValidator,
    includeReg: buildIncludeRegValidator,
    excludeReg: buildExcludeRegValidator
}
