// import React from 'react';
// import Books from '../books/books.react'

// class Bookshelf extends React.Component {
  
//     render() {
//         const {query} = this.state
//         const {books, handleChange} = this.props
        
//     const showBooks = query  === ''
//         ? books
//         : books.filter((c) => (    
//             c.title.toLowerCase().includes(query.toLowerCase() 
//             )
        
//         ))
//         return (
//             <div className="bookshelf">
//             <h2 className="bookshelf-title">Want to Read</h2>
//             {console.log(books)}
//             <div className="bookshelf-books">
//               <ol className="books-grid">
//               <Books books={this.books}
//               handleChange= {this.handleChange} bookShelf={this.booksRead}/>
//               </ol>
//               </div>
//               </div>
//         );
//     }
// }

// export default Bookshelf;