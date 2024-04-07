import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div>
        <div className='d-flex justify-content-between bg-dark text-light p-5'>
          <div className='w-25'>
            <h3>ReduxCart 2024</h3>
            <p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='w-25 text-center'>
            <h3>Links</h3>
             <Link style={{textDecoration:'none'}} to={'/wish'} className='d-block mb-3 mt-3'>Wishlist</Link>
             <Link style={{textDecoration:'none'}} to={'/cart'}>Cart</Link>
          </div>
          <div className='w-25'>
            <h3>References</h3>
            <a style={{textDecoration:'none'}} href="https://react-bootstrap.netlify.app/" className='d-block mt-3 mb-3'>React Bootstrap</a>
            <a style={{textDecoration:'none'}} href="https://react.dev/" className='d-block  mb-3'>React Bootstrap</a>
            <a style={{textDecoration:'none'}} href="https://redux.js.org/">Redux</a>
          </div>
          <div className='w-25'>
            <h3>Contact Us</h3>
            <p>Submit your email,so we can contact you...</p>
            <input type="email" className='form-control' placeholder='Enter Email Id' />
            <button className='btn btn-outline-light mt-3'>Submit</button>
          </div>
        </div>
        <h6 className='text-center'>ReduxCart 2024 &copy; All rights reserved.</h6>
      </div>
    </>
  )
}

export default Footer