import axios from "axios";
import { useEffect, useState } from "react";

// https://jsonplaceholder.typicode.com/posts
const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "X-Auth-Key": "token123"
  }
});

function AxiosAPI() {
  const [postsList, setPostsList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getPosts = async (pageNumber) => {
    try {
      let params = {
        _page: pageNumber
      };
      console.log({ params });
      const res = await API.get("posts", { params });
      console.log(res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const postPost = async () => {
    const params = {
      title: "new title"
    };
    const res = await API.post("posts", params);
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
      setPostsList((p) => [...p, ...res]);
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
