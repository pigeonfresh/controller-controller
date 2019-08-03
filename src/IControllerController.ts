export interface Class<T = any> extends Function { new (...args: any[]): T}

export interface controllerOptions {
  mediaQuery: number;
  controller: Class;
  props?: any;
}

export interface options {
  debounceDelay?: number
  controllers: Array<controllerOptions>;
}
