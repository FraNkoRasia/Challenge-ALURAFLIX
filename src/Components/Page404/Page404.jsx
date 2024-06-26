import React, { useEffect } from 'react';
import '../Page404/Page404.css';

const Page404 = () => {
    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        loadScript('/js/novacancy.min.js').then(() => {
            $('#error').novacancy({
                reblinkProbability: 0.1,
                blinkMin: 0.2,
                blinkMax: 0.6,
                loopMin: 8,
                loopMax: 10,
                color: '#ffffff',
                glow: ['0 0 80px #ffffff', '0 0 30px #008000', '0 0 6px #0000ff']
            });

            $('#code').novacancy({
                blink: 1,
                off: 1,
                color: 'Red',
                glow: ['0 0 80px Red', '0 0 30px FireBrick', '0 0 6px DarkRed']
            });
        }).catch((err) => {
            console.error('Failed to load script:', err);
        });
    }, []);

    return (
        <div className="board">
            <p id="error">error</p>
            <p id="code">404</p>
            <p id="error">PAGINA</p>
            <p id="code"> NO ENCONTRADA</p>
        </div>
    );
};

export default Page404;
