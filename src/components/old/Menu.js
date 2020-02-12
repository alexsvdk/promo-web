import React from "react";
import './Menu.css'

class Menu extends React.Component{

    constructor(props) {
        super(props);
        this.href = React.createRef()
    }

    render() {

        const items=this.props.menu.map( (item, id) => <li
            className={item.className}
            key={id}
        >
            <a onClick={() => this.props.scrollTo(id)} className={item.className}>{item.name}</a>
        </li>);

        return (
            <header ref={this.href}>
                <ul>
                    {items}
                </ul>
            </header>
        )
    }

    componentDidMount() {
        this.href.current.clientWidth>600 ?
        this.props.setOffset(this.href.current.clientHeight) : this.props.setOffset(0);
    }


}

export default Menu