import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuData: Menu = new Menu();

  constructor() { }

  ngOnInit(): void {
  }

  gameStart(): void {
    console.log("Opponent chosen: " + this.menuData.opponent);
  }

}
