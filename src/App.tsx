import viteLogo from '/vite.svg';
import './App.css';
import quotes from './data/qotes.json';
import { getRandomQuote } from './core/getRandomQuote';
import { useState } from 'react';
import { QuoteBox } from './components/QuoteBox';

function App() {
  const [quote, setQuote] = useState(getRandomQuote(quotes));

  const getNewQuote = () => setQuote(getRandomQuote(quotes));

  return (
    <div className="App">
        <QuoteBox quote={quote} getNewQuote={getNewQuote}/>
    </div>
  )
}

export default App
