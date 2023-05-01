import React from "react";

const NewsCard = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <>
      <div>
        <div className="card my-4" style={{height:'30rem'}}>
          <div>
            <span
              className="badge rounded-pill bg-danger text-end "
              style={{
                display: "flex",
                justifyContent: "flexEnd",
                position: "absolute",
                right: "0",
              }}
            >
              {source.name}{" "}
            </span>
          </div>
          <div style={{maxHeight:'40%', overflow:'hidden'}}>
             <img src={imageUrl} className="card-img-top " alt="" style={{ maxWidth: '100%', objectFit: 'contain' }}/>
          </div>
         
          <div className="card-body d-flex flex-column ">
            <a
              href={newsUrl}
              className="rounded fw-bold text-decoration-none text-dark"
            >
              <h5 className="card-title fw-bold fs-5">{title}...</h5>
            </a>
            <p className="card-text fs-6 text-justify">{description}...</p>
            <p className="card-text fs-6 text-justify">
              By- {author} on {new Date(publishedAt).toUTCString()}
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark mt-auto rounded d-flex align-items-center justify-content-center"
              style={{ width: "6rem" ,position:'absolute',bottom:'15px'}}
            >
            Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;