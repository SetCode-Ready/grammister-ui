import React, {useEffect, useRef, useState } from 'react'
import Perfil from '../../assets/PERFIL.png'
import CapaPerfil from '../../assets/folklore.png'
import Spotify from '../../assets/PLAYSPOTIFY.png'
import Album from '../../assets/ALBUMVIEW.png'
import Home from '../../assets/HOME.png'
import Notification from '../../assets/NOTIFICATION.png'
import Charts from '../../assets/CHARTS.png'
import Chat from '../../assets/CHAT.png'
import Share from '../../assets/SHARE.png'
import Comment from '../../assets/COMMENT.png'
import New_Repost from '../../assets/NEW POSTORREPOST.png'
import Like from '../../assets/LIKE.png'
import NewsAnimation from '../../assets/NewsAnimation.json'
import Follow from '../../assets/Follow.json'
import {ReactComponent as Clock} from '../../assets/CLOCK.svg'
import {ReactComponent as Arrow} from '../../assets/Arrow.svg'
import {useSpring} from 'react-spring'
import { AnimationContainer, CenterContainer, ContentNewsContainer, DetailContainer, ExpandNewsContainer, FeedContainer, HighlightMusicContainer, IconsContainer, LeftContainer, MomentMusicContainer, NewsContainer, PostContentContainer, PostImg, RecentReproductionContainer, ReturnToFeed, RightContainer, StyledP, Title, UserInfo} from './style'
import { Player } from '@lottiefiles/react-lottie-player'
import { HomeLink } from '../Error/style'

interface music {
    img: string
    name: string
    album: string
}

interface UserProps{
    name: string
    clan: string
    moment_music: string
    album_artist: string
    recent_reproduction: music[]
}

interface PostsProps{
    user_photo_url: string
    name: string
    time: string
    album_artist: string
    music: string
    album_url: string
}

interface NewsProps{
    photo_url: string
    title: string
    resume: string
    source: string
}

