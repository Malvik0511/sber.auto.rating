import React from 'react'
import { Link } from "@sberdevices/plasma-web";
import { Field } from 'react-final-form'
import isEqual from 'lodash/isEqual'

import { composeValidators } from '../../fields/utils'

import {
    FieldWrapper,
    FieldLinkWrapper
} from './field.styled'

export const CustomField = React.memo(({ id, last = false, title = last, component: Component, action, ...field }) => (
    <FieldWrapper key={id} data-unit={id}>
        <Field name={id} validate={composeValidators(field.validators)}>
            {({ input, meta }): JSX.Element => {
                const { error, dirty, touched } = meta
                const errState = error && (dirty || touched)
                const fieldTemplate = <Component {...input} id={`field-${id}`} type="text" {...field} error={errState ? error : ''} aria-label={title} label={String(title)}/>

                return fieldTemplate
            }}
        </Field>
        {
            action?.link && <FieldLinkWrapper>
                <Link href={action.link.url}>{action.link.text}</Link>
            </FieldLinkWrapper>
        }
    </FieldWrapper>
), isEqual)
