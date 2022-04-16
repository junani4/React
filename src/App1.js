import logo from './logo.svg';
import './App.css';

// Header
function Header(props) {
  console.log('props', props, props.title);  
  return <header>
      <h1><a href="/">{props.title}</a></h1>
  </header>
}

// Nav
function Nav(props) {
  const lis = []
  for(let i=0; i<props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>
  }
  return <nav>
      <ol>
        {lis}
      </ol>
  </nav>
}

// Article
function Article(props) {
  console.log('props', props, props.title, props.body);
  return <article>
      <h2>{props.title}</h2>
      {props.body}
  </article>
}

// App
function App() {
  const topics = [
    {id:1, title:'html', body:'html is ....'},
    {id:2, title:'css', body:'css is ....'},
    {id:3, title:'javascript', body:'javascript is ....'},
  ]
  return (
    <div>
        <Header title="WEB"></Header>
        <Nav></Nav>
        <Article title="Welcome" body="Hello, WeB"></Article> 
    </div>
  );
}

export default App;
