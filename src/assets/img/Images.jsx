import React from 'react'
import logo from './logo.jpg'
import vektor1 from './vektor1.svg'

const Images = (props) => {
    const { type, src, alt, className } = props;
    switch (type) {
        case "logo": 
        return(

            <img src={logo} alt="" className={className} />
        );
        case "vektor1": 
        return(
            <img src={vektor1} alt="" className={className} />
        );
        case "profile":
            return(
                <svg className={className} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_139_4044)">
                <path d="M32 0C14.3547 0 0 14.3547 0 32C0 49.6453 14.3547 64 32 64C49.6453 64 64 49.6453 64 32C64 14.3547 49.6453 0 32 0ZM21.3333 56.4373V56C21.3333 50.1173 26.1173 45.3333 32 45.3333C37.8827 45.3333 42.6667 50.1173 42.6667 56V56.4373C39.3973 57.8693 35.792 58.6667 32 58.6667C28.208 58.6667 24.6027 57.8693 21.3333 56.4373ZM47.8 53.4693C46.584 45.8453 39.9627 40 32 40C24.0373 40 17.4187 45.8453 16.2 53.4693C9.61333 48.608 5.33333 40.7947 5.33333 32C5.33333 17.296 17.296 5.33333 32 5.33333C46.704 5.33333 58.6667 17.296 58.6667 32C58.6667 40.7947 54.3867 48.608 47.8 53.4693ZM32 13.3333C26.1173 13.3333 21.3333 18.1173 21.3333 24C21.3333 29.8827 26.1173 34.6667 32 34.6667C37.8827 34.6667 42.6667 29.8827 42.6667 24C42.6667 18.1173 37.8827 13.3333 32 13.3333ZM32 29.3333C29.0587 29.3333 26.6667 26.9413 26.6667 24C26.6667 21.0587 29.0587 18.6667 32 18.6667C34.9413 18.6667 37.3333 21.0587 37.3333 24C37.3333 26.9413 34.9413 29.3333 32 29.3333Z" fill="#1E1E1E"/>
                </g>
                <defs>
                <clipPath id="clip0_139_4044">
                <rect width="64" height="64" fill="white"/>
                </clipPath>
                </defs>
                </svg>

            )
        default:
            return(
                <img src={src} alt={alt} className={className}/>
            )
    }
  
}

export default Images
