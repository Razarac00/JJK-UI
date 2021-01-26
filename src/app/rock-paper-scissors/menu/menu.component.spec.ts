import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, FormsModule],
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to play if opponent is set', () => {
    const spy = spyOn(router, 'navigateByUrl');

    component.menuData.opponent = 'Player';
    component.gameStart();
    const url = spy.calls.first().args[0];

    expect(url.toString()).toBe('/rock-paper-scissors/play');
  });

  it('should not redirect to play if opponent is not set', () => {
    const spy = spyOn(router, 'navigateByUrl');
    
    component.gameStart();

    expect(spy).not.toHaveBeenCalled();
  });
});
