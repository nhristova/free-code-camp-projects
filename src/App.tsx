import './App.css';
import { useEffect, useState } from 'react';
import { QuoteBox } from './components/QuoteBox';
import { loadQuotes, quotesUrl, getRandom, colors } from './data';
import { Quote } from './types/Quote';
import { AboutBox } from './components/AboutBox';

function App() {
  const [quotes, setQuotes] = useState([] as Quote[]);
  const [quote, setQuote] = useState(null as Quote | null);
  const [color, setColor] = useState('#98D8AA');

  useEffect(() => {
    loadQuotes(quotesUrl).then(q => {
      setQuotes(q);
    })
  }, []);

  useEffect(() => getNewQuote(), [quotes]);
  useEffect(() => {
    document.documentElement.style.setProperty('--theme-color', color);
  }, [color]);

  const getNewQuote = () => {
    setQuote(getRandom(quotes));
    setColor(getRandom(colors));
  };

  if (!quote) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <QuoteBox quote={quote} getNewQuote={getNewQuote} />
      <AboutBox />
    </div >
  )
}

export default App
