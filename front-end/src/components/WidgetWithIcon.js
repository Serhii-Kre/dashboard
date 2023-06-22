export const WidgetWithIcon = ({ title, description }) => {

    return <>      
        <div className="widget-box">
            <div className="content">
                <div className="icon"></div>
                <div className="info">
                    <span className="title">{title}</span>
                    <span className="description">{description}</span>
                </div>
            </div>
            <div className="footer">Date: </div>
        </div>      
    </>
}