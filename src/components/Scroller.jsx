import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/Scroller.css'

const Scroller = (props) => {
    let articles = []
    let carouselContent = []

    //Populate articles from MongoDB here

    if (articles.length == 0) {
        return (
            <h3 className='empty-articles'>No articles found.</h3>
        )
    }

    carouselContent.push(articles.map((article, indx) => {
        return (
            <>
                <Link className='la-article-link' to={('/' + article.category + '/' + article.slug)}>
                    <div className='la-box'>
                        <img className='la-image' src={('/' + article.category + '.png')} alt={('Logo for the ' + article.category + ' category')}></img>
                        <div className='la-top'>
                            <h4 className='la-title'>{article.title}</h4>
                            <span style='color: darkgray;'>{article.createdAt.toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })}</span>
                        </div>
                        <div className='la-bottom'>
                            <p>{article.description}</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }))

    //Add the buttons in the returned section?

    return (
        <>
            <div className='long-article-wrapper'>
                {carouselContent}
            </div>
        </>
    )
}

export default Scroller