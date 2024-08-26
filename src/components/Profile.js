import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
    return (
        <div className="container profile" >
            <User src='../img/user1.jpg'
                  alt='man'
                  name='JKLL'/>
            <Palette/>
        </div>
    )
}
export default Profile;