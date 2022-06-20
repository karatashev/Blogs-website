import "./Post.css"

const Post = ({title, description}) => {
  return (
    <div className="post-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
 
export default Post;