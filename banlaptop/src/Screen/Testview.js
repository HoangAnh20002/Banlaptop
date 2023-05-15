import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { giam, tang} from '../features/counter/counter_slice'
import { productSlice } from '../features/product/product_slice'

function Testview() {
    const dispatch = useDispatch()
    const [value,setValue] = useState(0)
    const increment = ()=>{
        dispatch(tang ({value}) )
    }
    const decrement = ()=>{
        dispatch(giam())
    }
    const sanpham = useSelector((state)=>state.product)
    const{product}=sanpham
    console.log(product)

  return (
    <div>
        <input className='h-12 w-40 border-2' type='number' onChange={(e)=>setValue(e.target.value)}>
        </input>
        <button onClick={increment}>
                enter
            </button>
        <div className='flex justify-around'>
        <button onClick={increment} className=' h-5 w-5 bg-blue-300'>
            +
        </button>
        <button onClick={decrement} className=' h-5 w-5 bg-blue-300'>
            -
        </button>
        </div>
    </div>
  )
}

export default Testview