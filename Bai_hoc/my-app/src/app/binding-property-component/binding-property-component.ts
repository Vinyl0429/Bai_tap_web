import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string ='Nguyễn Thị Long Lanh'
  public email:string ='longlanh@gmail.com'
  public nameID:string = 'nameID'
  public emailID:string = 'emailID'
  public isDisabled:boolean = true
  public hello:string = 'Hello các bạn, mình là Lanh'
}
