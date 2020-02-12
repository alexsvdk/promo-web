import React from 'react';
import './App.css';
import Menu from "./old/Menu";
import MyDiv from "./containers/MyDiv";
import Home from "./old/Home";
import Duty from "./old/Duty";
import Punish from "./old/Punish";
import Contacts from "./old/Contacts";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {name: "Главная", className: "active",ref: React.createRef(), bc: "#000000", child: <Home/>},
                {name: "Обязанности", className: "", ref: React.createRef(), bc: "#140014" },
                //{name: "Штрафы", className: "", ref: React.createRef(), bc: "#120003"},
                {name: "Контакты", className: "right ", ref: React.createRef(), bc: "#001404"}
            ]
        };

        this.scrollTo = this.scrollTo.bind(this);
        this.menuOffset = 44;
    }
    render() {
          const {menu} = this.state;
          return (
              <div className="Back">
                  <div className="App">
                      <Menu scrollTo={this.scrollTo} menu={menu} setOffset={offset => this.menuOffset=offset}/>
                      {menu.map(item =>
                          <MyDiv
                              forwardedRef={item.ref}
                              title={item.name}
                              backgroundColor={item.bc}
                      >
                              {item.child}
                          </MyDiv>
                      )}
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
            window.scrollTo(0, menu[id].ref.current.offsetTop-this.menuOffset);
            /*
            menu[id].ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            */

            return {menu: menu}
        })
  }


}

export default App;
