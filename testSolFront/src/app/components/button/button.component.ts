import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  public buttons1: object = [
    {
      name: "Alimento",
      imagen:"alimentos.png"
    },
    {
      name: "Snacks",
      imagen:"snaks.png "
    },
    {
      name: "Farmapet",
      imagen:"farmacia.png "
    },
    {
      name: "Cuidado",
      imagen:"higiene.png "
    }
  ]

  public buttons2: object = [
    {
      name: "Accesorios",
      imagen:"accesorios.png "
    },
    {
      name: "Para PetLovers",
      imagen:"petlov.png "
    },
    {
      name: "Jueguetes",
      imagen:"juguetes.png "
    }
  ]

  constructor() { }

  ngOnInit() {}

}
