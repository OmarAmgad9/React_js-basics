

import "./App.css"
// import Headers from "./components/Headers/Headers"
// import Footers from "./components/footers/Footers"
// import Container from "./components/containers/containers"
import { Headers, Footers, Container, Hero } from "./components/index"

const App = ()=>{
    return (
        <>
            <Headers text="Propos Test" color="red"/>
            <Container>
                <Hero/>
            </Container>
            <Footers/>
        </>
    )
}


export default App