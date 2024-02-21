import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div className="planr-landing-page-bg">
      <h1>Planr</h1>
      <h2>The only tool you will need for guiding the next generation.</h2>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Get started
      </Button>
    </div>
  );
}

export default Signin;
