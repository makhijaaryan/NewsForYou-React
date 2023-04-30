import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props; 
    //^^destructing 
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right:'0'}}>
            <span className=" badge rounded-pill bg-danger" >{source}</span>
          </div>
            <img src={!imageUrl?"https://static.vecteezy.com/system/resources/thumbnails/004/215/715/small_2x/3d-world-news-background-loop-free-video.jpg":imageUrl} 
            className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By: {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
