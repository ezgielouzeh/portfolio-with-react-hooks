import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="https://images.freeimages.com/images/small-previews/33a/web-design-1243586.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://images.freeimages.com/images/small-previews/33a/web-design-1243586.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://images.freeimages.com/images/small-previews/33a/web-design-1243586.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://images.freeimages.com/images/small-previews/33a/web-design-1243586.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="https://images.freeimages.com/images/small-previews/33a/web-design-1243586.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}
