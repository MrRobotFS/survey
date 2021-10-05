import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Sistema de Votaciones Alta California, Coto Nevada 8</h1>
                <Player
                    autoplay
                    loop
                    src="https://assets5.lottiefiles.com/packages/lf20_MtN0BG.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
        </header>);
}

export default Header;