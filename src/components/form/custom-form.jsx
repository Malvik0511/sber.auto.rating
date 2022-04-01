import React from 'react'
import { Alert } from '../../components/alert/alert'

import { FormSlyled } from './form.style'
import { FormSection } from './form-section/form-section'
import { FormControls } from './form-section/form-controls'

export const CustomForm = (props) => {
    const { handleSubmit, componentProps } = props
    const { fields, info, controls, cancelLink, loading = false } = componentProps

    return (
        <FormSlyled
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <FormSection {...fields} />
            {
                info &&
                <Alert/>
            }
            <FormControls
                controls={controls}
                cancelLink={cancelLink}
                loading={loading}
            />
        </FormSlyled>
    )
}
