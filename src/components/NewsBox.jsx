import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import React from 'react'
import '../styles/NewsBox.css'

const NewsBox = (props) => {
    let listContent = props.articles.map((article, indx) => {
        if (indx > 3) { 
            return ( <Link key={uuid()} className='headline-title' to={('/' + article.category + '/' + article.slug)}>{article.title}</Link> )
        }
    })

    return (
        <div className='news-box'>
            <h3>Headlines</h3>

            {listContent}

            <Link className='headline-title all-articles' to={'/allarticles'}>All Articles</Link>
        </div>
    )
}

export default NewsBox