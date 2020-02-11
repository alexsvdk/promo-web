import React from "react";
import './Menu.css'

function Menu(props) {

    const items=props.menu.map( (item, id) => <li> <a onClick={() => props.scrollTo(id)} className={item.className}>{item.name}</a></li>)

    return (
        <header>
            <ul>
                {items}
                <li className="right" style={{visibility:"hidden"}}> <a onClick={() => props.scrollTo(3)} >О сайте</a></li>
            </ul>
        </header>
    )
}

export default Menu