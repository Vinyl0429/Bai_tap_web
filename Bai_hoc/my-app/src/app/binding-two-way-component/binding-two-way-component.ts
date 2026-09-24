import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  public hsa:number = 5
  public hsb:number = 5
  public hsc:number = 5
  public result:string = 'Kết quả đây'

  giaiPtb2() {
    if (this.hsa == 0) {
      if (this.hsb == 0 && this.hsc == 0) {
        this.result = "PT vô số nghiệm";
      } 
      else if (this.hsb == 0 && this.hsc != 0) {
        this.result = "PT vô nghiệm";
      } 
      else {
        this.result = "PT có một nghiệm duy nhất: x = " + (-this.hsc / this.hsb);
      }
    }
    else {
      let delta=Math.pow(this.hsb,2)-4*this.hsa*this.hsc;
      if(delta<0)
      {
        this.result = "PT vô nghiệm";
        }
        else if(delta==0)
        {
          this.result = "PT có một nghiệm duy nhất: x = " + (-this.hsb/(2*this.hsa));
        }
        else
        {
          let x1=(-this.hsb+Math.sqrt(delta))/(2*this.hsa);
          let x2=(-this.hsb-Math.sqrt(delta))/(2*this.hsa);
          this.result = "PT có 2 nghiệm phân biệt: x1 = " + x1 + "<br/>x2 = " + x2;
        }
    }
  }
}
