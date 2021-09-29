import { animated } from 'react-spring';
import styled from "styled-components";

export const FeedContainer = styled(animated.main)`
    width: 98%;
    margin: 1% auto;
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1rem;
    height: 95vh;

    &.expandedMain{
        grid-template-columns: 1fr 1fr 2fr;
    }
`
export const LeftContainer = styled.div`
    padding: 1%;
    background: #F46036;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;

    h2{
        &.RecentReproductionText{
            width: 90%;
            margin-top: 0.5rem;
            font-size: 20px;
            font-weight: 700;
            color: #441276;
            text-align: left;
        }
    }

    img{
        &.profile{
            margin-top: 5%;
            width: 130px;
            height: 130px;
        }
    }

    p{
        color: #441276;
        font-size: 24px;
        font-weight: 700;
    }

    span{
        color: #441276;
        font-weight: 600;
        background-color: #FFD9CD;
        padding: 0 1rem;
        border-radius: 20px;
    }
`

export const MomentMusicContainer = styled.div`
    width: 90%;
    margin: 0 auto;

    h2{
        color: #441276;
        font-size: 20px;
    }
`

export const HighlightMusicContainer = styled.div`
    width: 100%;
    padding: 0 4%;
    height: 6rem;
    background: #5E19A2;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    img{
        width: 75px;
        height: 75px;
    }

    p{
        color: #F9F8F8;
        font-size: 12px;
        font-weight: 400;
    }

    div{
        &.buttons{
            img{
                cursor: pointer;
                display: block;
                width: 35px;
                height: 35px;

                & + img {
                    margin-top: 0.5rem;
                }
            }
        }
    }
`

export const IconsContainer = styled.div`
    margin-top: 1.5rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        cursor: pointer;
        width: 55px;
        height: 55px;
    }
`

export const RecentReproductionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-height: 8rem;
    overflow-x: auto;

    div{
        &.reproduction-inside{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            margin-left: 1rem;
            p{
                &.reproduction-title-inside{
                    font-size: 19px;
                    font-weight: 700;
                }

                &.reproduction-subtitle-inside{
                    font-weight: 700;
                }
            }
        }

        &.reproduction-main{
            margin: 0.25rem 0;
            display: flex;
    
            img{
                width: 60px;
                height: 60px;
                border-radius: 10px;
            }
    
            p{
                font-size: 14px;
                font-weight: 400;
            }
        }
    }
    
    ::-webkit-scrollbar{
        background-color: transparent;
        width: 0.4rem;
    }
    ::-webkit-scrollbar-thumb{
        background: #441276;
        border-radius: 1rem;
    }
`

export const CenterContainer = styled.div`
    padding: 1rem;
    background-color: #5E19A2;
    border-radius: 1rem;
    overflow-x: auto;
    transition: 0.3s;

    ::-webkit-scrollbar{
        display: none;
    }
`

export const ScrollContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const PostContentContainer = styled.div`
    width: 90%;
    background-color: #441276;
    margin: 0 auto;
    border-radius: 1rem;
    position: relative;
    margin-bottom: 1.5rem;
    cursor: pointer;
`

export const UserInfo = styled.div`
    width: 90%;
    padding: 1rem;
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    div{
        padding-left: 0.5rem;
    }

`

export const PostImg = styled.img`
    width: 70px;
    height: 100%;
    border-radius: 1rem;
`

interface StyledPProps{
    size: number
    color: string
    bold: number
}

export const StyledP = styled.p<StyledPProps>`
    font-size: ${({size}) => size +'px'};
    color: ${({color}) => color};
    font-weight: ${({bold}) => bold};
    display: flex;
    align-items: center;
    

    svg{
        margin: 0.3rem;
    }

    &:last-child{
        margin-top: -0.5rem;
    }
`

export const DetailContainer = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: #5E19A2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: filter 0.2s;

    svg{
        width: 30px;
        transition: 0.2s;

        &.rotate{
            transform: rotate(180deg);
        }
    }

    &:hover{
        filter: brightness(0.9);
    }
`

export const Title = styled.h2`
    size: 20px;
    color: #f2f2f2;
`

export const ContentNewsContainer = styled.div`
    width: 96%;
    margin: 0 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NewsContainer = styled.div`
    width: 95%;
    background-color: #441276;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1rem;
    position: relative;
    
    img{
        width: 90px;
        border-radius: 1rem;
        margin-right: 0.5rem;
    }

    p{
        width: 100%;
        color: #f2f2f2;
        line-height: 1.25rem;
    }

    &:last-of-type{
        margin-bottom: 1.5rem;
    }

    & + div {
        margin-top: 1.5rem;
    }

    span{
        font-size: 12px;
        position: absolute;
        bottom: 0.25rem;
        right: 0.5rem;
        color: #f2f2f2;
    }

`
interface ExpandNewsContainerProps{
    height?: number
}

export const ExpandNewsContainer = styled.div<ExpandNewsContainerProps>`
    width: 0.75rem;
    height: 37rem;
    background-color: #f2f2f2;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: fixed;

    svg{
        transform: rotate(90deg);
        path{
            fill: #441276;
        }
    }
`

export const ReturnToFeed = styled.div`
    background: #5E19A2;
    border-radius: 1rem;
    display: flex;
    justify-content: flex-end;

    ${ExpandNewsContainer}{
        svg{
            transform: rotate(270deg);
        }
    }

    h2{
        align-self: center;
        width: 100%;
        text-align: center;
        color: #f2f2f2;
    }
`

export const RightContainer = styled.div`
    background-color: #5E19A2;
    border-radius: 1rem;
    display: flex;
    overflow-x: auto;
    color: #000;

    ::-webkit-scrollbar{
        display: none;
    }

    &.expanded{
        justify-content: center;

        ${NewsContainer}{
            height: 25rem;
            width: 98%;
            justify-content: space-around;

            img{
                width: 120px;
                height: 90%;
                margin-right: 1rem;
            }

            p{
                width: 95%;

                &.titleExpanded{
                    font-size: 24px;
                    font-weight: 700;
                }
            }

            span{
                color: #B793FF;
                position: relative;
                bottom: 0;
                right: 0;
            }
        }
    }
`

export const AnimationContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`