const UserDetail = (user) => {

  return ( 
    <span className="user-detail">
      {user.user.name}
    </span>
  );
}

export default UserDetail;