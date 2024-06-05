import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import './style.scss'; // Importação do arquivo de estilos

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateName = (value: string) => {
        if (value.length < 5) {
            setNameError('Mínimo 5 caracteres.');
        } else {
            setNameError('');
        }
    };

    const validateMessage = (value: string) => {
        if (value.length < 20) {
            setMessageError('Mínimo 20 caracteres.');
        } else {
            setMessageError('');
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();


        if(name.length < 1){
            setNameError(t("contact.error.name"));
        }

        if(email.length < 1){
            setEmailError(t("contact.error.email"));
        }
        if(message.length < 1){
            setMessageError(t("contact.error.message"));
        }
        // Se houver erros de validação, não envie o formulário
        if (nameError || messageError ||name.length < 1 || email.length < 1 || message.length < 1) {
            return;
        }

        // Se a validação passar, enviar o e-mail
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send('service_trz5cl7', 'template_kbuv3pd', templateParams, 'xhc1wEZ4x7ljz1yaq')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('E-mail enviado com sucesso!');
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert('Falha ao enviar o e-mail.');
            });

        // Limpar os campos após o envio
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card border-0">
                        <div className="card-body text-center">
                            <h2 className="card-title">{t("contact.title")}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className={`form-control form-control-sm formarea ${nameError ? 'is-invalid' : ''}`}
                                        id="inputName"
                                        placeholder={t("contact.name")}
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            validateName(e.target.value);
                                        }}
                                    />
                                    {nameError && <div className="invalid-feedback">{nameError}</div>}
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className={`form-control form-control-sm formarea ${emailError ? 'is-invalid' : ''}`}
                                        id="inputEmail"
                                        placeholder="E-mail"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            setEmailError("")

                                        }}
                                    />
                                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className={`form-control form-control-sm message ${messageError ? 'is-invalid' : ''}`}
                                        id="inputAbout"
                                        rows={4}
                                        placeholder={t("contact.message")}
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            validateMessage(e.target.value);
                                        }}
                                    />
                                    {messageError && <div className="invalid-feedback">{messageError}</div>}
                                </div>
                                <div className="text-box mt-4 mb-5 py-4">
                                    <button className="btn btn-white btn-animate gradient-shadow-2 mt-2 px-5 py-2" type="submit">{t("contact.button")}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
