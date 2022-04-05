import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header as PlasmaHeader} from "@sberdevices/plasma-ui";

import brand from "../../assets/images/brand.png";

export const Header = ({ link = ''}) => {
    const navigate = useNavigate()
    const backHandleClick = useCallback(() => {
        if (link) {
            navigate(link)
        }
    }, [link, navigate])

    return (
        <PlasmaHeader
            back={true}
            logo={brand}
            logoAlt="auto.ru"
            title="СберАвто"
            subtitle=""
            onBackClick={backHandleClick}
        />
    )
}
