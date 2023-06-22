import { Outlet, useNavigation } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
import { SearchBar } from "../components/SerchBar";


const RootLayout = () => {
    const navigation = useNavigation();
    
    return <>
       <section id="main-layout"> 
        <aside id="sidebar">
         <h1>Intent IQ</h1>
         <MainNavigation />
       </aside>
       <main>
        {navigation.state === 'loading' && <p>Loading... Please, wait.</p>}
        <section>
          <div><Outlet /></div>
          <div><SearchBar /></div>
        </section>
         
       </main>
       </section>     
    </>
}

export default RootLayout