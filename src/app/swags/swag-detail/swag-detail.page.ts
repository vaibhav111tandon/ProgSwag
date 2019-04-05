import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SwagsService } from 'src/app/swags.service';
import { Swag } from '../swag.model';

@Component({
  selector: 'app-swag-detail',
  templateUrl: './swag-detail.page.html',
  styleUrls: ['./swag-detail.page.scss'],
})
export class SwagDetailPage implements OnInit {

  loadedSwag: Swag;

  constructor(private activatedRoute: ActivatedRoute,
              private swagService: SwagsService,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('swagId')){
        this.router.navigate(['/swags']);
        return;
      }
      const swagId = paramMap.get('swagId');
      this.loadedSwag = this.swagService.getSwag(swagId);
    });

  }

}
