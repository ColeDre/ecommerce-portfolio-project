import React from "react";
import errorImg from '../assets/error.svg'

const NotFound = () => {

  return (
    <div className='error__container'>
      <div className='error-message'>
        <img src={errorImg} alt="Page not found image" className="error__image"/>
        <h1 className="text-5xl text-center">Sorry, page not found!</h1>
        <p className="text-center">This page is not yet set up, but I'm working on it!</p>
        <div className="flex justify-center mt-5">
          <div><button className="error__btn"><a href="/">Home Page</a></button></div>
        </div>
      </div>
    </div>
  )
}

export default NotFound