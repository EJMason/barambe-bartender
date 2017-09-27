/**
 * Interface definitions
 *
 */

declare namespace semantic {
  interface menuItemProps {
    name?: string;
    active?: boolean;
    inverted?: boolean;
    className?: string;
    color?: string;
    disabled?: boolean;
    icon?: boolean | string;
    link?: string;
    onclick?: any;
    position?: string;
  }

}

export as namespace semantic;
export = semantic;