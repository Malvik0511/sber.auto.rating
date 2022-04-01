import React from 'react'

import {
    ListPointer,
    PointerWrapper
} from "./stager.style";

export const Pointer = ({ number, isLast }) => <PointerWrapper isLast={isLast}>
    <ListPointer>
        <span>{number}</span>
    </ListPointer>
</PointerWrapper>
