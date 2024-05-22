# TL Tech Blog Server

## Description
The TL Tech Blog Server is the backend for a technical blog platform. It provides APIs for managing blog posts, user authentication, comments, and user data.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/haristiks/TL_Tech_Blog_Server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd TL_Tech_Blog_Server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
1. Create a `.env` file based on the `.env.sample` provided.
2. Fill in the required environment variables.

## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. The server will be running on `http://localhost:8000`.

## API Endpoints

### Authentication
- `POST /api/auth/login` - Log in a user.
- `GET /api/auth/logout` - Log out a user.

### Users
- `POST /api/users/adduser` - Create a new user.
- `GET /api/users/allusers` - Retrieve all users.
- `GET /api/users/:id` - Retrieve a single user by ID.
- `PUT /api/users/:id` - Update a user by ID.
- `DELETE /api/users/:id` - Delete a user by ID.

### Blog Posts
- `POST /api/blogposts/create` - Create a new blog post.
- `GET /api/blogposts/allposts` - Retrieve all blog posts.
- `GET /api/blogposts/:id` - Retrieve a single blog post by ID.
- `PUT /api/blogposts/:id` - Update a blog post by ID.
- `DELETE /api/blogposts/:id` - Delete a blog post by ID.
- `GET /api/blogposts/user/:userId/posts` - Retrieve all blog posts by a user.

### Comments
- `POST /api/comments/addcomment` - Create a new comment.
- `GET /api/comments/allcomments` - Retrieve all comments.
- `GET /api/comments/:id` - Retrieve a single comment by ID.
- `PUT /api/comments/:id` - Update a comment by ID.
- `DELETE /api/comments/:id` - Delete a comment by ID.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License.

## Contact Information
For any inquiries, please contact haristiks at haristiks@gmail.com.

## Acknowledgements
Special thanks to all contributors and the open-source community.
