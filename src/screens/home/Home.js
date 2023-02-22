import React from 'react';
import Header from "../../common/header/Header";
import 'C:/Users/22423/Downloads/BookMovieApp/BookMovieApp/src/screens/home/Home.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const items = [
  { img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Sanju_-_Theatrical_poster.jpg/220px-Sanju_-_Theatrical_poster.jpg', title: 'Sanju' },
  { img: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg', title: 'The Godfather' },
  { img: 'https://upload.wikimedia.org/wikipedia/en/b/b6/The_Revenant_2015_film_poster.jpg', title: 'The Revenant' },
  { img: 'https://upload.wikimedia.org/wikipedia/en/0/08/Annabelle_Creation.jpg', title: 'Annabelle: Creation' },
  { img: 'https://upload.wikimedia.org/wikipedia/en/c/cd/Shahid_Poster_%282013%29.jpg', title: 'Shahid' },
  { img: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg', title: 'The Dark Knight' }
];

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="UpComingMovie">
        <h2>Upcoming Movies</h2>
      </div>
      <div className='GridScroll'>
        <GridList cellHeight={160} cols={4}>
          {items.map((item) => (
            <GridListTile key={item.img}>
              <img src={item.img} alt={item.title} />
              <GridListTileBar title={item.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

export default HomePage;