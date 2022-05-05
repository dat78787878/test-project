import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/login/actions';
import { ThemeContext } from '../../contexts/ThemeContext';
// import { refreshToken } from '../../redux/usedTime/api';

const TitleTodo = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
  };
  // const handleToken = () => {
  //   const token = JSON.parse(localStorage.getItem('user'));
  //   refreshToken(token.refreshToken);
  // };
  const context = useContext(ThemeContext);

  return (
    <div className="titleTodo mb-2">
      <div className="title">TODO</div>
      <div className="button-logout">
        <Link to="/login">
          <Button variant="success" onClick={context.toggleTheme} className="me-3">
            Toggle
          </Button>
          <Button variant="success" onClick={handleLogout} className="me-3">
            LOGOUT
          </Button>
          {/* <Button variant="success" onClick={handleToken}>
            TEST TOKEN
          </Button> */}
        </Link>
      </div>
    </div>
  );
};

export default TitleTodo;
