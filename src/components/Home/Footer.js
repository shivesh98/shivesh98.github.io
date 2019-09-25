import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer id="myFooter">
          <div class="container">
            <div class="row">
              {/* <div class="col-sm-3 myCols">
                <h5>NAME</h5>
                <p>Shivesh Sharma</p>
              </div> */}
              <div class="col-sm-4 myCols">
                <h5>Email Address</h5>
                <p>sshivesh98@gmail.com</p>
              </div>
              <div class="col-sm-4 myCols">
                <h5>Phone Number</h5>
                <p>
                  +91-8628923861
                  <br />
                  +91-8209547492
                </p>
              </div>

              <div class="col-sm-4 myCols">
                <h5>Postal Address</h5>
                <p>
                  H.N.-27/317, Kaithunipole, Kota
                  <br />
                  Rajasthan, India
                  <br />
                  Pin - 324006
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div class="social-networks">
            <a
              href="https://twitter.com/Shivesh_26"
              target="_blank"
              rel="noopener noreferrer"
              class="twitter"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shiveshs98/"
              target="_blank"
              rel="noopener noreferrer"
              class="linkedin"
            >
              <i class="fa fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/shivesh98"
              target="_blank"
              rel="noopener noreferrer"
              class="github"
            >
              <i class="fa fa-github"></i>
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
