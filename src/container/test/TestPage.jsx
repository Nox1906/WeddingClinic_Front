import React from "react";

import { logo } from "../../assets";

function TestPage() {
  return (
    <>
      <div className="appointmentsmodal-wrap">
        <div className="appointmentsmodal">
          <img src={logo} alt="logo" />
          <p>Obrigado por nos contactar!</p>
          <p>Entraremos em contacto consigo o mais rapidamente possível</p>
          <button className="button-send">Fechar</button>
        </div>
      </div>
    </>
  );
}

export default TestPage;
