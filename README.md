
# Shifa-Suk

# Table of Contents
* Description
* Dependencices Used
* Installation
* Queries Samples
* Questions

_Description_

An Ecommerce up for shopping and selling any kind of product using the stripe online payment system.It can be used by anyone or anystore of small sizes. The projectb is build for the fulfuilment of the serverside course.


_Technology Stack_

• Node • Express • socket.io • apollo-server-express • graphql • mongoose • passport • stripe • jsonwebtoken • multer • passport-jwt • passport-local • helmet • cors • fs • dotenv

_INSTALLATION_

• Fork this repo and clone to your computer. Next, 'cd server' then run 'npm install' to install all the dependencies listed in package.json file. if any problems try to trun 'npm audit fix'. and finaly run 'nodemon server.js'.



_Login_
   query loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }

_GET_CURRENT_USER_
  query {
    authUserProfile {
      username
      email
      id
    }
  }


_POST_BY_ID_
  query getPostById($id: ID!) {
    getPostById(id: $id) {
      id
      title
      description
      category
      price
      createdAt
      featureImage
      updatedAt
    }
  }

_GET_All_POSTS_ 
  query {
    getAllPosts {
      id
      title
      description
      price
      category
      featureImage
      createdAt
      updatedAt
    }
  }


_GET_USER_POSTS_ 
  query {
    getUserPosts {
      id
      title
      description
      price
      category
      featureImage
      createdAt
      updatedAt
    }
  }


_Get_Post_By_Category_
  query($category: String!) {
    getPostByCategory(category: $category) {
      id
      title
      description
      price
      createdAt
      featureImage
      updatedAt
    }
  }
  
 _CreateNewPost_
  mutation CreateNewPost(
    $title: String!
    $description: String!
    $price: String!
    $category: String!
    $featureImage: [Upload]!
    $id: ID!
  ) {
    createNewPost(
      newPost: {
        title: $title
        description: $description
        price: $price
        category: $category
        featureImage: $featureImage
        author: $id
      }
    ) {
      title
      description
      price
      category
      featureImage
    }
  }


_REGISTER_NEW_USER_ 
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      newUser: { username: $username, email: $email, password: $password }
    ) {
      token
      user {
        id
        username
        email
      }
    }
  }


_DELETE_POST_BY_ID_ 
  mutation deletePostById($id: ID!, $owner: ID!) {
    deletePostById(id: $id, owner: $owner) {
      message
      success
    }
  }


_EDIT_POST_BY_ID_
  mutation updatePost(
    $id: ID!
    $title: String
    $description: String
    $category: String
    $price: String
  ) {
    updatePost(
      post: {
        id: $id
        title: $title
        description: $description
        category: $category
        price: $price
      }
    ) {
      id
    }
  }



_QUESTIONS_
• If you have any questions, concerns or suggestions please feel free to contact me with the link below. GitHub: "nebiw@metropolia.fi"



<img src="payement.png" width="400">
<img src="store.png" width="400">
<img src="userproducts.png" width="400">
