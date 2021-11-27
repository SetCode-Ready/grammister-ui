import React, { BaseSyntheticEvent,  useContext,  useEffect, useRef, useState } from "react";
import Perfil from "../../assets/PERFIL.png";
import CapaPerfil from "../../assets/folklore.png";
import Spotify from "../../assets/PLAYSPOTIFY.png";
import Album from "../../assets/ALBUMVIEW.png";
import Home from "../../assets/HOME.png";
import Notification from "../../assets/NOTIFICATION.png";
import Charts from "../../assets/CHARTS.png";
import Chat from "../../assets/CHAT.png";
import Share from "../../assets/SHARE.png";
import Comment from "../../assets/COMMENT.png";
import New_Repost from "../../assets/NEW POSTORREPOST.png";
import Like from "../../assets/LIKE.png";
import NewsAnimation from "../../assets/NewsAnimation.json";
import Follow from "../../assets/Follow.json";
import { ReactComponent as Clock } from "../../assets/CLOCK.svg";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import { ReactComponent as Exit } from "../../assets/Exit.svg";

import { useSpring } from "react-spring";
import {
  AnimationContainer,
  CenterContainer,
  ContentNewsContainer,
  DetailContainer,
  ExpandNewsContainer,
  FeedContainer,
  HighlightMusicContainer,
  IconsContainer,
  LeftContainer,
  MomentMusicContainer,
  NewsContainer,
  PostContentContainer,
  PostImg,
  RecentReproductionContainer,
  ReturnToFeed,
  RightContainer,
  StyledP,
  Title,
  UserInfo,
  PostContainer,
  CreatePostInputContainer,
  HeaderContainer,
  SearchContainer
} from "./style";
import { Player } from "@lottiefiles/react-lottie-player";
import { useHistory } from "react-router";
import api from "../../config/Axios";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, FIND_USERS_BY_NAME, GET_POST, LIKE_POST } from "../../Graphql";
import { HomeLink } from "../Error/style";
import { Button } from "../../components/Button/style";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/Auth";
import jwt_decode from 'jwt-decode';

interface music {
  img: string;
  name: string;
  album: string;
}

interface UserProps {
  username: string;
  email: string;
  id: string;
  // moment_music: string;
  // album_artist: string;
  // recent_reproduction: music[];
}

interface PostsProps {
	id: number;
  user_photo_url: string;
  username: string;
  createdAt: string;
  album_artist: string;
  music: string;
  album_url: string;
  commentCount: number;
  likeCount: number;
  body: string;
  email: string;
}

interface NewsProps {
  urlToImage: string;
  title: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
}

interface SearchProps{
  id: string;
  name: string;
  followers: string[];
  email: string;
}

