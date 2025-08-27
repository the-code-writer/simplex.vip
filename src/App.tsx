import { MenuOutlined } from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";
function App() {
  return (
    <>
      {/* Loader Start */}
      <div className="loader">
        <div className="loader__content">
          <div className="loader__logo slideInDown">
            {/* Your Logo Here */}
            <img
              src="img/logo.png"
              alt="Mixio - awesome coming soon template to kick-start your project"
            />
          </div>
          <div className="loader__caption slideInUp">
            <p className="loading-text">Loading</p>
            <span className="loading-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </span>
          </div>
        </div>
      </div>
      {/* Loader End */}
      {/* Custom HTML Start */}
      {/* Navigation Start */}
      <div className="menu-black-layer" />
      <nav className="dark">
        {/* Menu Close Button Start */}
        <a href="#" id="menu-close" className="menu-close light">
          <span />
        </a>
        {/* Menu Close Button End */}
        {/* Main Menu Start*/}
        <ul className="menu" id="menu">
          <li data-menuanchor="homePage">
            <a href="#homePage">
              Home
              <span>Nice to meet you</span>
            </a>
          </li>
          <li data-menuanchor="aboutPage">
            <a href="#aboutPage">
              About Us
              <span>Our brand sucsess story</span>
            </a>
          </li>
          <li data-menuanchor="featuresPage">
            <a href="#featuresPage">
              Features
              <span>We love what we do</span>
            </a>
          </li>
          <li data-menuanchor="portfolioPage">
            <a href="#portfolioPage">
              Portfolio
              <span>Resent projects</span>
            </a>
          </li>
          <li data-menuanchor="contactPage">
            <a href="#contactPage">
              Contact
              <span>Welcome to our office</span>
            </a>
          </li>
        </ul>
        {/* Main Menu End*/}
      </nav>
      {/* Navigation End */}
      {/* Fullpage.js Sections Start */}
      <div id="fullpage-scroll" className="fullpage">
        {/* Home Section Start*/}
        <div
          className="section fp-auto-height-responsive home"
          data-anchor="homePage"
        >
          <div className="container-fluid p-0 fullheight">
            <div className="row g-0 fullheight">
              {/* Main Section Intro Start */}
              <div className="col-12 fullheight home__intro intro-bg-5">
                {/* Background Effect End */}
                <div
                  className="color-layer color-layer-dark"
                  style={{
                    backgroundImage: "url(/principles.mp4)",
                    backgroundSize: "cover",
                  }}
                />
                <video
                  id="video-bg"
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  playsInline={true}
                >
                  <source src="/principles.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Menu Button Start */}
                <div className="menu-button light">
                  <a href="#" id="menu-trigger" className="menu-trigger light">
                    <MenuOutlined size={28} style={{ fontSize: 28 }} />
                  </a>
                </div>
                {/* Menu Button Start */}
                {/* Logo Start*/}
                <div className="intro__logo">
                  {/* Your Logo Here */}
                  <img
                    src="img/logo.png"
                    alt="Mixio - awesome coming soon template to kick-start your project"
                  />
                </div>
                {/* Logo End*/}
                {/* Main Headline Start */}
                <div className="intro__headline">
                  <Fade bottom appear delay={500} >
                  <h1
                    className="light-text"
                    style={{
                      fontSize: 64,
                      fontWeight: 500,
                      lineHeight: 1.25,
                      textShadow: "2px 2px 8px rgba(0,0,0,0.35)",
                    }}
                  >
                    <Fade bottom appear delay={500} ><span>Double Productivity. <br /></span></Fade>
                    <Fade bottom appear delay={500} ><span>Redefine Your Industry.</span></Fade>
                </h1>
                </Fade>
                  <p className="light-text"></p>
                </div>
                {/* Main Headline End */}
                {/* Socials Start */}
                <div className="intro__socials" style={{ display: "none" }}>
                  <ul>
                    <li>
                      <a
                        className="light-text"
                        href="https://twitter.com/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="light-text"
                        href="https://github.com/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="light-text"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Socials End */}
              </div>
              {/* Main Section Intro End */}
            </div>
          </div>
        </div>
        {/* Home Section End*/}

        {/* About Section Start*/}
<Fade bottom appear delay={500} >
        <div
          className="section fp-auto-height inner about"
          data-anchor="aboutPage"
        >
          <div className="container-fluid p-0 fullheight image-1">
            <div className="section-wrapper flex-end bg-semi-transparent">
                <div className="section-contents filled">
                  <Fade bottom appear delay={500} >
                <h2 className="section-title">
                  Embed AI into every task, process, and workflow.
                </h2>
                <p> </p></Fade>
              </div>
            </div>
          </div>
        </div>
        </Fade>
        {/* About Section End*/}

        <Fade bottom appear delay={500} >
          {/* About Section Start*/}

          <div
            className="section fp-auto-height inner about"
            data-anchor="aboutPage"
          >
            <div className="container-fluid p-0 fullheight image-3">
              <div className="section-wrapper bg-semi-transparent">
                <div className="section-contents filled">
                  <Fade bottom appear delay={500} >
                  <h2 className="section-title">
                    Deliver unforgettable customer experiences.
                  </h2>
                  <p> </p></Fade>
                </div>
              </div>
            </div>
          </div>
          {/* About Section End*/}

          {/* About Section Start*/}

          <div
            className="section fp-auto-height inner about"
            data-anchor="aboutPage"
          >
            <div className="container-fluid p-0 fullheight image-2">
              <div className="section-wrapper flex-end bg-semi-transparent">
                <div className="section-contents filled">
                  <Fade bottom appear delay={500} >
                  <h2 className="section-title">
                    Engineered for mission-critical workflows.
                  </h2>
                  <p> </p></Fade>
                </div>
              </div>
            </div>
          </div>
          {/* About Section End*/}
        </Fade>

        {/* Contact Section Start*/}
        <Fade bottom appear delay={500} >
          <div
            className="section fp-auto-height inner contact"
            data-anchor="contactPage"
          >
            <div className="container-fluid p-0">
              <div className="row flex-xl-row-reverse g-0">
                {/* Contact Section Info Start*/}
                <div className="col-12 col-xl-12 inner__info">
                  <div className="content-block auto-height form-block">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <Fade bottom appear delay={500} >
                        <span className="title">Book A Demo</span></Fade>
                      <Fade bottom appear delay={500} >
                      <h2 className="cta-text">Seize the Moment</h2></Fade>
                      <br /><Fade bottom appear delay={500} >
                      <p className="contact-text">
                        You can call us or leave a request here. We are always
                        glad to see you.
                        <br />
                        Contact us via phone:
                        <a href="tel:+12127089400"> +1 212-708-9400</a> <br />
                        or email:
                        <a href="mailto:example@example.com?subject=Message%20from%20your%20site">
                          info@simplex.vip
                        </a>
                        </p>
                        </Fade>
                    </div>
                    {/* Section Title End */}
                    {/* Contact Form Container Start */}
                    <div className="form-content contact">
                     
                      {/* Contact Form Start */}
                      <form
                        className="form form-dark contact-form"
                        id="contact-form"
                      >
                        {/* Hidden Required Fields */}
                        <input
                          type="hidden"
                          name="project_name"
                          defaultValue="Mixio Contact Form Message"
                        />
                        <input
                          type="hidden"
                          name="admin_email"
                          defaultValue="support@mixdesign.dev"
                        />
                        <input
                          type="hidden"
                          name="form_subject"
                          defaultValue="Contact Form Message"
                        />
                        {/* END Hidden Required Fields*/}
                        <Fade bottom appear delay={500} >
                        <input
                          className=""
                          type="text"
                          name="Name"
                          placeholder="Your Name*"
                        /></Fade><Fade bottom appear delay={500} >
                        <input
                          className=""
                          type="email"
                          name="E-mail"
                          placeholder="Phone Number*"
                          /></Fade>
                        <Fade bottom appear delay={500} ><input
                          className=""
                          type="email"
                          name="E-mail"
                          placeholder="Email Adress*"
                        /></Fade>
                        <Fade bottom appear delay={500} ><input
                          className=""
                          type="email"
                          name="E-mail"
                          placeholder="Industry*"
                        /></Fade>
                        <Fade bottom appear delay={500} ><textarea
                          className=""
                          name="Message"
                          placeholder="About your organisation*"
                          defaultValue={""}
                        /></Fade>
                        
                        <span className="inputs-description">
                          *Required fields
                        </span>
                        <button
                          className="btn btn-linex"
                          style={{
                            border: "2px solid #ffffff",
                            borderRadius: 0,
                            padding: "5px 20px",
                            color: "#ffffff",
                          }}
                        >
                          <span>BOOK A DEMO</span>
                        </button>
                      </form>
                      {/* Contact Form End */}
                    </div>
                    {/* Contact Form Container End */}
                  </div>
                </div>
                {/* Contact Section Info End*/}
              </div>
              {/* Footer Block Start*/}
              <div className="row g-0">
                {/* Footer Content Start*/}
                <div className="col-12">
                  <div className="footer bg-dark">
                    {/* Socials Start */}
                    <div className="footer__socials">
                      <ul>
                        <li>
                          <a
                            className="light-text"
                            href="https://twitter.com/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="light-text"
                            href="https://github.com/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-github" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="light-text"
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Socials End */}
                    {/* Copyright Start */}
                    <p className="footer__copyright light-text">
                      Designed by InboxGroup AI
                    </p>
                    {/* Copyright End */}
                  </div>
                </div>
                {/* Footer Content End*/}
              </div>
              {/* Footer Block End*/}
            </div>
          </div>
        </Fade>
        {/* Contact Section End*/}
      </div>
      {/* Fullpage.js Sections End */}
      {/* Notify Me Popup Start */}
      <Fade bottom appear delay={500} >
      <div className="popup notify">
        <div className="popup__content popup-bg-1">
          {/* Close Button Start */}
          <a className="popup__close" href="#0" id="notify-close">
            <span />
          </a>
          {/* Close Button End */}
          <div className="popup__background">
            {/* Notify Title Start */}
            <div className="popup-title">
              <p className="popup-title__title">Get to know about our launch</p>
              <p className="popup-title__subtitle">
                Subscribe to our newsletter and we will send you a notification
                about the launch of our brand new site.
              </p>
            </div>
            {/* Notify Title End */}
            {/* Notify Form Container Start */}
            <div className="form-container">
              {/* Reply Messages Start*/}
              <div className="reply-group subscription-ok">
                <i className="fa-solid fa-face-smile-wink" />
                <p className="reply-group__title">Done!</p>
                <span className="reply-group__text">
                  Thanks for subscribing. We will send you a notification about
                  the launch of our brand new website.
                </span>
              </div>
              <div className="reply-group subscription-error">
                <i className="fa-solid fa-face-sad-tear" />
                <p className="reply-group__title">Ooops!</p>
                <span className="reply-group__text">
                  Something went wrong. Please try again later.
                </span>
              </div>
              {/* Reply Messages End*/}
              {/* Notify Contact Form Start*/}
              <form className="notify-form form form-dark">
                <input className="" type="email" placeholder="Email Adress*" />
                <button className="btn btn-line" type="submit">
                  <span className="btn-caption">Send</span>
                </button>
              </form>
              {/* Notify Contact Form End*/}
            </div>
            {/* Notify Form Container End */}
          </div>
        </div>
        </div>
      </Fade>
      {/* Notify Me Popup End */}
      {/* Write-a-Line Popup Start */}
      <Fade bottom appear delay={500} >
      <div className="popup writealine">
        <div className="popup__content popup-bg-1">
          {/* Close Button Start */}
          <a className="popup__close" href="#0" id="writealine-close">
            <span />
          </a>
          {/* Close Button End */}
          <div className="popup__background">
            {/* Write-a-Line Title Start */}
            <div className="popup-title">
              <p className="popup-title__title">Just say "Hello!"</p>
              <p className="popup-title__subtitle">
                Drop us a line and we will get back as soon as possible.
              </p>
            </div>
            {/* Write-a-Line Title End */}
            {/* Write-a-Line Form Content Start */}
            <div className="form-container">
              <div className="form-content">
                {/* Reply Group Start */}
                <div className="reply-group">
                  <i className="fa-solid fa-face-smile-wink" />
                  <p className="reply-group__title">
                    <span>Done</span>!
                  </p>
                  <span className="reply-group__text">
                    Thanks for your message. We will get back as soon as
                    possible.
                  </span>
                </div>
                {/* Reply Group End */}
                {/* Write-a-Line Form Start */}
                <form className="form form-dark" id="writealine-form">
                  {/* Hidden Required Fields */}
                  <input
                    type="hidden"
                    name="project_name"
                    defaultValue="Mixio Coming Soon Template"
                  />
                  <input
                    type="hidden"
                    name="admin_email"
                    defaultValue="support@mixdesign.dev"
                  />
                  <input
                    type="hidden"
                    name="form_subject"
                    defaultValue="Write-a-Line Form Message"
                  />
                  {/* END Hidden Required Fields*/}
                  <input
                    className=""
                    type="text"
                    name="Name"
                    placeholder="Your Name*"
                  />
                  <input
                    className=""
                    type="email"
                    name="E-mail"
                    placeholder="Email Adress*"
                  />
                  <textarea
                    className=""
                    name="Message"
                    placeholder="A Few Words*"
                    defaultValue={""}
                  />
                  <span className="inputs-description">*Required fields</span>
                  <button className="btn btn-line">
                    <span className="btn-caption">Book A Demo</span>
                  </button>
                </form>
                {/* Write-a-Line Form End */}
              </div>
            </div>
            {/* Write-a-Line Form Content End */}
          </div>
        </div>
        </div>
      </Fade>
      {/* Write-a-Line Popup End */}
      {/* Custom HTML End */}
      {/* Root element of PhotoSwipe. Must have class pswp. */}
      <Fade bottom appear delay={500} >
      <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
        {/* Background of PhotoSwipe.
It's a separate element, as animating opacity is faster than rgba(). */}
        <div className="pswp__bg" />
        {/* Slides wrapper with overflow:hidden. */}
        <div className="pswp__scroll-wrap">
          {/* Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. */}
          {/* don't modify these 3 pswp__item elements, data is added later on. */}
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              {/*  Controls are self-explanatory. Order can be changed. */}
              <div className="pswp__counter" />
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              />
              <button
                className="pswp__button pswp__button--share"
                title="Share"
              />
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />
              {/* Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR */}
              {/* element will get class pswp__preloader-active when preloader is running */}
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            ></button>
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            ></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
        </div>
  </Fade>
    </>
  );
}

export default App;
