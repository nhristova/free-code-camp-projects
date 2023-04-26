import './App.css';
import { getRandomQuote } from './core/getRandomQuote';
import { useEffect, useState } from 'react';
import { QuoteBox } from './components/QuoteBox';
import { loadQuotes, quotesUrl } from './data/loadQuotes';
import { Quote } from './types/Quote';

function App() {
  const [quotes, setQuotes] = useState([] as Quote[]);
  const [quote, setQuote] = useState(null as Quote | null);

  const getNewQuote = () => {
    const i = Math.floor(Math.random() * 100);
    setQuote(quotes[i]);
  };

  useEffect(() => {
    loadQuotes(quotesUrl).then(q => {
      setQuotes(q.quotes);
    })
  }, []);

  useEffect(() => getNewQuote(), [quotes]);

  if (!quote) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      < QuoteBox quote={quote} getNewQuote={getNewQuote} />
    </div >
  )
}

export default App
