import React from "react";

function About() {
  return (
    <>
      <div className="card my-4">
        <div className="card-body d-flex justify-content-center card-header">
          <h1 className="card-title" >Portfolio</h1>
        </div>
        <div className="row justify-content-center" style={{marginBottom: "50px"}}>

          {/* fist project */}
          <div class="card my-4 mx-4" style={{ width: "18rem" }}>
            <img
              src="images/TradingApp.png"
              class="card-img-top"
              alt="TradingApp"
            />

            <div class="card-body" >
              <h5 class="card-title  d-flex justify-content-center" style={{marginTop: "25px"}}  >Trading App</h5>
              <a href="https://ravil822.github.io/Project_1/" target="blank" className="d-flex justify-content-center">
              View Deployed Site
              </a>
              <a href="https://github.com/Ravil822/Project_1" target="blank" className="d-flex justify-content-center">
              View GitHub Repository
              </a>
            </div>
          </div>

          {/* second project */}
          <div class="card my-4 mx-4" style={{ width: "18rem" }}>
            <img
              src="images/Valentinos.jpg"
              class="card-img-top"
              alt=""
            />

            <div class="card-body" >
              <h5 class="card-title  d-flex justify-content-center" style={{marginTop: "25px"}}  >Valentino's Restaurant</h5>
              <a href="https://valentino-restaurant.herokuapp.com/" target="blank" className="d-flex justify-content-center">
              View Deployed Site
              </a>
              <a href="https://github.com/marco-carrillo/valentinos-restaurant" target="blank" className="d-flex justify-content-center">
              View GitHub Repository
              </a>
            </div>
          </div>
        
          {/* 3 project */}

          
           <div class="card my-4 mx-4" style={{ width: "18rem" }}>
            <img
              src="images/Note Taker.jpg"
              class="card-img-top"
              alt=""
            />

            <div class="card-body" >
              <h5 class="card-title  d-flex justify-content-center" style={{marginTop: "25px"}}  >Note Taker</h5>
              <a href="https://nsguliyev-note-taker.herokuapp.com/notes" target="blank" className="d-flex justify-content-center">
              View Deployed Site
              </a>
              <a href="https://github.com/NSGuliyev/Note-Taker" target="blank" className="d-flex justify-content-center">
              View GitHub Repository
              </a>
            </div>
          </div>
            {/* 4 project */}
            <div class="card my-4 mx-4" style={{ width: "18rem" }}>
            <img
              src="images/Password Generator.jpg"
              class="card-img-top"
              alt=""
            />

            <div class="card-body" >
              <h5 class="card-title  d-flex justify-content-center" style={{marginTop: "25px"}}  >Passwor Generator</h5>
              <a href="https://nsguliyev.github.io/Random-Password-Generator/" target="blank" className="d-flex justify-content-center">
              View Deployed Site
              </a>
              <a href="https://github.com/NSGuliyev/Random-Password-Generator" target="blank" className="d-flex justify-content-center">
              View GitHub Repository
              </a>
            </div>
          </div>

           {/* 5project */}
           <div class="card my-4 mx-4" style={{ width: "18rem" }}>
            <img
              src="images/Buget.jpg"
              class="card-img-top"
              alt=""
            />

            <div class="card-body" >
              <h5 class="card-title  d-flex justify-content-center" style={{marginTop: "25px"}}>Progressive-Budget</h5>
              <a href="https://immense-forest-00269.herokuapp.com/" target="blank" className="d-flex justify-content-center">
              View Deployed Site
              </a>
              <a href="https://github.com/NSGuliyev/Progressive-Budget" target="blank" className="d-flex justify-content-center">
              View GitHub Repository
              </a>
            </div>
          </div> {/* 6 project */}
            <div class="card my-4 mx-4" style={{ width: "18rem" }}>
            <img
              src=""
              class="card-img-top"
              alt=""
            />

            <div class="card-body" >
              <h5 class="card-title  d-flex justify-content-center" style={{marginTop: "25px"}}  ></h5>
              <a href="https://nsguliyev-note-taker.herokuapp.com/notes" target="blank" className="d-flex justify-content-center">
              View Deployed Site
              </a>
              <a href="https://github.com/NSGuliyev/Note-Taker" target="blank" className="d-flex justify-content-center">
              View GitHub Repository
              </a>
            </div>
          </div>

          
         
          
        </div>

        
        
      </div>
    </>
  );
}

export default About;
