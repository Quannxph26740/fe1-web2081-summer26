import { ComponentFixture, TestBed } from '@angular/core/testing';

// Sửa Home thành HomeComponent
import { HomeComponent } from './home'; 

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent] // Sửa ở đây nữa
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent); // Sửa ở đây nữa
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});