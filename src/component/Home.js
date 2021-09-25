import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <div style={{ width: '100%', display: "flex", justifyContent: "space-evenly"}}>
                <Link to="/client1">클라이언트 1</Link>
                <Link to="/client2">클라이언트 2</Link>
            </div>
        </div>
    );
    
};

export default Home;