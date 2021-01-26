import { Injectable } from '@angular/core';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  constructor() { }

  data: Menu = new Menu();

}
