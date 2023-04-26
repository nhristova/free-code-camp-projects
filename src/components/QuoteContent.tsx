export function QuoteContent({ text, author }: { text: string, author: string }) {
  return (<>
    <div id="text">{text}</div>
    <div id="author">{author}</div>
  </>)
}