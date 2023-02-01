import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';




const Form = () => {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [emailError, setEmailError] = useState('');
    const [textError, setTextError] = useState('');
    const [alert, setAlert] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            isValid = false;
            setEmailError('Ingresa un email válido');
        }

        if (text.length < 5) {
            isValid = false;
            setTextError('Debes rellenar este campo');
        }

        if (isValid) {

            const formData = { email, text };
            console.log(formData);
            setEmail('');
            setText('');
            setAlert(<Alert severity="success">
                <AlertTitle>Informacion enviada</AlertTitle>
                Pronto nos pondremos en contacto contigo --<strong>Hasta pronto!</strong>
            </Alert>)
        }
    };

    return (
        <>
        <form className='text-center' onSubmit={handleSubmit}>
            <TextField
                fullWidth
                error={Boolean(emailError)}
                helperText={emailError}
                label="Ingresa Email"
                type="email"
                value={email}
                sx={{ mb: 3 }}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
                fullWidth
                error={Boolean(textError)}
                helperText={textError}
                label="Cuéntanos tus preguntas"
                type="text"
                value={text}
                sx={{ mb: 3 }}
                onChange={(event) => setText(event.target.value)}
            />
            <Button sx={{ backgroundColor: '#FF9494', mb: 3 }} type="submit" variant="contained">
                Enviar
            </Button>
            
        </form>
        {alert}
        </>
    );
}

export default Form;


