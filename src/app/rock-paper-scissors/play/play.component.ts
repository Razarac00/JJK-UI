import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuDataService } from 'src/app/services/menu-data.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  opponent: string = this.service.data.opponent;
  private choice: string = '';

  constructor(private service: MenuDataService, private readonly router: Router) { }

  ngOnInit(): void {
    if (this.service.data.opponent == '') {
      this.router.navigate(['']);
    }
  }

  chose(act: string): void {
    console.log(act);
    this.choice = act;
  }

  confirm(): void {
    if (this.choice != '') {
      this.router.navigate(['']);
    }
  }

}
