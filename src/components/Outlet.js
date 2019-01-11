import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Outlet extends Component {
    render() {
        const news = this.props.news
        return (
            <div className="card">
                <Row form>
                    <Col md={3} className='cardImage'>
                        <img src={news.urlToImage} alt={news.name} className='image' />
                    </Col>
                    <Col md={9} className='cardBody'>
                        <h3>
                            <a href={news.url} target="_blank">
                                {news.title}
                            </a>
                        </h3>
                        <p style={{ fontWeight: 'bold' }}>{news.author ? news.author : ''}</p>
                        <p>{news.description}</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Outlet;
