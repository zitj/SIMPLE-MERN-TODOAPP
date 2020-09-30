import React from 'react';
import './style/style.css';
import axios from 'axios';
class App extends React.Component{

state = {
  task: '',
};

handleChange = (event) =>{
  const target = event.target;
  const task = target.name;
  const value = target.value;

  this.setState({
    task: value,
  });
};

submit = (event) =>{
  event.preventDefault();

  const payload = {
    task: this.state.task
  };

  axios({
    url: '/api/save',
    method: 'POST',
    data: payload
  })
  .then(() =>{
    console.log('Data has been sent to the server!');
  })
  .catch(() =>{
    console.log('Internal server error!');
  })

}

  render(){
    console.log('State: ', this.state);
    return(
      <div>
        <h2>ToDoApp - MERN stack</h2>
        <form>
          <input
           type="text"
           name="task"
           placeholder="Type your task here"
           value={this.state.task}
           onChange={this.handleChange}
           />
           <button onClick={this.submit}>Add task</button>
        </form>
      </div>
    );

  }
}

export default App;
