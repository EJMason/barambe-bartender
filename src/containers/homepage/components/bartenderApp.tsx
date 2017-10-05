/**
 * Bartender container section
 */

import * as React from 'react';
import { Divider, Header, Button } from 'semantic-ui-react';

export default () => {
  return (
    <div className="bartender-ctr fade-in three">
      <h2 className="home-header-grey">BARTENDER CLIENT APPLICATION</h2>
      <Divider hidden />
      <p className="">
        {'We want to make life easier for the bartenders. \
        Barambe takes care of all the little stuff that takes \
        up precious time so you can focus on the good parts about \
        your job. We know those tips pay the bills. \
        Let\'s get your more of them.'}
      </p>
      <div className="bartender-items">
        <div>
          <Header as="h4" icon="lightning" content="Orders in real time" />
          <Header as="h4" icon="beer" content="Manage inventory" />
          <Header as="h4" icon="line graph" content="Increase drink output" />
          <Header as="h4" icon="lock" content="Secure" />
        </div>
        <img id="monkey-img" src="https://i.imgur.com/259oF8B.png" alt="monkey bartender" />
      </div>
      <Divider hidden />
      <p>{'Owners love Barambe too! \
        Be the bar that people talk about.'}</p>
      <div className="btn-ctr">
        <Button basic fluid size="large" color="blue">
          Get your bar signed up today!
        </Button>
      </div>
    </div>
  );
};
