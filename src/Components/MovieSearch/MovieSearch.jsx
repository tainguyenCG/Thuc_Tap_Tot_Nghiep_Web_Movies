import PropTypes from "prop-types";
import { useContext } from "react";
import { MovieContext } from "../context/MovieDetailContext";
import "./MovieSearch.css"; // Import file CSS

const MovieSearch = ({ data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);
  return (
    <div className="movie-search-container">
      <h2 className="movie-search-title">Kết quả tìm kiếm</h2>
      <div className="movie-grid">
        {data.map((item) => (
          <div
            key={item.id}
            className="movie-item"
            style={{
              backgroundImage: `url(${import.meta.env.VITE_IMG_URL}${item.poster_path})`,
            }}
            onClick={() => handleVideoTrailer(item.id)}
          >
            <div className="movie-overlay" />
            <div className="movie-info">
              <h3 className="movie-title">{item.name || item.title || item.original_title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MovieSearch;
