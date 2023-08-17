import {useState, useEffect} from 'react';
import './App.css';
import QuoteContainer from './components/QuoteContainer';

function App() {

  const [color, setColor] = useState('rgb(40, 77, 246)');
  const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  const [data, setData] = useState([]);
  const [quotes, setQuotes] = useState({quote:'No Pain No Gain', author: 'NoName'});

  const fetchData = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  };

  useEffect(() => {
    fetchData();
  }, []);

  const randomColor = () => {
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(newColor);
    const random = Math.floor(Math.random()*100);   
    setQuotes(data.quotes[random]);
  };

  return (
    <div className="App">
      <QuoteContainer quotes={quotes} color={color} randomColor={randomColor}/>     
    </div>
  );
}

export default App;
