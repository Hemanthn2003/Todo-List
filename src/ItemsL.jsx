import LineItem from './LineItem';

const ItemL= ({ items, setItems,handleCheck,handleDelete })=>{
  return(
    <ul>
  {items.map((item)=>(
   <LineItem 
   key={item.id}
    item={item}
     setItems={setItems}
     handleCheck={handleCheck}
     handleDelete={handleDelete}
   />
  ))}
</ul>
  );
};
export default ItemL;