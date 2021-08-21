/*import React from 'react'
import './App.css';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <Welcome/>
    </div>
  );
}
export default App;*/

/*import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
class App extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hai divya welcome to react world
        </p>
        <Button>Test it</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}
export default App;*/

/*import React from 'react'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import './App.css';
function App(){
  return(
    <div className = "App">
      <Greet/>
      <Welcome/>
    </div>
  )
}
export default App;*/

/*import React from 'react'
import Welcome from './components/Welcome'
import './App.css';
function App(){
  return(
    <div className = "App">
      <Welcome/>
    </div>
  )
}
export default App;*/

/*import MyComponent from './components/Greet'
import React, { Component } from 'react'
import './App.css';
class App extends Component{
  render(){
  return(
    <div className = "App">
      <MyComponent/>
    </div>
  );
}
}
export default App;*/
/*import MyComponent from './components/Welcome'
import React, { Component } from 'react'
import './App.css';
class App extends Component{
  render(){
  return(
    <div className = "App">
      <MyComponent/>
    </div>
  );
}
}
export default App;*/

/*import { Component } from 'react';
import Message from './components/Message';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <Message/>
      </div>
    )
  }
}
export default App;*/
/*import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'; 
import Welocome from './components/Welcome';
import Hello from './components/Hello';
class App extends Component {
  render(){
    return(
      <div className = 'App'>
        {/*<Greet/>*/
        /*<Welocome/>*/
        /*<Hello/>
      </div>
    );
  }
}
export default App;*/
//import React from 'react'
/*import React from 'react';
import Greet from './components/Greet';
function App(){
  return(
    <div className = "APP">
          <Greet/>
    </div>
  )
}
export default App*/

/*import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <Greet Name = "gajalaxmi paramaivam" hus = "karthik yadav"/>
        <Greet Name = "sunitha ankaboina" hus = "laxmi narayana"/>
        <Greet Name = "anitha korlana" hus = "manoj"/>
      </div>
    );
  }
}
export default App;*/

/*import React, {Component} from 'react';
import './App.css';
import Greet from './components/Greet';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <Greet name = "Rama koti yadav" native = "rani peta">
          <p>this is children</p>
        </Greet>
        <Greet name = "karthik yadav" native = "godalam">
          <p>son</p>
        </Greet>
        <Greet name = "krishna yadav" native = "godalam">
          <p>father</p>
        </Greet>
      </div>
    )
  }
}
export default App;*/
//class component..................
/*import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <Welcome name = "mimordica charantica"/>
        <Welcome name  = "luffa aegyptica"/>
        <Welcome name = "luffa accutangula"/>
      </div>
    )
  }
}
export default App;*/

//states
/*import React, {Component} from 'react'
import './App.css';
import Message from './components/Message';
class App extends Component{
  render(){
    return(
      <div className = "App">
      <Message/>
      </div>
    )
  }
}
export default App;*/

/*import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <Hello Scooty = "Suzuki Access"/>
      </div>
    )
  }
}
export default App;*/
/*import React,{Component} from 'react';
import './App.css';
import Greet from './components/Greet'
class App extends Component{
  render(){
    return(
      <div className = "App">
      <Greet myByk="RoyalEnfield"/>
      </div>
    )
  }
}
export default App;*/

/*import React,{Component} from 'react'
import './App.css';
import Greet from './components/Greet';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <Greet name = "karthik yadav">
          <p>MSc botany andhraUniversity</p>
        </Greet>
      </div>
    )
  }
}
export default  App;*/
/*import React,{Component} from 'react'
import Hello from './components/Hello'
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <h1>MSc Botany andhraUniversity</h1>
        <Hello name = "karthik yadav"/>
      </div>
    )
  }
}
export default App;*/
//another way of assigning the variable to const...................
/*import React, {Component} from 'react'
import Hello from './components/Hello'
import './App.css';
class App extends Component{
  render(){
    const flower = "cyathium vertecellaster"
    return(
      <div className = "App">
        <Hello specialInflo = {flower}/>
        <h1>special type of inflorescence</h1>
      </div>
    )
  }
}
export default App;*/

