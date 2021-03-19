import { ProductService } from './../../services/product.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  /*var*/
  isChecked: boolean = false;
  searchigValue: string = "";
  panelOpenState = false;
  productCount: number;
  noOfPages: number;
  arrnoOfPages: number[] = [];
  allData: any[] = [];
  obj: any[] = [];
  loading: boolean = true;
  appear: boolean = false;
  skipGlobal
  limitGlobal
  noOfProducts = 0
  allFavorites=[];
  /*ctor*/
  constructor(
    private productService: ProductService,
    private userService: UsersService
    ) {
      // this.getData(0,5)
    }


  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  slider(event) {
    // console.log(event.value)
    this.obj = this.allData.filter((product) => {
      return Number(product.current_price) <= Number(event.value)
    })
  }

  getData(skip, take) {
    this.loading = true;
    this.appear = false;
    this.skipGlobal = skip;
    this.productService.getAllProductsApi(skip, take).subscribe(
      (response: any) => {
        this.loading = false;
        this.appear = true;
        this.allData = response.products;
        // console.log(this.obj)
        this.userService.getProfile().subscribe(
          (res:any)=>{
            // console.log(res)
            this.allFavorites = res.user.favoriteProducts.map((item)=>item._id);
            let arrayOfOBJ=[];
            this.allData.map((item,index)=>{
              if(this.allFavorites.includes(item._id)){
                this.allData[index].isFavorite = true;
              }
            })
            this.obj = this.allData;
            console.log(this.allData)
          },
          err=>{
            console.log(err)
          }
        )
        this.arrnoOfPages = [];
        this.noOfProducts = response.length
        this.noOfPages = Math.ceil(response.length / 5);
        for (let i = 1; i <= this.noOfPages; i++) {
          this.arrnoOfPages.push(i);
        }
      },
      (error) => {
        this.loading = false;
        console.log(error)
      }
    )
  }

  searchForName() {
    this.obj = this.allData.filter((product) => {
      return product.product_name.includes(this.searchigValue);
    })
  }

  paginate(val) {
    this.getData((((val * 5) - 5)), (val * 5));
    this.skipGlobal = (val * 5) - 5
  }



  changeSale() {
    if (this.isChecked == true) {
      this.obj = this.allData.filter((product) => {
        return product.status == "Sale";
      })
    } else {
      this.obj = this.allData.filter((product) => {
        return product;
      })
    }
  }

  ngOnInit(): void {
    this.paginate(1);
    console.log(this.obj)
  }
}
