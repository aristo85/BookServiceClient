import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBook } from "../actions";


class UpdateBook extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newAuthor = this.getAuthor.value;
        const newDescription = this.getDescription.value;
        const newPublished = this.getPublished.value;
        const data = {
            newTitle,
            newAuthor,
            newDescription,
            newPublished
        }
        this.props.dispatch(updateBook(this.props.book.id,data))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.getTitle = input}
                           defaultValue={this.props.book.title} placeholder="Enter Book Title" /><br /><br />
                    <input required type="text" ref={(input) => this.getAuthor = input}
                              defaultValue={this.props.book.author} placeholder="Enter Author" /><br /><br />
                    <input required type="text" ref={(input) => this.getDescription = input}
                           defaultValue={this.props.book.description} placeholder="Enter Book Description" /><br /><br />
                    <input required type="text" ref={(input) => this.getPublished = input}
                           defaultValue={this.props.book.published} placeholder="Published Year" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(UpdateBook);