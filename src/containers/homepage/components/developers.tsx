/**
 * Banner container item
 */
import '../../../styles/main.css';
import * as React from 'react';
import {
  Divider,
  Icon } from 'semantic-ui-react';
import DevCard from './DevCard';
import { developers } from '../../../assets';

export default () => {
  return (
    <div id="devs-container" className="back fade-in one">
      <h3>LEARN ABOUT THE DEVELOPERS</h3>
      <hr className="hr-divider" />
      <div className="dev-cards-ctr">
        {developers.map((props, i) => <DevCard {...props} key={`${i}_devs`} />)}
      </div>
      <Divider hidden />
      <div className="devs-more-ctr">
        <div>
          <p>Read about how we built the app</p>
        </div>
        <Icon inverted circular color="yellow" name="right arrow" />
      </div>
      <Divider section hidden />
      <Divider section hidden />
      <Divider section hidden />
    </div>
  );
};
