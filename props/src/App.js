import logo from './logo.svg';
import './App.css';
import Garage from './Garage';
import Comment from './Comment';
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name:'Hello kitty',
    avatarUrl:'http://placekitten.com/g/65/65'

  }
}


function App() {
  return (
    <div>
      <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}/>
    </div>
  );
}

export default App;
