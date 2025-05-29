import React from 'react'

const Title = ({ style }) => {
    return (
        <div className='flex justify-center'>
            <h2 className={`${style} font-extrabold tracking-widest`}>FINE<span className='font-normal'>bank.</span>IO</h2>
        </div>
    )
}

export default Title