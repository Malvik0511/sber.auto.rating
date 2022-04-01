import {
    buildTextField,
    buildSelectField
} from '../../fields/fields'
import {routes} from "../../../../constant/navigation";

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
    title: 'Пробег'
})

export const buildNumber = () => buildTextField({
    id: 'number',
    title: 'Гос. номер',
    action: {
        link: {
            url: routes.regionPage,
            text: 'Не помню номер'
        }
    }
})

export const buildVin = () => buildTextField({
    id: 'vin',
    title: 'VIN',
    action: {
        link: {
            url: routes.regionPage,
            text: 'Не помню VIN'
        }
    }
})

