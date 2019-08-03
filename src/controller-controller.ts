import debounce from 'lodash/debounce';
import { options, controllerOptions } from './IControllerController';

export default class ControllerController {
  private readonly controllersCollection: Array<controllerOptions>;
  private readonly debounceDelay?: number = 250;
  private controller: any;
  private activeMediaQueryIndex: number;

  constructor(options: options) {
    const { debounceDelay, controllers } = options;
    this.debounceDelay = debounceDelay;
    this.controllersCollection = controllers;
    this.activeMediaQueryIndex = this.getActiveMediaQueryIndex();

    window.addEventListener('resize', this.handleWindowResize);
    this.constructController();
  }

  private getActiveMediaQueryIndex = (): number => {
    let id = this.activeMediaQueryIndex;
    this.controllersCollection.forEach((controller, index) => {
      if (controller.mediaQuery <= window.innerWidth) id = index;
    });
    return id;
  };

  private getProps = ():any => this.controllersCollection[this.getActiveMediaQueryIndex()].props;

  private handleWindowResize = debounce((): void => {
    if (this.getActiveMediaQueryIndex() === this.activeMediaQueryIndex) return;
    this.activeMediaQueryIndex = this.getActiveMediaQueryIndex();
    this.destroyCurrentController();
    this.constructController();
  }, this.debounceDelay);

  private constructController = (): void => {
    const controller = this.controllersCollection[(this.getActiveMediaQueryIndex())].controller;
    this.controller = new controller(this.getProps());
  };

  private destroyCurrentController = (): void => {
    this.controller.dispose();
  };

  public dispose = (): void => {
    window.removeEventListener('resize', this.handleWindowResize);
  };
}
