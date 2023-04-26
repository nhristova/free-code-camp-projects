export function SocialLink(props: { id: string, src: string, href: string, alt: string }) {
  return (
    <button id={props.id}>
        <img src={props.src} className="img-20" alt="" />
    </button>
  )
}