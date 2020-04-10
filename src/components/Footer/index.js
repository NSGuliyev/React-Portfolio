import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer className=" fixed-bottom page-footer font-small stylish-color-dark pt-3">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/nasimi.guliyev" target="blank" className="btn-floating btn-fb mx-1" >
                <i className="fab fa-facebook fa-3x"> </i>
              </a>
            </li>

            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/nasimi-guliyev-2983b9197/"  target="blank" target="blank" className="btn-floating btn-li mx-1">
                <i className="fab fa-linkedin fa-3x"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/NSGuliyev" target="blank" className="btn-floating btn-tw mx-1">
                <i className="fab fa-github fa-3x"> </i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;