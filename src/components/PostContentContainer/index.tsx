import { useHistory } from 'react-router';
import { BaseSyntheticEvent, useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import toast from 'react-hot-toast';
import { useMutation } from '@apollo/client';
import { AuthContext } from '../../context/Auth';
import { DELETE_POST, LIKE_POST } from '../../Graphql';

import { PostContainer, UserInfo, PostImg, StyledP, IconsContainer, DetailContainer, PostContentContainerWrapper } from './style';
import { ReactComponent as Trash } from "../../assets/T.svg";
import { ReactComponent as Clock } from "../../assets/CLOCK.svg";
import Perfil from "../../assets/PERFIL.png";
import Share from "../../assets/SHARE.png";
import Like from "../../assets/LIKE.png";
import Comment from "../../assets/COMMENT.png";

interface PostsProps {
	id: number;
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

interface PostContainerProps{
  postData: PostsProps;
  refetchPosts: any;
  height?: boolean;
  returnToFeed?: boolean
}

interface UserProps {
  name: string;
  email: string;
  id: string;
  followers: string[];
  following: string[];
}

export default function PostContentContainer({postData, refetchPosts, height, returnToFeed}: PostContainerProps) {

  const {getTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage('token')

  const history = useHistory()

  const [post, setPost] = useState<PostsProps>()

  const [loggedUser, setLoggedUser] = useState<UserProps>()

  let [like] = useMutation(LIKE_POST, {errorPolicy: 'all'})

  let [deletePost] = useMutation(DELETE_POST, {errorPolicy: 'all'})

  async function handleDeletePost(event: Event | BaseSyntheticEvent, id: number){
    event.stopPropagation()

    await deletePost({
      variables: {
        postId: id
      }
    }).then(() => {
      toast.success("Post deletado com sucesso")

      if(returnToFeed){
        history.push("/feed")
      }

    })
    
    refetchPosts()
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

  function handleSelectPost(id: number){
    history.push(`/post_details/${id}`)
  }

  function handleCopyToClipboard(id: number, event: Event | BaseSyntheticEvent){
    event.stopPropagation()
    navigator.clipboard.writeText(`http://localhost:3000/post_details/${String(id)}`)
    toast.success("Link do post copiado!")
  }

  useEffect(() => {
    setPost(postData)
    console.log(postData)
  }, [postData])

  useEffect(() => {

    if(!token){
      history.push("/")
      return
    }

    const user: UserProps = jwt_decode(token)
    setLoggedUser(user)
  }, [history, token])

  return (
    <PostContentContainerWrapper key={post?.id} onClick={() => handleSelectPost(post!.id)}>
      <UserInfo>
      <PostImg src={Perfil} alt="foto do usuário" />
      <div>
        <StyledP size={18} color="#f2f2f2" bold={600}>
          {post?.username}
        </StyledP>
        <StyledP size={10} color="#B793FF" bold={600}>
          {" "}
          <Clock style={{ marginLeft: "-0.05rem" }} /> em{" "}
                {post?.createdAt &&
                  new Intl.DateTimeFormat("pt-BR").format(
                    new Date(post?.createdAt)
                  )}{" "}
                as {post?.createdAt && new Date(post?.createdAt).getHours()}:
                {post?.createdAt && new Date(post?.createdAt).getMinutes() < 10
                  ? "0"
                  : ""}
                {post?.createdAt && new Date(post?.createdAt).getMinutes()} pm
        </StyledP>
        <StyledP size={14} color="#B793FF" bold={600}>
          Postou
        </StyledP>
      </div>
    </UserInfo>

    <PostContainer height={height} >
      <p>{post?.body}</p>
    </PostContainer>

    {/* <HighlightMusicContainer
      style={{ height: "7rem", width: "70%", margin: "0 auto" }}
    >
      <img
        style={{ borderRadius: "1rem" }}
        src={post?.album_url}
        alt="Capa do album do perfil"
      />
      <div>
        <p style={{ fontSize: "16px", fontWeight: 600 }}>
          {post?.music}
        </p>
        <p>{post?.album_artist}</p>
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
        <img onClick={(event) => handleLikePost(post!.id, event)} src={Like} alt="Icone de curtir" />
        <p>{post?.likeCount}</p>
      </div>
      <div>
      <img src={Comment} alt="Icone do grafico" />
        <p>{post?.commentCount}</p>
      </div>
      <div>
        <img width="1rem" src={Share} onClick={(event) => handleCopyToClipboard(post!.id, event)} alt="Icone  das notificações" />
        </div>
    </IconsContainer>

    {post?.email === loggedUser?.email ?
    <DetailContainer onClick={(event) => handleDeletePost(event, post!.id)}>
      <Trash/>
    </DetailContainer> :  ''}
    </PostContentContainerWrapper>
  )
}
