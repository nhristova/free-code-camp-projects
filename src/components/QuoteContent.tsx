export function QuoteContent({ quote, author }: { quote: string, author: string }) {
  return (<>
    <div id="text" className="quote-text">
      <span className="quote-symbol">" </span>
      {quote}
    </div>
    <div id="author" className="quote-author">- {author}</div>
  </>)
}