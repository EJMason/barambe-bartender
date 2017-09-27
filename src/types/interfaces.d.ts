/**
 * Interface definitions
 *
 */

declare namespace interfaces {
  interface Semantic_Visiblity {
    direction: string;
    height: number;
    width: number;
    topPassed: boolean;
    bottomPassed: boolean;
    pixelsPassed: number;
    percentagePassed: number;
    topVisible: boolean;
    bottomVisible: boolean;
    fits: boolean;
    passing: boolean;
    onScreen: boolean;
    offScreen: boolean;
  }

}

export as namespace interfaces;
export = interfaces;