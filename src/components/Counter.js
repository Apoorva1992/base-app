import React, { useState } from 'react'

import BigCounter from './BigCounter';
import Decorator from './Decorator'

export default function Counter() {
    const [count,setCount] = useState(0);
  return (
    <div>
        <main>
            <BigCounter count={count} />
            <button onClick={()=> {
                setCount(count + 1)
            }}>Increment</button>
            <Decorator />
        </main>
    </div>
  )
}
