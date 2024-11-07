import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/NewsBox.css'

const NewsBox = (props) => {
    let listContent = []

    listContent.push(props.articles.map((article, indx) => {
        if (indx <= 3) { return }
        else { return ( <Link className='headline-title' to={('/' + article.category + '/' + article.slug)}>{article.title}</Link> ) }
    }))

    return (
        <>
            <div className='news-box'>
                <h3>Headlines</h3>

                {listContent}

                <Link className='headline-title all-articles' to={'/allarticles'}>All Articles</Link>
            </div>
        </>
    )
}

export default NewsBox