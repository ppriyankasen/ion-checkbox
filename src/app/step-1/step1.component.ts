import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {

  public errorMsg = '';

  constructor() { }

  ngOnInit() {
  }

  handleClick(event) {
    this.errorMsg = 'Error';
    try {
      void Keyboard.hide();
      event.target.blur();
    } catch {
      console.log('Activated web view.');
    }
  }

  clearErrorMessage() {
    this.errorMsg = '';
  }

}
