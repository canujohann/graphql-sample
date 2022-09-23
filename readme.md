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

Your graphQL server is running, and accessible with a nice UI on http://localhost:4000 ! Some basic feature (authentication, pagination, etc.) are already implemented.

### Signup and get a token for using the API

```graphql
mutation {
  signup(name: "your user", email: "your-user@xxx.com", password: "graphql") {
    token
    user {
      id
    }
  }
}
```

![signup](/docs/signup.png)

### Add a new links to the list

```graphql
mutation {
  post(url: "www.mysite.org", description: "An awesome site") {
    id
  }
}
```

In the header :

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2MzkzODY3NX0.BZgs_WbzQSJn0MB1d_hKyCst-cvEir6fcoo_XDTrLi4"
}
```

![post new link](/docs/post.png)

### Retrieve links list

```
query {
  feed {
    count
    links {
      id
      description
      url
    }
  }
}
```

In the header :

```
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY2MzkzODY3NX0.BZgs_WbzQSJn0MB1d_hKyCst-cvEir6fcoo_XDTrLi4"
}
```

![get](/docs/get.png)

# Other

> If you want to change the DB schema (prisma/schema.prisma), don't forget to run `npx prisma generate` and `npx prisma migrate` for fully migrating the new schema.
