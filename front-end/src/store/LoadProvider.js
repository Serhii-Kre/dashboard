import LoadContext from './load-context'

const LoadProvider = props => {

    const loadContext = {
        load: props.loaded
    }
    
    return <LoadContext.Provider value={loadContext}>
        {props.children}
    </LoadContext.Provider>
}

export default  LoadProvider