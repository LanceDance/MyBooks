import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './books/books.react'
import Bookshelf from './bookshelf/bookshelf.react'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      books :
      [
     
      ]
    }
    this.handleChange = this.handleChange.bind(this);
   
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
  myBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: books
      }))
    })
  }

  handleChange(book, event) {
    console.log(event.target.value)
    BooksAPI.update(book, event.target.value).then((resp) =>
    this.setState((currentState) =>
    {
      const newState = currentState
      newState.books.push(book)
    }
   
    ))
    this.myBooks()
  }


  
  render() {
    return (
      <div className="app">
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          <div className="list-books-content">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
           
            </div>
            

                  <div className="bookshelf-books">
                    <ol className="books-grid">
            <Books books={this.state.books}
            handleChange= {this.handleChange}/>
                          </ol>
          </div>
          </div>
          </div>
          </div>




        
    )
  }
}

export default BooksApp
