import React, {useContext, useEffect, useState } from "react";
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
  IconsContainer,
} from "../Feed/style";
import { ReactComponent as Trash } from "../../assets/T.svg";
import Home from "../../assets/HOME.png";
import Notification from "../../assets/NOTIFICATION.png";
import Charts from "../../assets/CHARTS.png";
import Chat from "../../assets/CHAT.png";
import { useHistory, useParams } from "react-router";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_COMMENT, DELETE_COMMENT, GET_POST_BY_ID} from "../../Graphql";
import { Button } from "../../components/Button/style";
import toast from "react-hot-toast";
import PostContentContainer from "../../components/PostContentContainer";
import { AuthContext } from "../../context/Auth";
import jwt_decode from 'jwt-decode';

interface PostsProps {
  id: number;
  user_photo_url: string;
  username: string;
  createdAt: any;
  album_artist: string;
  music: string;
  album_url: string;
  body: string;
  likeCount:number;
  commentCount: number;
  email: string;
}

interface CommentsProps {
  id: number;
  body: string;
  username: string;
  email: string;
}

interface ParamsProps {
  id: string;
}

interface UserProps {
  name: string;
  email: string;
  id: string;
  followers: string[];
  following: string[];
}

export default function PostDetails() {
  const history = useHistory();

  const { id } = useParams<ParamsProps>();

  const {getTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage('token')

  const [loggedUser, setLoggedUser] = useState<UserProps>()
  
  const [post, setPost] = useState<PostsProps>();
  const [comments, setComments] = useState<CommentsProps[]>();
  const [commentBody, setCommentBody] = useState("");
  
  const { data, refetch } = useQuery(GET_POST_BY_ID, {
    variables: { postId: id },
  });

  const [createComment] = useMutation(CREATE_COMMENT, {
    errorPolicy: 'all'
  });

  const [deleteComment] = useMutation(DELETE_COMMENT, {
    errorPolicy: 'all'
  })

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

  async function handleDeleteComment(Commentid: number) {

    await deleteComment({
      variables: {
        postId: id,
        commentId: Commentid,
      },
    }).then(() => toast.success("Comentário deletado"));

    refetch();
  }

  useEffect(() => {
    refetch()
    if (data) {
      setPost(data.findPostById);
      setComments(data.findPostById.comments);
    }
  }, [data, refetch]);

  useEffect(() => {

    if(!token){
      history.push("/")
      return
    }

    const user: UserProps = jwt_decode(token)
    setLoggedUser(user)
  }, [history, token])

  return (
    <MainContainer>
      <LeftContainer>
        { post && <PostContentContainer postData={post} refetchPosts={refetch} returnToFeed />}
      </LeftContainer>
      <RightContainer>
        <TopContainer>
          <img src={Comment} alt="comentario" />
          <h1>Comentários</h1>
        </TopContainer>

        <WrapperContainer>
          {comments?.map((comment) => (
            <CommentsContainer key={comment.id}>
              <div>
                <h3>{comment.username}</h3>
                <p>{comment.body}</p>
              </div>
            
              {loggedUser?.email === comment.email &&
                <div className="ButtonContainer">
                  <Trash onClick={() => handleDeleteComment(comment.id)}/>
                </div>
              }
            </CommentsContainer>
          ))}
        </WrapperContainer>
          <CreatePostInputContainer style={{padding: '0'}} >
            <div>
              <textarea
                style={{minHeight: "0.5rem"}}
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                placeholder={"Faça um comentário!"}
              />
              <Button
                onClick={handleCreateComment}
                style={{ padding: "0.25rem", width: "20%" }}
              >
                Postar
              </Button>
            </div>
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
