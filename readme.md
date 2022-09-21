# GraphQL tutorial

This tutorial is based on [howtographql](https://www.howtographql.com/).

Technologies stack :

- apollo server / client
- prisma (ORM for graphQL)
- sqlite

# How to run it locally

```
npm install
node src/index.js
```

Your graphQL server is running, and accessible with a nice UI on http://localhost:4000 !

> If you want to change the DB schema (prisma/schema.prisma), don't forget to run `npx prisma generate` and `npx prisma migrate` for fully migrating the new schema.
