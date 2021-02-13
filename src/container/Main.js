import "container/main.scss";
import Icon from "components/main/Icon";
import NowShowingTop from "components/main/NowShowingTop";
import NowShowingMovie from "components/main/NowShowingMovie";
import Subtitle from "components/main/Subtitle";
import CategoryMenu from "components/main/CategoryMenu";
import CategoryMovie from "components/main/CategoryMovie";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-top">
        <div className="left">
          <NowShowingTop />
        </div>
        <div className="right">
          <Icon icon="https://plchldr.co/i/24x24" />
          <Icon icon="https://plchldr.co/i/24x24" />
        </div>
      </div>
      <div className="main-movie">
        <NowShowingMovie
          moviePoster="https://plchldr.co/i/700x350"
          movieTitle="Shazam!"
          movieYear="2019"
          movieCategory="Action"
          movieRating="8.5"
          movieRatingAmount="341,611"
          movieDuration="143 min"
          movieAgeRating="PG-13"
        />
        <NowShowingMovie
          moviePoster="https://plchldr.co/i/500x250"
          movieTitle="Shazam!"
          movieYear="2019"
          movieCategory="Action"
          movieRating="8.5"
          movieRatingAmount="341,611"
          movieDuration="143 min"
          movieAgeRating="PG-13"
        />
        <NowShowingMovie
          moviePoster="https://plchldr.co/i/500x250"
          movieTitle="Shazam!"
          movieYear="2019"
          movieCategory="Action"
          movieRating="8.5"
          movieRatingAmount="341,611"
          movieDuration="143 min"
          movieAgeRating="PG-13"
        />
        <NowShowingMovie
          moviePoster="https://plchldr.co/i/500x250"
          movieTitle="Shazam!"
          movieYear="2019"
          movieCategory="Action"
          movieRating="8.5"
          movieRatingAmount="341,611"
          movieDuration="143 min"
          movieAgeRating="PG-13"
        />
      </div>
      <div className="browse-by-category">
        <Subtitle categoryTitle="Browse by category" />
        <div className="category-menu">
          <CategoryMenu menu="Action" />
          <CategoryMenu menu="Adventure" />
          <CategoryMenu menu="Fantasy" />
          <CategoryMenu menu="Romance" />
        </div>
        <div className="category-movie">
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
        </div>
      </div>

      <div className="top-rated">
        <Subtitle categoryTitle="Top Rated" />
        <div className="category-movie">
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
          <CategoryMovie
            moviePoster="https://plchldr.co/i/175x250"
            movieTitle="Avengers: EndGame"
            movieYear="2019"
            movieCategory="Action"
            movieRating="8.5"
            movieRatingAmount="341,611"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
