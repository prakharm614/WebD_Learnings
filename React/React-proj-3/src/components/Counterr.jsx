import React, { useState } from 'react'; // Import useState
import './Counter.css'; // Import the CSS file

const Counterr = () => {
    const [count, setCount] = useState(0); // Initialize state for the counter

    return (
        <div className="counter-container"> {/* Added styling class */}
            <p id="para">You have clicked {count} times</p>
            <button id="btn" onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
};

export default Counterr;
