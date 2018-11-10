
class Search {
  _id:string;
    search_string:string;
    name:string;
    image:string;
price: string;
brand: string;
category:{
    id:number,
    name:string
};

    constructor(
    ){
        this.search_string = "";
        this.name="";
        this.image="";
        this.price="";
        this.brand="";
          }
}

export default Search;
