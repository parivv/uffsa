import React from 'react';
import './Fundraising.css';
import FundraisingEvent from './FundraisingEvent.png';

const Fundraising = () => {
  const style = {
    position: 'relative', 
    textAlign: 'center',
    width: '100%',
    height: 0,
    paddingTop: '56.25%',
    paddingBottom: 0,
    boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
    marginTop: '1.6em',
    marginBottom: '0.9em',
    overflow: 'hidden',
    borderRadius: 8,
    willChange: 'transform',
  };

  return (
    <>
      <section className="fundraising-section" id="fundraising">
        <h1 className='shop-title title'>
          Fundraising Events
        </h1>
        
        <div className='fundraising-container'>
          <a href = 'https://www.instagram.com/p/DP26lEpjUsB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target="_blank" rel="noopener noreferrer" className ='fundraising'>
            <img src={FundraisingEvent} alt='Fundraising Event' />
          </a>
          
          <div className ='fundraising-description'>
            <p>
            </p>
            <p className='next-social'>
            </p>
          </div>
        
        
        
        </div>
      </section>
    </>
  );
}

export default Fundraising;