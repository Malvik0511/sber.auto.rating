import {
    buildRegion,
    buildRun,
    buildVin
} from './fields'

export const buildForm = () => ({
    fields: {
        title: '',
        subtitle: '',
        description: '',
        fields: [
            buildRegion(),
            buildRun(),
            buildVin()
        ]
    },
    controls: {
        submitTitle: 'Продолжить'
    }
})
