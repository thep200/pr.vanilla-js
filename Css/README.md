# Css
- CSS là viết tắt của Cascading Style Sheets, là ngôn ngữ đánh dấu được sử dụng để mô tả cách trang web được hiển thị trên các trình duyệt web.
- Được phát triển bởi Håkon Wium Lie và Bert Bos vào năm 1994, năm 1996 thì W3C công bố CSS1 dựa trên bản đệ trình thay đổi của Håkon Wium Lie và Bert Bos vào năm 1994. Phiên bản mới nhất hiện tại là CSS3

## 1. Css float
Bình thường 2 thẻ block sẽ nằm trên 2 line khác nhau, khi ta sử dụng thuộc tính float sẽ cho phép chúng float (nổi) lên phía bên trái hoặc bên phải khối còn lại, làm cho chúng trông inline với nhau.
```html
<!-- html -->
<div class="container">
    <div class="col1"></div>
    <div class="col2"></div>
</div>

<!-- css -->
 .container {
    height: 100px;
    border: 1px soid;
}

.col1 {
    width: 20%;
    height: 200px;
    background: black;
}

.col2 {
    width: 20%;
    height: 200px;
    background: black;
}
div
```
Khi thẻ con được sử dụng float có chiều cao `height` lớn hơn thẻ cha (thẻ chứa nó) thì chúng sẽ bị tràn ra ngoài như ví dụ ở trên. Để khắc phục điều này ta sử dụng kỹ thuật `clearfix`.
```css
/* sol 1: thêm thuộc tính overflow: auto vào container */
.container {
    overflow: auto
}

/* sol 2 */
.container::after {
    content: '';
    clear: both;
    display: table;
}
```

## 2. Position
