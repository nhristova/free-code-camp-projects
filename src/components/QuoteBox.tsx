import { Quote } from '../types/Quote';
import { MouseEventHandler } from 'react';
import { QuoteContent } from './QuoteContent';
import { Actions } from './Actions';

export function QuoteBox({ quote, getNewQuote }: { quote: Quote, getNewQuote: MouseEventHandler }) {

  return (
    <div id="quote-box">
      <QuoteContent {...quote} />
      <Actions getNewQuote={getNewQuote} />
    </div>
  )
}