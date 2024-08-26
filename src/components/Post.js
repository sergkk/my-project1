import React, {Component} from "react";
import User from './User';

export default class Post extends Component {
     render() {
       return(
        <div className="post">
          <User src='' alt='' name='' min />
          <img src= {this.props.src} alt={this.props.alt}></img>
          <div className="post_name">
            some account
          </div>
          <div className="post_descr">
            skamflk;;;;;;;;;;;;;;;;;;;;      
          </div>
        </div>
       );
     }
}