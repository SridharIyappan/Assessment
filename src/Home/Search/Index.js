import Buttons from '../Buttons';
import './Search.css'
const Search = () => {
    return (
        <div className="search">
            <input type="text" placeholder="search" />
            <Buttons />
        </div>
     );
}
 
export default Search;