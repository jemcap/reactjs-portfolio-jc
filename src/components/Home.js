import React from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="wrapper__jumbotron">
          <div className="jumbotron__content">
            <h1>Joshua Emmanuel Capito</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <div className="d-flex gap-2">
              <p>
                <Button bsStyle="primary">Learn more</Button>
              </p>
              <p>
                <Button bsStyle="secondary">Learn more</Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
