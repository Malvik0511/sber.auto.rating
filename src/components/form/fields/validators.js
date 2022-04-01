/*
import i18next from 'i18next'
import dayjs from 'dayjs'
*/

const error = 'ошибка валидации'

const required = (value, payload) => {
    const message = payload.message || error
    return value ? '' : message
}

const includeReg = (value, payload) => {
    const message = payload.message || error

    return new RegExp(payload.value || '').exec(String(value)) ? '' : message
}

const excludeReg = (value, payload) => {
    const message = payload.message || error || ''
    return new RegExp(payload.value || '').exec(String(value)) ? message : ''
}

const mustBeNumber = (value, payload) => {
    const message = payload.message || error
    return isNaN(Number(value)) ? message : ''
}

const minValue = (value, payload) => {
    const message = payload.message || error

    return isNaN(value) || Number(value) < Number(payload.value) ? message : ''
}

const maxValue = (value, payload) => {
    const message = payload.message || error

    return isNaN(value) || Number(value) > Number(payload.value) ? message : ''
}

/*const maxDate = (value, payload) => {
    const message = payload.message || error

    return dayjs(value).unix() > dayjs(payload.value).unix() ? message : ''
}*/

const maxLength = (value, payload) => {
    const message = payload.message || error

    return String(value).length > Number(payload.value) ? message : ''
}

const defaultValidator = () => ''

export const validators = {
    required,
    mustBeNumber,
    minValue,
    maxValue,
    defaultValidator,
    maxLength,
    includeReg,
    excludeReg
}
