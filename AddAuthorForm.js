import React from 'react';
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ImageUrl: '',
            books: [],
            bookTemp: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    handleAddBook(event) {
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
        <div className="AddAuthorForm_input">
            <label htmlFor="name">Name of the Author </label>
            <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
        </div>
        <div className="AddAuthorForm_input">
            <label htmlFor="ImageUrl">Image Url </label>
            <input type="text" name="ImageUrl" value={this.state.ImageUrl} onChange={this.onFieldChange}></input>
        </div>
        <div className="AddAuthorForm_input">
            <label htmlFor="bookTemp">Books</label>
            {this.state.books.map((book) => <p key={book}>{book}</p>)}
            <input type="text" name="bookTemp" value={this.state.bookTemp} onChange={this.onFieldChange}></input>
            <input type="button" value="+" onClick={this.handleAddBook}></input>
        </div>
        <input type="submit" value="Add here"></input>
    </form>
    }
}

function AddAuthorForm({match, onAddAuthor}) {
    return <div className="AddAuthorForm">
      <h1>Add your Author here</h1>
      <AuthorForm onAddAuthor={onAddAuthor}></AuthorForm>
    </div>
}

export default AddAuthorForm;