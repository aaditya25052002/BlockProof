import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "45px",
          marginTop: "40px",
        }}
      >
        Select one to move ahead
      </h1>
      <section
        id="header"
        className="d-flex align-items-center  not-found-container"
        style={{ marginTop: "50px" }}
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft"
                  style={{ borderRight: "2px solid black" }}
                >
                  <img
                    // src="https://www.kindpng.com/picc/m/227-2270278_university-graduate-cartoon-hd-png-download.png"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTooeWqFIOtUMbW-uaYrllzWBsvt1QnQmHr2qqWz3Tkbb7LQOMdpeq65wVQSdbqI34opgU&usqp=CAU"
                    className="img-fluid-animated"
                    alt="homeimg"
                    style={{
                      height: "300px",
                      width: "300px",

                      borderRadius: "50%",
                    }}
                  />
                  <div className="mt-3">
                    <Link to="/certificates">
                      <Button
                        variant="dark"
                        style={{
                          marginLeft: "100px",
                        }}
                      >
                        Student
                      </Button>{" "}
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-lg-2 header-img animate__animated animate__fadeInUp">
                  <img
                    src="https://cdn5.vectorstock.com/i/1000x1000/41/34/cartoon-school-building-education-vector-15064134.jpg"
                    // src="https://i.gifer.com/1j64.gif"
                    className="img-fluid-animated"
                    alt="homeimg"
                    style={{
                      height: "300px",
                      width: "300px",
                      marginLeft: "150px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="mt-3">
                    <Link to="/main">
                      <Button
                        variant="dark"
                        style={{
                          marginLeft: "250px",
                        }}
                      >
                        Institutes
                      </Button>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
