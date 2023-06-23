export const WidgetWithIcon = ({ title, description, icon, date }) => {

    return <>      
        <div className="widget-box">
            <div className="content">
                <div className="icon"><i className='material-icons'>{icon}</i></div>
                <div className="info">
                    <span className="title">{title}</span>
                    <span className="description">{description}</span>
                </div>
            </div>
            <div className="footer"><i className='material-icons'>calendar_month</i> Date: {date}</div>
        </div>      
    </>
}
