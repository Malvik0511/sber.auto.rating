import React from 'react'
import omit from 'lodash/omit'
import { Headline3, BodyM } from '@sberdevices/plasma-ui'
import isEqual from 'lodash/isEqual'

import { getComponent } from '../fields/utils'

import { CustomField } from './field/field'

export const FormSection = React.memo(({ fields, title = '', subtitle = '' }) =>
    fields.length ?
        <section>
            <div>
                {
                    title &&
                        <Headline3 indent="zero">{title}</Headline3>
                }
                {
                    subtitle && (
                        <BodyM
                            size="md"
                            fontWeight="medium"
                            colorScheme="secondary"
                        >{subtitle}</BodyM>
                    )
                }
            </div>
                {
                    fields.map((props, i) => (
                        <CustomField
                            {...omit(props, ['value'])}
                            id={props.id || ''}
                            validators={props.validators}
                            component={getComponent(props.type)}
                            last={fields.length - 1 === i}
                            key={props.id}
                        />)
                    )
                }
        </section> :
        null,
isEqual
)

