import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
//import { useAuth } from "../context/AuthContext";

const LogOut = () => {
  const [error, setError] = useState("");
  const history = useHistory();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong>

          <Link to="/updateProfile" className="btn btn-primary w-100 mt-3">
            updateProfile
          </Link>
          <div className="w-100 text-center mt-2">
            <Button variant="link">logout</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default LogOut;
