import React from 'react';
import { connect } from 'react-redux';
import { createBook} from "../actions";


class CreateBook extends React.Component {
    state = {
        title:'',
        author:'',
        description:'',
        published:''
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = e=>{
        e.preventDefault();
        if(this.state.title.trim() && this.state.author.trim() && this.state.description.trim() && this.state.published.trim()){
            this.props.dispatch(createBook(this.state));
            this.handleReset();
        }
    }
    handleReset= ()=>{
        this.setState({
            title:'',
            author:'',
            description:'',
            published:''
        });
    }

    render() {
        return(
          <div>
              <form onSubmit={ this.handleSubmit }>
                  <div className="form-group">
                      <input
                          type="text"
                          placeholder="Title"
                          className="form-control"
                          name="title"
                          onChange={ this.handleInputChange }
                          value={ this.state.title }
                      /><br />
                      <input
                          type="text"
                          placeholder="author"
                          className="form-control"
                          name="author"
                          onChange={ this.handleInputChange }
                          value={ this.state.author }
                      /><br />
                      <input
                          type="text"
                          placeholder="description"
                          className="form-control"
                          name="description"
                          onChange={ this.handleInputChange }
                          value={ this.state.description }
                      /><br />
                      <input
                          type="text"
                          placeholder="published"
                          className="form-control"
                          name="published"
                          onChange={ this.handleInputChange }
                          value={ this.state.published }
                      />
                  </div>
                  <button onClick={this.handleSubmit}>Add Book</button>
              </form>
          </div>

        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddBook: book => {
//             dispatch(createBook(book));
//         }
//     };
// };

export default connect()(CreateBook)
