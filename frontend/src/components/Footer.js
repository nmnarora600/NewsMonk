import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-dark text-light py-3 '  >

      <p className="text-center foot" >
      Copyright &copy; NewsMonk 2023
      </p>
      <p className="text-center foot">Designed and Developed by &nbsp;
      <p  style={{display:'inline-flex'}} >

      <Link to={`https://www.namanarora.in` } className='text-decoration-none text-light FootName'>
      Naman Arora </Link>
      </p>
      </p>
    </footer>
  )
}

export default Footer
