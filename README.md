
# Shifa-Suk

Table of Contents
Description
Dependencices Used
Installation
Queries Samples
Questions

Description

An Ecommerce up for shopping and selling any kind of product using the stripe online payment system.It can be used by anyone or anystore of small sizes. The projectb is build for the fulfuilment of the serverside course.


Technology Stack

TECHNOLOGY USED
• Node • Express • socket.io • apollo-server-express • graphql • mongoose • passport • stripe • jsonwebtoken • multer • passport-jwt • passport-local • helmet • cors • fs • dotenv

INSTALLATION
• Fork this repo and clone to your computer. Next, 'cd server' then run 'npm install' to install all the dependencies listed in package.json file. if any problems try to trun 'npm audit fix'. and finaly run 'nodemon server.js'.



link to heroku: https://e-comm-magasin.herokuapp.com/ note jelastic might be sleeping!!


Queries
note! token is required since all endpoints are protected. so login and use bearer token in header!

Login
    query{
            login(
                username:String!,
                 password:String!
                 )
        {
           id
            username
             token
              Verified
            }
        }
Register
      mutation{
            AddClient(
                username:String!,
                 password:String!,
                  Email:String!
                  )
        {
         id
         username
        }
        }
GetBidings
      query {
      GetBidings {
        id
        Title
        Initialprice
        Images
        participants
        Owner {
          username
        }

      }
    }
-CreateBiding

     mutation {
          AddBiding(
            Title: String!
            Initialprice: Int
            Images: String
            Owner: ID!
             
          ) {
            Title
          }
        }
-GetBidingByID

  	   query {
            GetBidingByID(id:ID!) {
              id
              Title
              Initialprice
              Images
              Owner {
                username
              }
              
            }
          }
-GetAllCategories

    query{
                GetCategories{
                    Name
                     TotalItems
                      Images
                    }
                }

-DeleteFavourite

  mutation {
        DeleteFavourite(id:ID!) {
              id
        }
      }
-GetClientFavourites

query {
                GetUserFavourites(id: ID! ) {
                  id
                  Products {
                    Title
                    Price
                    Images
                  }
                }
              }
-AddFavourite

    mutation {
            AddFavourites(
              Owner: ID!
              Products: ID!
            ) {
              id
              Owner {
                username
              }
              Products {
                Title
              }
            }
          }
-GetProductsByCategory

    query{
              GetProductsByCategory(Category:String!){
                id
                Title
                  Price
                  Images
                }
              }
-GetOwnProducts

    query {
              GetProductsByClient(id: ID! ) {
              
                id
                Title
                Price
                Images
                OnStore
                Quantity
                Description
                
                CodePromo {
                  id
                  Expiry
                  Percentage
                  Code
                }
              }
            }
-ModifyProduct

  mutation {
        UpdateProduct(id: ID!,Title:String!, Price: Int!, Description:String!, Quantity: Int! ) {
          id
          Title
           
        }
      }
-DeleteProduct

  mutation {
          DeleteProducts(id: ID!){
          id
          }
        }
-ADDProduct

    
   mutation {
          AddProduct(
            Title: String
            Price: Int
            Category: String
            Description: String
            Quantity: Int
            CodePromo: String
            Owner: ID!
            Images: String!
          ){
          id 
          Title
          OnStore
          }
        }
-AddCodePromo

  mutation{
            AddDiscount(
              Percentage:Int,
               Code:String,
               Expiry: String          form of 'YYYY/MM/dd'
                )
                {
                  id
                  Expiry
                }
              }
-ModifyUser

    mutation {
    UpdateClient(
      id: ID!
      username: String
      Email: String
    ) {
      id
      username
      Email
      Joined
    }
  }
-GetUserById

    query{
        GetClientById(
          id:ID!
          ){
            id
             username
              Email
               Totalproducts
                Joined
                 Verified
                  ClientLevel
                }
              }
-GetProductById

  query{
          GetProductbyID( 
              id:ID!
              ){
                  id
                   Title
                    OnStore 
                     Owner{
                         username
                         Verified
                        } 
                      Price  
                       Images
                        Description
                        Quantity
                        
                    }
                }
QUESTIONS
• If you have any questions, concerns or suggestions please feel free to contact me with the link below. GitHub: "snoopafr@gmail.com"



<img src="payement.png" width="400">
<img src="store.png" width="400">
<img src="userproducts.png" width="400">
