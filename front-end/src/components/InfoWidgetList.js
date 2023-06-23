import { WidgetWithIcon } from './WidgetWithIcon';

export const InfoWidgetList = ({reports}) => {
    const {info} = reports;
    return <section className="widgets">
        <WidgetWithIcon title={'Reports Amount'} description={info.reportsAmount} icon={'token'} date={'03-02-22'}/> 
        <WidgetWithIcon title={'Countries count'} description={info.countriesCount} icon={'transcribe'} date={'05-03-23'} />
    </section>
}