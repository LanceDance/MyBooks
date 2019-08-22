import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './books/books.react'
import Search from './books/search.react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

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
      <Router>
      <Route
					path="/search"
					render={() => <Search books={this.state.books} handleChange={this.handleChange} />}
/>

        
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
      <Route exact path='/' render={() => (   
          <div className="list-books-content">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
           
            </div>
            <Books books={this.state.books}
              handleChange= {this.handleChange}/>
           
        
          </div>
          </div>
          )}/>
          <div className="open-search">
          <Link to="/search">Add Book</Link>
        </div>
       
        </Router>

          </div>
          
          



        
    )
  }
}

export default BooksApp;

