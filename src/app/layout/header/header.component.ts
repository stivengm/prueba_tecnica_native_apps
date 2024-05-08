import { Component } from '@angular/core';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  titleApp = "Recetas";

  constructor(private router: Router, private route: ActivatedRoute) {}

  handleSearch() {
    this.router.navigate(['/search'], { relativeTo: this.route, queryParams: {
      type: 'words',
      search: 'apple'
    }});
  }

}
