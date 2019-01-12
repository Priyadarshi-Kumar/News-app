import React, { Component } from 'react'
import { Form, Button, FormGroup, Col, Row, Input } from 'reactstrap'
import axios from 'axios'
import Outlet from './Outlet'

class Search extends Component {

    state = {
        searchValue: '',
        sortBy: 'popularity',
        data: {}
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        let searchValue = this.inputField.value
        this.setState({ searchValue }, () => this.getData())
    }

    onChange = (evt) => {
        if (this.state.searchValue !== '') {
            this.setState({ sortBy: evt.target.value }, () =>
                (this.state.data !== '' ? this.getData() : '')
            )
        }
    }

    getData = () => {
        let URL = `https://newsapi.org/v2/everything?q=${this.state.searchValue}&from=2018-12-30&sortBy=${this.state.sortBy}&apiKey=f73d1931603f41308e75b5b3454c0fd6`
        axios.get(URL)
            .then(res => { this.setState({ data: res.data }) })
            .then(console.log(this.state.data))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="search-form">
                <div className="articles-count">
                    <h1 >{this.state.data.totalResults} articles found</h1>
                </div>
                <div className="searchBar">
                    <Form onSubmit={this.handleSubmit} style={{ marginTop: '40px' }}>
                        <Row>
                            <Col sm={2}></Col>
                            <Col sm={2}>
                                <FormGroup>
                                    <Input type="text" placeholder="Search" className="searchInput" innerRef={elem => this.inputField = elem} />
                                </FormGroup>
                            </Col>

                            <Col sm={2}>
                                <FormGroup>
                                    <Button type="submit">Search</Button>
                                </FormGroup>
                            </Col>
                            <Col sm={2}></Col>
                            <Col sm={2}>
                                <FormGroup>
                                    <Input type="select" name="select" onChange={this.onChange} innerRef={elem => this.selectField = elem}>
                                        <option>popularity</option>
                                        <option>publishedAt</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </div>
                {this.state.data.totalResults  ? ( this.state.data.articles.map((news, index) => (<Outlet key={index} news={news}/>))) : ''}
            </div>
        )
    }
}

export default Search;
