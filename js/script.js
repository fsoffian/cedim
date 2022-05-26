
/* Validación de contacto */

/* Creación de variables */

const form = document.querySelector('form[name="formul"]');
const nameInput = document.querySelector('input[name="nya"]');
const emailInput = document.querySelector('input[name="mail"]');
const telInput = document.querySelector('input[name="tel"]');
const mensajeInput = document.querySelector('textarea[name="mensaje"]');
const gracias = document.querySelector('.gracias'); 
const contactanos = document.querySelector('.contactanos');
const menuFormato = document.querySelector('main')

/* array con las 4 variables a validar */
const entradas =[nameInput, emailInput, telInput, mensajeInput];

/* validaciones de c/u */
const esValidoEmail = (mail) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
};

    /* min 8 digitos max 13*/
const esValidoTel = (tel) => {
    const re = /^[\+]?[0-9]{8,13}$/im;
    return re.test(String(tel).toLowerCase());
};


nameInput.esValido = () => !!nameInput.value;
emailInput.esValido = () => esValidoEmail(emailInput.value);
telInput.esValido = () => esValidoTel(telInput.value);
mensajeInput.esValido = () => !!mensajeInput.value;

/* variables auxiliares para que haga todo esto o no */
let deboValidar = false;
let esFormularioValido = false;



const validarEntradas = () => {;
    if (!deboValidar) return;
        esFormularioValido = true;
        entradas.forEach((input)=> {
            input.classList.remove("invalido");
            input.nextElementSibling.classList.add("oculto");

            if (!input.esValido()){
                input.classList.add("invalido");
                esFormularioValido = false;
                input.nextElementSibling.classList.remove("oculto");
            }
        });
};



form.addEventListener("submit", (e) => {
    e.preventDefault();
    deboValidar = true;
    validarEntradas();
    if (esFormularioValido) {
        form.remove();
        gracias.classList.remove('oculto');
        contactanos.classList.add('oculto');
        menuFormato.classList.add('maincontacto');
    }
});
entradas.forEach((input) => input.addEventListener("input",validarEntradas));