export default function Feed() {

    const Posts: PostsProps[] = [
        {
            user_photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQE2XF1eRO5WVQ/profile-displayphoto-shrink_200_200/0/1618354907753?e=1636588800&v=beta&t=vlrIgUNjVPqti6mE9GfcDULlA3WbsPIyRpuApOmgbQo',
            name: 'Kaue Cavalcante',
            time: '00:00',
            album_artist: 'single - Sidoka',
            music: 'não me sinto mal mais ',
            album_url: 'https://i.scdn.co/image/ab67616d0000b2731978b272d0d81c0787744e81'
        },
        {
            user_photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQE2XF1eRO5WVQ/profile-displayphoto-shrink_200_200/0/1618354907753?e=1636588800&v=beta&t=vlrIgUNjVPqti6mE9GfcDULlA3WbsPIyRpuApOmgbQo',
            name: 'Kaue Cavalcante',
            time: '00:00',
            album_artist: 'single - Sidoka',
            music: 'não me sinto mal mais ',
            album_url: 'https://i.scdn.co/image/ab67616d0000b2731978b272d0d81c0787744e81'
        },
        {
            user_photo_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQE2XF1eRO5WVQ/profile-displayphoto-shrink_200_200/0/1618354907753?e=1636588800&v=beta&t=vlrIgUNjVPqti6mE9GfcDULlA3WbsPIyRpuApOmgbQo',
            name: 'Kaue Cavalcante',
            time: '00:00',
            album_artist: 'single - Sidoka',
            music: 'não me sinto mal mais ',
            album_url: 'https://i.scdn.co/image/ab67616d0000b2731978b272d0d81c0787744e81'
        },
    ]

    const cicero: UserProps = {
        name: 'Cícero Henrique',
        clan: 'Swifties',
        moment_music: 'august',
        album_artist: 'folklore - Taylor Swift',
        recent_reproduction: [
            {
                img: "https://upload.wikimedia.org/wikipedia/pt/f/f8/Taylor_Swift_-_Folklore.png",
                name: 'august',
                album: 'folklore - Taylor Swift'
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
                name: 'august',
                album: 'folklore - Taylor Swift'
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
                name: 'august',
                album: 'folklore - Taylor Swift'
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
                name: 'august',
                album: 'folklore - Taylor Swift'
            },
        ]
    }

    const News: NewsProps[] = [
        {
            photo_url: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
            title: 'Taylor Swift divulga data da regravação do seu álbum Red',
            resume: 'Taylor swift por meio de suas redes sociais divulgou que a regravação do seu álbum Red deve chegar no dia 19 de Novembro deste ano, no outono americano...',
            source: 'Globo.com'
        },
        {
            photo_url: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
            title: 'Taylor Swift divulga data da regravação do seu álbum Red',
            resume: 'Taylor swift por meio de suas redes sociais divulgou que a regravação do seu álbum Red deve chegar no dia 19 de Novembro deste ano, no outono americano...',
            source: 'Globo.com'
        },
        {
            photo_url: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
            title: 'Taylor Swift divulga data da regravação do seu álbum Red',
            resume: 'Taylor swift por meio de suas redes sociais divulgou que a regravação do seu álbum Red deve chegar no dia 19 de Novembro deste ano, no outono americano...',
            source: 'Globo.com'
        },
        {
            photo_url: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
            title: 'Taylor Swift divulga data da regravação do seu álbum Red',
            resume: 'Taylor swift por meio de suas redes sociais divulgou que a regravação do seu álbum Red deve chegar no dia 19 de Novembro deste ano, no outono americano...',
            source: 'Globo.com'
        },
        {
            photo_url: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
            title: 'Taylor Swift divulga data da regravação do seu álbum Red',
            resume: 'Taylor swift por meio de suas redes sociais divulgou que a regravação do seu álbum Red deve chegar no dia 19 de Novembro deste ano, no outono americano...',
            source: 'Globo.com'
        },
        {
            photo_url: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
            title: 'Taylor Swift divulga data da regravação do seu álbum Red',
            resume: 'Taylor swift por meio de suas redes sociais divulgou que a regravação do seu álbum Red deve chegar no dia 19 de Novembro deste ano, no outono americano...',
            source: 'Globo.com'
        },
        {
            photo_url: "https://upload.wikimedia.org/wikipedia/pt/4/4f/Evermore_-_Taylor_Swift.png",
            title: 'Taylor Swift divulga data da regravação do seu álbum Red',
            resume: 'Taylor swift por meio de suas redes sociais divulgou que a regravação do seu álbum Red deve chegar no dia 19 de Novembro deste ano, no outono americano...',
            source: 'Globo.com'
        },
    ]

    const [user, setUser] = useState<UserProps>()

    const [posts, setPosts] = useState<PostsProps[]>([])
    
    const [news, setNews] = useState<NewsProps[]>([])

    const [expandNews, setExpandNews] = useState(false)

    const styles = useSpring({ gridTemplateColumns: expandNews ? '1fr 1fr 2fr' : '1fr 2fr 1fr' })

    const newsContainer = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setUser(cicero)
        setPosts(Posts)
        setNews(News)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])    

    return (
        <FeedContainer className={expandNews ? 'expandedMain': ''} style={styles}>
            
            <LeftContainer>
                <img className="profile" src={Perfil} alt="foto do seu perfil" />
                <p>{user?.name}</p>

                <span>{user?.clan}</span>

                <MomentMusicContainer>
                    <h2>Música do momento:</h2>

                    <HighlightMusicContainer>
                        <img src={CapaPerfil} alt="Capa do album do perfil" />
                        <div>
                            <p style={{fontSize: '16px', fontWeight: 600}} >{user?.moment_music}</p>
                            <p>{user?.album_artist}</p>
                        </div>
                        <div className="buttons" >
                            <img src={Spotify} alt="Spotifiy logo" />
                            <img src={Album} alt="Album logo" />
                        </div>
                    </HighlightMusicContainer>

                    <IconsContainer>
                        <img src={Home} alt="Icone da home" />
                        <img src={Chat} alt="Icone do chat" />
                        <img src={Charts} alt="Icone do grafico" />
                        <img src={Notification} alt="Icone das notificações" />
                    </IconsContainer>
                </MomentMusicContainer>

                <h2 className="RecentReproductionText" >Reproduções recentes</h2>
                <RecentReproductionContainer>

                    {user?.recent_reproduction.map(music => (
                        <div className="reproduction-main">
                            <img src={music.img} alt={music.album} />
                            <div className="reproduction-inside">
                                <p className="reproduction-title-inside" >{music.name}</p>
                                <p className="reproduction-subtitle-inside" >{music.album}</p>
                            </div>
                        </div>
                    ))}
                </RecentReproductionContainer>
            </LeftContainer>
            {expandNews ? 
            <ReturnToFeed>
                <h2>Retormar ao Feed</h2>
                <ExpandNewsContainer onClick={() => setExpandNews(!expandNews)} >
                    <Arrow/>
                </ExpandNewsContainer>
            </ReturnToFeed>
            : 
            <CenterContainer>
                {posts.length > 0 ? posts.map((post, index) => (
                    <PostContentContainer>
                        <UserInfo>
                            <PostImg src={Perfil} alt="foto do usuário" />
                            <div>
                                <StyledP size={18} color="white" bold={600}>{post.name}</StyledP>
                                <StyledP size={10} color="#B793FF" bold={600}> <Clock/> em {post.time} pm</StyledP>
                                <StyledP size={14} color="#B793FF" bold={600}>alterou sua música do momento</StyledP>
                            </div>
                        </UserInfo>

                        <HighlightMusicContainer style={{height: '7rem', width: "70%", margin: "0 auto"}} >
                            <img style={{borderRadius: '1rem'}} src={post.album_url} alt="Capa do album do perfil" />
                            <div>
                                <p style={{fontSize: '16px', fontWeight: 600}} >{post.music}</p>
                                <p>{post.album_artist}</p>
                            </div>
                            <div className="buttons" >
                                <img src={Spotify} alt="Spotifiy logo" />
                                <img src={Album} alt="Album logo" />
                            </div>
                        </HighlightMusicContainer>

                        <IconsContainer style={{height: '6rem', width: "65%", margin: " 0.4rem auto"}}>
                            <img src={Like} alt="Icone da home" />
                            <img src={New_Repost} alt="Icone do chat" />
                            <img src={Comment} alt="Icone do grafico" />
                            <img src={Share} alt="Icone das notificações" />
                            <img src={Album} alt="Icone das notificações" />
                        </IconsContainer>

                        <DetailContainer>
                            <Arrow />
                        </DetailContainer>
                    </PostContentContainer>
                ))
                :
                    <AnimationContainer>
                        <Title>Os post de quem você seguir apareceram aqui!</Title>
                        <Player
                            autoplay
                            loop
                            src={Follow}
                            style={{width: '500px'}}
                        />

                        <HomeLink to="/feed" style={{color: 'white'}} >Que tal ver algumas sugestões &#128540;</HomeLink>
                    </AnimationContainer>
                }
            </CenterContainer>
            }
            <RightContainer ref={newsContainer} className={expandNews ? 'expanded': ''} >
                <ExpandNewsContainer style={expandNews ? {display: 'none'} : {display: 'flex'}} onClick={() => setExpandNews(!expandNews)}>
                    <Arrow/>
                </ExpandNewsContainer>
                <ContentNewsContainer>
                    {news.length > 0 && <Title>Últimas Notícias</Title>}
                    {news.length > 0 ? news.map(news => (
                        
                            <NewsContainer>
                                <img src={news.photo_url} alt="Foto da noticia" />
                                <div>
                                    <p className={expandNews ? 'titleExpanded': ''}>{news.title}</p>
                                    <span className={expandNews ? 'sourceExpanded': ''} >Por: {news.source}</span>
                                    {expandNews && <p>{news.resume}</p>}
                                </div>
                            </NewsContainer>
                    ))
                    : 
                        <>
                            <Title>Nenhuma noticia :(</Title>
                            <Player
                                autoplay
                                loop
                                src={NewsAnimation}
                                style={{width: '150px'}}
                            />

                            <HomeLink to="/feed" style={{color: 'white'}} >Siga alguns artista para exibir suas noticias</HomeLink>
                        </>
                    }
                </ContentNewsContainer>

            </RightContainer>   

        </FeedContainer>
    )
}
