import React from "react";

class DropdownMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.title = React.createRef()
    }

    render() {
        const {menu, fref} = this.props;
        return <header className="dropdownMenu" ref = {fref} >
                <ul className="menu">
                    <li onClick={this.showMenu}><a ref={this.title}>Меню<i className="material-icons">keyboard_arrow_down</i></a></li>
                    {menu.map((item, id) => <li className={!this.state.visible? " hidden": ""} key={id} >
                            <a onClick={() => this.select(id)} className={item.className}>{item.name}</a></li>)}
                </ul>
        </header>
    }

    showMenu = () => {
        console.log("clicked");
        this.setState(old => {
            return {visible: !old.visible}
        })
    };

    select = (id) => {
        this.props.scrollto(id);
        this.showMenu();
        this.title.current.innerHTML=this.props.menu[id].name;
    }
}

export default DropdownMenu