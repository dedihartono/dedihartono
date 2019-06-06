import React, { Component } from "react";

export class Intro extends Component {
  render() {
    return (
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae iste.
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
    );
  }
}

export default Intro;
