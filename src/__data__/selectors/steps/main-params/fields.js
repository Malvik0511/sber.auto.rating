import {
    buildTextField,
    buildSelectField,
    buildTextFieldWithType
} from '../../fields/fields'
import {routes} from "../../../../constant/navigation";
import {errors} from "../../constant/validation-errors"

export const buildRegion = () => buildSelectField({
    id: 'region',
    title: 'Регион',
    placeholder: 'Регион',
    items: [
        {
            label: 'Московская область',
            value: 1
        }, {
            label: 'Свердловская область',
            value: 2
        }
    ]
})

export const buildRun = () => buildTextField({
    id: 'run',
    title: 'Пробег, км',
})

export const buildNumber = () => buildTextFieldWithType({
    id: 'number',
    type: 'NumberField',
    placeholder: 'Гос. номер',
    mask: { 
        mask: 'D ddd DD ddd', 
        replacement: {d: /\d/, D: /[а-яА-Я]/}
    },
    action: {
        link: {
            url: routes.regionPage,
            text: 'Не помню номер'
        }
    },
    validators: [
        {
            type: 'minLength',
            value: '8',
            message: errors.minLength
        }
    ]
})

export const buildVin = () => buildTextFieldWithType({
    id: 'vin',
    type: 'NumberField',
    title: 'VIN',
    mask: { 
        mask: 'sss ssss ssssssss', 
        replacement: {s: /\S/}
    },
    action: {
        link: {
            url: routes.regionPage,
            text: 'Не помню VIN'
        }
    },
    validators: [
        {
            type: 'minLength',
            value: '17',
            message: errors.minLength
        }
    ]
})

