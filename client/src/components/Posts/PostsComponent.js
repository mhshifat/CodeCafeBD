import React, { Component } from "react";

import PostsCard from "./PostsCard";

class PostsComponent extends Component {
  componentWillMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <section className="posts">
        <div className="row pl-2 pr-2">
          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="0s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".2s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".4s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".6s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay=".8s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1.2s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>

          <div
            className="card ov mb-3 wow zoomIn"
            data-wow-duration="2s"
            data-wow-delay="1.4s"
          >
            <PostsCard
              icon="fab fa-wordpress"
              category="WordPress"
              image="sample.jpg"
              title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>
        </div>
      </section>
    );
  }
}

export default PostsComponent;
