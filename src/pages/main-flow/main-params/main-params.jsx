import React, { useState } from "react";
import {
    Tabs,
    TabItem
} from '@sberdevices/plasma-ui'
import { useNavigate } from 'react-router-dom'

import { Form } from '../../../components/form'
import selectors from '../../../__data__/selectors/data'
import {MainFlowWrapper} from "../../../components/main-flow-wrapper/main-flow-wrapper";
import { getValueForValidate } from '../../../components/form/fields/validate-value-getter'
import { routes } from "../../../constant/navigation";

const propsDict = selectors.forms.mainParams
const items = [
    {
        tab: 'По номеру',
        props: propsDict.byNumber
    }, {
        tab: 'По Vin',
        props: propsDict.byVin
    }
]

export const MainParams = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate()

    const onSubmit = (values) => {
        let fields = items[index].props.fields.fields
        const formatted = Object.keys(values).reduce((ac, key) => {
            const fieldType = fields.find(({ id }) => id === key)?.type

            const value = getValueForValidate(fieldType)(values[key])

            return { ...ac, [key]: value}
        }, {})

        navigate(routes.status)

        console.log(formatted, 'formatted')
    }

    return <MainFlowWrapper>
        <Tabs
            size="l"
            view="secondary"
            stretch={true}
            pilled={false}
            scaleOnPress={true}
            outlined={false}
            index={index}
            animated={true}
            style={{
                height: '66px'
            }}
        >
            {items.map(({ tab}, i) => (
                <TabItem
                    key={tab}
                    isActive={i === index}
                    tabIndex={0}
                    onClick={() => setIndex(i)}
                >
                    { tab }
                </TabItem>
            ))}
        </Tabs>
        <Form { ...items[index].props} onSubmit={onSubmit} info=''/>
    </MainFlowWrapper>
}
