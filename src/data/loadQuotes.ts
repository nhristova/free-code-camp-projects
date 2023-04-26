
import { Quote } from '../types/Quote';
import quotesLocal from './qotes.json';

export const quotesUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export const loadQuotes = async (url: string): Promise<Quote[]> => {
  try {
    let r = await fetch(url);
    if (!r.ok) {
      console.log(r);
    }
    // add my favorite quotes to the response
    return r.json().then(q => [...q.quotes, ...quotesLocal]);

  } catch (error) {
    console.log(error);
    return quotesLocal;
  }
}