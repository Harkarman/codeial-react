import { UPDATE_POSTS } from "./actionTypes";

export function fetchPosts() {
  return (dispatch) => {
    const url =
      "http://codeial.codingninjas.com:5000/api/v2/posts?page=1&limit=5";
    console.log("request sent");
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}