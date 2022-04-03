import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import {
    Button,
    Image,
    Headline2,
    ParagraphText1,
} from '@sberdevices/plasma-ui';

import img from '../../assets/images/calculator.png'
import { Stager } from '../../components/stager/stager'
import { routes } from "../../constant/navigation";

import { Header } from "../../components/header/header";

import {
    ContentWrapper,
    BottomWrapper
} from './on-boarding.style'
import {MainFlowWrapper} from "../../components/main-flow-wrapper/main-flow-wrapper";

const list = [
    { title: 'Введите гос. номер, пробег и регион', description: 'Если не знаете гос. номер — можете оценить по VIN или другим параметрам'},
    { title: 'Получите оценку вашего автомобиля! 🎉', description: ''}
]

export const OnBoarding = () => {
    const history = useHistory()
    const onNextClick = useCallback(() => {
        history.push(routes.firstPage)
    }, [history])

    return (
        <MainFlowWrapper>
            <ContentWrapper>
                <Image
                    src={img}
                    width="255px"
                    height="255px"
                    alt="Картинка для примера фоном"
                />
                <Headline2 mb='4x'>
                    Оценить автомобиль
                </Headline2>
                <ParagraphText1>
                    за пару простых шагов
                </ParagraphText1>
                <BottomWrapper>
                    <Stager list={list}/>
                    <Button text="Оценить" size="s" view="primary" stretch onClick={onNextClick}/>
                </BottomWrapper>
            </ContentWrapper>
        </MainFlowWrapper>
    )
}
