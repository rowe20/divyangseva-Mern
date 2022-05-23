import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signIn.css'
import { SignContext } from '../../context/SignContext'
import { Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  
  } from 'reactstrap'
import SignInOutHero from '../HeroSection/SignInOutHero';
const Login = () => {

  const signstatusCheck = useContext(SignContext);
  let navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword]= useState("")

 const user = {
  email:email,
  password:password
};

const authenticate = (e) =>{
    e.preventDefault();

    axios.post("/api/login",user)
    .then((res)=>{
      if(res.status === 200){
        console.log(res.data)
        // alert("Welcome Back "+res.data.data);
        signstatusCheck.setsignStatus("loggedin")
        navigate('/')
        
      }
      else{
        alert("wrong credentials");
      }
    })
}


  return (
    <Container >
    <Row>
      <Col xs="3" md='1'/>
      <Col xs="12" md='auto'>
          <Form onSubmit={authenticate}>
            <FormGroup className="text-center">
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                id="Email"
                name="email"
                placeholder="email"
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup className="text-center">
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password"
                type="password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                required
              />
            </FormGroup>
            <Container style={{
              display:'flex',
              justifyContent:'center'
            }}>
                <Button className="text-center" type='submit' color='success'>
                  Login
                </Button>
            </Container>
            </Form>
          
      
      </Col>
      <Col xs="3" md='1'/>
    </Row>
  </Container>
  )
}

export default Login