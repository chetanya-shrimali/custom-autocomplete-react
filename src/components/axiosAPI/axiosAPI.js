import axios from "axios";
import { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/posts
const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

function AxiosAPI() {
  const [postsList, setPostsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getPosts = (pageNumber) => {
    return API.get(`posts?_page=${pageNumber}`).then((res) => {
      // setPostsList(res.data);
      // console.log(res);
      return res.data;
    });
  };

  const postPost = () => {
    const post = {
      title: "new title"
    };
    return API.post("posts", { post }).then((res) => console.log(res));
  };

  const deletePost = () => {
    return API.delete("posts/1").then((res) => console.log(res));
  };

  useEffect(() => {
    getPosts(pageNumber).then((res) => {
      console.log(res);
      setPostsList([...postsList, ...res]);
    });
  }, [pageNumber]);

  return (
    <div>
      <button
        onClick={() => {
          postPost();
        }}
      >
        Add post
      </button>
      <button
        onClick={() => {
          deletePost();
        }}
      >
        Delete post
      </button>
      <button
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        Next
      </button>
      <br />
      Posts List
      {postsList.map((post, index) => (
        <div key={index}>
          <strong>{post.id}</strong> {post.title}
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AxiosAPI;
