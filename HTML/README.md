# HTML
HTML là viết tắt của "HyperText Markup Language" (ngôn ngữ đánh dấu siêu văn bản), là một ngôn ngữ lập trình đơn giản được sử dụng để xây dựng các trang web và ứng dụng web.
- HTML không có một tác giả cụ thể. Được công bố và duy trì bởi Tổ chức World Wide Web Consortium (W3C), tổ chức phi lợi nhuận chuyên về việc phát triển các tiêu chuẩn web
- Phiên bản mới nhất của HTML hiện nay là HTML5, được công bố vào năm 2014.
- HTML không phải là một open source.
- Có, có nhiều ngôn ngữ đánh dấu siêu văn bản khác tương tự như HTML, Mỗi ngôn ngữ đánh dấu siêu văn bản này có những đặc điểm riêng và được sử dụng cho các mục đích và ứng dụng khác nhau:
    - `XML (eXtensible Markup Language)`: là một ngôn ngữ đánh dấu siêu văn bản được thiết kế cho việc truyền thông qua mạng và lưu trữ dữ liệu.
    - `XHTML (Extensible HyperText Markup Language)`: là sự kết hợp của HTML và XML, nhằm tăng tính năng và khả năng mở rộng của HTML.
    - `Markdown`: là một ngôn ngữ đánh dấu siêu văn bản đơn giản, dễ hiểu và dễ viết, thường được sử dụng để tạo ra các tài liệu như README, tài liệu API và các bài viết trên blog.
    - `BBCode (Bulletin Board Code)`: là một ngôn ngữ đánh dấu siêu văn bản được sử dụng phổ biến trong các diễn đàn trực tuyến.

## 1. HTML Style Guide
- Luôn định nghĩa document type.
- Tên của các element (tag) nên được viết thường (lowercase).
- Luôn đóng các tag.
- Tên của các thuộc tính trong các element (tag) nên được viết thường (lowercase).
- Giá trị của các thuộc tính nên được đặt vào dấu ngoặc kép.
- Đối với thẻ `img` luôn luôn định nghĩa các thuộc tính `alt`, `width` và `height`.
- Không nên đặt khoảng trắng giữa các dấu bằng khi định nghĩa một thuộc tính.
- Thêm các dòng trống hoặc khoảng trắng vào các khối HTML lớn giúp dễ đọc hơn.
- Không bao giờ bỏ qua thẻ `<title>`
- Chúng ta có thể bỏ qua thẻ `<head>`. Browser sẽ tự động thêm tất cả các thẻ đứng trước thẻ `<body>` vào `<head>`.
- Nên thêm thuộc tính `lang` cho tag `<html>` để định nghĩa ngôn ngữ sử dụng của web page.
- Luôn định nghĩa thẻ `<meta charset="charset">` để tối ưu ` SEO`.
- `viewport` là định nghĩa phần màn hình mà người dùng có thể nhìn thấy. Nên set thẻ `<meta name="viewport" content="width=device-width, initial-scale=1.0">` để nội dung được hiển thị trên mobile phone được clear.
- Đối với file name chúng ta luôn luôn sử dụng lowercase để đặt tên vì các server khác nhau có thể support case sensitive hoặc không.
- Ta có thể đặt extension cho file html là `.htm` hoặc `.html`, cả hai đều sẽ được browser hiểu và đọc, tuy nhiên đối với server khi ta config file mặc định tương ứng extension nào thì phải đặt tên file extension giống như thế.

## 2. HTML tag elements
Trong HTML Tag là viết tắt của tag element, là một thành phần cơ bản để xây dựng trang web. Các tag được sử dụng để định nghĩa các cấu trúc và nội dung của một trang web bao gồm hình ảnh, liên kết, biểu mẫu, ... <br>
`<tagname attribute="value">Content</tagname>`
- `tagname`: tên của tag
- `attribute`: tên của thuộc tính tag
- `value`: giá trị của thuộc tính
- `content`: nội dung của tag

## Phân loại
Các loại tag trong HTML được chia ra thành nhiều loại khác nhau mỗi loại sẽ có các chức năng riêng ví dụ như:
- Tag định nghĩa cấu trúc trang web:
    - `<html>`, `<head>`, `<body>`, `<header>`, `<footer>`,
    - `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<div>`,
