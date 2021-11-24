// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { GraphQLClient, gql } from 'graphql'

const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphQLAPI, {
    headers:{
      authorization:`Bearer ${process.env}`
    }
  })
}
