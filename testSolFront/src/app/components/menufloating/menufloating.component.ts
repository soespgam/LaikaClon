import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menufloating',
  templateUrl: './menufloating.component.html',
  styleUrls: ['./menufloating.component.scss'],
})
export class MenufloatingComponent implements OnInit {
  public state: boolean = false;
  public list: object = [
    {
      name: "Alimento"
    },
    {
      name: "Snacks"
    },
    {
      name: "Farmapet"
    },
    {
      name: "Cuidado e Higiene"
    },
    {
      name: "Jueguetes"
    },
    {
      name: "Accesorios"
    },
    {
      name: "Para PetLovers"
    },
  ]

  public listMenu: object = [
    {
      name: "Compra para perro",
      imagen:""
    },
    {
      name: "Compra para gato",
      imagen:""
    },
    {
      name: "Ofertas",
      imagen:""
    },
    {
      name: "Servicios",
      imagen:""
    }
  ]
  constructor() { }

  ngOnInit() { }
  open() {
    this.state = !this.state
  }
}
