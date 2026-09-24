Bài 13- Json Array Model – Product Event (*) 
Yêu cầu: 
Tạo một Component để hiển thị danh sách sản phẩm như hình bên dưới. Yêu cầu 
dùng JsonArray và cơ chế binding. Dữ liệu khai báo trong Service. 
Nhấn vào details sẽ hiển thị chi tiết của sản phẩm đó: 
0987773061 
Trang 11/123 
https://tranduythanh.com/  
 Phát triển Web Kinh Doanh Nâng Cao 
0987773061 Trang 12/123 https://tranduythanh.com/  
Khoa Hệ Thống Thông Tin Đại Học Quốc Gia TP.HCM 
Đại Học Kinh Tế Luật 
 
Nhấn “Go Back” sẽ quay lại màn hình danh sách sản phẩm. 
Hướng dẫn: - Tạo ProductService: 
export class ProductService { 
  productsImage=[ 
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/h1.png"}, 
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/h2.png"}, 
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"assets/h3.png"}, 
  ] 
  constructor() { } 
  getProductsWithImages() 
  { 
    return this.productsImage 
  } 
  getProductDetail(id:any){ 
    
    return this.productsImage.find(x=>x.ProductId==id) 
  } 
} - Các hình ảnh sao chép vào assets - Tạo component “service-product-image-event”: 
+ Viết lệnh cho “service-product-image-event.component.ts”: 
import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { ProductService } from '../product.service'; 
 
@Component({ 
  selector: 'app-service-product-image-event', 
  templateUrl: './service-product-image-event.component.html', 
  styleUrls: ['./service-product-image-event.component.css'] 
}) 
export class ServiceProductImageEventComponent { 
 Phát triển Web Kinh Doanh Nâng Cao 
0987773061 Trang 13/123 https://tranduythanh.com/  
Khoa Hệ Thống Thông Tin Đại Học Quốc Gia TP.HCM 
Đại Học Kinh Tế Luật 
  public products:any 
  constructor(pservice: ProductService,private router:Router){ 
    this.products=pservice.getProductsWithImages() 
  } 
  viewDetail(f:any) 
  { 
    this.router.navigate(['service-product-image-event',f.ProductId]) 
  } 
} 
 
+Viết lệnh cho “service-product-image-event.component.html”: 
 
<p>service-product-image-event works!</p> 
<table border="1"> 
    <tr> 
        <td>Ma San Pham</td> 
        <td>Ten San Pham</td> 
        <td>Gia San Pham</td> 
        <td>Picture</td> 
        <td>#</td> 
    </tr> 
    <tbody *ngFor="let p of products"> 
        <tr> 
            <td>{{p.ProductId}}</td> 
            <td>{{p.ProductName}}</td> 
            <td>{{p.Price}}</td> 
            <td> 
                <img src="{{p.Image}}"> 
            </td> 
            <td> 
                <a style="cursor:pointer;" (click)="viewDetail(p)" title="Click 
here to view detail">Details</a> 
            </td> 
        </tr> 
    </tbody> 
</table> 
 - Tạo component “service-product-image-event”: 
+ viết lệnh cho  “service-product-image-event-detail.component.ts”: 
import { Component } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProductService } from '../product.service'; 
 
@Component({ 
  selector: 'app-service-product-image-event-detail', 
  templateUrl: './service-product-image-event-detail.component.html', 
  styleUrls: ['./service-product-image-event-detail.component.css'] 
}) 
export class ServiceProductImageEventDetailComponent { 
  selectedProduct:any 
 Phát triển Web Kinh Doanh Nâng Cao 
0987773061 Trang 14/123 https://tranduythanh.com/  
Khoa Hệ Thống Thông Tin Đại Học Quốc Gia TP.HCM 
Đại Học Kinh Tế Luật 
  constructor(private activateRoute:ActivatedRoute,private _fs:ProductService, 
private router:Router) 
  { 
    activateRoute.paramMap.subscribe( 
      (param)=>{ 
        let id=param.get('id') 
         
        if(id!=null) 
        { 
          this.selectedProduct=_fs.getProductDetail(id)           
        } 
      } 
    ) 
  } 
  goBack(){ 
    this.router.navigate(['service-product-image-event']) 
  } 
} 
 
+ viết lệnh cho  “service-product-image-event-detail.component.html”: 
<p>service-product-image-event-detail works!</p> 
<button (click)="goBack()">Go Back</button> 
<table> 
    <tr> 
        <td>ID:</td> 
        <td>{{selectedProduct.ProductId}}</td> 
    </tr> 
    <tr> 
        <td>Name:</td> 
        <td>{{selectedProduct.ProductName}}</td> 
    </tr> 
    <tr> 
        <td>Price:</td> 
        <td>{{selectedProduct.Price}}</td> 
    </tr> 
    <tr> 
        <td colspan="2"> 
            <img [src]="selectedProduct.Image"/> 
        </td>         
    </tr> 
</table> - Cấu hình Routing: 
{path:'service-product-image-event', 
component:ServiceProductImageEventComponent}, 
{path:'service-product-image-event/:id', 
component:ServiceProductImageEventDetailComponent}, 