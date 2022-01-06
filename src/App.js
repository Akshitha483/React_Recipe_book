import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react';
import Header from './components/header/Header';
import RecipeList from './components/recipeList/RecipeList';
import RecipeDetails from './components/recipeDetails/RecipeDetails';


function App() {
  const [showItem, setshowItem] = useState(false)
  const [item, setitem] = useState({})
  let getRecipe = (data) => {
    
    setitem(data);
    setshowItem(true);
  }
  return (
    <div className="App">
      <Router>
        <div className='row'>
          <Header />
          <br />
          <div className='col col-md-4' style={{ float: 'left'}}>
            <RecipeList getRecipe={getRecipe} />
          </div>
          <div className='col col-md-7' style={{ float: 'right'}} >
            {
              showItem ? <RecipeDetails item={item} /> : <div className='mt-3'>
                <h1 >Recipe Book</h1>
              </div>
            }
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
