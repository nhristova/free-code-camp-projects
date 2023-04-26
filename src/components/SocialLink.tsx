export function SocialLink(props: { id: string, src: string, href: string, alt: string }) {
  return (
    <a id={props.id} href={props.href} className="social-link">
      <img src={props.src} alt="" />
    </a>
  )
}