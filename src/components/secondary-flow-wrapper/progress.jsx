import React from "react";

import {
    ProgressWrapper,
    ProgressBar
} from "./progress.style";

export const Progress = ({ startPercent, endPercent }) => (
    <ProgressWrapper>
        <ProgressBar startPercent={startPercent} endPercent={endPercent}/>
    </ProgressWrapper>
)
