import { MouseEventHandler } from 'react';
import twitter from '../assets/twitter.svg';
import tumblr from '../assets/tumblr.svg';
import { SocialLink } from "./SocialLink";
import { Quote } from '../types/Quote';

export function Actions({ quote, getNewQuote }: { quote: Quote, getNewQuote: MouseEventHandler}) {
  
  const text1 = `"${quote.quote}" ${quote.author}`;
  const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&via=freeCodeCamp&text=${text1}`;
  const text2 = `caption=${quote.author}&content=${quote.quote}`;
  const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&show-via=@freecodecamp&${text2}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`;

  return (
    <div className="actions-box">
      <SocialLink id="tweet-quote" src={twitter} href={twitterUrl} alt="twitter icon" title="Tweet this quote"/>
      <SocialLink id="tumblr-quote" src={tumblr} href={tumblrUrl} alt="facebook icon" title="Post on Tumblr"/>
      <div className="spacer"></div>
      <button id="new-quote" onClick={getNewQuote} className="new-quote">New quote</button>
    </div>
  )
}