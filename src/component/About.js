import React from 'react'
import "../css/About.css"
export default function About() {
  return (
    <div><section>
      <div id="about-section1" className="containerabout">
        <div className="row">
          <div className="col-lg-4 col-sm-10" style={{ paddingTop:"4rem",paddingLeft:"4rem"} }>
            <img
              className="img-responsive"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAdeY_DTyZMaaLfaNg82XF_1mE_EVmlNbrg&usqp=CAU"
              style={{
                width: "-webkit-fill-available",
                borderRadius: 30,
                marginTop: "px"
              }}
            />
          </div>
          <div className=" about-section col-lg-7 col-sm-12 mt-5">
            <h1>About Us</h1>
            <br />
            <p id="fs-3" className="fs-3">
              The main objective of A.E.S is help factories and industrial stores
              get the products and services of electrical industries that are
              required related to industrial field
            </p>
            <p id="fs-3" className="fs-3">
              by making a connection between companies, factories and industries
              around the city that's by providing them with a roadmap
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
