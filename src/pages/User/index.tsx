import { useMutation, useQuery } from "@apollo/client";
import { useHistory, useParams } from "react-router";
import { MainContainer, PostsContainer, UserContainer } from "./style";
import { FIND_USER_BY_ID, FOLLOW_USER, GET_POST,} from "../../Graphql";
import { useContext, useEffect, useState } from "react";
import Perfil from "../../assets/PERFIL.png";
import { AnimationContainer, CenterContainer} from "../Feed/style";

import Sad from "../../assets/Sad.json";
import { Title } from "../Register/style";
import { Player } from "@lottiefiles/react-lottie-player";
import { AuthContext } from "../../context/Auth";
import jwt_decode from 'jwt-decode';
import toast from "react-hot-toast";
import PostContentContainer from "../../components/PostContentContainer";

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
  following: string[];
}

interface ParamsProps {
  id: string;
}

export default function User() {

  const {getTokenOnLocalStorage} = useContext(AuthContext)

  const token = getTokenOnLocalStorage('token')

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

  let [followUser] = useMutation(FOLLOW_USER, {errorPolicy: 'all'})

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

    if(followed){
      if(followed!.length > 0){
        setFollow(true)
      } else {
        setFollow(false)
      }
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
            <h6>{user?.following.length} Seguindo</h6>
          </div>
        </UserContainer>

        <PostsContainer>
        {posts.length > 0 ? (
            posts.map((post) => (
              <PostContentContainer postData={post} refetchPosts={refetchPosts} />
            ))
          ) : (
            <CenterContainer>
              <AnimationContainer style={{width: "100%" , justifyContent: "center"}} >
                <Title style={{color: "white"}} >{user?.name} não tem nenhum post</Title>
                <Player autoplay loop src={Sad} style={{ width: "150px" }} />
              </AnimationContainer>
            </CenterContainer>
          )}
      </PostsContainer>
    </MainContainer>     
  )
}
