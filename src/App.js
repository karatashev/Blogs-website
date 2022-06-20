
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import PostList from './Components/PostList/PostList';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Header/>
        <PostList />
      </main>
    </div>
  );
}

export default App;
