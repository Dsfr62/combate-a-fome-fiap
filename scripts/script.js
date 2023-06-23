export function redirectToAgricultura() {
  window.open("/ml5", "_self");
}

export function redirectToContato() {
  window.open("/contato", "_self");
}

export async function createMessage(data) {
  fetch("https://hook.us1.make.com/6s13x5j8qlon2mb3egjw091mfd1yvadx", {
    method: "POST",
    body: data,
  })
    .then((response) => alert("Formulário enviado com sucesso!"))
    .catch((err) => {
      console.error(`Erro ao enviar formulário de contato: ${err}`);
      alert("Erro ao enviar formulário, tente novamente");
    });
}

export function openInstagram() {
  window.open("https://www.instagram.com/fiapoficial/", "_blank");
}

export function openFacebook() {
  window.open("https://www.facebook.com/fiap/?locale=pt_BR", "_blank");
}

export function openLinkedin() {
  window.open(
    "https://www.linkedin.com/school/fiap/?originalSubdomain=br",
    "_blank"
  );
}
