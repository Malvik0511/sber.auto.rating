import React from 'react'
import { useMask } from 'react-mask-field';
import { Link } from "@sberdevices/plasma-web";
import { Field } from 'react-final-form'
import isEqual from 'lodash/isEqual'

import { composeValidators } from '../../fields/utils'

import {
    FieldWrapper,
    FieldLinkWrapper
} from './field.styled'


export const CustomField = React.memo(({ id, last = false, title = last, component: Component, action, mask = {}, ...field }) => {
    const ref = useMask(mask)
    const refProp =  Object.keys(mask).length ? { ref } : {}

    return <FieldWrapper key={id} data-unit={id}>
        <Field name={id} validate={composeValidators(field.validators, field?.type)}>
            {({ input, meta }) => {
                const { error, dirty, touched } = meta
                const errState = error && (dirty || touched)
                const fieldTemplate = <Component
                    {...input}
                    {...refProp}
                    status={errState ? 'error': 'success'}
                    id={`field-${id}`} 
                    type="text" {...field}
                    aria-label={title}
                    label={String(title)}
                    helperText={errState ? error : ''}
                    />
                return fieldTemplate
            }}
        </Field>
        {
            action?.link && <FieldLinkWrapper>
                <Link href={action.link.url}>{action.link.text}</Link>
            </FieldLinkWrapper>
        }
    </FieldWrapper>
}, isEqual)
