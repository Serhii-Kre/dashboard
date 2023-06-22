import { Link, useRouteLoaderData } from "react-router-dom"

const TableList = () => {
    const token = useRouteLoaderData('root');
    console.log(token);
    return <>
       <h1>TableList</h1>
       {!token && <p>Please {<Link to='/auth?mode=login'>LOG IN</Link>} to view the table</p>}
    </>
}

export default TableList