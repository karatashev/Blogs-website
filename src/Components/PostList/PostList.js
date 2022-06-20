import Post from "../Post/Post";
import "./PostList.css";
import { useState, useEffect } from "react";

const PostList = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPostData(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <section>
      <h2>Posts</h2>
      <div className="posts">
        {postData.length > 0 &&
          postData.map((post) => (
            <Post key={post.id} title={post.title} description={post.body} />
          ))}
        {postData.length === 0 && <h3>Loading...</h3>}
      </div>
    </section>
  );
};

export default PostList;
