# Vanilla Javascript

## 1. JS Basics
Dom là một cây tree ánh xạ các element của trang web.

### 1. Variable
- biến trong js chính là tên của một địa chỉ lưu trữ.
- tên biên trong js là case sensitive, có nghĩa rằng `x` sẽ khác `X`.
- có hai loại biến trong js là local variable và global variable.
    - local variable được định nghĩa bên trong một block, nó chỉ được truy xuất từ bên trong block đó.
    - global variable được định nghĩa bên ngoài block nó có thể được bất kỳ funciton nào sử dụng.

### 2. Data type
- Javascript là một `dynamic type language` có nghĩa rằng khi định nghĩa một biến chúng ta không cần khai báo kiểu dữ liệu cho biến đó mà js sẽ tự động gán dựa trên giá trị của biến.

**Có hai loại dữ liệu trong js đó là**:
- Primitive data type (kiểu dữ liệu nguyên thủy)
    - String, Number, Boolean, Undefined và Null
- Non-primitive data type (kiểu dữ liệu không nguyên thủy)
    - Object, Array, RegExp

### 3. Js operators
**Có 6 kiểu operator trong js đó là**:
- Arithmetic Operators
- Comparison (Relational) Operators
- Bitwise Operators
- Logical Operators
- Assignment Operators
- Special Operators
    - (?:), `, delete, in, instanceof, new, typeof, void, yield

### 4. Js loop
**Có một số kiểu loop trong js như sau**:
    - while
    - do while
    - for
    - foreach: là một builtin function của array được sử dụng để lặp qua các phần tử trong mảng.
    - for in: được sử dụng để lặp qua các key của một object
    - for of: được sử dụng để lặp qua các đối tượng (iterable object) như array hoặc string

### 5. Function
- apply()
- Bind()
- call()

## 2. JS Objects
- Js là một object-based language, mọi thứ trong js đều là object.
- Một object trong js là một entity có các state và hành vi (property và method).

### 1. Object
```js
const Car = {
    color: 'red',
    price: '10000'
}
```
**Có 3 cách để tạo ra một object trong js**
- Object by object literal
- By creating instance of Object
- By using an Object constructor
```js
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
obj = new emp(103, "Vimal Jaiswal", 30000);
```

**Một số object builtin function**
- Object.keys()     : trả về một mảng của các keys
- Object.values()   : trả về một mảng các values
- Object.entries()  : trả về một mảng gồm các key => values
- Object.assign()   : gán một object cho một obj khác
- Object.create()   : tạo ra một object mới với các thuộc tính và prototype được chỉ định
- Object.is()       : check xme 2 values có cùng giá trị hay không.
- ...etc

### 2. Array
- forEach()
- unshift()
- shift()
- includes()
- indexOf()
- map()
- filter()
- slice()
- splice()

### 3. Date
- var date = new Date();
- date.getDate()
- date.getMonth()
- date.getFullYear()
- date.getHours()
- date.getMinutes()
- date.getMilliseconds()

### 4. Js number
**Một số constants trong js:**
- MIN_VALUE
- MAX_VALUE
- POSITIVE_INFINITY
- NEGATIVE_INFINITY
- NaN


## 3. JS Async
Xử lý đồng bộ và bất đồng bộ trong javascript.

### 1. Callbacks
- Hàm trong JS được chạy theo một sequence mà chúng được gọi chứ không phải theo trình tự chúng được định nghĩa.
- Callback là một hàm được truyền vào một hàm khác dưới dạng một tham số.
- Callback thực sự được sử dụng trong xử lý bất đồng bộ `asynchronous` khi một hàm phải chờ cho một hàm khác.
- Lập trình với bất đồng bộ bằng việc kết hợp nhiều callback lồng nhau làm cho code của chúng ta khó đọc và khó bảo trì, vì thế nên chúng ta sử dụng promise cho xử lý trong bất đồng bộ.

### 2. Synchronous và Asynchronous
- Đồng bộ là trong khi thực thi mã chương trình các lệnh được execute theo thứ tự từ trên xuống, một mã được thực hiện trước khi một mã khác được thực hiện.
- Bất đồng bộ là việc chương trình vẫn tiếp tục chạy mà không chờ đợi kết quả của một mã trước đó.

- ví dụ `fetch` là một hàm bất đồng bộ được sử dụng để call dữ liệu từ internet, chương trình sẽ tiếp tục run trong khi hàm này được chạy. Khi dữ liệu được trả về chương trình sẽ tiếp tực với dữ liệu đó mà trước đó không hề dừng lại chờ. Điều này giúp tăng trải nghiệm người dùng.

### 3. Promise
**Promise**
- `producing code` là đoạn mã cần phải mất thời gian để run.
- `consuming code` là đoạn code chúng ta cần phải chờ kết quả của nó.
- một Promise là một js object liên kết giữa producing code và consuming code

- một promise có 3 state là `pending`, `fulfilled` và `rejected`. Tương ứng với từng trạng thái chúng ta sẽ có các kết quả tương ứng là `undefined`, `value` và `error object`.

- `promise.then()` nhận tham số là 2 callback cho trạng thái khi thành công và thất bại, chúng đều là optional nên ta có thể pass callback nào tùy hoàn cảnh.

- `async` sẽ làm cho một hàm trả về một promise.
```js
// async
async function myFunction() {
    return "Hello";
}

