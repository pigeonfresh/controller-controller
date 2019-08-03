export interface Class<T = any> extends Function { new (...args: any[]): T}

export interface controllerOptions {
  minWidth: number;
  controller: Class;
  props?: any;
}

export interface options {
  debounceDelay?: number
  controllers: Array<controllerOptions>;
}
