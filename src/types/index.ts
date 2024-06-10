export type TyCotegory = {
    id:number;
    title:string;
    images:string[];
    link:string

}
export type TyProduct = {
    id:number;
    title:string;
    imges:string[];
    link:string;
    price:number;
    discount?:number;
    description:string;

}