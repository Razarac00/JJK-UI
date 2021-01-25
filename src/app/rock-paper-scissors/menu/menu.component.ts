import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuDataService } from 'src/app/services/menu-data.service';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuData: Menu = this.service.data;

  constructor(private service: MenuDataService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  gameStart(): void {
    console.log("Opponent chosen: " + this.menuData.opponent);
    console.log("Service says: " + this.service.data.opponent);
    this.router.navigate(['rock-paper-scissors/play']);
  }

}
