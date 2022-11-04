import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  sellRent = 1;
  properties!: Iproperty[];

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.sellRent = 2;
    }
    this.housingService.getAllProperties(this.sellRent).subscribe({
      next: (data => {
        this.properties = data;
      }),
      error: (error) => { console.log(error); }
    })
  }

}