// normal
function myFunction() {
    return Promise.resolve("Hello");
}

//
myFunction().then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);
```
- `await` sẽ làm cho một hàm phải chờ một promise. Await chỉ có thể được sử dụng bên trong một async. Await tạm dừng việc run code đợi cho đến khi promise được thực resolve thì mới tiếp tục.
```js
let value = await promise;

async function doSomething() {
    const result = await fetch('https://example.com/data');
    // code here that uses the result
}
```

### 4. Facts
- Chúng ta có thể lấy dữ liệu từ một `promise` bằng `then`, tuy nhiên nếu chúng ta mong muốn đợi khi dữ liệu được lấy rồi mới thực hiện các logic sau thì chúng ta sẽ cần phải dùng tới từ khóa `await` để đợi promise trả về kết quả hoặc là bị từ chối.

## 4. JS BOM (Browser Object Model)

Browser Object Model được sử dụng để tương tác với trình duyệt. Mặc định thì object của browser là `window` điều này có nghĩa là chúng ta có thể gọi tất cả các function của window thông qua object window
```js
window.alert('Say hi!)
```

Ngoài ra còn rất nhiều đối tượng được định nghĩa dưới đối tượng window mà chúng ta có thể tương tác. (images)

![ảnh](/Vanilla-JS/images/BOM.png)
### 1. Window object
- Window object là một đối tượng đại diện cho browser nó không phải là một đối tượng của js như string, array, ..
- `iframe` là một phần tử trong html được sử dụng để chèn một trang web hoặc một tài nguyên khác vào trang web, nó được sử dụng để chèn quảng cáo,.... Khi một iframe được load thì một window object mới sẽ được tạo ra cho iframe đó.
```js
window.alert('say hi')
window.confirm('say hu');
window.prompt('Who are  u?')
```

### 2. Js history object
History object page chứa một mảng các url mà chúng ta sẽ visited. Nó cung cấp các phương thức để chúng ta truy nhập vào các url đó.
```js
history.length  : độ dài của mảng các url
forward()       : loads the next page
back()          : loads the previous page
go()            : loads the given page number
```

### 3. Js navigator object
Được sử dụng để xác định trình duyệt, nó có khả năng lấy các thông tin của trình duyệt như app name, app code name,...
```js
navigator.appName
navigator.appCodeName
navigator.cookieEnabled
navigator.userAgent
navigator.plugins
navigator
```

### 4. Js Screen object
Là nơi lưu giữ thông tin về màn hình của trình duyệt, nó có thể được sử dụng để hiển thị thông tin của chiều rộng, chiều cao, colorDepth, pixelDepth.
```js
screen.availHeight  // kích thước thực sau khi trừ đi diện tích của thanh công cụ,...
screen.availWidth
screen.height   // kích thước màn hình.
screen.width
screen.colorDepth
screen.pixelDepth
```

## 5. JS DOM (Documant Object Model)
DOM đại diện cho toàn bộ html document. Khi một html document được load bởi trình duyệt thì nó sẽ trở thành một DOM. Nó là một root element đại diện cho html document. Chúng ta có thể truy cập các thuộc tính và phương thức của nó để thực hiện thay đổi nội dung của nó.

![ảnh](/Vanilla-JS/images/DOM.png)
```js
write("string")
writeln("string")
getElementById()
getElementsByName()
getElementsByTagName()
getElementsByClassName()
```

Đối với thẻ `form` chúng ta có thể truy cập trực tiếp thông qua thuộc tính name như sau:
```js
<form action="" name="form1">
    <input type="text" name="email" id="email">
</form>
console.log(document.form1.email.value);
```

### 1. innerText vs innerHtml
- `innerText` sẽ in ra text của element nó bỏ qua các tag con trong thẻ được lấy. `innerHtml` sẽ in ra cả các tag con trong thẻ được lấy.
- `innerText` thường được sử dụng để ghi các msg cho validate,...
```js
<div id="myDiv">
    This is some <b>bold text</b>.
</div>

var div = document.getElementById("myDiv");
console.log(div.innerText); // "This is some bold text."
console.log(div.innerHTML); // "This is some <b>bold text</b>."
```


## 6. JS Events
### 1. JS Event handle
Event được sử dụng để lắng nghe và thay đổi khi có một sự kiện được kích hoạt. Các event được chia thành các nhóm như sau:
- Mouse events:
    - onclick       : Khi người dùng click
    - onmouseover   : khi con trỏ di chuyển qua một element
    - onmouseout    : khi con trỏ di chuyển ra khỏi element
    - onmousedown   : khi nhấn con trỏ trên một element
    - onmouseup     : khi nhả con trỏ trên một element
    - onmousemove   : khi con trỏ di chuyển

- Keyboard events:
    - onkeyup   : khi người dùng bấm vào phím
    - onkeydown : khi người dùng release phím đó.

- Form events:
    - onchange  : khi người dùng thay đổi giá trị của một form.
    - onsfocus  : khi người dùng đang nhập liệu và một element hoặc focuses nó
    - onblur    : khi người dùng từ trạng thái focus rời đi. (đang nhập vào một input rồi rời đi)
    - onsubmit  : khi submit một form

- Window/Document events:
    - onload    : khi trình duyệt đã load xong trang
    - onunload  : khi người dùng đóng page (browser sẽ unload page)
    - onresize  : khi người dùng điều chỉnh kích thước cửa sổ trình duyệt.

> Còn rất nhiều nữa.

### 2. addEventListener()
- Được sử dụng để gán event vào một thẻ. Lưu ý các event có thể gán nhiều lần mà chúng không ghi đè nhau, chúng sẽ chạy từng lệnh một trên cùng một event được gán.
```js
document.getElementById('foo').addEventListener('click', foo())
```

## Bubbling and Capturing
```js
<div id="outer">
    <div id="inner"></div>
</div>

document.getElementById('outer').addEventListener('click', () => alert('outer))
document.getElementById('inner').addEventListener('click', () => alert('inner))
```
Với ví dụ trên khi ta click vào thẻ div thì event nào sẽ được execute trước?.
Với mode `Bubbling` thì thẻ inner sẽ được run trước và sau đó là thẻ outer. Với mode `Capturing` thì thẻ outer sẽ được run trước thẻ inner.

> Bubbling and Capturing là tham số thứ 3 trong hàm `addEventListener()`. Với giá trị tham số thứ 3 mặc định là false thì `Bubbling` mode được set.

### 3. Onload
- document.onload : Được run trước khi ta load image và các content, run trước window.onload. Nó sẽ bị xóa bỏ trước khi run window.onload
- window.onload   : Được run khi entire page được load như css file, js file,...
