import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation register($name: String!, $email: String!, $password: String!, $gender: String! $birthDate: String! ){
    register(registerInput: {name: $name, email: $email, password: $password, gender: $gender, birthDate: $birthDate}){
      name
    }
  }
`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id token
  }
}
`

export const GET_POST = gql`
  query {
  findAllPosts {
    id  username commentCount likeCount body createdAt
  }
}
`

export const GET_POST_BY_ID = gql`
  query findPostById($postId: ID!){
    findPostById(postId: $postId){
      likeCount email body createdAt username comments {
        body id username
      }
    }
  }
`

export const CREATE_POST = gql`
  mutation createPost($body: String!){
  createPost(body: $body) {
    body
  }
}  
`

export const CREATE_COMMENT = gql`
  mutation createComment($postId: String!, $body: String!) {
  createComment(postId: $postId, body: $body){
    id
  }
}
`

export const LIKE_POST = gql`
  mutation LikePostMutation($postId: ID!) {
  likePost(postId: $postId) {
    commentCount
  }
}
`
