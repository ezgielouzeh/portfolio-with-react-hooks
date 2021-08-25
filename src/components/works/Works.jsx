import "./works.scss"

export default function Works() {

  const data = [
    {
      id:'1',
      icon:'./assets/mobile.png',
      title: 'Web Design',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti asperiores accusamus et, mollitia earum sequi ratione voluptas! Est perspiciatis, porro eius quidem deserunt eligendi totam et temporibus iste molestias perferendis.',
      img: '***LINK***'
    },
    {
      id:'2',
      icon:'./assets/globe.png',
      title: 'Mobile Application',
      desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti asperiores accusamus et, mollitia earum sequi ratione voluptas! Est perspiciatis, porro eius quidem deserunt eligendi totam et temporibus iste molestias perferendis.',
      img: '***LINK***'
    },
  ]

  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt=""/>
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi harum perspiciatis, nulla nam laboriosam rem temporibus mollitia beatae aperiam amet unde. Deserunt perferendis magnam provident distinctio rem sapiente consectetur nostrum?</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="***LINK***" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt=""/>
      <img src="assets/arrow.png" className="arrow right" alt=""/>
    </div>
  )
}
