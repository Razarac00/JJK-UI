import { Component, OnInit } from '@angular/core';
import { MenuDataService } from 'src/app/services/menu-data.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  opponent: string = this.service.data.opponent;

  constructor(private service: MenuDataService) { }

  ngOnInit(): void {
  }

}
