import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Snackbar} from '@mui/material';
import {
    ContactButton,
    ContactForm,
    ContactInput,
    ContactInputMessage,
    ContactTitle,
    Container,
    Desc,
    Title,
    Wrapper,
    Link
} from "./styled";

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zuxs8wm', 'template_lsscs9a', form.current, 'MbKQd_gymL4D6I_uV')
            .then(() => {
                setOpen(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }



    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle><Link href = "mailto: bubonik.san1993@gmail.com">Email Me 🚀</Link></ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" />
                    <ContactInput placeholder="Your Name" name="from_name" />
                    <ContactInput placeholder="Subject" name="subject" />
                    <ContactInputMessage placeholder="Message" rows="4" name="message" />
                    <ContactButton type="submit" value="Send" />
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={()=>setOpen(false)}
                    message="Email sent successfully!"
                    severity="success"
                />
            </Wrapper>
        </Container>
    )
}

export default Contact