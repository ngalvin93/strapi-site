import React from "react";
import Articles from "../../components/Articles";
import HomeSlideshow from  '../Slideshow'
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/article/articles";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <HomeSlideshow />
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
