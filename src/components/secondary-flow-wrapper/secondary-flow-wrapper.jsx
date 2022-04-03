import React, {useCallback} from "react";
import { useHistory } from 'react-router-dom'
import { Header } from "@sberdevices/plasma-ui";

import {Progress} from "./progress";

export const SecondaryFlowWrapper = ({ title, description, startPercent, endPercent, children, link }) => {
    const history = useHistory()
    const backHandleClick = useCallback(() => {
        if (link) {
            history.push(link)
        }
    }, [link])

    return (
        <>
            <Header
                back={true}
                logoAlt="auto.ru"
                title="СберАвто"
                subtitle=""
                onBackClick={backHandleClick}>
            </Header>
            <Progress startPercent={startPercent} endPercent={endPercent}/>
            {children}
        </>
    )
}
