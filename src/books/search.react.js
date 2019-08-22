import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() =>({
        query: query.trim()
        }))
    }

    render () {
        const { query} = this.state
        const {books, handleChange} = this.props
    const showBooks = query  === ''
        ? books
        : books.filter((c) => (    
            c.title.toLowerCase().includes(query.toLowerCase()
            )
        ))
        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to="/" className="close-search">
						Close
            </Link>
            <div className="md-form mt-0">
            <div className="search-books-input-wrapper">

                <input type="text" placeholder="Search by title"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}/>

              </div>
              </div>
              </div>
              <div className="search-books-results">
              <ol className="books-grid">

        {console.log(showBooks)}
        <div className="book">
    {showBooks.map((book) =>  (

        <li key={book.id} className='list-books-content'>
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
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
    <div className="book-authors">{book.authors}</div>

    

        </li>
    )

    )}
    
  {/* </ol> */}
</div>
</ol>
</div>
 </div>
);



    }

}

export default Search;