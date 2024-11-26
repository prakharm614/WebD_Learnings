
import Usercard from "./components/Usercard";

function App() {
    return (
        <div className="cards-container">
            <Usercard username="Prakhar" desc="About Prakhar" />
            <Usercard username="Mohan" desc="About Mohan" />
            <Usercard  username="Rohan" desc="About Rohan" />
        </div>
    );
}

export default App;