- Tag định nghĩa các phần tử văn bản:
    - `<p>`
    - `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`,
    - `<ul>`, `<ol>`, `<li>`
    - `<a>`, `<em>`, `<strong>`, `<i>`, `<b>`
    - `<blockquote>`, `<q>`
    - `<code>`
- Tag định nghĩa các phần tử hình ảnh và media:
    - `<img>`
    - `<video>`, `<audio>`
    - `<figure>`, `<figcaption>`
- Tag định nghĩa các phần tử biểu mẫu:
    - `<form>`
    - `<input>`, `<textarea>`
    - `<select>`, `<option>`
    - `<button>`
- Tag định nghĩa các phần tử bảng:
    - `<table>`, `<tr>`, `<td>`, `<th>`
    - `<thead>`, `<tbody>`, `<tfoot>`

## Inline & Block
Thẻ `Block` trong HTML được sử dụng để định dạng cấu trúc một văn bản, khi sử dụng thẻ block thì nó sẽ nằm trên một dòng mới và chiếm hết phần chiều rộng của thẻ cha. Một số thẻ block có thể kể đến như:
- `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, ...

Thẻ `Inline` trong HTML được sử dụng để định dạng các phần tử trong văn bản thuộc khối block đó. Khi sử dụng thẻ inline thì nó sẽ nằm cùng một dòng và chỉ chiếm phần chiều rộng đủ để hiển thị nội dung của thẻ đó. Một số thẻ inline như:
- `<a>`, `<span>`, `<img>`, `<input>`, `<button>`, `<label>`, ...

## 3. SEO & Semantic HTML
### SEO (Search Engineer Optimization)
Để tối ưu search cho các trang web, giúp tăng khả năng nhận biết website đối với các công cụ tìm kiếm hiện tại như google, bing, ...

- `<title>`: thẻ title là một thẻ để thể hiện tiêu đề của một trang web, thẻ này rất quan trọng nên chúng ta phải mô tả nó ngắn gọn và xúc tích nhất.
- `<meta>`: thẻ meta là thẻ mô tả cho trang web của chúng ta, thẻ này cung cấp một mô tả ngắn gọn cho trang web để người dùng đọc qua.
- `<h1>`: thẻ heading chính của một trang web giúp đánh giá nội dung của một trang web với người dùng và công cụ tìm kiếm. Một trang html chỉ nên có duy nhất một thẻ h1 trong nó thôi.
- `<alt>`: vì các công cụ tìm kiếm không thể đọc được ảnh hoặc video mà chúng ta gắn vào trong trang html nên chúng ta phải cung cấp thông tin mô tả qua thuộc tính alt của thẻ img hay video. Thuộc tính này phải thật ngắn gọn và mô tả về ảnh hoặc video một cách ngắn gọn và xúc tích.
- Semantic HTML: là cách sử dụng các thẻ HTML theo cách các thẻ chứa các nội dung theo công dụng của nó chứ không phải sử dụng các thẻ theo cách hiển thị của nội dung. Ví dụ như không thể sử dụng thẻ h1 chỉ vì muốn có một chữ to hơn bình thường.

### Semantic HTML
`Semantic elements = elements with a meaning.` <br>
Một semantic element sẽ mô tả một cách rõ ràng về ý nghĩa của một thẻ cho trình duyệt và developer.
- non-semantic elements: `<div>` `<span>` hai thẻ này sẽ không mô tả gì về nội dung chứa trong chúng.
- semantic-element: `<form>`, `<table>`, `<article>`,.. các thẻ này sẽ định nghĩa rõ ràng ý nghĩa nội dung trong chúng. <br>

Trong một trang HTML semantic element giúp chúng ta định nghĩa các phần riêng biệt của một trang HTML.

#### 1. Tag `<section>`
Thẻ `section` được sử dụng để định nghĩa một nhóm nội dung trong một web page. Ví dụ trong như about, contact, content,... . Một web page bình thường có thể được chia thành các nhóm nội dung như introduction, content và contact.
```html
<section id="intro">
    <h1>The dark impact</h1>
    <p>Là một theme của vscode được tạo bởi thep200.<p>
</section>

