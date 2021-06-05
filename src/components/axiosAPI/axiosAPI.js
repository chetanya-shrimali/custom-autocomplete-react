import axios from "axios";
import { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/posts
const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/"
});

function AxiosAPI() {
  const [postsList, setPostsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getPosts = async (pageNumber) => {
    const res = await API.get(`posts?_page=${pageNumber}`);
    return res.data;
  };

  const postPost = async () => {
    const post = {
      title: "new title"
    };
    const res = await API.post("posts", { post });
    console.log(res);
    return res;
  };

  const deletePost = async () => {
    const res = await API.delete("posts/1");
    console.log(res);
    return res;
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
