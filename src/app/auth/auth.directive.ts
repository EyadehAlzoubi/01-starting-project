import { Directive, effect, inject, input } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  useType = input.required<Permission>({alias:'appAuth'});
  private authServes = inject(AuthService);


  constructor() { 
    effect(() => {
      if(this.authServes.activePermission() === this.useType()){
        console.log("show the text");
      }
      else{
        console.log("dont show the text");
      }
    })

  }

}