<!-- ... -->
```

#### 2. Tag `<article>`
Thẻ `<article>` được sử dụng để định nghĩa một nội dung độc lập trong một web page. Phần nội dung độc lập có thể được chia sẻ cho bất kỳ phần nào của web page, nó có ý nghĩa đọc lập với nội dung page chúng ta có thể bỏ nó đi mà không ảnh hưởng gì tới trang web của chúng ta.
```html
<section id="intro">
    <h1>The dark impact</h1>
    <p>Là một theme của vscode được tạo bởi thep200.<p>
</section>

<article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
</article>

<!-- ... -->
```

> Việc lồng hai thẻ `<article>` và `<section>` không hề có một định nghĩa chung nào cả. Tùy vào ngữ cảnh và nội dung của web page chúng ta có thể lồng hai thẻ này vào với nhau.

#### 3. Tag `<header>`
Thẻ `<header>` được sử dụng để đại diện cho một phần giới thiệu về nội dung hoặc là một danh sách các navigation links. Trong một web page có thể chứa một hoặc một vài thẻ `<header>`, tuy nhiên thẻ này không thể được đặt trong thẻ `<footer>` hay `<address>` hoặc một thẻ `<header>` khác. <br>
Thẻ `<header` thường chứa các nội dung điển hình như:
- (`<h1>`  -  `<h6>`) có thể chứa 1 hoặc nhiều.
- chứa logo hoặc icon của web page
- chứa thông tin về tác giả,...
```html
<article>
    <header>
        <h1>What Does WWF Do?</h1>
        <p>WWF's mission:</p>
    </header>
    <p>WWF's mission is to stop the degradation of our planet's natural environment, and build a future in which humans live in harmony with nature.</p>
</article>
```

#### 4. Tag `<footer>`
- Thẻ `<footer>` định nghĩa một footer cho một web page hoặc là một section.
- Một thẻ `<footer>` có thẻ chứa các thông tin như:
    - thông tin về tác giả
    - thông tin về bản quyền
    - thông tin liên lạc
    - map
    - các tài liệu liên quan,...
> Chúng ta có thể đặt một vài thẻ `<footer>` trong web page của chúng ta.
```html
<footer>
    <p>Author: Hege Refsnes</p>
    <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```

#### 5. Tag `<nav>`
Thẻ `<nav>` được sử dụng để định nghĩa một danh sách các navigations links. Các trình duyệt có thể xem xét để bỏ qua thông tin này ban đầu nhằm tăng trải nghiệm web cho người dùng mà không ảnh hưởng tới nôi dung.
```html
<nav>
    <a href="/html/">HTML</a>
    <a href="/css/">CSS</a>
    <a href="/js/">JavaScript</a>
    <a href="/jquery/">jQuery</a>
</nav>
```

#### 6. Tag `<aside>`
Thẻ `<aside>` chứa các nội dung không liên quan trực tiếp đến nội dung của web page của chúng ta.
```html
<p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

<aside>
    <h4>Epcot Center</h4>
    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</aside>
```

#### 7. Tag `<figure>` & `<figcaption>`
Thẻ `<figure>` chứa các nội dung độc lập cho web page như hình ảnh minh họa, biểu đồ, ảnh,... . Thẻ `<figcaption>` thường đi cùng thẻ `<figure>` để định nghĩa một tiêu đề, nó có thể đặt ở đầu hoặc cuối trong một thẻ `<figure>`.
```html
<figure>
    <img src="pic_trulli.jpg" alt="Trulli">
    <figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
</figure>
```

#### 8. Others
| Tag | Descriptions |
|  -  | -            |
| `<details>` | Định nghĩa một số nội dung bổ sung mà người dùng có thể show hoặc ẩn đi. |
| `<mark>` | Định nghĩa các marked/highlighted cho text |
| `<summary>` | Định nghĩa một heading được show ra cho thẻ `<details>` |
| `<time>` | Định nghĩa thời gian. |
| `<menu>` | Được sử dụng để định nghĩa các điều hướng. (đối với các thanh điều hướng cơ bản ta thường sử dụng thẻ `ul`, `li` vì nó được hỗ trợ rộng rãi hơn) |
| `<blockquote>` | Được sử dụng để định nghĩa một section khác được lấy từ một nguồn khác. |
