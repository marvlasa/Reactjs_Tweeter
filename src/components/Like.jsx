import React from "react";
import "./Like.css";
import { useSelector } from "react-redux";

function Like({ item, updateHomeReload }) {
  const user = useSelector((state) => state.userReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/like", {
      method: "POST",
      body: JSON.stringify({
        tweetId: item._id,
        user: user.userId,
      }),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateHomeReload();
      });
  };
  // function setHeartRed(itemId) {
  //   if (item.likes.length === 1) {
  //     document.getElementById(itemId).classList.remove("redHeart");
  //   } else if (item.likes.length === 0) {
  //     document.getElementById(itemId).classList.add("redHeart");
  //   }
  // }
  // todo: change hardcode id for userId when login is made
  const active = item.likes.includes(user.userId);

  return (
    <form onSubmit={handleSubmit} className="form-like">
      <input type="hidden" name="tweetId" value={item.author.id} />
      <button
        className="tweet-footer-btn button-like"
        type="submit"
        // onClick={() => setHeartRed(item._id)}
      >
        <i
          className={
            active ? "octicon octicon-heart redHeart" : "octicon octicon-heart"
          }
          aria-hidden="true"
          id={item._id}
        ></i>
        <span> {item.likes.length}</span>
      </button>
    </form>
  );
}

export default Like;
