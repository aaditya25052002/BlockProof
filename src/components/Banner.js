import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center  not-found-container"
        style={{ marginTop: "50px" }}
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft">
                  {/* //Your dream websites and instant apps awaits ! */}
                  <h2>Why Blockchain, why us?</h2>
                  <h9>
                    Blockchain technology has revolutionized the way we verify
                    and create certificates. Its unique features make it an
                    ideal solution for this purpose. One of the key benefits of
                    blockchain is its immutability. Once information is added to
                    the blockchain, it cannot be altered or deleted, ensuring
                    the integrity of the information contained in certificates.
                    Additionally, blockchain is a decentralized system, meaning
                    that there is no central authority controlling it, making
                    certificates more reliable and trustworthy. The transparency
                    and security features of blockchain also make it an
                    attractive option for certificate verification. All
                    participants in the network can see the transactions and
                    certificates that have been added to the ledger, ensuring
                    their authenticity.
                  </h9>
                  <div className="mt-3">
                    <Link to="/issue">
                      <Button variant="success">Generate certificate</Button>{" "}
                    </Link>
                    <Link to="/certificates">
                      {" "}
                      <Button variant="info">History</Button>{" "}
                    </Link>
                  </div>
                </div>

                <div className="col-md-6 order-1 order-lg-2 header-img animate__animated animate__fadeInUp">
                  <img
                    src="https://i.gifer.com/7sYl.gif"
                    className="img-fluid-animated"
                    alt="homeimg"
                    style={{ height: "300px", marginLeft: "150px" }}
                  />
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
