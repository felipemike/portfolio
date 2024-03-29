import React, { useState } from "react";


const Contact = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [textArea, setTextArea] = useState('');

  function clearInputs() {
    setInputName('')
    setInputEmail('')
    setTextArea('')
  }
  const contact_info = [
    { logo: "mail", text: "felipeclemente2012@gmail.com" },
    { logo: "logo-whatsapp", text: "(+55) 88 99697-0076" },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-gray-900">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Entre em <span className="text-gray-200">Contato</span>
        </h3>
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-900 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form action="mailto:felipeclemente2012@gmail.com.br" encType="text/plain"
            method="POST" className="flex flex-col flex-1 gap-5">
            <input value={ inputName } onChange={({target}) => setInputName(target.value)} type="text" placeholder="Your Name" />
            <input value={ inputEmail } onChange={({target}) => setInputEmail(target.value)}type="Email" placeholder="Your Email Address" />
            <textarea value={ textArea }onChange={({target}) => setTextArea(target.value)} placeholder="Your Message" rows={10}></textarea>
            <div className="flex justify-around">
            <button  type="submit" className="btn-primary w-fit ">Enviar Mensagem</button>
            <button type="reset" className="btn-primary w-fit" onClick={ clearInputs }>Limpar campos</button>
            </div>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-purple-400 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm text-gray-200 break-words">
                  {contact.text}
                </p>
              </div>

            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
};

export default Contact;
