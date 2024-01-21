import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={5000}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={5000}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const DecimalStep = () => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (newValue) => {
      setInputValue(newValue);
    };
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={0}
            max={5000}
            onChange={onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={5000}
            style={{
              margin: '0 16px',
            }}
            value={inputValue}
            onChange={onChange}
          />
        </Col>
      </Row>
  );
};
const Sliderr = () => (
  <Space
    style={{
      width: '100%',
    }}
    direction="vertical"
  >
    <IntegerStep />
    <DecimalStep />
  </Space>
);
export default Sliderr;