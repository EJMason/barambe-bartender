/**
 * Banner container item
 */

import * as React from 'react';
import { Motion, spring } from 'react-motion';
import { Button, Icon } from 'semantic-ui-react';

interface Props {
  showButton?: boolean;
  wiggle: number;
}

export default (props: Props) => {
  return (
    <Motion style={{x: spring(props.showButton ? (0) : 400, { stiffness: 60, damping: 9 })}}>
      {(data: any) =>
        <Motion style={{w: spring((25 * props.wiggle), { stiffness: 3, damping: 3 })}}>
        {(dt: any) =>
          <div
            className="floating-btn fixer fade-in-fast one"
            style={{
                WebkitTransform: `translate3d(${data.x + dt.w}px, 0, 0)`,
                transform: `translate3d(${data.x + dt.w}px, 0, 0)`,
              }}
          >
            <Button
              className="shadow"
              size="large"
              color="red"
              inverted
            >
              <Button.Content>
              Bar Portal  <Icon name="home" />
              </Button.Content>
            </Button>
          </div>
        }
        </Motion>
      }
    </Motion>
  );
};

// export default class ButtonAnimation extends React.Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     {
//       this.state = {
//         temp: 'tmp',
//         open: false,
//       };
//     }

//   }

//   handleMouseDown = () => {
//     this.setState({open: !this.state.open});
//   }

//   handleTouchStart = (e: any) => {
//     e.preventDefault();
//     this.handleMouseDown();
//   }

//   render() {
//     return (
//       <div className="button-animated">
//         <Button
//           onClick={this.handleTouchStart}
//         >
//           HELLO
//         </Button>

//       </div>
//     );
//   }
// }
