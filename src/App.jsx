import { useState,  useEffect} from 'react'
import './App.css'
/*  import MiniProject1 from './MiniProject1'
 */ import Header from './Header';
import AddItems from "./AddItems";
import SearchItem from './SearchItem'
import Content from './Content';
import reqOptions from './reqOptions';
import Footer from './Footer'; 

 function App() {
  const API_URL = 'http://localhost:3500/items';

   const [items ,setItems] = useState([]);
const [newItem, setNewItem] = useState('');
const [search, setSearch] = useState('');
const [loading,setLoading]=useState(true);

useEffect(()=>{
 const fetchItems = async () =>{
  try{
const response = await fetch(API_URL);
const listItems = await response.json();
setItems(listItems);
  }catch(err){
    console.log(err.stack);
  }finally{
    setLoading(false);
  }
 }
 setTimeout(
  ()=>{
 (async () => await fetchItems())();
  },2000
 )
},[]);


const addItem =async(item) =>{
const id = items.length ? Number(items[items.length - 1].id) + 1 : 1;  
const myNewItems = {id, checked: false, item };
  const listItems = [...items, myNewItems];
  setItems(listItems)

   const postOption = {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItems)
  }
  const result= await reqOptions(API_URL,postOption)
  if(result) setFetchError(result);
}

const handleCheck = async(id) => {
const listedItems = items.map((item)=> item.id===id? { ...item, checked: !item.checked}:item);
setItems(listedItems);

const myItem = listedItems.filter((item)=> item.id===id);
  const updateOption = {
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({checked: myItem[0].checked})
  };
  const reqUrl = `${API_URL}/${id}`;
  const result = await reqOptions(reqUrl, updateOption);
if(result)setFetchError(result);
}


const handleDelete = (id) =>{
   const listedItems = items.filter((item)=> item.id !==id);
setItems(listedItems)
const deleteOptions = {method:'DELETE'}
const reqUrl =`${API_URL}/${id}`
const result= reqOptions(reqUrl,deleteOptions);
if(result) setFetchError(result);

}
const handleSUbmit = (e)=>{
e.preventDefault();
if(!newItem) return;
addItem(newItem);
setNewItem('');
}
  return (
    < div className='App'>
    
     <Header title="Todo list"/>

     <AddItems   newItem={newItem}
  setNewItem={setNewItem}
  handleSubmit={handleSUbmit}/>

  <SearchItem 
  search={search}
  setSearch={setSearch} />

<main>
  {loading && <p>Loading Items...</p>}
   {!loading && <Content 
     items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
     setItems={setItems}
     handleCheck={handleCheck}
     handleDelete={handleDelete}
     />}
</main>
  

{/*    { <MiniProject1 /> }
 */}         <Footer length={items.length}/> 
    </div>
   
  )


  
  
}

export default App
