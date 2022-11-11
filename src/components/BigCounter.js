import React, {memo} from 'react'

function  BigCounter({count}){
  return (
    <div className='max-w-sm mx-auto rounded-md shadow-md p-8 text-center'>
        <p>Count:</p>
        <p className='text-5xl'>{count}</p>
    </div>
  )
}

export default memo(BigCounter);
