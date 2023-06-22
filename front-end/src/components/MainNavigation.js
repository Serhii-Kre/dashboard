import { NavLink } from "react-router-dom"
import LoadContext from '../store/load-context'
import { useEffect, useState, useContext } from "react"

const MainNavigation = () => {
    const [loaded, setLoaded] = useState(null);
    const loadCtx = useContext(LoadContext)    
    useEffect(() => {
           setTimeout(()=>{
            setLoaded(loadCtx.load)
           },0) // to postpone a bit for googleleaps font awaiting
    }, [loaded,loadCtx.load]);
    
    return <nav>
        <ul>
            <li>
                <NavLink to="/"><i className={`material-icons ${loaded ? 'show' : 'hide'}`}>dashboard</i>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/user"><i className={`material-icons ${loaded ? 'show' : 'hide'}`}>perm_identity</i>User Profile</NavLink>
            </li>
            <li>
                <NavLink to="/list"><i className={`material-icons ${loaded ? 'show' : 'hide'}`}>description</i>Table List</NavLink>
            </li>
        </ul>
    </nav>
}

export default MainNavigation