import { Response } from '@angular/http';
import { SearchService } from './services/search.service';
import Search from './models/search.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) { }

  public newSearch: Search = new Search()

  searchsList: Search[]=[];
  drawed=0;

  ngOnInit(): void {
    // this.searchService.getSearch()
    //   .subscribe(searchs => {
    //     this.searchsList = searchs
    //     // console.log(searchs)
    //   })
  }


  search_this_string() {
    if(this.drawed==0)
    {
      this.drawed=1;
    this.searchService.search_this_stringSearch(this.newSearch)
      .subscribe((res) => {
        this.searchsList=res.products;
        this.drawed=0;
      })
    }
  }

  title = 'app';


}
