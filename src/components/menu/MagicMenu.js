import React from "react";
import PropTypes from 'prop-types'
import BasicMenu from "./BasicMenu";
import DropdownMenu from "./DropdownMenu";
import './MagicMenu.css'

class MagicMenu extends React.Component {

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    render() {
        const w = window.innerWidth;
        if (w>600)
            return <BasicMenu fref={this.containerRef} menu={this.props.menu} scrollto={this.props.scrollTo}/>;
        else
            return <DropdownMenu fref={this.containerRef} menu={this.props.menu} scrollto={this.props.scrollTo}/>
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.containerRef.current)
            this.props.setOffset(this.containerRef.current.clientHeight);
    }

    menuList = (menu) => <ul className="menu">
        {menu.map((item, id) => <li className={item.className} key={id}>
            <a onClick={() => this.props.scrollTo(id)} className={item.className}>{item.name}</a></li>)}
    </ul>

}


MagicMenu.propTypes = {
    menu: PropTypes.array.isRequired,
    scrollTo: PropTypes.func,
    setOffset: PropTypes.func
};

export default MagicMenu;