export default function Feed() {
	const history = useHistory()

  const {getTokenOnLocalStorage, removeTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage()

  const [user, setUser] = useState<UserProps>();
  
  const [posts, setPosts] = useState<PostsProps[]>([]);
  
  const [news, setNews] = useState<NewsProps[]>([]);
  
  const [expandNews, setExpandNews] = useState(false);
  
  const [postBody, setPostBody] = useState('');
  
  const [search, setSearch] = useState('')

  const [resultSearch, setResultSearch] = useState<SearchProps[]>([])

  let {data: dataPosts, refetch: refetchPosts} = useQuery(GET_POST)
  
  let [create] = useMutation(CREATE_POST, {errorPolicy: 'all'})
  
  let [like] = useMutation(LIKE_POST, {errorPolicy: 'all'})

  let {data: SearchData, refetch: refetchSearch} = useQuery(FIND_USERS_BY_NAME, {
    variables: {userName: search}
  })
  
  async function handleLikePost(id: number, event: Event | BaseSyntheticEvent){
    event.stopPropagation()
    await like({
      variables: {
        postId: id
      }
    })
    
    refetchPosts()
  }

  async function handleDetail(event: Event | BaseSyntheticEvent){
    event.stopPropagation()
  }
  
  async function handleCreatePost(){
    
    if(postBody === ''){
      toast.error("Compartilhe algo com a gente! 😥 ")
      return
    }
    
    try {
      await create({
        variables:{
          body: postBody
        }
      })
      
      refetchPosts()  
      setPostBody('')
    } catch (error) {
      console.log(error)
    }
  }
  
  function handleSelectPost(id: number){
    history.push(`/post_details/${id}`)
  }
  
  async function GetNews(){
    try{
      const response: AxiosResponse<any, any> = await api.get("/news")
      
      setNews(response.data.articles)
    } catch(e){
      console.log(e)
    }
  }
  
  
  const styles = useSpring({
    gridTemplateColumns: expandNews ? "1fr 1fr 2fr" : "1fr 2fr 1fr",
  });
  
  const newsContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    GetNews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    refetchPosts()
    if(dataPosts){
      setPosts(dataPosts.findAllPosts)
    }
  }, [dataPosts, refetchPosts])
  
    useEffect(() => {

      if(!token){
        history.push("/")
        return
      }

      const user: UserProps = jwt_decode(token)
      setUser(user)
    }, [token])

    useEffect(() => {

      refetchSearch()

      if(SearchData){
        setResultSearch(SearchData.findUsersByName)
      }

    }, [SearchData, refetchSearch, search])

    async function handleLogoutUser(){
      removeTokenOnLocalStorage("token")
      removeTokenOnLocalStorage("userId")
      history.push("/")
    }

  return (
    <>
    <HeaderContainer>
      <input placeholder="Encontre novar pessoas..." value={search} onChange={e => setSearch(e.target.value)}/>
      
      {search.length > 0 ? 
        <SearchContainer>
          {resultSearch.length > 0 ? resultSearch.map((data: SearchProps) => (
            <div key={data.id} onClick={() => history.push(`/user/${data.id}`)} >
              <p>{data.name}</p>
              <h6>{data.email}</h6>
              <h6>{data.followers.length} {data.followers.length > 1 ? "seguidores" : "seguidor"}</h6>
            </div>
          ))
          :
          <p className={"nothing"} >Nenhum usuário encontrado</p>}
        </SearchContainer>
        : 
       ''}
      
      <div className={"logout"} onClick={handleLogoutUser}>
        <Exit/>
      </div>
    </HeaderContainer>
    <FeedContainer className={expandNews ? "expandedMain" : ""} style={styles}>
      <LeftContainer>
        <img className="profile" src={Perfil} alt="foto do seu perfil"
        onClick={() => history.push(`/user/${user?.id}`)} style={{cursor: 'pointer'}}
        />
        <p onClick={() => history.push(`/user/${user?.id}`)} style={{cursor: 'pointer'}} >{user?.username}</p>

        <span onClick={() => history.push(`/user/${user?.id}`)} style={{cursor: 'pointer'}} >{user?.email}</span>

        <MomentMusicContainer>
          <h2>Música do momento:</h2>

          {/* <HighlightMusicContainer>
            <img src={CapaPerfil} alt="Capa do album do perfil" />
            <div>
              <p style={{ fontSize: "16px", fontWeight: 600 }}>
                {user?.moment_music}
              </p>
              <p>{user?.album_artist}</p>
            </div>
            <div className="buttons">
              <img src={Spotify} alt="Spotifiy logo" />
              <img src={Album} alt="Album logo" />
            </div>
          </HighlightMusicContainer> */}

          <IconsContainer>
            <img src={Home} alt="Icone da home" />
            <img src={Chat} alt="Icone do chat" />
            <img src={Charts} alt="Icone do grafico" />
            <img src={Notification} alt="Icone das notificações" />
          </IconsContainer>
        </MomentMusicContainer>

        <h2 className="RecentReproductionText">Reproduções recentes</h2>
        {/* <RecentReproductionContainer>
          {user?.recent_reproduction.map((music) => (
            <div className="reproduction-main">
              <img src={music.img} alt={music.album} />
              <div className="reproduction-inside">
                <p className="reproduction-title-inside">{music.name}</p>
                <p className="reproduction-subtitle-inside">{music.album}</p>
              </div>
            </div>
          ))}
        </RecentReproductionContainer> */}
      </LeftContainer>
      {expandNews ? (
        <ReturnToFeed>
          <h2>Retormar ao Feed</h2>
          <ExpandNewsContainer onClick={() => setExpandNews(!expandNews)}>
            <Arrow />
          </ExpandNewsContainer>
        </ReturnToFeed>
      ) : (
        <CenterContainer>
          <CreatePostInputContainer>
            <p>Crie seu post</p>
            <input value={postBody} onChange={e => setPostBody(e.target.value)} type="text" />
            <Button onClick={handleCreatePost} style={{padding: '0.25rem', width: '20%'}} >Postar</Button>
          </CreatePostInputContainer>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostContentContainer key={post.id} onClick={() => handleSelectPost(post.id)} style={{cursor: 'pointer'}}>
                <UserInfo>
                  <PostImg src={Perfil} alt="foto do usuário" />
                  <div>
                    <StyledP size={18} color="#f2f2f2" bold={600}>
                      {post.username}
                    </StyledP>
                    <StyledP size={10} color="#B793FF" bold={600}>
                      {" "}
                      <Clock style={{marginLeft: '-0.05rem'}} /> em {
                      new Intl.DateTimeFormat('pt-BR').format(new Date(post.createdAt))} as {new Date(post.createdAt).getHours()}:{new Date(post.createdAt).getMinutes() < 10 ? '0' : ''}{new Date(post.createdAt).getMinutes()} pm
                    </StyledP>
                    <StyledP size={14} color="#B793FF" bold={600}>
                      Postou
                    </StyledP>
                  </div>
                </UserInfo>


                <PostContainer style={{overflowX: 'unset', height: "auto"}} >
                  <p>{post.body}</p>
                </PostContainer>

                {/* <HighlightMusicContainer
                  style={{ height: "7rem", width: "70%", margin: "0 auto" }}
                >
                  <img
                    style={{ borderRadius: "1rem" }}
                    src={post.album_url}
                    alt="Capa do album do perfil"
                  />
                  <div>
                    <p style={{ fontSize: "16px", fontWeight: 600 }}>
                      {post.music}
                    </p>
                    <p>{post.album_artist}</p>
                  </div>
                  <div className="buttons">
                    <img src={Spotify} alt="Spotifiy logo" />
                    <img src={Album} alt="Album logo" />
                  </div>
                </HighlightMusicContainer> */}

                <IconsContainer
                  style={{
                    height: "6rem",
                    width: "65%",
                    margin: " 0.5rem auto",
                    alignItems: "flex-start"
                  }}
                >
                  <div>
                    <img onClick={(event) => handleLikePost(post.id, event)} src={Like} alt="Icone de curtir" />
                    <p>{post.likeCount}</p>
                  </div>
                  <img src={New_Repost} alt="Icone do chat" />
                  <div>
                  <img src={Comment} alt="Icone do grafico" />
                    <p>{post.commentCount}</p>
                  </div>
                  <img src={Share} alt="Icone das notificações" />
                </IconsContainer>

                {post.email === user?.email ?
                <DetailContainer onClick={handleDetail}>
                  <Arrow />
                </DetailContainer> :  ''}
              </PostContentContainer>
            ))
          ) : (
            <AnimationContainer>
              <Title>Os post de quem você seguir aparecerão aqui!</Title>
              <Player autoplay loop src={Follow} style={{ width: "500px" }} />

              <HomeLink to="/feed" style={{ color: "#f2f2f2" }}>
                Que tal ver algumas sugestões &#128540;
              </HomeLink>
            </AnimationContainer>
          )}
        </CenterContainer>
      )}
      <RightContainer
        ref={newsContainer}
        className={expandNews ? "expanded" : ""}
      >
        <ExpandNewsContainer
          style={expandNews ? { display: "none" } : { display: "flex" }}
          onClick={() => setExpandNews(!expandNews)}
        >
          <Arrow />
        </ExpandNewsContainer>
        <ContentNewsContainer>
          {news.length > 0 && <Title>Últimas Notícias</Title>}
          {news.length > 0 ? (
            news.map((news) => (
              <NewsContainer key={news.urlToImage}>
                <div className="Image">
                  <img width="90px" src={news.urlToImage} alt="news.title"/>
                </div>
                <div>
                  <p className={expandNews ? "titleExpanded" : ""}>
                    {news.title}
                  </p>
                  <Link to={{pathname: `${news.url}`}} target="_blank" className={expandNews ? "sourceExpanded" : ""}>
                    Por: {news.source.name}
                  </Link>
                  {expandNews && <p>{news.description}</p>}
                </div>
              </NewsContainer>
            ))
          ) : (
            <>
              <Title>Nenhuma noticia :(</Title>
              <Player
                autoplay
                loop
                src={NewsAnimation}
                style={{ width: "150px" }}
              />

              <HomeLink to="/feed" style={{ color: "#f2f2f2" }}>
                Siga alguns artista para exibir suas noticias
              </HomeLink>
            </>
          )}
        </ContentNewsContainer>
      </RightContainer>
    </FeedContainer>
  </>
  );
}
