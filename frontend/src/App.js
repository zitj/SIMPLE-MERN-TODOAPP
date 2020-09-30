import React from 'react';
import './style/style.css';
import axios from 'axios';
class App extends React.Component{

state = {
  task: '',
  posts: []
};

componentDidMount = () =>{
  this.getTaskPost();
};

getTaskPost = () =>{
  axios.get('/api')
  .then((response) => {
    const data = response.data;
    this.setState({ posts:data });
    console.log('Data has been received!');
  })
  .catch(() => {
    alert('Error retrieving data!');
  })
}

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
    this.resetUserInputs();
    this.getTaskPost();
  })
  .catch(() =>{
    console.log('Internal server error!');
  })

};

resetUserInputs = () =>{
  this.setState({
    task: ''
  });
};

deleteTask = (id) =>{
  console.log('Delete id: ' + id);
  
}

displayTasks = (posts) =>{

  if(!posts.length) return null;

 return posts.map((post, index) => ( 
    <div key={index}>
      <p>{post.task}</p>
      <button onClick={() => {this.deleteTask(post.task)}}>Delete</button>
    </div>
 ));
};
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
        <div className="task">
          {this.displayTasks(this.state.posts)}
        </div>
      </div>
    );

  }
}

export default App;
