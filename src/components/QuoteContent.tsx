export function QuoteContent({ quote, author }: { quote: string, author: string }) {
  return (<>
    <div id="text">{quote}</div>
    <div id="author">{author}</div>
  </>)
}