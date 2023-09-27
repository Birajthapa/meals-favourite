import {useState} from 'react';
import {useGlobalContext} from '../context'
import '../App.css'

const Search=()=>{
  const [text, setText]=useState('');
  const {setSearchTerm,fetchRandomMeals} = useGlobalContext()

  function handleChange(e){
    setText(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    if(text){
      setSearchTerm(text)
      
    }
  }
  const handleRandomMeal=()=>{
     setSearchTerm('')
      setText('')
    fetchRandomMeals()
  }
  return(
    <header className="search-container">
      <form onSubmit={handleSubmit}>
      <input placeholder='Type your favorite meal' className='form-input' type='text' value={text} onChange={handleChange} />
      <button className="btn" type="submit">Search</button>
      <button className="btn btn-hipster" type="button" onClick={handleRandomMeal}>Suprise Me!</button>
      </form>
      
    </header>
  )
}
export default Search; 