import React from 'react';
import './App.css';
import Menu from "./Menu";
import Home from "./Home";
import Footer from "./Footer";
import Duty from "./Duty";
import Punish from "./Punish";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            menu: [
                {name: "Главная", className: "active",ref: React.createRef()},
                {name: "Обязанности", className: "", ref: React.createRef()},
                {name: "Штрафы", className: "", ref: React.createRef()},
                {name: "Контакты", className: "right ", ref: React.createRef()}
            ]
        };
        this.scrollTo = this.scrollTo.bind(this);

    }
    render() {
      return (
          <div className="Back">
              <div className="App">

                  <Menu scrollTo={this.scrollTo} menu={this.state.menu}/>
                  <div ref = {this.state.menu[0].ref}>
                      <Home/>
                  </div>

                  <div ref = {this.state.menu[1].ref}>
                      <Duty/>
                  </div>

                  <div ref = {this.state.menu[2].ref}>
                      <Punish/>
                  </div>

                  <div ref = {this.state.menu[3].ref}>
                      <p>
                          alex.svdk@gmail.com
                      </p>
                  </div>

                  <Footer/>
              </div>
          </div>
      );
  }

  scrollTo(id){
        this.setState(oldstate => {
            const menu = oldstate.menu.slice();
            const old = menu.find(val => val.className.includes("active"));
            old.className = old.className.replace("active","");
            menu[id].className+="active";
            menu[id].ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            return {menu: menu}
        })
  }


}

export default App;
