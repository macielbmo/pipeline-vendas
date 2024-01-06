import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunaPipeComponent } from './coluna-pipe.component';

describe('ColunaPipeComponent', () => {
  let component: ColunaPipeComponent;
  let fixture: ComponentFixture<ColunaPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColunaPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColunaPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
