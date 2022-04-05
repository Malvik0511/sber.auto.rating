import { Button } from "@sberdevices/plasma-ui";
import { useNavigate } from "react-router-dom";
import React from "react";
import { routes } from "../../constant/navigation";

export const Region = () => {
    const navigate = useNavigate()
    
    return (
        <Button text="далее" size="s" view="primary" stretch  onClick={() => navigate(routes.model)}/>
    )
}
