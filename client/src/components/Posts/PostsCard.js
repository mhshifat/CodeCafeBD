import React from "react";
import { Link } from "react-router-dom";

const PostsCard = props => {
  return (
    <div className="posts_card">
      <span className="posts_card_cat">
        <i className={props.icon} /> {props.category}
      </span>
      <div className="posts_card_image">
        <img
          src={`/images/projects/${props.image}`}
          alt={props.title}
          className="posts_card_image_img"
        />
      </div>
      <div className="posts_card_content">
        <h1 className="posts_card_content_title">{props.title}</h1>
        <Link to="/posts/1" className="posts_card_content_link">
          Read more
        </Link>
        <span className="posts_card_content_like">
          <i className="fas fa-heart" /> 3
        </span>
        <span className="posts_card_content_comment">
          <i className="fas fa-comment" /> 3
        </span>
      </div>
    </div>
  );
};

export default PostsCard;
