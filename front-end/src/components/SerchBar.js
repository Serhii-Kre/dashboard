import { Link } from "react-router-dom"

export const SearchBar = ({reports}) => {
    return <>
      {
       <Link to="/auth?mode=signup"><i className='material-icons auth'>perm_identity</i></Link>
      }
    </>
}