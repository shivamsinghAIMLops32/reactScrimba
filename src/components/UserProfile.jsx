import React from "react";
import PropTypes from "prop-types";
const UserProfile = ({ user,children }) => {
  return (
    <>
      <p>name is { user.name}</p>
      <p>age is {user.age}</p>
      <p>email is {user.email}</p>
      <p>{children}</p>
      <br />
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