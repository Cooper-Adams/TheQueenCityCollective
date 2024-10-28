import React from 'react'
import '../styles/Footer.css'

const Footer = (props) => {
    let team = props.team

    return (
        <>
            <footer className={'footer' + (team == 'hornets' ? ' hornets' : '')}>
                <div className='big-img'>
                    <img src={(team == 'hornets' ? '/QCC Hornets Transparent.png' : '/QCC Transparent.png')} alt='Queen City Collective Logo' draggable='false'></img>
                </div>
            
                <div className='footer-middle'>
                    <span className={(team == 'hornets' ? 'hornets' : '')}>Socials</span>

                    <div className='middle-links'>
                        <a href='https://open.spotify.com/show/2bfF51rlCjdxXWIxatDrBf' target='_blank' rel='noopener noreferrer'><img src='/spotify.png'></img></a>
                        <a href='https://twitter.com/TheQCCollective' target='_blank' rel='noopener noreferrer'><img src='/twitter.png'></img></a>
                    </div>
                </div>

                <div className='footer-far'>
                    <span className={(team == 'hornets' ? 'hornets' : '')}>Official Sites</span>

                    <div className='official-links'>
                        <a href='https://www.panthers.com/' target='_blank' rel='noopener noreferrer'><img width='48px' src='/Panthers.png'></img></a>
                        <a href='https://www.hornets.com/' target='_blank' rel='noopener noreferrer'><img width='60px' src='/Hornets.png'></img></a>
                        <a href='https://www.charlottefootballclub.com/' target='_blank' rel='noopener noreferrer'><img width='48px' src='/CharlotteFC.png'></img></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer