import {useGlobalContext} from '../context';
import '../App.css'
const Favorites=()=>{
  const {favorites,selectMeal, removeFromFavorites}=useGlobalContext()
  return<section className='favorites'>
    <div className="favorites-content">
    <h5>Favorites</h5>
      <div className="favorites-container">
        {favorites.map((favorite)=>{
     const{idMeal,strMealThumb:image}=favorite
    return <div key={idMeal} className="favorite-item" >
        <img src={image} className='favorites-img img'onClick={()=> selectMeal(idMeal,true)} />
    <button className='remove-btn' onClick={()=>{removeFromFavorites(idMeal)}}>Remove</button>
        </div>
    
        })}
      </div>
    </div>
   
  </section>
}
export default Favorites