import {Component, forwardRef, Inject, Injectable, Optional, ViewEncapsulation} from '@angular/core';
import {TOKEN} from "./token";

@Injectable()
export class Service {

  constructor() {
    console.log('created');
  }

}

@Component({
  selector: 'experiment-ngx-esbuild-nx-welcome',
  template: ``,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  constructor(
    @Inject(forwardRef(() => Service)) private readonly service: Service
  ) {
  }

}
