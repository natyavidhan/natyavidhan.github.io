import React, { useState } from 'react'

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    )
}

const Carousel = ({ children })  => {
    const [index, setIndex] = useState(0)
    const incIndex = () => {
        if (index < children.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    const decIndex = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(children.length - 1)
        }
    }
    return (
        <>
        <button onClick={()=>decIndex()} className='controls'>Previous</button>
        <button onClick={()=>incIndex()} className='controls'>Next</button>
        <div className='carousel'>
            <div className='inner' style={{transform: `translateX(-${index*100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"})
                })}
            </div>
        </div>
        </>
    )
}

export default Carousel