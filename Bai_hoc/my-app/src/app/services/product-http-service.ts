import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/isProduct';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductHttpService {
    // tạo đường dẫn lưu file
    private _url: string = '/dataset/product.json';
    // tạo constructor cơ chế DI
    constructor(private _http:HttpClient) {}

    getProductList():Observable<Product[]>{
    return this._http.get<Product[]>(this._url)
    }

}
