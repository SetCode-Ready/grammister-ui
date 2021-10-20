import React, { useEffect, useState } from "react";
import {
  LeftContainer,
  MainContainer,
  RightContainer,
  TopContainer,
  BottomLeftContainer,
  CommentsContainer,
  WrapperContainer,
} from "./style";
import Comment from "../../assets/COMMENT.png";
import {
  CreatePostInputContainer,
  DetailContainer,
  HighlightMusicContainer,
  IconsContainer,
  PostContainer,
  PostContentContainer,
  PostImg,
  StyledP,
  UserInfo,
} from "../Feed/style";
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
import { useHistory, useParams } from "react-router";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_COMMENT, GET_POST_BY_ID } from "../../Graphql";
import { Button } from "../../components/Button/style";
import toast from "react-hot-toast";

interface PostsProps {
  id: Number;
  user_photo_url: string;
  username: string;
  createdAt: any;
  album_artist: string;
  music: string;
  album_url: string;
  body: string;
}

interface CommentsProps {
  id: number;
  body: string;
  username: string;
}

interface ParamsProps {
  id: string;
}

export default function PostDetails() {
  const history = useHistory();

  const { id } = useParams<ParamsProps>();

  const { data, refetch } = useQuery(GET_POST_BY_ID, {
    variables: { postId: id },
  });

  const [post, setPost] = useState<PostsProps>();
  const [comments, setComments] = useState<CommentsProps[]>();
  const [commentBody, setCommentBody] = useState("");

  const [createComment] = useMutation(CREATE_COMMENT);

  async function handleCreateComment() {
    if (commentBody === "") {
      toast.error("Digite algo antes de comentar!");
      return;
    }

    await createComment({
      variables: {
        postId: id,
        body: commentBody,
      },
    });

    refetch();
    setCommentBody("");
  }

  useEffect(() => {
    console.log(data);
    if (data) {
      setPost(data.findPostById);
      setComments(data.findPostById.comments);
    }
  }, [data]);

  return (
    <MainContainer>
      <LeftContainer>
        <PostContentContainer style={{ width: "100%", height: "100%" }}>
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
                postou
              </StyledP>
            </div>
          </UserInfo>

          <PostContainer>
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
              height: "6.6rem",
              width: "65%",
              margin: " 1rem auto",
            }}
          >
            <img
              style={{ width: "4rem", height: "4rem" }}
              src={Like}
              alt="Icone de like"
            />
            <img
              style={{ width: "4rem", height: "4rem" }}
              src={New_Repost}
              alt="Icone do chat"
            />
            <img
              style={{ width: "4rem", height: "4rem" }}
              src={Comment}
              alt="Icone de conversa"
            />
            <img
              style={{ width: "4rem", height: "4rem" }}
              src={Share}
              alt="Icone de compartilhamento"
            />
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
            <CommentsContainer key={comment.id}>
              {/* <img className="User" src={comment.photo_url} alt="foto do usuário" /> */}
              <div>
                <h3>{comment.username}</h3>
                <p>{comment.body}</p>
              </div>

              <div className="ButtonContainer">
                <img src={Like} alt="Icone de like" />
                <img src={Share} alt="Icone de compartilhamento" />
              </div>
            </CommentsContainer>
          ))}
        </WrapperContainer>
          <CreatePostInputContainer>
            <p>Comente</p>
            <input
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              type="text"
            />
            <Button
              onClick={handleCreateComment}
              style={{ padding: "0.25rem", width: "20%" }}
            >
              Postar
            </Button>
          </CreatePostInputContainer>
      </RightContainer>
      <BottomLeftContainer>
        <IconsContainer
          style={{
            width: "100%",
            height: "100%",
            marginTop: "0",
            justifyContent: "space-evenly",
          }}
        >
          <img
            onClick={() => history.push("/feed")}
            style={{ width: "4rem", height: "4rem" }}
            src={Home}
            alt="Icone da home"
          />
          <img
            style={{ width: "4rem", height: "4rem" }}
            src={Chat}
            alt="Icone do chat"
          />
          <img
            style={{ width: "4rem", height: "4rem" }}
            src={Charts}
            alt="Icone do grafico"
          />
          <img
            style={{ width: "4rem", height: "4rem" }}
            src={Notification}
            alt="Icone das notificações"
          />
        </IconsContainer>
      </BottomLeftContainer>
    </MainContainer>
  );
}
