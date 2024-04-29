import PropTypes from "prop-types"


function SearchBar({search,onChange}) {
    return (
      <input className="input" type="text" placeholder="검색어를 입력하세요" value={search} onChange={onChange}/> 
    )
}
SearchBar.propTypes={
search: PropTypes.any.isRequired,
onChange:PropTypes.func.isRequired,
}

export default SearchBar;