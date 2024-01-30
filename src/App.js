import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";

function App() {
    const { onToggleButton, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header />
            <button onClick={onToggleButton}>toggle</button>
            <div className="banner">
                <img src="/images/300x300.png" alt="Banner 1"/>
                <h1>Banner 1</h1>
                <p>This is the first banner.</p>
            </div>
            <div className="banner-right">
                <img src="/images/300x300.png" alt="Banner 1"/>
                <h1>Banner 2</h1>
                <p>This is the second banner.</p>
            </div>
        </div>
    );
}

export default App;