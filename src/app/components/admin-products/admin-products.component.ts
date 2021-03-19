import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor() { }

  /* var */
  isFetching=false
  ngOnInit(): void {
  }

  /*add*/
  add(){
    document.getElementById("products").style.display='none';
    document.getElementById("addingProductBtn").style.display='none';
    document.getElementById("addingProduct").style.display='block';
  }

  /*edit*/
  edit(){
    document.getElementById("products").style.display='none';
    document.getElementById("addingProduct").style.display='none';
    document.getElementById("editingProduct").style.display='block';
  }

  /*delete*/
  delete(){
    console.log("dell");
  }

}
