import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentDateTime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    // Actualizar la fecha y hora cada segundo
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}