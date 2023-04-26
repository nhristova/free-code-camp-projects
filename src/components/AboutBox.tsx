import octocat from '../assets/octocat.svg';

export function AboutBox() {
  return (
    <div className="about-box">
      Source code at <a href="https://github.com/nhristova/random-quote-machine" target="_blank">
        <img src={octocat} className="img-15" alt="Github icon" /> nhristova
      </a>
    </div>
  )
}