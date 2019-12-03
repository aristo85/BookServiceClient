import React from 'react';
import { connect } from 'react-redux';
import {deleteBook, getAllBooks, editBook} from "../actions";
import Book from "./Book";
import UpdateBook from "./UpdateBook";

class BookList1 extends React.Component {
    componentDidMount() {
        this.props.AddBook();
    }

    render() {
        const x = this.props.books;
        console.log(x);
        return(
            <div>
                {x.map(book=>( book.edited ? <UpdateBook book={book} key={book.id} /> :
                    <Book key={book.id} book={{...book,edited:false}} delete={this.props.onDeleteBook} edit={this.props.onEditBook} />))}
            </div>
        );
    }
}

export default connect(
    state => ({
        books: state.book
    }),
    dispatch => ({
        AddBook: () => {
            dispatch(getAllBooks());
        },
        onDeleteBook:(id=>{
           dispatch(deleteBook(id))
        }),
        onEditBook:(id=>{
            dispatch(editBook(id));
        })
    })
)(BookList1);