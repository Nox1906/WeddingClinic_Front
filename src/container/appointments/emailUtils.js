/* eslint-disable no-useless-concat */
function error(id, boll, error) {
  this.id = id;
  boll ? (this.error = error) : (this.error = "");
}

export function validateFields(form) {
  const errors = [];
  const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  errors.push(
    new error(
      "nameError",
      form.name.value.trim() === "",
      "Deverá indicar o seu nome"
    )
  );
  if (form.email.value.trim() === "" && form.phoneNumber.value.trim() === "") {
    errors.push(
      new error(
        "emailError",
        form.email.value.trim() === "",
        "Deverá indicar o seu número para contacto ou email"
      )
    );
    errors.push(
      new error(
        "phoneNumberError",
        form.phoneNumber.value.trim() === "",
        "Deverá indicar o seu número para contacto ou email"
      )
    );
  }
  if (form.email.value.trim() !== "") {
    errors.push(
      new error(
        "emailFormatError",
        !mailformat.test(form.email.value.trim()),
        "Deverá indicar um email válido"
      )
    );
  }
  errors.push(
    new error(
      "productError",
      !form.checkWeddingDress.checked &&
        !form.checkGuestDress.checked &&
        !form.checkAccessories.checked,
      "Deverá selecionar pelo meno uma opção"
    )
  );

  return errors;
}

export function buildBody(form) {
  return `<strong>Nome:</strong> ${form.name.value.trim()}  <br />  
  <strong>E-mail:</strong>  ${form.email.value.trim()} <br />
  <strong>Telefone:</strong>  <a href="tel:${form.phoneNumber.value.trim()}">${form.phoneNumber.value.trim()}</a><br />
  <strong>Data da cerimónia:</strong>  ${form.ceremonyDate.value.trim()} <br />
  <strong>O que pretendo:</strong>  ${
    form.checkWeddingDress.checked ? "Vestido de noiva ;" : ""
  } ${form.checkGuestDress.checked ? "Vestido de convidada; " : ""} ${
    form.checkAccessories.checked ? "Acessórios" : ""
  } <br />
  <strong>Dias preferenciais:</strong>  ${form.checkNA.checked ? "Sem preferência; " : ""} ${
    form.checkWeek.checked ? "Durante a semana; " : ""
  } ${form.checkWeekend.checked ? "Sábado; " : ""} <br />
  <strong>Horário preferencial:</strong>  ${
    form.checkMorning.checked ? "Manhã (entre as 9:00 e 12:00); " : ""
  } ${form.checkAfternoon.checked ? "Tarde (entre as 14:00 e 17:00); " : ""} 
  `;
}

export function buildSubject(form) {
  return `Marcação para: ${form.name.value.trim()} - Pretendo: ${
    form.checkWeddingDress.checked ? "Vestido de noiva; " : ""
  } ${form.checkGuestDress.checked ? "Vestido de convidada; " : ""} ${
    form.checkAccessories.checked ? "Acessórios; " : ""
  }`;
}
