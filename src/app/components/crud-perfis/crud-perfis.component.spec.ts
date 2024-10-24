import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPerfisComponent } from './crud-perfis.component';

describe('CrudPerfisComponent', () => {
  let component: CrudPerfisComponent;
  let fixture: ComponentFixture<CrudPerfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudPerfisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
