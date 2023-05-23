import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const NewsArea = (props) => {

  const Capitalize = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [totalResults, setTotalResults] = useState(0);

  
  const updateData = async () => {
    props.setProgress(0);

    const url = `/api?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);


    props.setProgress(100);
  }
  
  useEffect(() => {
    document.title = `${Capitalize(props.category)} - NewsMonk`;
    updateData(); 
    // eslint-disable-next-line
}, [])

  const fetchMoreData = async () => {
    setPage(page + 1);

    let url = `/api?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticle(article.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);



  }

  return (
   <>
  
      <h1 className="mt-5 pt-5 mb-4 text-center ">
        NewsMonk - Top {Capitalize(props.category)} Headlines
      </h1>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b><br/>
         
          </p>
        }
      >
        <div className="container">
        <div className="row">
          {article.map((element) => {
            return (
              <div className="col-md-4 " key={element.url}>
                <NewsCard
                  title={
                    element.title
                      ? element.title
                          .slice(0, 50)
                          .split(" ")
                          .slice(0, -1)
                          .join(" ")
                      : " "
                  }
                  description={
                    element.description
                      ? element.description
                          .slice(0, 100)
                          .split(" ")
                          .slice(0, -1)
                          .join(" ")
                      : " "
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/mars_core-sixteen_nine.jpg?VersionId=PveMqgBAZeE3MWU6sbcztFpfzY4XszrS"
                  }
                  newsUrl={element.url ? element.url : "www.google.com"}
                  author={element.author ? element.author : "Unknown"}
                  publishedAt={element.publishedAt}
                  source={element.source}
                />
              </div>
              
            );
          })}
        </div>
        </div>
      </InfiniteScroll>
   </>
  );
};

NewsArea.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
NewsArea.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default NewsArea;