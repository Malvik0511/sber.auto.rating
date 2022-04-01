import React, { useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Header as PlasmaHeader} from "@sberdevices/plasma-ui";

import brand from "../../assets/images/brand.png";

import {HeaderStyled} from "./header-styled.style";

export const Header = ({ start = false, link = ''}) => {
    const history = useHistory()
    const H = useMemo(() => start ? HeaderStyled : PlasmaHeader, [start])
    const backHandleClick = useCallback(() => {
        if (!start && link) {
            history.push(link)
        }
    }, [start, link, history])

    return (
        <H
            back={true}
            logo={brand}
            logoAlt="auto.ru"
            title="СберАвто"
            subtitle=""
            onBackClick={backHandleClick}
        />
    )
}
