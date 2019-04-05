import { Component, OnInit } from '@angular/core';
import { SwagsService } from '../swags.service';
import { Swag } from './swag.model';

@Component({
  selector: 'app-swags',
  templateUrl: './swags.page.html',
  styleUrls: ['./swags.page.scss'],
})
export class SwagsPage implements OnInit {

  swags: Swag[];

  constructor(private swagService:SwagsService) { }

  ngOnInit() {

    this.swags = this.swagService.getAllSwags();
  }

}
