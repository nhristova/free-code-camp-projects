import { Quote } from "../types/Quote";

export function SocialLink(props: { id: string, src: string, href: string, alt: string, title: string }) {
  return (
    <button title={props.title}>
      <a
        id={props.id}
        href={props.href}
        target="_blank">
        <img src={props.src} className="img-20" alt="" />
      </a>
    </button>
  )
}