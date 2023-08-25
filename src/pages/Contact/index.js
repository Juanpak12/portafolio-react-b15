import React from 'react';
import Title from "../common/Title";
import ContactForm from "./Form";
import MyForm from './Form/MyForm';

const Contact = () => {
    return (
        <div className="page" id="contact">
            <Title>
                Contact Me
            </Title>
            <MyForm />
        </div>
    );
};

export default Contact;
