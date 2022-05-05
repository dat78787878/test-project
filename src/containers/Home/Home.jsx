import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="flex text-end home">
        <Link to="/register">
          <Button variant="success" className="me-3">
            REGISTER
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="success" type="submit">
            LOGIN
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
