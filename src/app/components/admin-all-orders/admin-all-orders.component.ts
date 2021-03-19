import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-all-orders',
  templateUrl: './admin-all-orders.component.html',
  styleUrls: ['./admin-all-orders.component.css']
})
export class AdminAllOrdersComponent implements OnInit {

  constructor() { }

  /* var */
  isFetching = false

  acceptedBtn(){
    document.getElementById('status').style.display='none';
    document.getElementById('penddingTable').style.display='none';
    document.getElementById('rejectedTable').style.display='none';
    document.getElementById('acceptedTable').style.display='block';
    document.getElementById('acceptPagination').style.display='block';
    document.getElementById('penddingPagination').style.display='none';
    document.getElementById('rejectPagination').style.display='none';
  }
  penddingBtn(){
    document.getElementById('status').style.display='none';
    document.getElementById('penddingTable').style.display='block';
    document.getElementById('rejectedTable').style.display='none';
    document.getElementById('acceptedTable').style.display='none';
    document.getElementById('acceptPagination').style.display='none';
    document.getElementById('penddingPagination').style.display='block';
    document.getElementById('rejectPagination').style.display='none';
  }
  rejectedBtn(){
    document.getElementById('status').style.display='none';
    document.getElementById('penddingTable').style.display='none';
    document.getElementById('rejectedTable').style.display='block';
    document.getElementById('acceptedTable').style.display='none';
    document.getElementById('acceptPagination').style.display='none';
    document.getElementById('penddingPagination').style.display='none';
    document.getElementById('rejectPagination').style.display='block';
  }
  orderDetails(){}
  
  ngOnInit(): void {
  }

}
