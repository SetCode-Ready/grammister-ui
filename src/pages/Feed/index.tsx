import React, {useContext, useEffect, useRef, useState } from "react";
import Perfil from "../../assets/PERFIL.png";
import CapaPerfil from "../../assets/folklore.png";
import Album from "../../assets/ALBUMVIEW.png";
import Home from "../../assets/HOME.png";
import LastFm from "../../assets/LastFm.svg";
import close from "../../assets/close.png";
import Notification from "../../assets/NOTIFICATION.png";
import Charts from "../../assets/CHARTS.png";
import Chat from "../../assets/CHAT.png";
import NewsAnimation from "../../assets/NewsAnimation.json";
import LoadingSearchMusic from "../../assets/LoadingSearchMusic.json";
import Follow from "../../assets/Follow.json";
import { ReactComponent as ArrowImage } from "../../assets/Arrow.svg";
import { ReactComponent as Exit } from "../../assets/Exit.svg";

import { useSpring } from "react-spring";
import {
  AnimationContainer,
  CenterContainer,
  ContentNewsContainer,
  ExpandNewsContainer,
  FeedContainer,
  HighlightMusicContainer,
  IconsContainer,
  LeftContainer,
  MomentMusicContainer,
  NewsContainer,
  ReturnToFeed,
  RightContainer,
  Title,
  CreatePostInputContainer,
  HeaderContainer,
  SearchContainer,
  ContainerModal
} from "./style";
import { Player } from "@lottiefiles/react-lottie-player";
import { useHistory } from "react-router";
import api from "../../config/Axios";
import { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, FIND_USERS_BY_NAME, GET_POST} from "../../Graphql";
import { HomeLink } from "../Error/style";
import { Button } from "../../components/Button/style";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/Auth";
import jwt_decode from 'jwt-decode';
import Modal from 'react-modal';
import PostContentContainer from "../../components/PostContentContainer";

interface MusicProps {
  id: number;
  name: string;
  album: string;
  artist: string;
  listeners: string;
  url: string;
}

interface MusicMomentProps{
  name: string;
  artist: string;
  url: string;
}

interface UserProps {
  username: string;
  email: string;
  id: string;
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

  const {getTokenOnLocalStorage, saveTokenOnLocalStorage, removeTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage('token')

  const [user, setUser] = useState<UserProps>();
  
  const [posts, setPosts] = useState<PostsProps[]>([]);
  
  const [news, setNews] = useState<NewsProps[]>([]);
  
  const [expandNews, setExpandNews] = useState(false);
  
  const [postBody, setPostBody] = useState('');
  
  const [search, setSearch] = useState('')

  const [resultSearch, setResultSearch] = useState<SearchProps[]>([])

  const [modal, setModal] = useState(false)

  const [music, setMusic] = useState<MusicProps[]>([])

  const [momentMusic, setMomentMusic] = useState<MusicMomentProps>()
  
  let {data: dataPosts, refetch: refetchPosts} = useQuery(GET_POST)
  
  let [create] = useMutation(CREATE_POST, {errorPolicy: 'all'})

  let {data: SearchData, refetch: refetchSearch} = useQuery(FIND_USERS_BY_NAME, {
    variables: {userName: search}
  })
  
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
    }, [history, token])

    useEffect(() => {
      const music: any = getTokenOnLocalStorage("music")
      if(music){
        let moment = {name: music.name, artist: music.artist, url: music.url }
        setMomentMusic(moment)
      }
    }, [getTokenOnLocalStorage])

    useEffect(() => {

      refetchSearch()

      if(SearchData){
        setResultSearch(SearchData.findUsersByName)
      }

    }, [SearchData, refetchSearch, search])

    async function handleLogoutUser(){
      removeTokenOnLocalStorage("token")
      removeTokenOnLocalStorage("userId")
      removeTokenOnLocalStorage("music")
      history.push("/")
    }

    async function searchMusic(query: string){
      if(query === ""){
        setMusic([])
      }
      
      const response: AxiosResponse<any, any> = await api.get(`/search-songs/${query}`)

      setMusic(response.data)
    }

    function handleCloseModal(){
      setModal(false)
      setMusic([])
    }

    function handleSaveMusic(name: string, artist: string, url: string){
      const music = {name, artist, url}
      
      saveTokenOnLocalStorage("music", music)

      setMomentMusic(music)
      setMusic([])
      setModal(false)
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

          <button onClick={() => setModal(true)} >Selecione a sua música do momento</button>

          <Modal
            isOpen={modal}
            overlayClassName={"SearchMusicModalOverlay"}
            className={"SearchMusicModal"}
          >
            <img className={"CloseModal"} src={close} onClick={handleCloseModal} alt={"fechar modal"} />
            <ContainerModal>
              <input placeholder={"Digite o nome da música"} onChange={(e) => searchMusic(e.target.value)} />

              <div className={"searchResult"} >
                {music.length > 0 ?
                 music.map(music => (
                  <div onClick={() => handleSaveMusic(music.name, music.artist, music.url)} key={music.id} className={"musicContainer"}>
                    <h2>Musica: {music.name}</h2>
                    <p>Artista: {music.artist}</p>
                    <p>{music.listeners} espectadores</p>
                  </div>
                 ))
                 : 
                  <div className={"noSearch"} >
                    <Player
                      autoplay
                      loop
                      src={LoadingSearchMusic}
                      style={{ width: "150px", marginTop: "5rem" }}
                    />
                    <h5>Escolha uma música é se divirta</h5>
                  </div>
                 }
              </div>
            </ContainerModal>
          </Modal>
          

          { momentMusic && <HighlightMusicContainer>
            <img src={CapaPerfil} alt="Capa do album do perfil" />
            <div>
              <p style={{ fontSize: "16px", fontWeight: 600 }}>
                {momentMusic.name}
              </p>
              <p>{momentMusic.artist}</p>
            </div>
            <div className="buttons">
              <img onClick={() => window.open(momentMusic.url, '_blank')}  src={LastFm} alt="LastFm logo" />
              <img src={Album} alt="Album logo" />
            </div>
          </HighlightMusicContainer> }

          <IconsContainer>
            <img src={Home} alt="Icone da home" />
            <img src={Chat} alt="Icone do chat" />
            <img src={Charts} alt="Icone do grafico" />
            <img src={Notification} alt="Icone das notificações" />
          </IconsContainer>
        </MomentMusicContainer>

        {/* <h2 className="RecentReproductionText">Reproduções recentes</h2> */}
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
            
          </ExpandNewsContainer>
        </ReturnToFeed>
      ) : (
        <CenterContainer>
          <CreatePostInputContainer>
            <div>
              <textarea value={postBody} placeholder={"Escreva um post..."} onChange={e => setPostBody(e.target.value)} />
              <Button onClick={handleCreatePost} style={{padding: '0.25rem', width: '20%'}} >Postar</Button>

            </div>
          </CreatePostInputContainer>
          {posts.length > 0 ? (
            posts.map((post) => (
              <PostContentContainer postData={post} refetchPosts={refetchPosts} height />
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
          <ArrowImage />
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
              <Title style={{ marginTop: "5rem" }} >Nenhuma noticia :(</Title>
              <Player
                autoplay
                loop
                src={NewsAnimation}
                style={{ width: "150px" }}
              />
            </>
          )}
        </ContentNewsContainer>
      </RightContainer>
    </FeedContainer>
  </>
  );
}
