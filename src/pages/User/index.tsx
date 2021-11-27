import { useMutation, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import { MainContainer, PostsContainer, UserContainer } from "./style";
import { FIND_USER_BY_ID, FOLLOW_USER, GET_POST, LIKE_POST } from "../../Graphql";
import { BaseSyntheticEvent, useContext, useEffect, useState } from "react";
import Perfil from "../../assets/PERFIL.png";
import { AnimationContainer, CenterContainer, DetailContainer, IconsContainer, PostContainer, PostContentContainer, PostImg, StyledP, UserInfo } from "../Feed/style";

import { ReactComponent as Clock } from "../../assets/CLOCK.svg";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import Notification from "../../assets/NOTIFICATION.png";
import Charts from "../../assets/CHARTS.png";
import Chat from "../../assets/CHAT.png";
import Share from "../../assets/SHARE.png";
import Comment from "../../assets/COMMENT.png";
import New_Repost from "../../assets/NEW POSTORREPOST.png";
import Like from "../../assets/LIKE.png";
import NewsAnimation from "../../assets/NewsAnimation.json";
import Sad from "../../assets/Sad.json";
import { Title } from "../Register/style";
import { HomeLink } from "../Error/style";
import { Player } from "@lottiefiles/react-lottie-player";
import { AuthContext } from "../../context/Auth";
import jwt_decode from 'jwt-decode';
import toast from "react-hot-toast";

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

interface UserProps {
  name: string;
  email: string;
  id: string;
  followers: string[];
  // moment_music: string;
  // album_artist: string;
  // recent_reproduction: music[];
}

interface ParamsProps {
  id: string;
}

export default function User() {

  const {getTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage()

  const history = useHistory()

  const [user, setUser] = useState<UserProps>()

  const [follow, setFollow] = useState<boolean>()
  
  const [loggedUser, setLoggedUser] = useState<UserProps>()
  
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const { id } = useParams<ParamsProps>();

  let {data, refetch} = useQuery(FIND_USER_BY_ID, {
    variables: {userId: id}
  })

  let {data: dataPosts, refetch: refetchPosts} = useQuery(GET_POST)

  let [like] = useMutation(LIKE_POST, {errorPolicy: 'all'})

  let [followUser, {data: dataFollow, loading}] = useMutation(FOLLOW_USER, {errorPolicy: 'all'})

  function handleSelectPost(id: number){
    history.push(`/post_details/${id}`)
  }

  async function handleLikePost(id: number, event: Event | BaseSyntheticEvent){
    event.stopPropagation()
    await like({
      variables: {
        postId: id
      }
    })
    
    refetchPosts()
  }

  async function handleFollowUser(){
  
    toast.loading("Seguindo...")

      await followUser({
        variables: {
          userId: id
        }
      }).then(response => {
        toast.dismiss()
        toast.success(response.data.followUser)
        refetch()
      })
      
  }

  async function handleDetail(event: Event | BaseSyntheticEvent){
    event.stopPropagation()
  }

  useEffect(() => {
    refetchPosts()
    if(dataPosts){

      let userPosts = dataPosts.findAllPosts.filter((post: PostsProps ) => post.email === user?.email)

      setPosts(userPosts)
    }
  }, [dataPosts, refetchPosts, user?.email])

  useEffect(() => {
    refetch()
    if(data){
      setUser(data.findUserById)
    }
  }, [data, refetch, user])

  useEffect(() => {

    if(!token){
      history.push("/")
      return
    }

    const user: UserProps = jwt_decode(token)
    setLoggedUser(user)
  }, [history, token])

  useEffect(() => {
    let followed = user?.followers.filter(data => data === loggedUser?.id)

    if(followed!.length > 0){
      setFollow(true)
    } else {
      setFollow(false)
    }

  }, [followUser.length, loggedUser?.id, user])


  return (
      <MainContainer>
        <UserContainer>
          <div className={"UserActions"} >
            <img className="profile" src={Perfil} alt="foto do seu perfil" />
            {loggedUser?.id === id ? '' :
              follow ? <p onClick={handleFollowUser} >Deixar de seguir</p> :<p onClick={handleFollowUser} >Seguir</p>
             }
          </div>
          <div className={"UserDetails"} >
            <p>{user?.name}</p>
            <h5>{user?.email}</h5>
            <h6>{user?.followers.length} Seguidores</h6>
          </div>
        </UserContainer>

        <PostsContainer>
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

                {post.email === loggedUser?.email ?
                <DetailContainer onClick={handleDetail}>
                  <Arrow />
                </DetailContainer> :  ''}
              </PostContentContainer>
            ))
          ) : (
            <AnimationContainer style={{width: "200%"}} >
              <Title style={{color: "white"}} >{user?.name} não tem nenhum post</Title>
              <Player autoplay loop src={Sad} style={{ width: "150px" }} />
            </AnimationContainer>
          )}
      </PostsContainer>
    </MainContainer>     
  )
}
