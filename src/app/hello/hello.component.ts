import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  constructor() {}

  courseName: string = 'Angular';
  bookName: string = '';
  fechaNac: number = 0;

  nombrePrueba: string = '';

  //Demo ngIf propiedades:
  isAuthenticated!: boolean;
  submitted = false;
  userName!: string;

  courses: any[] = [
    { id: 1, name: 'Typescript' },
    { id: 2, name: 'Angular' },
    { id: 3, name: 'Node JS' },
    { id: 1, name: 'Typescript' },
  ];

  //Demo ngStyle propiedades:
  colorName = 'red';
  fontWeight = 'bold';
  borderStyle = '1px dashed black';

  //Demo ngClass propiedades:
  isBordered: boolean = true;

  onSubmit(name: string, password: string) {
    this.submitted = true;
    this.userName = name;
    if (name === 'admin' && password == 'admin') {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  ngOnInit(): void {}

  changeName() {
    this.courseName = 'TypeScript';
  }
  changeBook(event: any) {
    this.bookName = event.target.value;
  }
  calculateAge(edad: any) {
    let anio = new Date().getUTCFullYear();
    let fechaNac = anio - edad;
    //console.log(fechaNac);
    //console.log(anio);
    //console.log(edad);
    this.fechaNac = fechaNac;
    //console.log(this.fechaNac);
  }
}
