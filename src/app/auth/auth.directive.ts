import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  useType = input.required<Permission>({alias:'appAuth'});
  private authServes = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContineRef = inject(ViewContainerRef);


  constructor() { 
    effect(() => {
      if(this.authServes.activePermission() === this.useType()){
        // console.log("show the text");
        this.viewContineRef.createEmbeddedView(this.templateRef);
      }
      else{
        // console.log("dont show the text");
        this.viewContineRef.clear();
      }
    })

  }

}
