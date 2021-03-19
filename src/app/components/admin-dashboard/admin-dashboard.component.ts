import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service'


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private myService: UsersService) { }

  /* toggle nav */
  toggle() {
    document.getElementById('sidebar').classList.toggle("active");
    document.getElementById('sidebarCollapse').classList.toggle("active");
  }

  /* tabs nav */
  tab: any = 'tab1';
  tab1: any
  tab2: any
  tab3: any
  Clicked: boolean


  onClick(check) {
    if (check == 1) {
      this.tab = 'tab1';
      document.getElementById('AdminUser').style.display='block';
      document.getElementById('adminOrders').style.display='none';
      document.getElementById('adminProducts').style.display='none';
    } else if (check == 2) {
      // this.htmlToAdd = '<app-profile-orders></app-profile-orders>';
      this.tab = 'tab2';
      document.getElementById('AdminUser').style.display='none';
      document.getElementById('adminOrders').style.display='block';
      document.getElementById('adminProducts').style.display='none';
    } else {
      this.tab = 'tab3';
      document.getElementById('AdminUser').style.display='none';
      document.getElementById('adminOrders').style.display='none';
      document.getElementById('adminProducts').style.display='block';
    }
  }

  ngOnInit(): void {
  }

}
