import React from "react";
import PropTypes from 'prop-types';
import './MyDiv.css'

class MyDiv extends React.Component {
    render() {
        const { forwardedRef, title, backgroundColor} = this.props;
        return <div
            className="myDiv"
        >
            {(title) && <h1 ref={forwardedRef} style={{backgroundColor: backgroundColor}}>{title}</h1>}
            {this.props.children}
        </div>
    }
}

MyDiv.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string
};

MyDiv.defaultProps = {
    backgroundColor: "#000"
};

export default MyDiv