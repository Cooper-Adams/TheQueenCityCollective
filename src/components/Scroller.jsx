import { Link } from 'react-router-dom'
import NewsBox from './NewsBox'
import React from 'react'
import '../styles/Scroller.css'

const Scroller = (props) => {
    let slides = []

    slides.push(props.articles.map((article, indx) => {
        if (indx > 3) { return }
        else {
            return (
                <>
                    <li className={'slide' + (article.category == 'Hornets' ? ' hornetBG' : article.category == 'Panthers' ? 'pantherBG' : 'cltfcBG')} style={{backgroundImage: ('url(/' + article.category + '.png')}}>
                        <div className="article-info-box">
                            <div className="card-title"> {article.title} </div>

                            <div className="card-desc"> {article.description} </div>

                            <Link className='article-link' to={'/' + article.category + '/' + article.slug}>Continue Reading &#8594</Link>

                            <button className='slide-arrow left' id='slide-arrow-prev'>&#8249</button>
                            <button className='slide-arrow right' id='slide-arrow-next'>&#8250</button>
                        </div>
                    </li>
                </>
            )
        }
    }))

    return (
        <>
            <div className='container'>
                <div className='body-content'>
                    <section className='slider-wrapper'>
                        <ul className='slides-container' id='slides-container'>
                            {slides}
                        </ul>
                    </section>

                    <NewsBox articles={props.articles}/>
                </div>
            </div>
        </>
    )
}

export default Scroller