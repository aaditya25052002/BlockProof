import React, { Component } from "react";
import logo from "../logo.png";
import { Button } from "react-bootstrap";
import Banner from "./Banner";
import Alert from "react-bootstrap/Alert";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      found: "",
      cert: null,
    };
  }

  render() {
    console.log(this.props.certificates);
    return (
      <React.Fragment>
        <br></br>
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontSize: "45px",
          }}
        >
          Certificate Generation and Verification using{" "}
          <span style={{ color: "purple" }}>Polygon</span> Blockchain
        </h1>
        <br />
        <Banner />
        <div style={{ backgroundColor: "black", color: "white" }}>
          <br />
          <br />
          <br />
          <br />
          <br />

          <h3 style={{ textAlign: "center", color: "white", fontSize: "45px" }}>
            Verify Certificates
          </h3>

          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const res = await this.props.verifyCertificate(this.certid.value);
              console.log(res);
              if (res[0] === true) {
                window.alert("verified as valid certificate");
                this.setState({ found: "yes" }, () =>
                  console.log(this.state.found)
                );
              } else {
                window.alert("Warning !!! Invalid certificate ID");
                this.setState({ found: "no" });
              }
            }}
          >
            <div class="mb-3">
              <input
                placeholder="Enter Certificate ID to search"
                id="certid"
                style={{ width: "80%", margin: "auto" }}
                type="text"
                class="form-control"
                ref={(input) => {
                  this.certid = input;
                }}
              />
              <br />
              <center>
                <Button variant="success" type="submit">
                  Verify
                </Button>
                <h5>{this.state.found}</h5>
                {this.state.found === "yes" && (
                  <h5>Verified as valid certificate</h5>
                )}
                {this.state.found === "no" && <h5>Invalid certificate ID</h5>}
              </center>
            </div>
          </form>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
