import { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    // setPosts(...posts, newPost)
    console.log(title)
  }

  return (  
    <div className='App'>
      <form>
        <MyInput
          type="text" 
          placeholder='Название поста'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <MyInput 
          type="text" 
          placeholder='Описание поста'
          // value={body}
          // onChange={(event) => setBody(event.target.value)}
        />
        <MyButton 
          onClick={addNewPost}
        >Создать пост</MyButton>
      </form>
      <PostList 
        posts={posts}
        title="Посты про JS"
      />
    </div>
  )
}

export default App
