import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { giam, incrementByAmount, tang } from '../features/counter/counter_slice'

function Count() {
    const dispatch = useDispatch()
    const [value, setValue] = useState(1)
   const temptData = useSelector((state)=>state.counter)
   const increment = () => {
    const parsedValue = parseInt(value);
    if (parsedValue > 0) {
      dispatch(tang({ value: parsedValue }));
    }
  };
    const decrement = () => {
        dispatch(giam())
    }
    const tempt = () => {
        dispatch(incrementByAmount({ value }))
    }
    return (
        <div>

            <div className='flex justify-around w-fit'>
                <button onClick={increment} className=' h-12 w-8 border-2'>
                    +
                </button>
                <input  className='h-12 w-10 border-2 pl-2' type='text' value={temptData.value}  />

              
                <button onClick={decrement} className=' h-12 w-8 border-2'>
                    -
                </button>
            </div>
        </div>
    )
}

export default Count