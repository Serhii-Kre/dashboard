import { useLoaderData, json} from "react-router-dom";
import { InfoWidgetList } from "../components/InfoWidgetList";

const Dashboard = () => {
    const reports =  useLoaderData()
    if(reports.isError) {
        return <p>{reports.message}</p>
    }
    return <>
      <h1>Dashboard</h1>     
     
      {
        <InfoWidgetList reports={reports}/>
      } 
    </>
}

export default Dashboard

export const loader = async () => {
    const response = await fetch('api/reports');

    if (!response.ok) {
     throw json({message: 'Could not fetch reports'}, {status: 500});
    } else {
     return response
    }
}