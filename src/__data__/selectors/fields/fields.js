import { validatorsBuildDictionary } from './validators'
import {errors} from "../constant/validation-errors";

const buildField = (props) => ({
    ...props,
    validators: props.validators || []
})

export const buildDefaultField = (props) => buildField({
    type: 'Input',
    validators: props.validators,
    ...props
})


export const buildValidators = (list) => [
    ...list
        .map((obj) => validatorsBuildDictionary[String(obj.type)](obj))
]

export const buildTextFieldWithType = ({ value = '', title = '', id = '', action, placeholder = '', mask, type, validators = [] } = {}) => buildDefaultField({
    value,
    title,
    id,
    type,
    placeholder,
    action,
    mask,
    validators: buildValidators([
        {
            type: 'required',
            message: errors.default
        }, {
            type: 'maxLength',
            value: '100',
            message: errors.maxLength
        }, ...validators
    ])
})

export const buildTextField = ({ value = '', title = '', id = '', action, placeholder = '', mask } = {}) => buildTextFieldWithType({
    value,
    title,
    id,
    type: 'TextField',
    placeholder,
    action,
    mask,
    validators: buildValidators([
        {
            type: 'required',
            message: errors.default
        }, {
            type: 'maxLength',
            value: '100',
            message: errors.maxLength
        }
    ])
})

export const buildSelectField = ({ value = '', title, id = '', items = [], action, placeholder = '' } = {}) => buildDefaultField({
    value,
    title,
    id,
    type: 'Select',
    placeholder,
    items,
    action,
    validators: buildValidators([
        {
            type: 'required',
            message: errors.default
        }
    ])
})


/*
export const buildCategories = (options, {
    id = 'categoryId',
    title = i18next.t('pfm.form.operation.add.form.label.category.name')
} = {})=> buildDefaultField({
    value: '',
    title,
    id,
    type: 'CustomValueSelect',
    placeholder: '',
    options,
    validators: buildValidators([
        {
            type: 'required',
            message: defaultRequired
        }
    ])
})

const defaultLimit = 99999999

export const buildOperationAmount = ({
    id = 'operationAmount',
    title = i18next.t('pfm.form.operation.add.form.label.sum'),
    limit = defaultLimit,
    description = ''
} = {}) => buildDefaultField({
    value: '',
    title,
    id,
    type: 'LabeledTextFieldMoney',
    currency: {
        title: 'RUB'
    },
    placeholder: '',
    description,
    validators: buildValidators([
        {
            type: 'required',
            message: defaultRequired
        },
        {
            type: 'includeReg',
            value: '^[\\d]+(\\.[\\d]{1,2})?$',
            message: i18next.t('validators.default.email')
        },
        {
            type: 'minValue',
            value: '1',
            message: ''
        },
        {
            type: 'maxValue',
            value: String(limit),
            message: ''
        }
    ])
})

export const buildOperationName = ({
    title = i18next.t('pfm.form.operation.add.form.label.name'),
    value = ''
} = {}) => buildDefaultField({
    value,
    title,
    id: 'operationName',
    type: 'LabeledTextField',
    placeholder: '',
    validators: buildValidators([
        {
            type: 'required',
            message: defaultRequired
        }, {
            type: 'maxLength',
            value: '200',
            message: i18next.t('validators.informal.max.length')
        }
    ])
})
*/
