import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/Header.css'

const Header = (props) => {
    let team = props.team
    let isLoggedIn = true

    const logIn = () => { console.log('Implement Log In function') }

    const logOut = () => { console.log('Implement Log Out function') }

    const searchSubmit = async(e) => { console.log('Search Submitted') }

    return (
        <>
            <nav className={(team == 'hornets' ? 'hornets' : '')}>
                <div className='nav-left'>
                    <Link to='/' rel='noopener noreferrer'>
                        <img src={(team == 'hornets' ? '/Q-Cropped-Hornets.png' : '/Q-Cropped-Panthers.png')} className='home-icon' draggable='false'></img>
                    </Link>
                </div>

                <div className='nav-middle'>
                        <form className='search-form' onSubmit={searchSubmit}>
                            <input style={{color: team == 'hornets' ? '#00788C' : ''}} autoComplete='false' type='search' className='nav-search' id='search' name='search' placeholder='Search Articles...'></input>
                        </form>
                </div>
                
                <div className='nav-right'>
                    <ul className='nav-links'>
                        <Link className={(team == 'hornets' ? 'hornets' : '')} to='/Panthers'>Panthers</Link>
                        <Link className={(team == 'hornets' ? 'hornets' : '')} to='/Hornets'>Hornets</Link>
                        <Link className={(team == 'hornets' ? 'hornets' : '')} to='/CharlotteFC'>Charlotte FC</Link>
            
                        {isLoggedIn && ( <Link className={(team == 'hornets' ? 'hornets' : '')} onClick={logOut}>LogOut</Link> )}

                        {!isLoggedIn && ( <Link className={(team == 'hornets' ? 'hornets' : '')} to='/register' onClick={logIn}>LogIn</Link> )}
                    </ul>
                    
                    <div className={('burger' + (team == 'hornets' ? ' hornets' : ''))}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header