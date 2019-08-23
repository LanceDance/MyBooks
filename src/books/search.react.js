import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {search} from '../BooksAPI'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          query : "",
          books: []
        }}
    updateQuery = (query) => {
        this.setState(() =>({
        query: query.trim()
        }))
    }

    authors = (book) => {
        if (typeof book.authors === 'undefined') {
            return 'No author'
        }
        else {
        for (const value of book.authors.values())  {
            const author = value
            return author
        }
    }

    
    }

    searchBook = async e => {
        try {
            const query = e.target.value
            this.setState([query])

            if (query.trim()) {
                const results = await search(query)
                if (results.error) {
                    this.setState({books: []})
                
                } 
                else {
                    this.setState({books : results})
                }
            }
            else {
                this.setState({books: []})
            }
        
    }
        catch(error)
        {console.log(error)}
    }
    render () {
        
        const { handleChange} = this.props

        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">
						Close
            </Link>
            <div className="md-form mt-0">
            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title" onChange={this.searchBook}/>
              </div>
              </div>
              </div>
              <div className="search-books-results">
              <ol className="books-grid">

    {this.state.books.map((book) =>  (

        <li key={book.id} className='list-books-content'>
        <div className="book">

            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof book.imageLinks=== 'undefined' ? ''  : book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
        <select defaultValue={book.shelf} onChange={(e) => handleChange(book, e)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>

        </select>

      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{this.authors(book)}</div>

    
    </div>

        </li>
    )

    )}

  
</ol>
</div>
</div>
);



    }

}

export default Search;