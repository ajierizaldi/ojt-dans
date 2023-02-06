import { useState, useEffect } from 'react';

const IniUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className='p-3'>
      <button
        onClick={() => setCount(count + 1)}
      >Click : {count}
      </button>
    </div>
  )
}

export default IniUseEffect