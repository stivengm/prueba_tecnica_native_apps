import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { GetRecipeService } from '../../core/services/get-recipe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  titleApp = "Recetas";
  isShowNavbarMobile = false;

  constructor(private router: Router, private route: ActivatedRoute, private getRecipeService: GetRecipeService ) {}

  ngOnInit() {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 768) {
        this.isShowNavbarMobile = true;
      }
    }
  }

  handleSearch(event: Event) {
    var query = (event.target as HTMLInputElement).value;

    this.getRecipeService.getSearchByWords(query)
    .subscribe((value) => {
      this.getRecipeService.dataRecipe.emit(value.meals);
    });

    this.router.navigate(['/search'], { relativeTo: this.route, queryParams: {
      type: 'words',
      search: query
    }});

  }

  showSearchMobile() {
    this.isShowNavbarMobile = !this.isShowNavbarMobile;
  }

}
