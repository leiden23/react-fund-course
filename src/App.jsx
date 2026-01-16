import { useState, useMemo } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа JavaScript', body: 'Description' },
    { id: 2, title: 'гг JavaScript 2', body: 'Description' },
    { id: 3, title: 'бб JavaScript 3', body: 'Description' },
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''})
  
  const sortedPosts = useMemo(() => {
    console.log('отработала функция гетсортедпостс')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  },[filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (  
    <div className='App'>
      <PostForm 
        create={createPost}
      />
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />    
    </div>
  )
}

export default App
