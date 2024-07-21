import React, { useState } from 'react';

function App() {
    const [message, setMessage] = useState('Hallo Telegram');

    const handleClick = () => {
        if (message === 'Hallo You') {
            setMessage('Hallo Telegram');
        } else {
            setMessage('Hallo You');
        }
    };

    return (
        <div className="App">
            {message}
            <button onClick={handleClick}>Change</button>
        </div>
    );
}

export default App;
