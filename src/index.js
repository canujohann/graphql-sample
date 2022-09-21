const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const { getUserId } = require("./utils");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");

const fs = require("fs");
const path = require("path");

// 2
const resolvers = {
  Query,
  Mutation,
  User,
  Link,
};

// Mutation: {
//   // 2
//   post: (parent, args, context, info) => {
//     const newLink = context.prisma.link.create({
//       data: {
//         url: args.url,
//         description: args.description,
//       },
//     });
//     return newLink;
//   },
// };

// 3
const prisma = new PrismaClient();
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
