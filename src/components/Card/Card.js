import React from 'react'
import { Link } from 'react-router-dom'

function Card({ blog }) {
    const turnCate = (string, n) => {
        return (
            string?.length > n ? string.substr(0, n) + '...' : string
        )
    }

    return (
        <Link to={`/blog/${blog.id}`} >
            <div className='flex-1'>
                <div className='card'>
                    <div>
                        <img className='card-image' src={blog.article_headerImg} alt="blog-img" />
                    </div>
                    <div className='Baby’s-Development'>
                        <p>{blog.article_title}</p>
                    </div>
                    <div className='dic'>
                        <div dangerouslySetInnerHTML={{ __html: turnCate(blog.article_content, 300), }} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card;
