import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    /*save*/
    save() {
      document.getElementById("products").style.display = 'block';
      document.getElementById("editingProduct").style.display = 'none';
    }
    /*cancel*/
    cancel() {
      document.getElementById("products").style.display = 'block';
      document.getElementById("editingProduct").style.display = 'none';
    }

}
