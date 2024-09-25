---
slug: nextjs-mongodb-connection
title: NextJS MongoDB Connection
authors: satalesmana
# tags: [facebook, hello, docusaurus]
---

## Next JS MongoDB Connection: 8 Easy Steps
Next.JS and MongoDB are an excellent combination to help you get your next application up and running. A Next JS MongoDB connection will make it easy to move data from the database and render it on the application. In this article, we will discuss the steps for Next JS MongoDB Connection. A brief introduction to Next JS and MongoDB is also presented. 

### What is Next.js?
Next.js is a popular open-source React framework for building web applications. It is designed to simplify creating robust and efficient React applications by providing a set of conventions and tools. Next.js offers server-side rendering (SSR), automatic code splitting, and an intuitive file-based routing system.

### What is MongoDB?
MongoDB is a popular open-source, cross-platform, document-oriented NoSQL database management system. It is classified as a NoSQL (non-relational) database because it stores data in flexible, JSON-like documents with dynamic schemas, rather than using tables and rows like in traditional relational databases.

### Steps for Next Js MongoDB Connection
We will be building a Next.js app that retrieves data from MongoDB. The app will also allow us to insert data from Next.js into MongoDB. The following steps will guide you through establishing the Next JS MongoDB Connection.

#### Step 1: Create a MongoDB Atlas Account
The Next JS MongoDB connection is made easy by MongoDB Atlas. It lets you create and manage MongoDB databases in the cloud through a graphical user interface. 

We need to create a new database within an existing MongoDB cluster. You need to have a MongoDB Atlas account for this. If not, sign up for one [here](https://www.mongodb.com/atlas). 

- Inside MongoDB, create a new database within a cluster.
- Inside that database, create a collection.
- We will give the database the name “nextjs-mongodb-demo” and the collection the name “posts.” 
- Also, create a collection of “users” and add sample data with details like name, phone number, email, etc. You can then connect to the cluster right from MongoDB Atlas. 

#### Step 2: Install MongoDB Package
We should now install the MongoDB package to use MongoDB in our Next.js app. We will install version 3.5.9 of the package as shown below:

```bash
npm i mongodb@3.5.9
```

You should copy a connection string from MongoDB Atlas. You can find it under the “Connect Instructions” button of MongoDB Atlas. It should be something like this:

```bash
MONGODB_URI= "mongodb+srv://nicky234:jc7ap0dFcwvZdo09@cluster0.7cpxz.mongodb.net?retryWrites=true&w=majority"
```

In the above connection string, ``nicky234`` is the username, while ``jc7ap0dFcwvZdo09`` is the password. 


#### Step 3: Next.Js connect to MongoDB Integration
Create a new file inside the lib directory and give it the name mongodb.js. Our goal is to establish our Next js MongoDB connection. Add the following code to the file:

```js
// mongodb.js

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
```

#### Step 4: Access MongoDB
The Next.js framework makes it easy for users to create API endpoints and use them to access databases. 

Create a new file inside the pages/api directory and give it the name posts.js. We will define the POST and GET methods to insert and fetch posts inside the file. This is possible since we have made the Next js MongoDB connection. 

```js
// posts.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPost = await db.collection("posts").insertOne(bodyObject);
      res.json(myPost.ops[0]);
      break;
    case "GET":
      const allPosts = await db.collection("allPosts").find({}).toArray();
      res.json({ status: 200, data: allPosts });
      break;
  }
}
```

#### Step 5: Fetch the Posts
We can now call the API endpoint and retrieve the posts from the MongoDB database. This means we make a GET request to the API endpoints as shown below:

```js
export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}
```



