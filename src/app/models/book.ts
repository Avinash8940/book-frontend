export class Book {
    constructor(
        public id:number,
        public title:string,
        public subTitle:string,
        public author:string,
        public originalPrice:number,
        public sellingPrice:number,
        public category:string[],
        public type:string[],
        public rating:number,
        public discount:number,
        public paperQuality:number,
        public bookSize:number,
        public language:string,
        public editor:string,
        public publisher:string,
        public edition:number,
        public publishDate:Date,
        public manufactureDate:Date,
        public manufacturePlace:string,
        public pages:number
    ){}
}
