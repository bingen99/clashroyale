import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanListComponentComponent } from './clan-list-component.component';

describe('ClanListComponentComponent', () => {
  let component: ClanListComponentComponent;
  let fixture: ComponentFixture<ClanListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClanListComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClanListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
