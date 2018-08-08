// tslint:disable component-creation-test
import { Component } from '@angular/core';

export function MockComponent(options: Component) {
  const metadata: Component = {
    selector: options.selector,
    template: options.template || '',
    inputs: options.inputs,
  };
  return Component(metadata)(class {});
}
