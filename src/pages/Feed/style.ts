import { animated } from 'react-spring';
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 95%;
    margin: 1% auto;
    height: 8vh;
    background-color: #5E19A2;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    input{
        height:2rem;
        width: 20rem;
        border: 0;
        background-color: #441276;
        border-radius: 1rem;
        color: white;
        padding: 1rem;
        font-size: 1rem;
        position: relative;
        z-index: 9999;
    }

    div.logout{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #441276;
        width: 48px;
        height: 48px;
        border-radius: 1rem;
        cursor: pointer;
    }
`

export const SearchContainer = styled.div`
    padding: 1rem;
    width: 20rem;
    height:auto;
    min-height: 5rem;
    background-color: #441276;
    position: absolute;
    top:2.25rem;
    border-radius: 1rem;
    overflow-x: auto;

    ::-webkit-scrollbar{
        background-color: transparent;
        width: 0.4rem;
    }
    ::-webkit-scrollbar-thumb{
        background: #F46036;
        border-radius: 1rem;
    }

    p.nothing{
            color: #F9F8F8;
            text-align: center;
        }

    div{
        border-bottom: 1px solid #F9F8F8;
        margin: 0.25rem;
        transition: 0.2s ;
        cursor: pointer;

        p{
            color: #F9F8F8;
            transition: 0.2s;
            margin-top: 1rem;
        }

        h6{
            color: #d3d3d3;
            transition: 0.2s;
        }

        &:hover{

            p{
                color: #AEAEAE;
            }

            h6{
                color: #AEAEAE;
            }

        }
    }


`

export const FeedContainer = styled(animated.main)`
    width: 95%;
    margin: 0.25rem auto;
    background: transparent;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 1rem;
    height: 85vh;

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
    margin: 1rem auto;

    button{
        margin: 1rem 0;
        border: 0;
        width: 100%;
        padding: 0.5rem;
        font-size: 14px;
        background-color: #5E19A2;
        color: white;
        border-radius: 1rem;
        cursor: pointer;
        transition: 0.2s;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

        &:hover{
            background-color: #441276;
        }
    }

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
    margin-top: 2rem;
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    img{
        cursor: pointer;
        width: 3rem;
        height: 3rem;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p{
            color: #f2f2f2;
        }
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

export const PostContainer = styled.div`
    height: 7rem;
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 1rem;
    overflow-x: auto;
    flex-grow: 3;

    ::-webkit-scrollbar{
        background-color: transparent;
        width: 0.4rem;
    }
    ::-webkit-scrollbar-thumb{
        background: #F46036;
        border-radius: 1rem;
    }

    p{
        color: #f2f2f2;
    }
`
export const CreatePostInputContainer = styled.div`
    width: 90%;
    background-color: #441276;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    div{
        width: 100%;
        height: 10rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 1rem;
        flex-direction: column;
        margin: 0.5rem;
        
        textarea{
            width: 90%;
            border-radius: 0.25rem;
            min-height: 5rem;
            font-size: 16px;
            padding: 0.25rem;
            border: 0;
            background-color: white;
            resize: none;
            margin-bottom: 1rem;
            
            ::-webkit-scrollbar{
                display: none;
            }
        }
    }

`

export const ScrollContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const PostContentContainer = styled.div`
    width: 90%;
    background-color: #441276;
    margin: 1rem auto;
    border-radius: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`

export const UserInfo = styled.div`
    flex-grow: 1;
    width: 90%;
    padding: 2rem;
    margin: 0.5rem auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 0;

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
    padding: 0.5rem;
    border-radius: 1rem;
    position: relative;
    
    div.Image{
        width: 200px;
        height: 100px;
        border-radius: 1rem;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        img{
            width: 90px;
            height: 90px;
            border-radius: 1rem;
        }
    }

    p{
        width: 100%;
        color: #f2f2f2;
        line-height: 1.25rem;
        margin-bottom: 1rem;
    }

    &:last-of-type{
        margin-bottom: 1.5rem;
    }

    & + div {
        margin-top: 1.5rem;
    }

    a{
        font-size: 12px;
        position: absolute;
        bottom: 0.25rem;
        right: 0.5rem;
        color: #f2f2f2;
        margin-top: 1rem;
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

export const ContainerModal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    input{
        width: 100%;
        border: 0;
        padding: 1rem;
        border-radius: 1rem 1rem 0 0;
        border-bottom: 1px solid white;
        color: white;
        background-color: #5E19A2;
        font-size: 16px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }

    div.searchResult{
        width: 100%;
        background-color: #5E19A2;
        min-height: 23rem;
        height: auto;
        overflow-x: auto;
        

        ::-webkit-scrollbar{
        background-color: transparent;
        width: 0.4rem;
        }
        ::-webkit-scrollbar-thumb{
            background: white;
            border-radius: 1rem;
        }

        div.musicContainer{
            width: 100%;
            padding: 0.5rem 1rem;
            transition: 0.2s;
            cursor: pointer;

            h2{
                color: white;
            }

            p{
                color: white;
            }

            &:hover{
                background-color: #240D53;
            }
        }

        div.noSearch{
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;

            h5{
                color: white
            }
        }
    }
`