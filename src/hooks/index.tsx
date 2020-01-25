import React, { useState } from 'react';
import { Button } from 'antd'

export default (): JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
    </div>
  );
}
