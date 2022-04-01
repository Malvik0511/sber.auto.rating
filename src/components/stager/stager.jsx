import React from "react";
import {
    BodyM,
    TextM
} from '@sberdevices/plasma-ui';

import {
    Wrapper,
    Step,
    StepContentWrapper,
    StepTextWrapper
} from './stager.style'

import {
    Pointer
} from './pointer'

export const Stager = ({ list }) => <Wrapper>
    {
        list.map(({ title, description }, i) => <Step key={title}>
            <StepContentWrapper>
                <Pointer number={i + 1} isLast={i === list.length - 1 }/>
                <StepTextWrapper>
                    <BodyM bold mb='4x'>{title}</BodyM>
                    <TextM>{description}</TextM>
                </StepTextWrapper>
            </StepContentWrapper>
        </Step>)
    }
</Wrapper>
