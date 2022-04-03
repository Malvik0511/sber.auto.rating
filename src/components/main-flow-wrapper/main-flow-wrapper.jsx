import React, { useCallback } from "react";
import { useHistory } from 'react-router-dom'

import brand from "../../assets/images/brand.png";
import { HeaderStyled } from "../header/header-styled.style";

export const MainFlowWrapper = ({ children, link }) => {
    const history = useHistory()
    const backHandleClick = useCallback(() => {
        if (link) {
            history.push(link)
        }
    }, [link])

    return (
        <>
            <HeaderStyled
                back={true}
                logo={brand}
                logoAlt="auto.ru"
                title="СберАвто"
                subtitle=""
                onBackClick={backHandleClick}>
            </HeaderStyled>
            {children}
        </>
    )
}
