import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*add*/
  add() {
    document.getElementById("products").style.display = 'block';
    document.getElementById("addingProductBtn").style.display = 'block';
    document.getElementById("addingProduct").style.display = 'none';
  }
  /*cancel*/
  cancel() {
    document.getElementById("products").style.display = 'block';
    document.getElementById("addingProductBtn").style.display = 'block';
    document.getElementById("addingProduct").style.display = 'none';
  }

}
