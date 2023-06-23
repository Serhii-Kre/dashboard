import { useRouteLoaderData } from "react-router-dom"

const UserProfile = () => {
    const token = useRouteLoaderData('root');
    return <>
       <h1>UserProfile</h1>
       {token && <p>User's info goes here</p>}
    </>
}

export default UserProfile