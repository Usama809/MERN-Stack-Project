import React from 'react'
import styles from '../../styles/styles'
import CountDown from "./CountDown" 
const EvenetsCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg  ${active ? "unset" : "mb-12" } lg:flex p-2`}>
        <div className='w-full lg:-w[50%] m-auto'>
            <img src="https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg" alt=""/>
        </div>
        <div className='w-full lg:[w-50%] flex flex-col justify-center'>
            <h2 className={`${styles.productTitle}`}> I Phone 14pro max 8/256gb</h2>
            <p> where we believe in transforming houses into homes, and spaces into
            sanctuaries Discover an unparalleled selection of handcrafted
            furniture pieces meticulously designed to elevate every corner of
            your living space. where we believe in transforming houses into homes, and spaces into
            sanctuaries Discover an unparalleled selection of handcrafted
            furniture pieces meticulously designed to elevate every corner of
            your living space.
            </p>
         <div className='flex py-2 justify-between'>
            <div className='flex'>
                <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through'>
                    1099$
                </h5>
                <h5 className='font-[500] text-[28px] text-[#333] font-Roboto'>
                    999$
                </h5>
            </div>
            <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>
                120 sold
            </span>
         </div>
         <CountDown/>
        </div>
        </div>
  )
}

export default EvenetsCard