import React, { useState } from "react";
import {
    Tabs,
    TabItem
} from '@sberdevices/plasma-ui'

import { Form } from '../../components/form'
import selectors from '../../__data__/selectors/data'
import { Header } from "../../components/header/header";
import { routes } from "../../constant/navigation";
import {MainFlowWrapper} from "../../components/main-flow-wrapper/main-flow-wrapper";

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
const onSubmit = (values) => console.log(values)

export const MainParams = () => {
    const [index, setIndex] = useState(0)

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
