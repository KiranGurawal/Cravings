import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span style={{color:"Green"}}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>

        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4-aO_9Sh5b6Ja6DF-K5b1W3BH41Gozzs6w&usqp=CAU" style={{ height: "30px", width: "30px" }}></img>
                <span style={{ color: "red" }}>Crav</span>ings
              </h6>
              <p>
                Food is strength, and food is peace, and food is freedom, and food is a helping hand to people around the world whose good will and friendship we want.
              </p>
            </div>



            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'><span style={{ color: "red" }}>Useful </span>links</h6>
              <p>
                <a className='text-reset'>
                <Link to="/about" className='Link'>About</Link>
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                <Link to="/login" className='Link'>login</Link>
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'> <span style={{ color: "red" }}>Cont</span>act</h6>
              <p>
                <i className='fas fa-home me-3'></i>Indore, M.P, India..
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                craving@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i>+91
              </p>
              <p>
                <i className='fas fa-print me-3'></i>+91
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Craving.com
        </a>
      </div>
    </MDBFooter>
  );
}
export default Footer;