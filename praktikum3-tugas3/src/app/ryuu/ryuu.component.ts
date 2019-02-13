import { Component, OnInit } from '@angular/core';
import { RyuusService } from '../ryuus.service';

@Component({
  selector: 'app-ryuu',
  templateUrl: './ryuu.component.html',
  styleUrls: ['./ryuu.component.css']
})
export class RyuuComponent implements OnInit {
  Ryuus;
  currentDate = Date.now();

  list = [
    {x : "Nama : Maria Sinta Bella"},
    {x : "Alamat : jln.Mawar gang 10"},
    {x : "Hobby Saya"}
  ]
  
  constructor(private c:RyuusService) {
    this.Ryuus = c.getRyuus();
   }

  ngOnInit() {
  }

}
