import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom ' >
          <div className='me-5 d-none d-lg-block'>
            <span>Conecte-se connosco nas redes sociais:</span>
          </div>
          <div>
            <a href='https://www.facebook.com/weddingclinic.pt/' target='_blank' rel='noreferrer' className='me-4 text-reset'>
              <MDBIcon fab icon='facebook-f' />
            </a>
            <a href='https://plus.google.com/u/2/+WeddingClinicClinic' target='_blank' rel='noreferrer' className='me-4 text-reset'>
              <MDBIcon fab icon='google' />
            </a>
            <a href='https://www.facebook.com/weddingclinic.pt/' target='_blank' rel='noreferrer' className='me-4 text-reset'>
              <MDBIcon fab icon='instagram' />
            </a>
          </div>

      </section>

      <section >
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3 w-100'>
            <MDBCol md='3' lg='4' xl='4' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                Wedding Clinic
              </h6>
              <p>
                Wedding Clinic Vestidos de noiva até 900€, diversa variedade, atendimento personalizado e exclusivo por marcação.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='3' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Atendimento</h6>
              <p>
                <a href='/about' className='text-reset'>
                  Sobre nós
                </a>
              </p>
              <p>
                <a href='/marcacoes' className='text-reset'>
                  Fale connosco
                </a>
              </p>
              <p>
                <a href='/localizacao' className='text-reset'>
                  Localização
                </a>
              </p>
              <p>
                <a href='/politica-de-privacidade' className='text-reset'>
                  Politica de Privacidade
                </a>
              </p>
            </MDBCol>
{/* 
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Ajuda</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-2' />
                Av. 1º de Dezembro de 1640, Nº516 - Casal do Marco Nacional10 - 2840-173 Seixal
              </p>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                noivas@weddingclinic.pt
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> + 351 91 292 96 46
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <h2 className='text-reset fw-bold'>Wedding Clinic</h2>
      </div>
    </MDBFooter>
  );
}

export default Footer;