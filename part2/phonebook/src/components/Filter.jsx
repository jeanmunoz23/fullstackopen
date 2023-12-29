const Filter = ({ filterName, handleFilterName }) => (
	<div>
        Filter show with
        <input 	value={filterName}	onChange = {handleFilterName}  />
	</div>
)

export default Filter