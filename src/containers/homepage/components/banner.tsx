/**
 * Banner container item
 */
import '../../../styles/main.css';
import * as React from 'react';
import { assets } from '../../../assets';
import logo from '../../../assets/white_red_logo.svg';
import logoText from '../../../assets/logo_txt.svg';

export default () => {
  return (
    <div className="banner-container">
      <img className="banner-image" src={assets.images.banner} alt="banner Image"/>
      <div className="banner-overlay" />

      <div className="banner-logo-ctr">
        <div className="img-trim">
          <img className="banner-logo" src={logo} alt="Monkey with Sunglasses" />
        </div>
        <div className="img-trim2">
          <img className="banner-text" src={logoText} alt="Barambe"/>
        </div>
      </div>

    </div>
  );
};