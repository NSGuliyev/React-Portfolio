import React from "react";

function AboutMe() {
  return (
    <>
      <div className="card my-4">
        <div className="card-body d-flex justify-content-center card-header">
          <h1 className="card-title">About Me</h1>
        </div>

        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src="images/Nasimi Guliyev.jpg"
              className="card-img"
              alt="..."
            />
          </div>

          <div className="col-md-8">
            <div className="card-body" style={{height: "500px"}}>
              <p className="card-text">
                <h5>
                  {" "}
                  <br />
                  <p>
                    I'm Nasimi Guliyev. I got married my wife Parvin in 2016. So
                    far we have only one child. Her name is Naomi and She was
                    born in Portland, Oregon on 14th of December in 2017. We
                    live in downtown Richmond, VA where always fun and has lot
                    of restaraunts. We moved to Richmond on 1st of November in
                    2017.
                  </p>
                  <br />
                  <p>
                    By profession i am an Engineer, got my Bachelor degree at
                    the Azerbaijan State University of Oil and Industry.
                    Interesting fact about me is during my career i have never
                    worked as an engineer.
                  </p>
                  <br />
                  <p>
                    A few months ago I decided to change my career and attended
                    to coding bootcamp offered by Trilogy Education Services at
                    Richmond University of Richmond Coding Boot Camp.
                  </p>
                </h5>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
