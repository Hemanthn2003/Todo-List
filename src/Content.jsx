import { useState } from "react";
import ItemL from './ItemsL'
const Content = ({ items, setItems,handleCheck,handleDelete }) => {
return(
   <main>
      
{items.length?(
   <ItemL  items={items}
     setItems={setItems}
     handleCheck={handleCheck}
     handleDelete={handleDelete} />
) : (
   <p 
   style={{marginTop:'2rem'}}>You have no items in list.</p>)}
   </main>
)

}
export default Content