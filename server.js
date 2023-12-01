import { ApolloServer, gql } from "apollo-server";

let tweets = [
    {
        id: "1",
        text: "firstOne!",
    },
    {
        id: "2",
        text: "secondOne!",
    }
]

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String
    }
    type Tweet {
        id: ID!
        text: String!
        author: User
    }
    type Query {
        allTweets: [Tweet!]!
        tweet(id: ID!): Tweet
    }
    type Mutation { #user가 보낸 data를 Mutation 하면 Mutation Type임 => DB, ... [POST, PATCH, DELETE]
        postTweet(text: String!, userId: ID!): Tweet!
        deleteTweet(id: ID!): Boolean!
    }
`;

const resolvers = {
    Query: {
        allTweets() {
            return tweets;
        },
        tweet(_, {id}) {
            return tweets.find(tweet => tweet.id === id)
        }
    },
    Mutation: {
        postTweet(_, {text, userId}) { 
            const newTweet = {
                id: tweets.length + 1,
                text, 
            };
            tweets.push(newTweet);
            return newTweet;
        },
        deleteTweet(_, { id }) {
            const tweetIndex = tweets.findIndex(tweet => tweet.id === id);
            if (tweetIndex === -1) return false;
        
            tweets.splice(tweetIndex, 1);
            return true;
        }
        
    }

}

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url})=>{
    console.log(`Running on ${url}`)
})