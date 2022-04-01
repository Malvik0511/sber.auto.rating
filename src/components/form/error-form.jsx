import React from 'react'
import { PaddingWrapper, Headline3 } from '@sbol/design-system'

import { CategoriesRequestError } from '../categories-request-error'

import { FormSlyled } from './form.style'

export const ErrorForm = ({ reFetch, title }) => (
    <FormSlyled>
        <PaddingWrapper
            size="sm"
            verticalPadding="micro"
            verticalPaddingDirection="bottom"
        >
            <Headline3 indent="zero">{title}</Headline3>
        </PaddingWrapper>
        <CategoriesRequestError reFetch={reFetch} />
    </FormSlyled>
)

export const withTitleErrorForm = (title) => (props) => <ErrorForm title={title} {...props} />
