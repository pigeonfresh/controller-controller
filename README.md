# controller controller
 
Controller-controller is a package to manage different controllers based on viewport.
With controller-controller you can use multiple controllers for different viewport sizes.
This package will initialise and dispose controllers on viewport width change.
This comes in handy when you have different functionality for e.g. Mobile- and Desktop-like viewport sizes.

# How to use controller

Add controller-controller to your project with yarn or npm:
```bash
yarn add controller-controller
```

import controller-controller and create a new instance with a debounceDelay (ms)
and an Array of objects with a minWidth and controller.

```typescript
import ControllerController from 'controller-controller';
import MobileController from './MobileController';
import DesktopController from './DesktopController';

...

this.controllerManager = new ControllerController({
  debounceDelay: 250,
  controllers: [
    {
      minWidth: 0,
      controller: MobileController,
    },
    {
      minWidth: 1024,
      controller: DesktopController,
    },
  ]
})
```
