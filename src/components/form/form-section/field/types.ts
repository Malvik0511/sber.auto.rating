import { FieldInputProps } from 'react-final-form'

import { ValidatorWithType } from '../../../../types/types'
import { OptionType } from '../../fields/types'

export type FieldComponentProps = FieldInputProps<unknown> & {
    placeholder?: string
    validators: Array<ValidatorWithType>
    options?:Array<OptionType>
    error: string
    label: string
    id: string
    type: string
}

export type FieldProps = {
    id: string
    last: boolean
    title?: string
    validators: Array<ValidatorWithType>
    component: React.FC<FieldComponentProps>
}
