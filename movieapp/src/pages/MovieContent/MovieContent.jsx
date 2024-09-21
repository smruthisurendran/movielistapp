import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadContent, setNavTitle } from "../../redux/movieSlice";
import CardItem from "../../components/MovieListCard/CardItem";
import NavBar from "../../components/NavBar/NavBar";
import NoContent from "../../components/NoContent/NoContent";
import { ROMANTIC_COMEDY, SCROLL_EVENT } from "../../core/utils/constant";
import "./MovieContent.css";

const MovieContent = () => {
	const {
		content,
		currentPage,
		hasMore,
		status,
		searchQuery,
		forbiddenPages,
	} = useSelector((state) => state.content);
	const dispatch = useDispatch();
	const hasFetch = useRef(false);
	const contentRef = useRef();

	useEffect(() => {
		dispatch(setNavTitle(ROMANTIC_COMEDY));
		//Fetch the first page on mount
		if (
			!forbiddenPages &&
			!hasFetch.current &&
			currentPage === 1 &&
			!status
		) {
			dispatch(loadContent(currentPage));
			hasFetch.current = true;
		}
		if (contentRef) {
			const element = contentRef.current;
			//To load more data while scrolling to bottom
			const loadMoreData = () => {
				//Detect when scrolled to the bottom
				if (
					element.clientHeight + element.scrollTop >=
						element.scrollHeight &&
					hasMore &&
					!status &&
					!forbiddenPages
				) {
					dispatch(loadContent(currentPage));
				}
			};

			//To add the scroll event listener
			element.addEventListener(SCROLL_EVENT, loadMoreData);
			//To cleanup the event listener on component unmount
			return () =>
				element.removeEventListener(SCROLL_EVENT, loadMoreData);
		}
	}, [dispatch, currentPage, hasMore, status, forbiddenPages]);

	//To filter the contents
	const filteredMovies = content?.filter((movie) =>
		movie.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div id="movieContentContainer">
			<NavBar />
			<div ref={contentRef} id="content-container">
				{filteredMovies?.length ? (
					filteredMovies?.map((item, index) => (
						<div
							key={`${item.name}-${index}`}
							id="card-content-container"
						>
							<CardItem
								index={index}
								itemName={item.name}
								imageURL={item["poster-image"]}
							/>
						</div>
					))
				) : (
					<NoContent />
				)}
			</div>
		</div>
	);
};
export default MovieContent;
