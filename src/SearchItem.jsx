const SearchItem =({search, setSearch})=>{

return (

<form className="searchForm" onSubmit={(e)=>{e.preventDefault}}>
<label htmlFor="search">Search</label>
<input autoFocus id="search" type="text" role="searchbox" placeholder="Search Items"  value={search} onChange={(e) => setSearch(e.target.value)} />
<button type="submit" aria-label="Add Item">Search</button>
</form>

    );

}
export default SearchItem