// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from 'graphql-request'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphCMSToken = process.env.GRAPHCMS_TOKEN

export default async function comments(req, res) {

  const graphQLClient = new GraphQLClient(graphQLAPI, {
    headers:{
      authorization:`Bearer ${graphCMSToken}`
    }
  })

  const query = gql`
    mutation CreateComment(
      $nameValues: String!, 
      $emailValues: String!,
      $commentValues: String!,
      $slug: String!
    ) {
      createComment(data: {
        name: $nameValues,
        email: $emailValues,
        comment: $commentValues,
        post: {
          connect: {
            slug: $slug
          }
        }
      }) {
        id
      }
    }
  `
  try {
    const result = await graphQLClient.request(query, {
      name: req.body.name,
      email: req.body.email,
      comment: req.body.comment,
      slug: req.body.slug
    })
    return res.status(200).send(result)
  } catch (error) {
      console.log(error.message)
  }
  
}
