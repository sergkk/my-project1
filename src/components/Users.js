import React, {Component} from "react";
import User from './User';


export default function Users () {
  return (
     <div className="right">
      <User
           src='../img/user1.jpg'
           alt='jkll'
           name='Scot'/>
           <div className="users_block" >
             <User
               src='../img/user2.jpg'
               alt='afdgdg'
               name='Scot'
               min/>
             <User
               src='../img/user3.jpg'
               alt='afdgdg'
               name='Scop'
               min/>
             <User
               src='../img/user4.jpg'
               alt='afdgdg'
               name='Allu'
               min/>
             <User
               src='../img/user5.jpg'
               alt='afdgdg'
               name='Scojkklt'
               min/>
           </div>
     </div>
  )
};