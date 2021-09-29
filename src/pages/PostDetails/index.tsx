import React, { useEffect, useState } from 'react'
import { LeftContainer, MainContainer, RightContainer, TopContainer, BottomLeftContainer, CommentsContainer, WrapperContainer } from './style'
import Comment from "../../assets/COMMENT.png";
import { DetailContainer, HighlightMusicContainer, IconsContainer, PostContentContainer, PostImg, StyledP, UserInfo } from '../Feed/style';
import Perfil from "../../assets/PERFIL.png";
import Spotify from "../../assets/PLAYSPOTIFY.png";
import Album from "../../assets/ALBUMVIEW.png";
import Share from "../../assets/SHARE.png";
import New_Repost from "../../assets/NEW POSTORREPOST.png";
import Like from "../../assets/LIKE.png";
import { ReactComponent as Clock } from "../../assets/CLOCK.svg";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";
import Home from "../../assets/HOME.png";
import Notification from "../../assets/NOTIFICATION.png";
import Charts from "../../assets/CHARTS.png";
import Chat from "../../assets/CHAT.png";
import { useHistory } from 'react-router';

interface PostsProps {
	id: Number;
  user_photo_url: string;
  name: string;
  time: string;
  album_artist: string;
  music: string;
  album_url: string;
}

interface CommentsProps {
  id: number;
  photo_url: string;
  author: string;
  content: string
}

export default function PostDetails() {

  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Post: PostsProps = {
			id: 1,
      user_photo_url:
        "https://media-exp1.licdn.com/dms/image/C4E03AQE2XF1eRO5WVQ/profile-displayphoto-shrink_200_200/0/1618354907753?e=1636588800&v=beta&t=vlrIgUNjVPqti6mE9GfcDULlA3WbsPIyRpuApOmgbQo",
      name: "Kaue Cavalcante",
      time: "00:00",
      album_artist: "single - Sidoka",
      music: "não me sinto mal mais ",
      album_url:
      "https://i.scdn.co/image/ab67616d0000b2731978b272d0d81c0787744e81",
  }

  const Comments: CommentsProps[] = [
    {
      id: 1,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
    {
      id: 2,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
    {
      id: 3,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
    {
      id: 4,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
    {
      id: 5,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
    {
      id: 6,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
    {
      id: 7,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
    {
      id: 8,
      photo_url: "https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg",
      author: "Emanuel",
      content: "música muito maneira mano! Vou até salvar aqui"
    },
  ]

  const [post, setPost] = useState<PostsProps>()
  const [comments, setComments] = useState<CommentsProps[]>()

  useEffect(() => {
    setPost(Post)
    setComments(Comments)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainContainer>
      <LeftContainer>
      <PostContentContainer style={{width: "100%", height: "100%"}} >
                <UserInfo>
                  <PostImg src={Perfil} alt="foto do usuário" />
                  <div>
                    <StyledP size={18} color="#f2f2f2" bold={600}>
                      {post?.name}
                    </StyledP>
                    <StyledP size={10} color="#B793FF" bold={600}>
                      {" "}
                      <Clock /> em {post?.time} pm
                    </StyledP>
                    <StyledP size={14} color="#B793FF" bold={600}>
                      alterou sua música do momento
                    </StyledP>
                  </div>
                </UserInfo>

                <HighlightMusicContainer
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
                </HighlightMusicContainer>

                <IconsContainer
                  style={{
                    height: "6.6rem",
                    width: "65%",
                    margin: " 1rem auto",
                  }}
                >
                  <img style={{width: "4rem", height: "4rem"}} src={Like} alt="Icone de like" />
                  <img style={{width: "4rem", height: "4rem"}} src={New_Repost} alt="Icone do chat" />
                  <img style={{width: "4rem", height: "4rem"}} src={Comment} alt="Icone de conversa" />
                  <img style={{width: "4rem", height: "4rem"}} src={Share} alt="Icone de compartilhamento" />
                </IconsContainer>

                <DetailContainer>
                  <Arrow />
                </DetailContainer>
              </PostContentContainer>
      </LeftContainer>
      <RightContainer>
        <TopContainer>
          <img src={Comment} alt="comentario" />
          <h1>Comentários</h1>
        </TopContainer>

        <WrapperContainer>
          {comments?.map((comment) => (
            <CommentsContainer key={comment.id} >
              <img className="User" src={comment.photo_url} alt="foto do usuário" />
              <div>
                <h3>{comment.author}</h3>
                <p>{comment.content}</p>
              </div>

              <div className="ButtonContainer" >
                <img src={Like} alt="Icone de like" />
                <img src={Share} alt="Icone de compartilhamento" />
              </div>
            </CommentsContainer>
          ))}
        </WrapperContainer>
      </RightContainer>
      <BottomLeftContainer>
          <IconsContainer style={{width: "100%", height: "100%", marginTop: "0", justifyContent: "space-evenly"}} >
            <img onClick={() => history.push('/feed')} style={{width: "4rem", height: "4rem"}} src={Home} alt="Icone da home" />
            <img style={{width: "4rem", height: "4rem"}} src={Chat} alt="Icone do chat" />
            <img style={{width: "4rem", height: "4rem"}} src={Charts} alt="Icone do grafico" />
            <img style={{width: "4rem", height: "4rem"}} src={Notification} alt="Icone das notificações" />
          </IconsContainer>
      </BottomLeftContainer>
    </MainContainer>
  )
}
