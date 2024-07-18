import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import "../components/styles/Matrix.css";

const Matrix = () => {
  const [clicks, setClicks] = useState([]);
  const [lastClicked, setLastClicked] = useState(null);
  const [allClicked, setAllClicked] = useState(false);

  useEffect(() => {
    if (clicks.length === 9) {
      setAllClicked(true);
    } else {
      setAllClicked(false);
    }
  }, [clicks]);

  const handleClick = (index) => {
    if (!clicks.includes(index)) {
      const newClicks = [...clicks, index];
      setClicks(newClicks);
      if (newClicks.length === 9) {
        setLastClicked(index);
      }
    }
  };

  const getColor = (index) => {
    if (lastClicked !== null) {
      return "orange";
    }
    return clicks.includes(index) ? "green" : "white";
  };

  const handleReset = () => {
    setClicks([]);
    setLastClicked(null);
    setAllClicked(false);
  };

  return (
    <div className="matrix">
      <Row gutter={[8, 8]}>
        {[...Array(9)].map((_, index) => (
          <Col span={8} key={index}>
            <Button
              className="box"
              style={{ backgroundColor: getColor(index) }}
              onClick={() => handleClick(index)}
            />
          </Col>
        ))}
      </Row>
      {allClicked && (
        <div style={{ marginTop: "20px", width: "100%" }}>
          <Button
            type="primary"
            onClick={handleReset}
            style={{
              width: "100%",
              fontSize: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="reset-button"
          >
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};

export default Matrix;
