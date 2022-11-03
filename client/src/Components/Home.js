import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <div>Home Page</div>
            <nav>
                <Link to="events">to specific event page</Link>
            </nav>
            <nav>
                <Link to="create-event">to create an event</Link>
            </nav>
        </>
    )
}

export default Home