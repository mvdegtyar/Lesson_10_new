import Movie from '../../components/Movie';
import MovieList from '../../components/MovieList';
import Alert from '../../components/Alert';
import AlertWithChildren from '../../components/AlertWithChildren';


import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Movies</h1>
      </header>
      <main>
        {/* <Movie></Movie> */}
        {/* <MovieList></MovieList> */}
        <Alert type='default' title='Info' message='Hello from React'></Alert>
        <Alert type='success' title='Seccess' message='Hello from React'></Alert>
        <AlertWithChildren type='warning' title='Warning'>
          <div>
            <div>Attention!</div>
            <div>Reservaion is about to expire</div>
          </div>
        </AlertWithChildren>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
