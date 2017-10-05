/**
 * Dev card container item
 */

import * as React from 'react';
import { Button } from 'semantic-ui-react';
// import ghLogo from '../../../assets/gh-logo.png';

interface Props {
  name: string;
  img: string;
  links: Links;
  fade: string;
}

interface Links {
  github: string;
  linkedin: string;
  stack: string;
  email: string;
}

export default (props: Props) => {
  return (
    <div className={`dev-card fade-in ${props.fade}`}>
      <div id="card-body" className="">
        <div className="card-text">
          <h1>{props.name}</h1>
          <p>Full Stack Developer</p>
          <div className="logos-ctr">
            <Button
              as="a"
              href={props.links.github}
              target="_blank"
              circular
              color="black"
              icon="github alternate"
            />
            <Button
              as="a"
              href={props.links.linkedin}
              target="_blank"
              circular
              color="linkedin"
              icon="linkedin"
            />
            <Button
              as="a"
              href={props.links.stack}
              target="_blank"
              circular
              color="orange"
              icon="stack overflow"
            />
            <Button circular color="google plus" icon="mail" />
          </div>
          <div className="button-ctr">
            <Button
              basic
              color="black"
              fluid
              content="Learn More"
              icon="right arrow"
              labelPosition="right"
            />
          </div>
        </div>
      </div>
      <img
        id="prflimg"
        src={props.img}
        alt="profile img"
      />
    </div>
  );
};
