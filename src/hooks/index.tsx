import React, { useState } from 'react';
import { Button } from 'antd'

export default (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(value => value + 1)}>+</Button>
      <Button onClick={() => setCount(value => value - 1)}>—</Button>
    </div>
  );
}
