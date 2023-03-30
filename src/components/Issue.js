import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Card, CardContent, CardHeader } from "@material-ui/core/";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const WhiteTextTypography = withStyles({
  root: {
    color: "darkblue",
  },
})(Typography);

const ipfsClient = require("ipfs-http-client");

const projectId = process.env.REACT_APP_PROJECT_ID;
const projectSecret = process.env.REACT_APP_PROJECT_SECRET;
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const client = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

class Issue extends Component {
  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.filesSelected) {
      const reader = new window.FileReader();
      reader.readAsArrayBuffer(this.fileinput.current.files[0]);
      reader.onloadend = () => {
        this.setState({ buffer: Buffer(reader.result) });
      };
      client.pin
        .add(this.state.buffer)
        .then((res) => {
          console.log(res);
        })
        .then((result) => {
          //this.props.issueCertificate( "https://"+result.data.value.cid+"/"+result.data.value.files[0].name,this.recepient.current.value, this.descinput.current.value)
          console.log(result);
        });
    }
    this.props.issueCertificate(
      this.linkinput.current.value,
      this.recepient.current.value,
      this.descinput.current.value
    );
  };

  constructor(props) {
    super(props);
    this.fileinput = React.createRef();
    this.recepient = React.createRef();
    this.descinput = React.createRef();
    this.linkinput = React.createRef();

    this.nameinput = React.createRef();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      filesSelected: false,
      buffer: null,
      isUser: false,
      user: null,
      type: "Institution",
    };
  }

  handleChange = (event) => {
    this.setState({ type: event.target.value });
  };

  componentWillReceiveProps() {
    this.props.users.map((user) => {
      if (user.userAddress == this.props.account) {
        this.setState({ isUser: true });
        this.setState({ user });
      }
    });
  }

  render() {
    if (this.state.isUser) {
      return (
        <React.Fragment>
          <br />
          <br />
          <center>
            <Typography
              component="h5"
              variant="h3"
              align="center"
              color="inherit"
              gutterBottom
            >
              Generate/Mint Certificate
            </Typography>

            <h5>Issuing Institution: {this.state.user.name}</h5>

            <center>
              <div
                style={{
                  width: 700,
                  padding: "10px",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  backgroundColor: "white",
                }}
              >
                <div style={{ width: 600 }}>
                  <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                    <div class="mb-3 mt-4">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        ref={this.recepient}
                        placeholder="Enter the Address of the Recepient"
                        required
                      />
                    </div>
                    <br />

                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        ref={this.descinput}
                        placeholder="Enter a Description for the Certificate"
                        required
                      />
                    </div>

                    <br />

                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        ref={this.linkinput}
                        placeholder="Enter link to the certificate"
                      />
                    </div>

                    <h4 style={{ textAlign: "center", fontSize: "1.5rem" }}>
                      OR
                    </h4>

                    <div class="mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="formFile"
                        ref={this.fileinput}
                        onChange={(event) => {
                          event.preventDefault();
                          if (this.fileinput.current.files[0]) {
                            this.setState({ filesSelected: true });
                          }
                        }}
                      />
                    </div>
                    <br />
                    <br />

                    <button type="submit" class="btn btn-dark mb-3">
                      Start minting
                    </button>
                    <br />
                    <br />
                  </form>
                </div>
              </div>
            </center>
          </center>
        </React.Fragment>
      );
    } else {
      return (
        <div>
          <center>
            <br />
            <br />
            <h1 style={{ color: "white" }}>
              <strong>BlockProof</strong>
            </h1>

            <br />
            <br />
            <Typography component="h1" variant="h5">
              <h1 style={{ color: "white" }}>
                Register New Institution/Student
              </h1>
            </Typography>
          </center>
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <div
              style={{
                marginTop: 80,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Card
                style={{
                  padding: "5px",
                  borderRadius: "10px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <CardContent>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const type = this.state.type;
                      const name = this.nameinput.current.value;
                      this.props.createUser(name, type);
                    }}
                  >
                    <center>
                      <div class="form-group mx-sm-5 mb-2">
                        <Select
                          labelId="demo-simple-select-label"
                          id="category"
                          ref={(input) => {
                            this.type = input;
                          }}
                          value={this.state.type}
                          onChange={this.handleChange}
                          required
                        >
                          <MenuItem value="Institution">Institution</MenuItem>
                          <MenuItem value="Student">Student</MenuItem>
                        </Select>
                        <br />
                        <br />
                        <input
                          type="text"
                          class="form-control"
                          id="exampleFormControlInput1"
                          ref={this.nameinput}
                          placeholder="Enter Name"
                        />
                      </div>
                      <br />

                      <button type="submit" class="btn btn-dark mb-3">
                        Register
                      </button>
                    </center>
                  </form>
                </CardContent>
              </Card>
            </div>
          </Container>
        </div>
      );
    }
  }
}

export default Issue;
