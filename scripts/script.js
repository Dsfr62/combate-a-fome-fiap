const form = document.getElementById('Form-Default');
const successMessage = document.querySelector('.brix-success-message-2');
const errorMessage = document.querySelector('.brix-error-message-2');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const getName = document.getElementById('Form-Nome');
    const getEmail = document.getElementById('Form-Email');
    const getPhone = document.getElementById('Form-Telefone');
    const getCompany = document.getElementById('Form-Empresa')
    const getText = document.getElementById('Form-Text');
    fetch('https://hook.us1.make.com/6s13x5j8qlon2mb3egjw091mfd1yvadx', {
        method: 'POST',
        body: new URLSearchParams({
            name: getName.value,
            email: getEmail.value,
            phone: getPhone.value,
            company: getCompany.value,
            text: getText.value,
        })
    })
        .then(response => {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            form.reset();
        })
        .catch(error => {
            errorMessage.style.display = 'block';
        });
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.getElementById("Main-Heading").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}