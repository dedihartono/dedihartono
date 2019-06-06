import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"
            id="navbar"
          >
            <div className="container">
              <a className="navbar-brand" href="#">
                <strong>Material Landing</strong>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <a
                  className="btn btn-primary btn-rounded my-0"
                  href="https://templateflip.com/templates/material-landing"
                  target="_blank"
                >
                  Download
                </a>
              </div>
            </div>
          </nav>
          <section className="view hm-gradient" id="intro">
            <div className="full-bg-img d-flex align-items-center">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-md-10 col-lg-6 text-center text-md-left margins">
                    <div className="white-text">
                      <div className="wow fadeInLeft" data-wow-delay="0.3s">
                        <h1 className="h1-responsive font-bold mt-sm-5">
                          Your Success is Our Mission.
                        </h1>
                        <div className="h6">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rem repellendus quasi fuga nesciunt dolorum
                          nulla magnam veniam sapiente, fugiat! Commodi sequi
                          non animi ea dolor molestiae iste.
                        </div>
                      </div>
                      <br />
                      <div className="wow fadeInLeft" data-wow-delay="0.3s">
                        <a
                          className="btn btn-white dark-grey-text font-bold ml-0"
                          href="https://www.youtube.com/watch?v=60ItHLz5WEA"
                          target="_blank"
                        >
                          <i className="fa fa-play mr-1" /> View Demo
                        </a>
                        <a className="btn btn-outline-white" href="#">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </header>
        <div id="content">
          <section className="row no-gutters" id="features">
            <div className="col-lg-3 col-md-6 col-sm-12 deep-purple lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".1s">
                <i className="fa fa-line-chart fa-2x" />
                <div className="h5 mt-3">Agile Frameworks</div>
                <p className="mt-5">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 purple lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".3s">
                <i className="fa fa-industry fa-2x" />
                <div className="h5 mt-3">Corporate Strategy</div>
                <p className="mt-5">
                  Iterative approaches to corporate strategy foster
                  collaborative thinking to further the overall value
                  proposition
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 teal lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".5s">
                <i className="fa fa-users fa-2x" />
                <div className="h5 mt-3"> Workplace Diversity</div>
                <p className="mt-5">
                  Organically grow the holistic world view of disruptive
                  innovation via workplace diversity and empowerment.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 light-blue lighten-1 text-white">
              <div className="p-5 text-center wow zoomIn" data-wow-delay=".7s">
                <i className="fa fa-bullhorn fa-2x" />
                <div className="h5 mt-3"> Survival Strategies</div>
                <p className="mt-5">
                  Bring to the table win-win survival strategies to ensure
                  proactive domination.
                </p>
              </div>
            </div>
          </section>
          <section className="text-center py-5 grey lighten-4" id="about">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 pb-3">Why work with us?</h2>
                <p className="px-5 mb-5 pb-3 lead blue-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div className="row">
                <div
                  className="col-md-4 mb-r wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <i className="fa fa-dashboard fa-3x orange-text" />
                  <h3 className="h4 mt-3">Design</h3>
                  <p className="mt-3 blue-grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores nam, aperiam minima assumenda deleniti
                    hic.
                  </p>
                </div>
                <div
                  className="col-md-4 mb-r wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <i className="fa fa-comments-o fa-3x cyan-text" />
                  <h3 className="h4 mt-3">Feedback</h3>
                  <p className="mt-3 blue-grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores nam, aperiam minima assumenda deleniti
                    hic.
                  </p>
                </div>
                <div
                  className="col-md-4 mb-r wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <i className="fa fa-cubes fa-3x red-text" />
                  <h3 className="h4 mt-3">Execution</h3>
                  <p className="mt-3 blue-grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit maiores nam, aperiam minima assumenda deleniti
                    hic.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5" id="projects">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="text-center h1 my-4">Our best projects</h2>
                <p className="px-5 mb-5 pb-3 lead blue-grey-text text-center">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="row wow fadeInLeft" data-wow-delay=".3s">
                <div className="col-lg-6 col-xl-5 pr-lg-5 pb-5">
                  <img
                    className="img-fluid rounded z-depth-2"
                    src="img/kuala-lumpur.jpg"
                    alt="project image"
                  />
                </div>
                <div className="col-lg-6 col-xl-7 pl-lg-5 pb-4">
                  <div className="row mb-3">
                    <div className="col-1 mr-1">
                      <i className="fa fa-book fa-2x cyan-text" />
                    </div>
                    <div className="col-10">
                      <h5 className="font-bold">Education</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reprehenderit maiores nam, aperiam minima
                        assumenda voluptate velit.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1 mr-1">
                      <i className="fa fa-code fa-2x red-text" />
                    </div>
                    <div className="col-10">
                      <h5 className="font-bold">Technology</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reprehenderit maiores nam, aperiam minima
                        assumenda voluptate velit.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1 mr-1">
                      <i className="fa fa-money fa-2x deep-purple-text" />
                    </div>
                    <div className="col-10">
                      <h5 className="font-bold">Finance</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reprehenderit maiores nam, aperiam minima
                        assumenda voluptate velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row pt-5 wow fadeInRight" data-wow-delay=".3s">
                <div className="col-lg-6 col-xl-7 mb-3">
                  <div className="row mb-3">
                    <div className="col-1 mr-1">
                      <i className="fa fa-bar-chart fa-2x indigo-text" />
                    </div>
                    <div className="col-10">
                      <h5 className="font-bold">Marketing</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reprehenderit maiores nam, aperiam minima
                        assumenda voluptate velit.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1 mr-1">
                      <i className="fa fa-music fa-2x pink-text" />
                    </div>
                    <div className="col-10">
                      <h5 className="font-bold">Entertainment</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reprehenderit maiores nam, aperiam minima
                        assumenda voluptate velit.
                      </p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-1 mr-1">
                      <i className="fa fa-smile-o fa-2x blue-text" />
                    </div>
                    <div className="col-10">
                      <h5 className="font-bold">Communication</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reprehenderit maiores nam, aperiam minima
                        assumenda voluptate velit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-5 mb-3">
                  <img
                    className="img-fluid rounded z-depth-2"
                    src="img/san-francisco.jpg"
                    alt="project image"
                  />
                </div>
              </div>
            </div>
          </section>
          <section
            className="text-center py-5 indigo darken-1 text-white"
            id="pricing"
          >
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 pb-3">Our pricing plans</h2>
                <p className="px-5 mb-5 pb-3 lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  accusamus veniam.
                </p>
              </div>
              <div className="row wow zoomIn">
                <div className="col-lg-4 col-md-12 mb-r">
                  <div className="card card-image">
                    <div className="text-white text-center pricing-card d-flex align-items-center rgba-stylish-strong py-3 px-3 rounded">
                      <div className="card-body">
                        <div className="h5">Individual</div>
                        <div className="py-5">
                          <sup className="display-4">$</sup>
                          <span className="display-1">9</span>
                          <span className="display-4">/m</span>
                        </div>
                        <ul className="list-unstyled">
                          <li>
                            <p>
                              <strong>1</strong> person
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>10</strong> projects
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>100</strong> features
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>20GB</strong> storage
                            </p>
                          </li>
                        </ul>
                        <a className="btn btn-outline-white mt-5"> Buy now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-r">
                  <div className="card card-image">
                    <div className="text-white text-center pricing-card d-flex align-items-center rgba-teal-strong py-3 px-3 rounded">
                      <div className="card-body">
                        <div className="h5">Startup</div>
                        <div className="py-5">
                          <sup className="display-4">$</sup>
                          <span className="display-1">29</span>
                          <span className="display-4">/m</span>
                        </div>
                        <ul className="list-unstyled">
                          <li>
                            <p>
                              <strong>10</strong> person
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>100</strong> projects
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>200</strong> features
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>100GB</strong> storage
                            </p>
                          </li>
                        </ul>
                        <a className="btn btn-outline-white mt-5"> Buy now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 mb-r">
                  <div className="card card-image">
                    <div className="text-white text-center pricing-card d-flex align-items-center rgba-red-strong py-3 px-3 rounded">
                      <div className="card-body">
                        <div className="h5">Enterprise</div>
                        <div className="py-5">
                          <sup className="display-4">$</sup>
                          <span className="display-1">99</span>
                          <span className="display-4">/m</span>
                        </div>
                        <ul className="list-unstyled">
                          <li>
                            <p>
                              <strong>10+</strong> person
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Unlimited</strong> projects
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>Unlimited</strong> features
                            </p>
                          </li>
                          <li>
                            <p>
                              <strong>1TB</strong> storage
                            </p>
                          </li>
                        </ul>
                        <a className="btn btn-outline-white mt-5"> Buy now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5" id="team">
            <div className="container">
              <div className="wow fadeIn">
                <h2 className="h1 pt-5 pb-3 text-center">Our team members</h2>
                <p className="px-5 mb-5 pb-3 lead text-center blue-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  accusamus veniam.
                </p>
              </div>
              <div className="row mb-lg-4 center-on-small-only">
                <div
                  className="col-lg-6 col-md-12 mb-r wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="col-md-6 float-left">
                    <img
                      className="img-fluid rounded z-depth-1 mb-3"
                      src="img/woman-1.jpg"
                      alt="team member"
                    />
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="h4">Nicole West</div>
                    <h6 className="font-bold blue-grey-text mb-4">
                      Lead Designer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fa fa-twitter" />
                      <span className="ml-1">@nicolewest</span>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 mb-r wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="col-md-6 float-left">
                    <img
                      className="img-fluid rounded z-depth-1 mb-3"
                      src="img/woman-2.jpg"
                      alt="team member"
                    />
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="h4">Hannah Cruz</div>
                    <h6 className="font-bold blue-grey-text mb-4">
                      Photographer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fa fa-twitter" />
                      <span className="ml-1">@hannahcruz</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row center-on-small-only">
                <div
                  className="col-lg-6 col-md-12 mb-r wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <div className="col-md-6 float-left">
                    <img
                      className="img-fluid rounded z-depth-1 mb-3"
                      src="img/man-1.jpg"
                      alt="team member"
                    />
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="h4">Mark Hall</div>
                    <h6 className="font-bold blue-grey-text mb-4">
                      Web Developer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fa fa-twitter" />
                      <span className="ml-1">@markhall</span>
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 mb-r wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="col-md-6 float-left">
                    <img
                      className="img-fluid rounded z-depth-1 mb-3"
                      src="img/man-2.jpg"
                      alt="team member"
                    />
                  </div>
                  <div className="col-md-6 float-right">
                    <div className="h4">Vincent Harris</div>
                    <h6 className="font-bold blue-grey-text mb-4">
                      Web Developer
                    </h6>
                    <p className="grey-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur.
                    </p>
                    <a href="https://twitter.com" target="_blank">
                      <i className="fa fa-twitter" />
                      <span className="ml-1">@vincentharris</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="contact"
            style="background-image:url('img/panorama-3094696_1920.jpg');"
          >
            <div className="rgba-black-strong py-5">
              <div className="container">
                <div className="wow fadeIn">
                  <h2 className="h1 text-white pt-5 pb-3 text-center">
                    Contact us
                  </h2>
                  <p className="text-white px-5 mb-5 pb-3 lead text-center">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit, error amet numquam iure provident voluptate esse
                    quasi, veritatis totam voluptas nostrum quisquam eum porro a
                    pariatur accusamus veniam.
                  </p>
                </div>
                <div className="card mb-5 wow fadeInUp" data-wow-delay=".4s">
                  <div className="card-body p-5">
                    <div className="row">
                      <div className="col-md-8">
                        <form
                          action="https://formspree.io/youremail@example.com"
                          method="POST"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="md-form">
                                <input
                                  className="form-control"
                                  id="name"
                                  type="text"
                                  name="name"
                                  required="required"
                                />
                                <label for="name">Your name</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="md-form">
                                <input
                                  className="form-control"
                                  id="email"
                                  type="text"
                                  name="_replyto"
                                  required="required"
                                />
                                <label for="email">Your email</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="md-form">
                                <input
                                  className="form-control"
                                  id="subject"
                                  type="text"
                                  name="subject"
                                  required="required"
                                />
                                <label for="subject">Subject</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="md-form">
                                <textarea
                                  className="md-textarea"
                                  id="message"
                                  name="message"
                                  required="required"
                                />
                                <label for="message">Your message</label>
                              </div>
                            </div>
                          </div>
                          <div className="center-on-small-only mb-4">
                            <button
                              className="btn btn-indigo ml-0"
                              type="submit"
                            >
                              <i className="fa fa-paper-plane-o mr-2" /> Send
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-4">
                        <ul className="list-unstyled text-center">
                          <li className="mt-4">
                            <i className="fa fa-map-marker indigo-text fa-2x" />
                            <p className="mt-2">
                              140, City Center, New York, U.S.A
                            </p>
                          </li>
                          <li className="mt-4">
                            <i className="fa fa-phone indigo-text fa-2x" />
                            <p className="mt-2">+ 01 234 567 89</p>
                          </li>
                          <li className="mt-4">
                            <i className="fa fa-envelope indigo-text fa-2x" />
                            <p className="mt-2">contact@company.com</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
