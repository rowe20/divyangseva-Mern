import React from 'react'
import { Button, ButtonL } from '../ButtonElement'
import { BtnWrap, 
    Column1, 
    Column2,
    Heading, 
    InfoContainer, 
    InfoROw, 
    InfoWrapper, 
    ImgWrap,
    Img,
    Subtitle, 
    TextWrapper, 
    TopLine
} from './InfoElement'


const InfoSection = ({link,lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoROw imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <ButtonL to={link}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1:0}
                        dark={dark ? 1: 0}
                        dark2={dark2 ? 1 : 0}
                        >
                         {buttonLabel}
                            </ButtonL>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoROw>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection