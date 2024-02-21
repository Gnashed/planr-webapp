import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <>
      <h1>Planr</h1>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center planr-landing-page-bg"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h2>The only tool you will need for guiding the next generation.</h2>
        <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
          Get started
        </Button>
      </div>
    </>
  );
}

export default Signin;
