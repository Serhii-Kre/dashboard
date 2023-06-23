import { Link, useRouteLoaderData } from "react-router-dom"
import { Table } from './Table'
import { Users } from "../store/dummy-users";

const TableList = () => {
    const token = useRouteLoaderData('root');
    return <>
       <h1>TableList</h1>
       {!token && <p>Please {<Link to='/auth?mode=login'>LOG IN</Link>} to view the table</p>}

       {token && <Table users={Users}/>}
    </>
}

export default TableList