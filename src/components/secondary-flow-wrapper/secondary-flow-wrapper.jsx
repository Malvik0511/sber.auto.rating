import React, { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Header } from "@sberdevices/plasma-ui";

import { Progress } from "./progress";

export const SecondaryFlowWrapper = ({ title, description, children, nastedRotes }) => {
    const path = useLocation().pathname
    const index = nastedRotes.indexOf(path)
    const percent = (index + 1)/nastedRotes.length * 100

    const navigate = useNavigate()
    const backHandleClick = useCallback(() => {
        navigate(-1)
    }, [navigate])

    return (
        <>
            <Header
                back={true}
                logoAlt="auto.ru"
                title="СберАвто"
                subtitle=""
                onBackClick={backHandleClick}>
            </Header>
            <Progress percent={percent}/>
            {children}
        </>
    )
}
