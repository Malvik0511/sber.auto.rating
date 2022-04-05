import React, { useEffect, useState } from "react";

import {
    ProgressWrapper,
    ProgressBar
} from "./progress.style";

export const Progress = ({ percent }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <ProgressWrapper>
            <ProgressBar percent={percent} mounted={mounted}/>
        </ProgressWrapper>
    )
}
