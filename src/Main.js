import React from 'react'
import ButtonBox from './ButtonBox';
import buttonData from './data.json'

function Main() {
    const data = buttonData;

  return (
    <main className='w-full  pl-20 pt-16 h-screen overflow-y-scroll'>
        <h1 className='text-4xl font-bold text-gray-600 mb-16'>{data.header}</h1>
        <div>
            {data.rows.map(row => <div className='flex'>{row.columns.map(col => <ButtonBox {...col} />)}</div> )}
        </div>
        <footer className='mb-4 font-normal text-lg text-gray-400'>Created by <span className='underline font-medium'>Alemantrix</span></footer>
    </main>
  )
}

export default Main