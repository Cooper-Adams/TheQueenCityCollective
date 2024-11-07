import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/Scroller.css'

const Scroller = (props) => {
    let listContent = []

    listContent.push(props.articles.map((article, indx) => {
        return (
            <>
                <Link className='la-article-link' to={('/' + article.category + '/' + article.slug)}>
                    <div className='sa-box'>
                        <span className='sa-title'>{article.title}</span>
                    </div>
                </Link>
            </>
        )
    }))

    return (
        <>
            <div className='side-article-wrapper'>
                {listContent}
            </div>
        </>
    )
}

export default Scroller