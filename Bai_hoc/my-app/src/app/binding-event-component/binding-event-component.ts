import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  styleUrl: './binding-event-component.css',
  templateUrl: './binding-event-component.html',
})

export class BindingEventComponent {
  public hsa:number = 5
  public hsb:number = 7
  public ketqua:string = 'Kết quả ở đây: '

  giaiPtb1(a:string, b:string){
    this.hsa = parseFloat(a);
    this.hsb = parseFloat(b);
    if(this.hsa == 0 && this.hsb == 0){
      this.ketqua = 'Tùm lum nghiệm'
    }
    else if (this.hsa === 0 && this.hsb !== 0) {
      this.ketqua = 'Phương trình vô nghiệm';
    }
    else {
      const x = -this.hsb / this.hsa;
      this.ketqua = `Phương trình có nghiệm x = ${x}`;
    }
  }
}
