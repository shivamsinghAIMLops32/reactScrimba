import React from "react";
import PropTypes from "prop-types";
const UserProfile = ({ user,children }) => {
  return (
    <>
    {user.isSubscribed ?
     <div> <p>{children}</p>
      <p>name is { user.name}</p>
      <p>age is {user.age}</p>
      <p>email is {user.email}</p>
      <br /></div>: null}
      </>
  );
};

export default UserProfile;

UserProfile.propTypes = {
    user : PropTypes.shape({
        name : PropTypes.string.isRequired,
        age : PropTypes.number.isRequired,
        email : PropTypes.string.isRequired
    })
}