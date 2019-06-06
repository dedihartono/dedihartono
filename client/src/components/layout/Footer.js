import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer indigo darken-2 center-on-small-only pt-0 mt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-5 flex-center">
                <a className="px-3">
                  <i className="fa fa-facebook fa-lg white-text" />
                </a>
                <a className="px-3">
                  <i className="fa fa-twitter fa-lg white-text" />
                </a>
                <a className="px-3">
                  <i className="fa fa-google-plus fa-lg white-text" />
                </a>
                <a className="px-3">
                  <i className="fa fa-linkedin fa-lg white-text" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container-fluid">
            <p>
              &copy; <a href="/">Material Landing</a> - Design:{" "}
              <a href="https://templateflip.com/" target="_blank">
                TemplateFlip
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
