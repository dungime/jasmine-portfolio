# Chỉnh sửa trang chi tiết dự án

Nội dung nằm trong `en.json` và `vi.json`, tại `projects.items`.
Giữ cùng `id` dự án, `id` section và cấu trúc ở hai ngôn ngữ.

## Dùng mẫu case study chung

Thêm `caseStudy` vào bất kỳ dự án nào để dùng mẫu chung. Không cần tạo
component mới hoặc thêm điều kiện theo ID trong `ProjectDetail.tsx`.
NexStox và E-Learning đang dùng mẫu này và có thể làm ví dụ để sao chép.
Các dự án chưa có `caseStudy` tiếp tục dùng mẫu chi tiết cơ bản hiện tại.

```json
{
  "caseStudy": {
    "hero": {
      "layout": "full",
      "eyebrow": "CASE STUDY",
      "title": "Tên dự án",
      "lead": "Giới thiệu ngắn",
      "description": "Bối cảnh và vai trò của bạn",
      "meta": [{ "label": "Vai trò", "value": "Frontend Engineer" }],
      "techTags": ["React", "TypeScript"]
    },
    "sections": [
      {
        "id": "contributions",
        "eyebrow": "01 / ĐÓNG GÓP",
        "title": "Những việc tôi đã làm",
        "cards": [
          { "title": "Tiêu đề", "body": "Mô tả đầy đủ", "icon": "code" }
        ]
      },
      {
        "id": "outcomes",
        "eyebrow": "02 / KẾT QUẢ",
        "title": "Kết quả",
        "outcomes": [{ "title": "Tiêu đề", "body": "Kết quả đã xác minh" }]
      }
    ]
  }
}
```

### Hero

- `layout`: `full` đặt ảnh dưới nội dung; `split` đặt ảnh cạnh nội dung trên desktop.
- `heroImage`: ảnh với `src`, `width`, `height`, `caption`, và `alt` tùy chọn.
  Dùng đường dẫn `/assets/...`, không thêm `public` hoặc base path triển khai.
  Nếu không có `alt`, caption được dùng làm nội dung thay thế.
  Thêm `openLabel` (dịch cho từng ngôn ngữ) để cho phép mở ảnh gốc trong tab mới,
  hữu ích cho ảnh bảng dữ liệu dày đặc. Bỏ trường này để giữ ảnh tĩnh.
- `team`: thông tin bổ sung dạng `{ "label": "...", "value": "..." }`.
- `techTags`: danh sách công nghệ, có thể bỏ nếu không cần.

### Sections

Thứ tự phần tử trong `sections` chính là thứ tự hiển thị. Có thể thêm, xóa,
di chuyển section; `id` phải duy nhất và nên giữ ổn định khi dịch.
Mỗi section có `id`, `eyebrow`, `title` và các trường tùy chọn sau,
được hiển thị theo thứ tự này:

1. `cards`: các thẻ `{ title, body, icon? }`. Tên icon nằm trong `components/icons.tsx`.
2. `features`: các nội dung kỹ thuật, xem bên dưới.
3. `lead`, `description`: đoạn mở đầu và mô tả.
4. `diagram`: sơ đồ minh họa.
5. `steps`: các bước `{ title, body }`.
6. `reflection`: đoạn suy ngẫm sau sơ đồ hoặc các bước.
7. `outcomes`: các kết quả `{ title?, body }`.
8. `takeawayTitle`, `takeaway`: phần bài học cuối section.

### Features và sơ đồ

Mỗi feature gồm `eyebrow`, `title`, `facts` (các mục `{ label, body, points? }`).
Có thể thêm `note`, `reverse: true` để đặt hình bên phải trên desktop,
và `images` để hiển thị bộ ảnh bên dưới feature. `points` là danh sách gạch đầu dòng.

`visual` có thể chứa `image`, `diagram`, `eyebrow`, và `framed: true` để bọc
trong thẻ. Cấu trúc `image` và từng ảnh trong `images` giống `heroImage`.

`diagram` gồm:

- `nodes`: các nút theo chiều dọc, mỗi nút có `title` và `detail` tùy chọn.
- `branches`: tên các nhánh cuối luồng.
- `sharedResource`: tài nguyên chung bên cạnh các nhánh.
- `input`: luồng phụ, các bước nối bằng mũi tên.
- `caption`: chú thích sơ đồ.

Các trường không dùng có thể bỏ. Mẫu chung hỗ trợ các khối trên; một kiểu
hiển thị hoàn toàn mới vẫn cần bổ sung vào component chung.

Sau khi sửa, kiểm tra cả EN/VI và chạy `npm run lint`,
`npx tsc --noEmit --incremental false`, `npm run build`.

## Dự án có nhiều website tiêu biểu

- `hero.heroImages`: danh sách ảnh dùng cho phần mở đầu hai cột; `hero.imageNote`
  cung cấp chú thích chung về nguồn hoặc thời điểm của ảnh.
- `section.showcases`: các khối ảnh và nội dung, gồm `title`, `subhead`,
  `description`, `points`, `image`, `link: { label, href }`. Ảnh nằm trên nội dung
  ở mobile; link website mở trong tab mới.
- `section.engagements`: các công việc bổ sung ngắn, gồm `eyebrow`, `title`,
  `body` và `link` tùy chọn. Hiển thị trước các kết quả.
- `section.outcomesTitle`: tiêu đề phụ đặt ngay trước danh sách kết quả.
- `steps` hỗ trợ quy trình năm bước nằm ngang trên desktop, dọc trên tablet/mobile.
- `cardEyebrow` ở cấp dự án thêm dòng phân loại trên card trang chủ.
- `seoDescription` ở cấp dự án cung cấp meta description riêng cho trang dự án.

Các trường mới đều tùy chọn; không cần sửa dự án đang dùng mẫu hiện tại.