/*import React,{Component} from 'react'
import Hello from './components/Hello'
import './App.css';
class App extends Component{
  render(){
    const special = {fruit:"pyrus malus"}
    return(
      <div className = "App">
        <Hello fruit= {special}/>
      </div>
    )
  }
}
export default App;*/
/*import React, { Component } from 'react'
import Testing from './components/Testing';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">    
        <Testing/>
      </div>
    )
  }
}
export default App;*/
//destruring in functional body
/*import React, {Component} from 'react'
import Greet from './components/Greet';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <Greet Name = "gajalaxmi paramaivam" hus = "karthik yadav"/>
      </div>
    );
  }
}
export default App;*/
//destructuring props in the class component
//in the render()
/*import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <Welcome name = "mimordica charantica"/>
        <Welcome name  = "luffa aegyptica"/>
        <Welcome name = "luffa accutangula"/>
      </div>
    )
  }
}
export default App;*/
//events handling with functional components...........................
/*import React from 'react'
import FunctionClick from './components/FunctionClick';
import './App.css';
function App(){
  return(
    <div className = "App">
      <FunctionClick/>
    </div>
  )
}
export default App*/
//eventHandling methods in class components.................................
/*import React,{Component} from'react'
import ClassClick from './components/ClassClick';
import './App.css'
class App extends Component{
  render(){
    return(
      <div className = "App">
        <ClassClick/>
      </div>
    )
  }
}
export default App;*/
//event bind method.......................
/*import React,{Component} from 'react';
import EventBind from './components/EventBind';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <EventBind/>
      </div>
    )
  }
}
export default App*/
//methods as props..............
/*import React,{Component} from 'react';
import ParentComponent from './components/ParentComponent';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <ParentComponent/>
      </div>
    )
  }
}
export default App*/
//conditional Re-rendering..........
/*import React,{Component} from 'react';
import UserGreeting from './components/UserGreeting';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <UserGreeting/>
      </div>
    )
  }
}
export default App*/
//List Rendering...
/*import React,{Component} from 'react';
import NameList from './components/NameList';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <NameList/>
      </div>
    )
  }
}
export default App*/
//Lists & keys......................
/*import React,{Component} from 'react';
import NameList from './components/NameList';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <NameList/>
      </div>
    )
  }
}
export default App*/
//index as key when rendering list......................
/*import React,{Component} from 'react';
import NameList from './components/NameList';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <NameList/>
      </div>
    )
  }
}
export default App*/
//Styling and CSS
/*import React,{Component} from 'react';
import Stylesheet from './components/Stylesheet';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
      <Stylesheet/>
      </div>
    )
  }
}
export default App*/

/*import React,{Component} from 'react';
import Stylesheet from './components/Stylesheet';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
      <Stylesheet primary = {false}/>
      </div>
    )
  }
}
export default App*/

/*import React,{Component} from 'react';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <Inline/>
      <Stylesheet primary = {true}/>
      </div>
    )
  }
}
export default App*/

/*import React,{Component} from 'react';
import  styles from './appStyles.module.css';
import './appStyles.css';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <h1 className = 'error'>Error</h1>
        <h1 className = {styles.success}>Success</h1>
      </div>
    )
  }
}
export default App*/
//form handling
/*import React,{Component} from 'react'
import Form from './components/Form'
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <Form/>
      </div>
    )
  }
}
export default App*/

//lifecycle methods
/*import React,{Component} from 'react';
import LifecycleA from './components/LifecycleA';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <LifecycleA/>
      </div>
    )
  }
}
export default App*/
//Fragments....................
/*import React,{Component} from 'react';
import FragmentDemo from './components/FragmentDemo';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <FragmentDemo/>
      </div>
    )
  }
}
export default App*/
//Tables
/*import React,{Component} from 'react';
import Table from './components/Table';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
        <Table/>
      </div>
    )
  }
}
export default App*/
//PureComponent
/*import React,{Component} from 'react'
import PureComp from './components/PureComp'
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
      <PureComp/>
      </div>

    )
  }
}
export default App*/
//parentComponent
/*import React,{Component} from 'react'
import ParentComp from './components/ParentComp';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = 'App'>
      <ParentComp/>
      </div>

    )
  }
}
export default App*/
//React.memo.....................
/*import React from 'react'
import ParentComp from './components/ParentComp';
import './App.css';
function App(){
  return(
    <div className = 'App'>
      <ParentComp/>
    </div>
  )
}
export default App*/
//refs
/*import React,{Component} from 'react';
import RefsDemo from './components/RefsDemo';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <RefsDemo/>
      </div>
    )
  }
}
export default App*/
//refs in classComponent.
/*import React,{Component} from 'react';
import FocusInput from './components/FocusInput';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <FocusInput/>
      </div>
    )
  }
}
export default App*/
//farwarding Refs
/*import React,{Component} from 'react';
import FRParentInput from './components/FRParentInput';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        <FRParentInput/>
      </div>
    )
  }
}
export default App*/
//React portals.................
/*import React,{Component} from 'react';
//import PortalDemo from './components/PortalDemo';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className = "App">
        {/*<PortalDemo/>*/
      /*</div>
    )
  }
}
export default App*/



