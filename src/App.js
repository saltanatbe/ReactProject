import { useState } from "react";
import PostList from "./components/postlist/PostList";
import MyButton from "./UI/buttons/MyButton";
import MyInput from "./UI/input/MyInput";
function App() {
  //count var
  //setState function to change the state
  //the default value is 0

  const [posts, setPosts] = useState([
    { id: 1, name: "first", description: "desc first" },
    { id: 2, name: "second", description: "desc second" },
    { id: 3, name: "third", description: "desc third" },
  ]);
  const [title, setTitle] = useState("");
  const addNewPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="Name of the thing"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput type="text" placeholder="Description of the thing" />
        <MyButton onClick={addNewPost}>this</MyButton>
      </form>

      <PostList posts={posts} title="TO DO LIST" />
    </div>
  );
}

export default App;
