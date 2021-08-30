import React from 'react'
import { HomeLink, MainContainer } from './style'
import erro404 from '../../assets/erro404.json'
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function Error() {
    const player = useRef<Player>(null)

    useEffect(() => {
        player.current?.setPlayerSpeed(1)
    }, [])

    return (
        <MainContainer>
            <Player
                ref={player}
                autoplay
                loop
                src={erro404}
                style={{width: '600px'}}
            />
            
            <h2>Página não encontrada</h2>

            <HomeLink to="/" >Voltar para Home</HomeLink>
        </MainContainer>
    )
}
