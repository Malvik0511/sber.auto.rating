import React, { useCallback } from "react";
import { useNavigate } from 'react-router-dom'

import brand from "../../assets/images/brand.png";
import { HeaderStyled } from "../header/header-styled.style";

export const MainFlowWrapper = ({ children, link }) => {
    const navigate = useNavigate()
    const backHandleClick = useCallback(() => {
        if (link) {
            navigate(link)
        }
    }, [link, navigate])

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
