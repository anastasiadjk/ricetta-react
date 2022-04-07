import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Table from './components/table';
import NavBar from './components/navBar';
import NotFound from './components/not-found';
import RecipeForm from './components/recipeForm';
import RecipePage from './components/recipePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/page/:id" component={RecipePage} />
          <Route path="/recipes/:id" component={RecipeForm} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Table} />
          <Redirect from="/ricetta" to='/' />
          <Redirect to='/not-found' />
        </Switch>
      </div>

    </>

  );
}

export default App;
