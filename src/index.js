import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppWithSplashScreen = () => {
    useEffect(() => {
        // Здесь вы можете добавить код для предварительной загрузки данных или компонентов, если необходимо

        // Скрыть splash screen и отрисовать основной компонент
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
            root.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            );
        }, 3000); // 2000 миллисекунд (2 секунды) - это время отображения splash screen
    }, []);

    return (
        <div id="splash-screen" style={{ textAlign: 'center' }}>
            {/* Вставьте свою картинку splash screen здесь */}
            <img src="images/kabum.jpg" alt="Splash Screen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
    );
};

root.render(
    <React.StrictMode>
        <AppWithSplashScreen />
    </React.StrictMode>
);