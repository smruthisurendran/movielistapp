import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContent } from "../redux/movieSlice";

import CardItem from "../components/MovieListCard/CardItem";
import "./MovieContent.css";
import NavBar from "../components/NavBar/NavBar";
import NoContent from "../components/NoContent/NoContent";

const MovieContent = () => {
  const { content, currentPage, hasMore, status, searchQuery, forbiddenPages } =
    useSelector((state) => state.content);
  const dispatch = useDispatch();
  const hasFetch = useRef(false);

  useEffect(() => {
    if (!forbiddenPages && !hasFetch.current && currentPage === 1 && !status) {
      dispatch(loadContent(currentPage));
      hasFetch.current = true;
    }
    const loadMoreData = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 200 &&
        hasMore &&
        !status &&
        !forbiddenPages
      ) {
        dispatch(loadContent(currentPage));
      }
    };
    window.addEventListener("scroll", loadMoreData);
    return () => window.removeEventListener("scroll", loadMoreData);
  }, [dispatch, currentPage, hasMore, status, forbiddenPages]);

  const filteredMovies = content?.filter((movie) =>
    movie.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="movieContentContainer">
      <NavBar />
      <div id="content-container">
        {filteredMovies?.map((item, index) => (
          <div key={`${item.name}-${index}`} id="card-content-container">
            <CardItem
              index={index}
              itemName={item.name}
              imageURL={item["poster-image"]}
            />
          </div>
        ))}
        {!filteredMovies?.length && <NoContent />}
      </div>
    </div>
  );
};
export default MovieContent;
