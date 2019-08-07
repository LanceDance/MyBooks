import React, { Component } from 'react';

class Search extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() =>({
        query: query.trim()
        }))
    }
    render() {
        const { query} = this.state
    return (<div className="search-books">
    <div className="md-form mt-0">
    <div className="search-books-input-wrapper">

        <input type="text" placeholder="Search by title or author"
        value={query}
        onChange={(event) => this.updateQuery(event.target.value)}/>


        <div className="search-books">
        <div className="md-form mt-0">
        <div className="search-books-input-wrapper">
        
            <input type="text" placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
</div>
</div>
)

    }   


}

export default Search;