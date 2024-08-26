import React, {Component} from "react";

const User = (props) => {
  const {min, src, alt, name } = props;

  return (
    <a href="#" className={this.props.min ? "user_min" : 'user'}>
       <img src={src} alt= {alt} ></img>
       <div>{name}</div>
    </a>
  )
}

export default User;