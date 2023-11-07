import {Attribute, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'experiment-ngx-esbuild-nx-welcome',
  template: ``,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {

  constructor(
    @Attribute('text') private readonly text: string
  ) {
    console.log(text);
  }

}
