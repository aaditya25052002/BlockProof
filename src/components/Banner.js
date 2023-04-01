import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";
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
              <div className="row banner-div">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft anim-para">
                  {/* //Your dream websites and instant apps awaits ! */}
                  <h2>Generating Certificates on Blockchain</h2>
                  <h9>
                    Blockchain technology has revolutionized the way we verify
                    and create certificates. Its unique features make it an
                    ideal solution for this purpose. One of the key benefits of
                    blockchain is its immutability. Once information is added to
                    the blockchain, it cannot be altered or deleted, ensuring
                    the integrity of the information contained in certificates.
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
                    // src="https://i.gifer.com/1j64.gif"
                    alt="homeimg"
                    className="img-fluid-animated anim-gif"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="header"
        className="d-flex align-items-center  not-found-container"
        style={{ marginTop: "100px" }}
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 d-flex flex-column justify-content-center animate__animated animate__fadeInLeft">
                  {/* //Your dream websites and instant apps awaits ! */}
                  <h3>zkEVM compatibility </h3>
                  <h9>
                    Zero-knowledge proofs (ZKPs) on Polygon offer a powerful
                    tool for verifying the authenticity of certificates while
                    preserving privacy. By leveraging ZKPs, a prover can
                    generate a proof of a statement's truth without revealing
                    any additional information beyond the statement. In the
                    context of certificates, this means that sensitive
                    information such as grades, exam scores, or personal data
                    can remain confidential while the certificate's authenticity
                    can be verified. This approach can be beneficial in
                    scenarios such as academic degrees or professional
                    certifications, where both parties need assurance of
                    authenticity without revealing sensitive information to each
                    other.
                  </h9>
                  <div className="mt-3">
                    <Button variant="success">Documentation</Button>{" "}
                  </div>
                </div>

                <div className="col-md-6 order-2 order-lg-1 header-img animate__animated animate__fadeInUp">
                  <img
                    // src="https://i.gifer.com/7sYl.gif"
                    src="https://i.gifer.com/1j64.gif"
                    className="img-fluid-animated anim-gif anim-giff"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
};
export default Banner;
