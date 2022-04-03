import React, { useMemo, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { Header as PlasmaHeader} from "@sberdevices/plasma-ui";

import brand from "../../assets/images/brand.png";

export const Header = ({ link = ''}) => {
    const history = useHistory()
    const backHandleClick = useCallback(() => {
        if (link) {
            history.push(link)
        }
    }, [link, history])

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
