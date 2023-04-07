# JS BOM (Browser Object Model)

Browser Object Model được sử dụng để tương tác với trình duyệt. Mặc định thì object của browser là `window` điều này có nghĩa là chúng ta có thể gọi tất cả các function của window thông qua object window
```js
window.alert('Say hi!)
```

Ngoài ra còn rất nhiều đối tượng được định nghĩa dưới đối tượng window mà chúng ta có thể tương tác. (images)

![ảnh](/js-bom/images/BOM.png)

## 1. Window object
- Window object là một đối tượng đại diện cho browser nó không phải là một đối tượng của js như string, array, ..
- `iframe` là một phần tử trong html được sử dụng để chèn một trang web hoặc một tài nguyên khác vào trang web, nó được sử dụng để chèn quảng cáo,.... Khi một iframe được load thì một window object mới sẽ được tạo ra cho iframe đó.
```js
window.alert('say hi')
window.confirm('say hu');
window.prompt('Who are  u?')
```

## 2. Js history object
History object page chứa một mảng các url mà chúng ta sẽ visited. Nó cung cấp các phương thức để chúng ta truy nhập vào các url đó.

```js
history.length  : độ dài của mảng các url
forward()       : loads the next page
back()          : loads the previous page
go()            : loads the given page number
```

## 3. Js navigator object
Được sử dụng để xác định trình duyệt, nó có khả năng lấy các thông tin của trình duyệt như app name, app code name,...

```js
navigator.appName
navigator.appCodeName
navigator.cookieEnabled
navigator.userAgent
navigator.plugins
navigator
```

## 4. Js Screen object
Là nơi lưu giữ thông tin về màn hình của trình duyệt, nó có thể được sử dụng để hiển thị thông tin của chiều rộng, chiều cao, colorDepth, pixelDepth.

```js
screen.availHeight  // kích thước thực sau khi trừ đi diện tích của thanh công cụ,...
screen.availWidth
screen.height   // kích thước màn hình.
screen.width
screen.colorDepth
screen.pixelDepth
```
