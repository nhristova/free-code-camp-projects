import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import octocat from '../assets/octocat.svg';
import { Quote } from '../types/Quote';
import { MouseEventHandler } from 'react';
import { SocialLink } from './SocialLink';
import { QuoteContent } from './QuoteContent';

export function QuoteBox({ quote, getNewQuote }: { quote: Quote, getNewQuote: MouseEventHandler }) {

  return (<>
    <div id="quote-box">
      <QuoteContent {...quote} />
      <div className="actions">
        <SocialLink id="tweet-quote" src={twitter} href="" alt="twitter icon"/>
        <SocialLink id="facebook-quote" src={facebook} href="" alt="facebook icon" />
        <div className="spacer"></div>
        <button id="new-quote" onClick={getNewQuote} className="new-quote">New qote</button>
      </div>
    </div>
    <div id="author-box">
      by <a href="https://github.com/nhristova">
        <img src={octocat} alt="" />

        nhristova
      </a>
    </div>
  </>)
}