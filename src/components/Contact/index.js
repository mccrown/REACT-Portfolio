import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Row, Col } from 'react-bootstrap'; 
import Resume from '../../assets/Conner McCown Resume.pdf'

 function ContactForm() {
    const [formState, setFormState] =useState({name: '', email: '', message: ''})
    const [errorMessage, setErrorMessage] = useState('')


    const handleChange =(e) => {
        //const {target} = e
        //const inputType = target.name
        //const inputValue = target.value
    
      
        if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(formState.email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        if(!formState.name.length) {
            setErrorMessage('name required')
            return
        } 
        
         if(!formState.message.length) {
            setErrorMessage('message required')
            return
         }

        alert('Form Submitted')
        setFormState({name: '', email: '', message: ''})
       
    }

return (
    <section>
        <h1 data-testid='h1tag' className="contact">contact me</h1>

        <div className="contact-icons">
        <Row>
            <Col lg={3} md={12}>
            <a href="https://github.com/mccrown"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt="github-logo" class="icon"/></a><p class="icon-text">github</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/conner-mccown-04b237155/"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt="linkedin-logo" class="icon"/></a><p class="icon-text">linkedin</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="mailto:connermccown94@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt="mail-logo"/></a><p class="icon-text">email</p>
            </Col>

            <Col lg={3} md={12}>
            <a href={Resume} download><img src="https://img.icons8.com/doodle/120/000000/pdf-2.png" alt="resume" /></a><p class="icon-text">resume</p>
            </Col>
        </Row>
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
            <div class="text-[20px] m-5 px-5">
                <label class="p-4 text-white" htmlFor="name">Name:</label>
                <br /> <input type="text" value={formState.name} onChange={handleChange} name="name"/>
            </div>
            <div class="text-[20px]  m-5 px-6">
                <label class="p-4 text-white" htmlFor='email'>Email:</label>
                <br /><input type="email" name="email" value={formState.email} onChange={handleChange}/>
            </div>
            <div class="text-[20px]  m-5 px-3">
                <label class="p-6 text-white"htmlFor="message">Message:</label>
                <br /><textarea class="p-5 ml-3"name="message" rows="5" value={formState.message} onChange={handleChange}/>

            </div>
            {errorMessage && (
                <div>
                    <p className= "error-text">{errorMessage}</p>
                </div>
            )}
            <button class="text-[20px] text-white  mx-10 mb-2" type ="submit">Submit</button>
            </form>

    </section>
    );
}
    
export default ContactForm;

    