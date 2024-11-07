import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/Scroller.css'

const Scroller = (props) => {
    let carouselContent = []

    carouselContent.push(props.articles.map((article, indx) => {
        let parsedDate = new Date(article.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })

        return (
            <>
                <Link className='la-article-link' to={('/' + article.category + '/' + article.slug)}>
                    <div className='la-box'>
                        <img className='la-image' src={('/' + article.category + '.png')} alt={('Logo for the ' + article.category + ' category')}></img>
                        <div className='la-top'>
                            <h4 className='la-title'>{article.title}</h4>
                            <span style={{color: 'darkgray'}}>{parsedDate}</span>
                        </div>
                        <div className='la-bottom'>
                            <p>{article.description}</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }))

    return (
        <>
            <div className='long-article-wrapper'>
                {carouselContent}
            </div>
        </>
    )
}

export default Scroller