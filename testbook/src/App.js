import './App.css';
// Header
import Header from './Header/Header'
// Search
import Search from './Search/Search'
// First Word
import FirstWord from './FirstWord/first-word'
// Topics All
import Topic from './TopicsAll/topic'
// Footer
import Footer from './Footer/footer'
// Footer Mini
import FooterMini from './FooterMini/footer-mini'



function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <FirstWord/>
      <Topic/>
      <Footer/>
      <FooterMini/>
    </div>
  );
}

export default App;
