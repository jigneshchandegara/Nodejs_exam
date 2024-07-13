import Register from './componet/Register'
import Login from './componet/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashbord from './componet/Dashbord'
import RecipeForm from './componet/RecipeForm'
import RecipeList from './componet/RecipeList';
import MYRecipes from './componet/MyRecipes';




function App() {

  
  let roleget =  JSON.parse(localStorage.getItem("user"));
  let role = roleget;
  if (role === "" || role ===null) {
    return (
      <Routes>
         <Route path="/" exact element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
         <Route path="/login" exact element={<Login />} />
 
      </Routes>
    );
  }

  return (
    <>
      <Dashbord />
      <Routes>
        <Route path="/recipeForm" exact element={<RecipeForm />} />
        <Route path="/recipeList" exact element={<RecipeList />} />
        <Route path="/myRecipes" exact element={<MYRecipes />} />
      </Routes>
    </>
  )
}

export default App
