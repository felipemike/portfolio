import React from 'react'

const Footer = () => {
  return (
    <div
    className="flex justify-center bg-gray-900 text-gray-200 duration-200 p-2 text-center">
      <p className="m-4 mr-12">Todos os direitos reservados a Felipe Clemente ©.</p>
     <a href="#home">
            <i className=" text-5xl text-gray-200  ">
              <ion-icon name="arrow-up-circle-outline"></ion-icon>
            </i>
        </a>
    </div>
  );
};

export default Footer;