import "./container.css"



const Container = (props) =>{


    return (
        <div className="container main-container">
            containers test
            <p>{props.children}</p>
        </div>
    )
}

export default Container