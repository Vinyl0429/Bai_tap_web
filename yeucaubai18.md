Bài 18- Json Array Model – Group Customers (*) 
Yêu cầu: 
Tạo 1 file Json lưu danh sách Khách hàng trong “assets/data/customers.json” có 
cấu trúc mẫu như dưới đây: 
[ 
{"CustomerTypeId":1,"CustomterTypeName":"VIP", 
"Customers":[{ 
"Id":"Cus123", 
"Name":"Obama", 
"Email":"obama@gmail.com", 
"Age":67, 
"Image":"assets/avatars/obama-avatar.png" 
}, 
{ 
"Id":"Cus456", 
"Name":"Kim jong Un", 
"Email":"unun@gmail.com", 
"Age":38, 
      "Image":"assets/avatars/unun-avatar.png" 
    } 
    , 
    { 
      "Id":"Cus789", 
      "Name":"Putin", 
      "Email":"putin@gmail.com", 
      "Age":77, 
      "Image":"assets/avatars/putin-avatar.png" 
    }] 
    }, 
    {"CustomerTypeId":2,"CustomterTypeName":"Normal", 
    "Customers":[{ 
      "Id":"Cus000", 
      "Name":"Hồ Cẩm Đào", 
      "Email":"hodao@gmail.com", 
      "Age":16, 
      "Image":"assets/avatars/hodao-avatar.png" 
    }, 
    { 
      "Id":"Cus111", 
      "Name":"Tap Can Binh", 
      "Email":"binhbinh@gmail.com", 
      "Age":67, 
      "Image":"assets/avatars/binhbinh-avatar.png" 
    }, 
    ] 
    }, 
  ] 
 
Áp dụng bài 14 (nhóm ) và bài 16(service http) để làm bài này.


Đây là bài 16 nhen: 
Bài 16- Json Array Model – Product– Http Service Handle Error (*) 
Yêu cầu: 
Tương tự như bài tập trước, tuy nhiên bài này xử lý lỗi ngoại lệ xảy ra. Ví dụ như 
cơ sở dữ liệu không tồn tại. 
Hướng dẫn: -Bổ sung“ProductHttpService”, và cố tình sửa sai đường dẫn dữ liệu: 
export class ProductHttpService { 
 
  private _url:string="./assets/data/productsXXX.json"; 
  constructor(private _http: HttpClient) { } 
   
  getProducts():Observable<IProduct[]>{     
    return this._http.get<IProduct[]>(this._url) 
  } 
  getProductsHandleError() 
  { 
    return this._http.get<IProduct[]>(this._url) 
      .pipe(retry(3), 
      catchError(this.handleError)) 
  } 
 
  handleError(error:HttpErrorResponse){ 
    return throwError(()=>new Error(error.message)) 
  } 
 
} 
 -Tạo component “service-product-http-handle-error”: 
+ File “service-product-http-handle-error.component.ts”: 
 Phát triển Web Kinh Doanh Nâng Cao 
0987773061 Trang 19/123 https://tranduythanh.com/  
Khoa Hệ Thống Thông Tin Đại Học Quốc Gia TP.HCM 
Đại Học Kinh Tế Luật 
 
export class ServiceProductHttpHandleErrorComponent { 
  products:any 
  errMessage:string='' 
  constructor(_service:ProductHttpService){ 
    _service.getProductsHandleError().subscribe({ 
      next:(data)=>{this.products=data}, 
      error:(err)=>{this.errMessage=err} 
    }) 
  } 
} 
 
+ File “service-product-http-handle-error.component.html”: 
<p>service-product-http-handle-error works!</p> 
{{errMessage}} 
<table border="1"> 
    <tr> 
        <td>Ma San Pham</td> 
        <td>Ten San Pham</td> 
        <td>Gia San Pham</td> 
        <td>Picture</td> 
    </tr> 
    <tbody> 
        <tr  *ngFor="let p of products"> 
            <td>{{p.ProductId}}</td> 
            <td>{{p.ProductName}}</td> 
            <td>{{p.Price}}</td> 
            <td> 
                <img src="{{p.Image}}" width="50px" height="50px"> 
            </td> 
        </tr> 
    </tbody> 
</table> 
 
Chạy lên ta có kết quả (trường hợp ta đã sửa sai đường dẫn cơ sở dữ liệu): 
 
Nếu sửa lại cho đúng thì ta có kết quả như bài trước đó. 