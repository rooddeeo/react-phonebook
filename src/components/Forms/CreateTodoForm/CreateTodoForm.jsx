import { Component } from 'react';
// import css from './Statistics.module.css';

class CreateTodoForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Name
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            //required
          />
        </div>
        <div>
          {' '}
          Number
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            //required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default CreateTodoForm;
