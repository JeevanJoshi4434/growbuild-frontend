import React from "react"
import { Link } from "react-router-dom"
import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Mail, Lock, Check } from "react-feather"
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions"
import { connect } from "react-redux"
import { history } from "../../../../history"
import axios from "axios" 
class LoginJWT extends React.Component {
  state = {
    email: "demo@demo.com",
    password: "demodemo",
    remember: false,
    user:[]
  }

  handleLogin = async() => {
    const res = await axios.post(`${process.env.REACT_APP_PORT}/api/login`, {
      Headers:{
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Content-Type':'application/json'
      },
      email: this.state.email,
      password: this.state.password,
    })
    if(res.status === 200){
      history.push("/");
      this.setState({user:res.data});
    }else{
      alert("Error")
    }
      // const res = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: this.state.email,
      //     password: this.state.password,
      //   }),
      // })
      // if(res.status === 200){
      //   history.push("/");
      //   this.setState({user:res.json()});
      //   console.log(this.state.user);
      // }
  }
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          <Form >
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Mail size={15} />
              </div>
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                required
              />
              <div className="form-control-position">
                <Lock size={15} />
              </div>
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
                onChange={this.handleRemember}
              />
              <div className="float-right">
                <Link to="/pages/forgot-password">Forgot Password?</Link>
              </div>
            </FormGroup>
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/register")
                }}
              >
                Register
              </Button.Ripple>
              <Button.Ripple color="primary" onClick={()=>this.handleLogin()}>
                Login
              </Button.Ripple>
            </div>
          </Form>
        </CardBody>
      </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.login
  }
}
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT)
