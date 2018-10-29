import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../common/Footer';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <section className='top-content'>
        <div className='top-content-nav'>
          <div className='top-content-brand'>
            <h1>MUBA</h1>
          </div>
        <div className='top-content-link'>
        <Link to="/">About</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        </div> 
        </div>
        <div className="top-middle-content"> 
          <div className="top-middle-content-1"><Link to='/signup'>Enroll</Link></div>
          <div className="top-middle-content-2"><Link to ="/">View More</Link></div>
        </div>
        <div className="quran-holder"></div>
        </section>
        <section className='middle-content'>
            <div className="middle-content-item">
              <h3>Memorization</h3>
                <p>
                Lorem ipsum dolor sit amet, quo ut porro appareat atomorum. An nulla oporteat quo, veri qualisque duo te. Ne usu mentitum appareat, id doctus animal antiopam vix. Feugiat dolorem explicari has te, cum inermis maluisset ad. Essent consequuntur id usu. Et mundi tibique mea.
                </p>
              <div className="more-button">more >></div>
            </div >
            <div className="middle-content-item">
              <h3>Lectures</h3>
              <p>
                Lorem ipsum dolor sit amet, quo ut porro appareat atomorum. An nulla oporteat quo, veri qualisque duo te. Ne usu mentitum appareat, id doctus animal antiopam vix. Feugiat dolorem explicari has te, cum inermis maluisset ad. Essent consequuntur id usu. Et mundi tibique mea.
              </p>
              <div className="more-button">more >></div>
            </div>
            <div className="middle-content-item"> 
              <h3>Languages</h3>
              <p>
                Lorem ipsum dolor sit amet, quo ut porro appareat atomorum. An nulla oporteat quo, veri qualisque duo te. Ne usu mentitum appareat, id doctus animal antiopam vix. Feugiat dolorem explicari has te, cum inermis maluisset ad. Essent consequuntur id usu. Et mundi tibique mea.
              </p>
              <div className="more-button">more >></div>
            </div>
        </section>
        <Footer/>
      </div>
    )
  }
}
