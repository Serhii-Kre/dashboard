import { WidgetWithIcon } from './WidgetWithIcon';

export const InfoWidgetList = ({reports}) => {
    const {info} = reports;
    console.log(info.reportsAmount)
    return <section className="widgets">
        <WidgetWithIcon title={'Reports Amount'} description={info.reportsAmount}/> 
        <WidgetWithIcon title={'Countries count'} description={info.countriesCount}/>
    </section>
}