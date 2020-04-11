import React from "react";

function Contact() {
  return (
    <>
      <div className="card my-4">
        <div className="card-body d-flex justify-content-center card-header">
          <h1 className="card-title">My Contact Info</h1>
        </div>

        <div className="col-md-12">
          <div className="card-body" style={{ height: "500px" }}>
            <p>
              <i className="fa fa-home fa-2x"></i> Home # 38, Suite 54 Epzebth
              Street
            </p>
            <p>
              <i className="fa fa-phone fa-2x"></i> +1 503 268 3766
            </p>
            <p>
              <i className="fa fa-envelope fa-2x"></i> nesimi018@yahoo.com
            </p>
            <p>
              <a
                href="https://drive.google.com/file/d/1kw8ge0vy0nnGsGwfIPHwPmKXLzdI1mq_/view?usp=sharing"
                target="blank"
              >
                <i className="fa fa-download fa-2x"></i> Download My Resume
              </a>
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
