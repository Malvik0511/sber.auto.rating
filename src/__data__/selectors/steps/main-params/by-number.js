import {
    buildRegion,
    buildRun,
    buildNumber
} from './fields'

export const buildForm = () => ({
    fields: {
        title: '',
        subtitle: '',
        description: '',
        fields: [
            buildRegion(),
            buildRun(),
            buildNumber()
        ]
    },
    controls: {
        submitTitle: 'Продолжить'
    }
})
