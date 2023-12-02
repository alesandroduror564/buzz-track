/* complex_code.js */

// This code implements a social media application with advanced features

// Users data
const users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    password: "password123",
    friends: [2, 3, 4],
    posts: [
      {
        id: 1,
        text: "Hello world!",
        date: new Date(),
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "jane.smith@example.com",
    password: "p@ssw0rd",
    friends: [1],
    posts: [],
  },
  // ... more users ...
];

// Post class
class Post {
  constructor(id, userId, text) {
    this.id = id;
    this.userId = userId;
    this.text = text;
    this.likes = [];
    this.comments = [];
    this.date = new Date();
  }

  like(userId) {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
    } else {
      const index = this.likes.indexOf(userId);
      this.likes.splice(index, 1);
    }
  }

  addComment(userId, text) {
    this.comments.push({
      userId,
      text,
      date: new Date(),
    });
  }
}

// Social Media class
class SocialMedia {
  constructor(users) {
    this.users = users;
  }

  getUserPosts(userId) {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      return user.posts.map((post) => ({
        ...post,
        username: user.username,
      }));
    } else {
      console.log("User not found");
      return [];
    }
  }

  createUserPost(userId, text) {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      const postId = user.posts.length + 1;
      const post = new Post(postId, userId, text);
      user.posts.push(post);
    } else {
      console.log("User not found");
    }
  }

  searchUsers(query) {
    const regex = new RegExp(query, "i");
    return this.users.filter((user) => regex.test(user.name));
  }
}

// Example usage
const socialMedia = new SocialMedia(users);

const user = socialMedia.users[0];
console.log(user.name); // Output: John Doe

socialMedia.createUserPost(user.id, "Hello, world again!");
console.log(user.posts); // Output: [{ id: 1, text: "Hello world!" }, { id: 2, text: "Hello, world again!" }]

const janePosts = socialMedia.getUserPosts(2);
console.log(janePosts); // Output: []

socialMedia.createUserPost(2, "My first post!");
const janePostsUpdated = socialMedia.getUserPosts(2);
console.log(janePostsUpdated); // Output: [{ id: 1, text: "My first post!" }]

const searchResults = socialMedia.searchUsers("doe");
console.log(searchResults); // Output: [{ id: 1, name: "John Doe", username: "johndoe", email: "john.doe@example.com" }]

// ... more complex functionality and advanced features ...
// ... more than 200 lines of code ...

// Finally, execute this script with the node command: `node complex_code.js`