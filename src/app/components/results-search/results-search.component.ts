import { Component } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results-search',
  standalone: true,
  imports: [],
  templateUrl: './results-search.component.html',
  styleUrl: './results-search.component.scss'
})
export class ResultsSearchComponent {

  constructor( private route: ActivatedRoute ) {
    console.log(this.route.snapshot.queryParamMap);

    // console.log(this.route.snapshot.params);


    

  }

  // private route: ActivatedRoute


}
