import React, { Component } from "react";

// Components
import PostsCard from "../Posts/PostsCard";

class HomePosts extends Component {
  render() {
    return (
      <section className="posts">
        <div className="container">
          <div className="posts_info">
            <h1 className="section_title wow fadeInDown" data-wow-duration="2s">
              Recent Posts
            </h1>
            <span
              className="section_underline wow zoomIn"
              data-wow-duration="2s"
            />
            <div className="row pt-3">
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePosts;
