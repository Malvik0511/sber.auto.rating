import React, { useCallback } from 'react'
import { Form } from 'react-final-form'
import PropTypes from 'prop-types'

import { CustomForm } from './custom-form'

export const RequestForm = (props) => {
    const { fields, controls, info, onSubmit, loading } = props
    const allFields = fields.fields

    const initial = allFields.reduce((acc, cur) => ({
        ...acc, [cur.id]: cur.value
    }), {})

    const Component = useCallback((passed) => (
        <CustomForm
            componentProps={{
                fields,
                info,
                controls,
                loading
            }}
            {...passed}
        />
    ), [fields, info, controls, loading])

    return (<Form
        initialValues={initial}
        onSubmit={onSubmit}
        render={Component}
    />)
}

RequestForm.propTypes = {
    fields: PropTypes.object.isRequired,
    controls: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    info: PropTypes.string.isRequired
}

RequestForm.defaultProps = {
    loading: false
}

