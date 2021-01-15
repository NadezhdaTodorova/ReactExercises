import './App.css';
import  React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';


 
class App extends Component  {

  state = {
    text: ''
  }
  
  outputTextHandler = (event) => {
    this.setState({text: event.target.value});
  }
  
  deleteCharHandler = (index) => {
    const oldText = this.state.text.split('');
    oldText.splice(index, 1)
    const updatedText = oldText.join('');
    this.setState({text: updatedText});
  }

  render() {
    const charList = this.state.text.split('').map((ch, index) => {
      return <Char 
        letter={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>

        <input 
          type="text" 
          onChange={this.outputTextHandler}
          value={this.state.text
          }></input>
        
        <p>{this.state.text}</p>

        <Validation
          text={this.state.text}
        ></Validation>

          {charList}

      </div>
    );
  }
}

export default App;
