import "./PostItem.css"

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post-content">
                <p>{props.post.name}</p>
                <p>{props.post.description}</p>
            </div>
            <div className="post-btn">
                <button className="delete-btn">delete</button>
            </div>
        </div>
    );
};
export default PostItem;