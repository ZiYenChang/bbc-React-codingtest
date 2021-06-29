import React from 'react'
import ArticleItem from '../ArticleItem'

function Article2() {
    return (
        <div>
            < ArticleItem num="2" url="https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/article-2.json" before={process.env.PUBLIC_URL + '/'} next={process.env.PUBLIC_URL + '/article3'}/>
        </div>
    )
}

export default Article2
