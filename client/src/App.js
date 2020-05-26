import React from 'react';
import './App.css';
import PostList from './PostList.js';

class App extends React.Component{
render(){
  return (
    <div className='App'>
      <PostList />
    </div>
  );
  } 
}
export default App;


// run server at npx => json-server --watch data.json --port 3004
