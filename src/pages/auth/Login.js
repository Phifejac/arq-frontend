
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
} from "reactstrap";

import { login } from "../../api/http"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      username: "",
      password: "",
      incorrectLogin : false
    };
  }
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }

  verifyLogin = async () => {
    this.setState({ loading : true })
    const loginResult = await login(this.state.username, this.state.password)
    if (loginResult.jwt) {
      this.props.history.push("/admin/home")
      this.setState({ loading : false })
    } else {
      this.setState({ incorrectLogin : true, loading: false })
    }
  }

  render() {
    return (
      <div className="login-page">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form action="" className="form" method="">
                <Card className="card-login">
                  <CardHeader>
                    <CardHeader>
                      <h3 className="header text-center">Login</h3>
                    </CardHeader>
                  </CardHeader>
                  <CardBody>
                    <InputGroup onChange={(e)=> this.setState( {username : e.target.value} )}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText onChange={()=> console.log("this was changed")}> 
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Username" type="email" style={{color:'black'}}/>
                    </InputGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-key-25" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={(e)=> this.setState( {password : e.target.value} )}
                        placeholder="Password"
                        type="password"
                        autoComplete="off"
                        style={{color:'black'}}
                      />
                    </InputGroup>
                    <br />
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="btn-round mb-3"
                      color="primary"
                      href="#pablo"
                      onClick={() => this.verifyLogin()}
                    >
                      {!this.state.loading ? "Login" : <i
                                    className="fa fa-spinner fa-spin"
                                    style={{ marginRight: "5px" }}
                                />}
                    </Button>
                    {this.state.incorrectLogin && <span style={{ color: "red", textAlign:"center", width:"100%", alignSelf:"center"}}>Incorrect Username or Password</span>}
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Row>
        </Container>
        <div
          className="full-page-background"
          style={{
            backgroundImage: `linear-gradient(to right, #4A8FE290, #1070e690, #1070e6)`,
          }}
        />
      </div>
    );
  }
}

export default Login;
