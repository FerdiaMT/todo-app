export function Tabs(props){
    const{todos , selectedTab , setSelectedTab} = props;


    const tabs = ['All', 'Open', 'Completed']

    return(
        <nav className="tab-container">
            {tabs.map((tab,tabIndex) => {
                const numOfTasks = tab === 'All' ? todos.length: // if current tab is all, todos length
                    tab === 'Open' ? todos.filter(val => !val.complete).length: // if current tab is Open , incomplete length
                    todos.filter(val=> val.complete).length // else complete length
                    // .filter returns all values if they are true in ()
                return(

                    <button onClick = {() => {
                        setSelectedTab(tab)
                    }}
                        key={tabIndex}
                        className={"tab-button "+ 
                        (tab === selectedTab ? ' tab-selected':'')}>
                        <h4>
                            {tab}<span>({numOfTasks})</span>
                        </h4>
                    </button>

                )
            })}
            <hr />
        </nav>
    )//1:06:08
}