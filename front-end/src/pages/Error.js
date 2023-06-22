import MainNavigation from "../components/MainNavigation"
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
   const error = useRouteError();
   let message = 'Error: someting went wrong';

   if(error.status === 500) {
      message = error.data.message
   }
   if(error.status === 404) {
      message = 'Could not find requested resourse or page';
   }

    return <>
       <section id="main-layout"> 
        <aside id="sidebar">
        <h1>Intent IQ</h1>
         <MainNavigation />
       </aside>
       <main>
          <h1>{message}</h1>
       </main>
       </section>     
    </>
}

export default ErrorPage