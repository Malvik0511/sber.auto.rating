import React, { useRef, useEffect } from 'react'
import { Image, Headline2, TextM } from '@sberdevices/plasma-ui'

import img from '../../assets/images/error.png'
import { animate } from '../../utils/animations'

import { 
    ChildWrapper,
    StatusWrapper,
    Container
} from './status.style'

const calculateScale = (progress) => {
    const resultValue = 0.7
    if (progress <= 0.3) {
        return 1
    } 

    return resultValue + (1 - resultValue) * ((1 - progress)/ (1 - 0.3))
}

const calculateStatusTransform = (progress) => {
    console.log(50 - progress * 50)
    return 50 - progress * 50
}
 
export const StatusComponent = ({ children }) => {
    const statusRef = useRef(null)
    const childRef = useRef(null)
    const image = img
    const title = 'title'
    const description = 'description'

    useEffect(() => {
        children && animate((pr) =>  {
            const scale = calculateScale(pr)
            const trTop = calculateStatusTransform(pr)

            statusRef.current.style.transform = `scale(${scale}) translate(-50%, 0%)`;
            statusRef.current.style.top = `${trTop}%`
        },() => {
            animate((pr) => {
                childRef.current.style.opacity = pr
            },() =>{},300)
        })
    }, [children])

    return <div style={{ display: 'flex', alignItems: 'center', height: '100%', position: 'relative'}}>
        <StatusWrapper ref={statusRef}>
            <Image src={image} width='120px' height='auto'></Image>
            <Headline2>{title}</Headline2>
            <TextM>{description}</TextM>
        </StatusWrapper>
        {
            children && <Container>
                <ChildWrapper ref={childRef}>
                { children }
                </ChildWrapper>
            </Container>
        }
    </div>
}