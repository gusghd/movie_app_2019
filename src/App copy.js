import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",

  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 4.7  }
];

function Food({name, picture, rating}) {
  return (<div><h1>{name}</h1><h4>{rating}</h4><img src={picture} alt={name}/></div>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

class App extends React.Component {

  state =  {
    isLoading: true,
    movies: []
  };

  // getMovies = async () => {
  //   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  // }

  // componentDidMount() {
  //   console.log('rendered');
  //   this.getMovies();
  // }

  // componentDidUpdate() {
  //   console.log('updated');
  // }

  render() {
    console.log('rendering');
    const {isLoading} = this.state;
    return (
    <div>
      <h1>{isLoading ? 'Loading...' :  'we are ready'}</h1>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} key={dish.id} />)}
    
    </div>
    )
  }
}

export default App;
