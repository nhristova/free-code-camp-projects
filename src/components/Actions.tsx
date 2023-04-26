import { MouseEventHandler } from 'react';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import { SocialLink } from "./SocialLink";

export function Actions({ getNewQuote }: { getNewQuote: MouseEventHandler}) {
  return (
    <div className="actions-box">
      <SocialLink id="tweet-quote" src={twitter} href="" alt="twitter icon" />
      <SocialLink id="facebook-quote" src={facebook} href="" alt="facebook icon" />
      <div className="spacer"></div>
      <button id="new-quote" onClick={getNewQuote} className="new-quote">New quote</button>
    </div>
  )
}