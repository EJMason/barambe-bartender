/**
 * Banner container item
 */

import * as React from 'react';
import { Motion, spring } from 'react-motion';
import { Button, Icon } from 'semantic-ui-react';

interface Props {
  showButton: boolean;
}

export default (props: Props) => {
  return (
    <Motion style={{x: spring(props.showButton ? (0) : 1000, { stiffness: 45, damping: 12 })}}>
      {(data: any) =>
          <div
            className="bottom-btn fixer"
            style={{
                WebkitTransform: `translate3d(${data.x}px, 0, 0)`,
                transform: `translate3d(${data.x}px, 0, 0)`,
              }}
          >
            <Button
              className="shadow"
              color="blue"
              size="large"
              fluid
            >
              <Button.Content>
              Bar Portal  <Icon name="home" />
              </Button.Content>
            </Button>
          </div>
      }
    </Motion>
  );
};