//bootStrap with React.js
/*import React from 'react'
import './App.css';
function App(){
  return(
    <div className = 'App'>
      <div class="card" style={{width: +'18rem'}}>
  <img src="https://www.euractiv.com/wp-content/uploads/sites/2/2014/07/child_obesity.jpeg" class="card-img-top" alt=""/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.medicalnewstoday.com/articles/179316">Go somewhere</a>
  </div>
</div>
</div>
  )
}
export default App*/
/*import React from 'react'
function App(){
  return(
    <div className = "App">
<div class="list-group">
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value=""/>
    First checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value=""/>
    Second checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value=""/>
    Third checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value=""/>
    Fourth checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value=""/>
    Fifth checkbox
  </label>
</div>
    </div>
  )
}
export default App*/
/*import React from 'react';
import logo from './logo.svg';
import './App.css';
//import { Button } from 'bootstrap';
function  App(){
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hai karthik yadav welcome to react world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App*/
/*import React,{ Component } from 'react'
import logo from './logo.svg';
import './App.css';
import logo from './logo.svg';
import { Button } from 'bootstrap';
class App extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button>Test Button</Button>
        <p>
          Hai karthik yadav welcome to react world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}
export default App;*/
//reactBootStrap
/*import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstarp/dist/css/bootstarp.min.css'
class App extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hai karthik yadav welcome to react world
        </p>
        <Button>Test it</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}
export default App;*/
//adding css to ReactBootStrap
/*import React from 'react';
import logo from './logo.svg';
import './App.css';
//import 'bootstarp/dist/css/bootstarp.min.css';
import '/React/happie-world/src/App.css'
import {Container,Row,Col,Button,Alert,Breadcrumb,Card,Form} from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
function App(){
    return(
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Container>
      <Form>
        <Row  md>
          <Col md>
      <Form.Group>
       <Form.Label>Email Address</Form.Label>
       <Form.Control type = "email" placeholder = "Example@email.com"/>
       <Form.Text className = "text-muted"/>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type = "Password" placeholder = "password"/>
      </Form.Group>
      </Col>
      </Row>
      <Button variant = "success">Submit</Button>
      <p style = {{color:"red"}}>This is very confidential</p>
      </Form>
      <Card calssName = "mb-3"/>
      <Card.Img src  ="https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.6435-9/185667253_2961036227460744_4265200858603625241_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=-5x7XYhmzQMAX9lLqct&_nc_ht=scontent.fhyd14-1.fna&oh=a13b6193b777839aabe02102e6c9cd93&oe=60CDD934">

      </Card.Img>
      <Card.Body>
        <Card.Title>
          Card Example.
        </Card.Title>
        <Card.Text style = {{color : "yellow"}}>
        This is an example of ReactBootStrap Cards
        </Card.Text>
        <Button variant ="primary" >User Interface</Button>
        </Card.Body>
      <Button>Test it</Button>
      <Breadcrumb>
      <Breadcrumb.Item>Test</Breadcrumb.Item>
      <Breadcrumb.Item>Testing</Breadcrumb.Item>
      <Breadcrumb.Item active>Tested</Breadcrumb.Item>
      </Breadcrumb>
        <Alert variant="danger">this is a notice</Alert>
        <Alert variant="warning">this is a notice</Alert>
        <Alert variant="success">this is a notice</Alert>
        <p style = {{color:'yellowgreen'}}>
          Hai karthik yadav welcome to react world
        </p>
        </Container>
      </header>
    </div>
    );
}
export default App;*/
//form
/*import React,{Component} from 'react';
import Another from './components/Another';
import 'bootstrap/dist/css/bootstrap.css/';
import logo from './logo.svg';
import './App.css';
class App extends Component{
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hai karthik yadav welcome to react world
        </p>
        <Another/>
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}
export default App;*/
/*import React from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './MovieList';
import AddMovie from './AddMovie'
import { MovieProvider } from './MovieContext';
function App(){
  return(
    <MovieProvider>
    <div className = 'App'>
      <Nav/>
      <AddMovie/>
     <MovieList/>
    </div>
    </MovieProvider>
  );
}
export default App;*/


        
    
