import { Component, OnInit } from '@angular/core';
import { ServiceHomeService } from 'src/app/pages/home/service/service-home.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {

  constructor(private producto:ServiceHomeService ) { }

  ngOnInit() {
    this.producto.getProduct().subscribe(data =>(
      console.log(data)
    ),
    error=>(
      console.log("error" + error)
    
    ))
  }

}
