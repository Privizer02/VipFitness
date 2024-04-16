import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  ngOnInit() {
    this.sideBar();
  }

  sideBar() {
    console.log('work');
    const toggle = <HTMLElement>document.querySelector('.main');
    toggle.classList.toggle('active');
  }
}
