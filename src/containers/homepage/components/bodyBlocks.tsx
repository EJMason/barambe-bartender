/**
 * Body container item
 */

import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import gorilla from '../../../assets/grla.svg';
import phone from '../../../assets/smartphone.svg';
import armDrink from '../../../assets/armDrink.png';

export const Block1 = () => {
  return (
    <div className="home-block fade-in-fast three">
      <img className="" id="block-img" src={phone} alt="Hand holding smartphone"/>
      <h1>Simple, easy to use</h1>
      <p>
        {'Once the app is downloaded, open a tab \
        and click on a drink. Your order is complete!'}
      </p>
    </div>
  );
};

export const Block2 = () => {
  return (
    <div className="home-block fade-in-fast three">
      <img className="" id="block-img" src={gorilla} alt="Gorilla"/>
      <h1>No more fighting to order</h1>
      <p>
        {'Sick and tired of getting ignored or having to hound the \
        bartender? Once your drink is ready Barambe will let you know \
        to pick it up.'}
      </p>
    </div>
  );
};

export const Block3 = () => {
  return (
    <div className="home-block fade-in-fast three">
      <img className="" id="block-img" src={armDrink} alt="Hand holding drink"/>
      <h1>Focus on the fun part</h1>
      <p>
        {'No matter the occasion we want to simplify your bar experience. \
        Socialize and enjoy the night! Let Barambe handle the rest.'}
      </p>
    </div>
  );
};

export default () => {
  return (
    <div id="block-ctr" className="home-block red-outline">
      <Grid stackable relaxed centered columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Block1 />
          </Grid.Column>
          <Grid.Column>
            <Block2 />
          </Grid.Column>
          <Grid.Column>
            <Block3 />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
