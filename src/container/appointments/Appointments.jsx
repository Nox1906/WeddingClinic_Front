import React from "react";
import { db } from "../../firebase/firebase";
import { setDoc, doc } from "@firebase/firestore";
import ReCAPTCHA from "react-google-recaptcha";

import { privacyPolicyLink } from "../../constants";
import { Header, Footer } from "../../components";
import { logo } from "../../assets";
import "./Appointments.scss";
import { validateFields, buildBody, buildSubject } from "./emailUtils";

const Appointments = () => {
  const recaptchaRef = React.createRef();

  async function handleSubmit(e) {
    e.preventDefault();
    if (validations()) {
      await sendEmail();
    }
  }

  const close = () => {
    const modal = document.querySelector(".appointmentsmodal-wrap");
    modal.classList.toggle("appointmentsmodal-wrap-display-none");
  };

  const privacyPolicyChecked = () => {
    const inputCheckBox = document.getElementById("ckbPrivacy");
    return inputCheckBox.checked;
  };

  const validateReCaptcha = () => {
    return recaptchaRef.current.getValue() !== "";
  };

  const tryEnableButton = () => {
    document.getElementById("btnSubmit").disabled = !(
      privacyPolicyChecked() && validateReCaptcha()
    );
  };

  const sendEmail = async () => {
    var subject = "";
    var body = "";
    try {
      subject = buildSubject(document.querySelector(".contactForm"));
      body = buildBody(document.querySelector(".contactForm"));
    } catch {
      alert("Ocorreu algum erro. Tente refrescar a página.");
      return;
    }
    return await setDoc(doc(db, "mail", "efg"), {
      to: "noxscp1906@gmail.com",
      message: {
        subject: subject,
        html: body,
      },
    })
      .then(() => {
        const contactForm = document.querySelector(".contactForm");
        contactForm.reset();
        const modal = document.querySelector(".appointmentsmodal-wrap");
        modal.classList.toggle("appointmentsmodal-wrap-display-none");
        recaptchaRef.current.reset();
      })
      .catch((error) => {
        alert("Ocorreu algum erro. Tente refrescar a página.");
      });
  };

  function validations() {
    const contactForm = document.forms["schedulingForm"];
    const errors = validateFields(contactForm);
    let errorsCounter = 0;
    errors.forEach((x) => {
      const element = document.getElementById(x.id);
      if (x.error.trim() === "") element.classList.add("hide");
      else {
        element.innerText = x.error + "; ";
        element.classList.remove("hide");
        errorsCounter += 1;
      }
    });
    return errorsCounter === 0;
  }

  return (
    <>
      <div className="appointmentsmodal-wrap appointmentsmodal-wrap-display-none">
        <div className="appointmentsmodal">
          <img src={logo} alt="logo" />
          <p>Obrigado por nos contactar!</p>
          <p>Entraremos em contacto consigo o mais rapidamente possível</p>
          <button className="button-send" onClick={close}>
            Fechar
          </button>
        </div>
      </div>
      <Header />
      <div className="app__appointments">
        <div className="app__appointments-elements app__flex">
          <div className="app__title">
            <h2>Marcações</h2>
          </div>
          <div className="app__appointments-elementText">
            <p>
              Forneça-nos os seguintes dados e entaremos com maior brevidade em
              contacto consigo para confirmar a sua marcação, como também para a
              informar que o momento de encontrar o vestido dos seus sonhos será
              uma experiência única.
            </p>
          </div>
          <div className="app__appointments-elementForm">
            <form
              className="contactForm"
              name="schedulingForm"
              onSubmit={handleSubmit}
            >
              <p>
                <label>
                  Nome (Obrigatório)
                  <span>
                    <input name="name" autoComplete="false" />
                  </span>
                  <span className="error hide" id="nameError" />
                </label>
              </p>
              <p>
                <label>
                  E-mail (Obrigatório caso não disponha de nº
                  Telemovel/Telefone)
                  <span>
                    <input name="email" autoComplete="false"/>
                  </span>
                  <span className="error hide" id="emailError" />
                  <span className="error hide" id="emailFormatError" />
                </label>
              </p>
              <p>
                <label>
                  Telemovel/Telefone (Obrigatório caso não disponha de mail)
                  <span>
                    <input name="phoneNumber" />
                  </span>
                  <span className="error hide" id="phoneNumberError" />
                </label>
              </p>
              <p>
                <label>
                  Data da cerimónia
                  <span>
                    <input type="date" name="ceremonyDate" />
                  </span>
                </label>
              </p>
              <p className="elementForm-checkPanel">
                <label>
                  <strong>
                    O que pretendo (Obrigatório selecione pelo menos uma ou mais
                    opções)
                  </strong>
                  <br />
                  <span>
                    <input type="checkbox" name="checkWeddingDress" />
                    &nbsp; Vestido de noiva &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="checkGuestDress" />
                    &nbsp; Vestido de convidada &nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="checkAccessories" />
                    &nbsp; Acessórios &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span className="error hide" id="productError" />
                </label>
                <label>
                  <strong>
                    Dias preferenciais (Selecione uma ou mais opções)
                  </strong>
                  <br />
                  <span>
                    <input type="checkbox" name="checkNA" />
                    &nbsp; Sem preferência&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="checkWeek" />
                    &nbsp; Durante a semana&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="checkWeekend" />
                    &nbsp; Sábado&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </label>
                <label>
                  <strong>
                    Horário preferencial (Selecione uma ou mais opções){" "}
                  </strong>
                  <br />
                  <span>
                    <input type="checkbox" name="checkMorning" />
                    &nbsp; Manhã (entre as 9:00 e 12:00)&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" name="checkAfternoon" />
                    &nbsp; Tarde (entre as 14:00 e
                    17:00)&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                </label>
              </p>
              <p className="elementForm-auth">
                <label>
                  <span>
                    <input
                      id="ckbPrivacy"
                      type="checkbox"
                      onClick={tryEnableButton}
                    />
                    &nbsp; Aceito a{" "}
                    <a href={privacyPolicyLink}>POLITICA DE PRIVACIDADE</a> do
                    formulário pedir uma marcação.
                  </span>
                </label>
                <label>
                  <span>
                    <input type="checkbox" name="ckbMarketing"/>
                    &nbsp; Autorizo que a Wedding Clinic utilize os dados
                    pessoais que forneci anteriormente com o fim de comunicações
                    através de email, por telefone ou mediante um SMS as
                    novidades sobre eventos, produtos e ofertas da Wedding
                    Clinic.
                  </span>
                </label>
              </p>
              <ReCAPTCHA

                ref={recaptchaRef}
                sitekey={process.env.REACT_APP_RECAPTCHA}
                onChange={tryEnableButton}
              />
              <p>
                <label style={{ paddingTop: "10px" }}>
                  <span>
                    <button
                      id="btnSubmit"
                      className="button-template button-send"
                      type="submit"
                      disabled
                    >
                      Enviar
                    </button>
                    <span className="hide">
                      Deverá aceitar a politica de privacidade para continuar.
                    </span>
                  </span>
                </label>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointments;
