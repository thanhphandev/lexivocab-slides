# BỘ 20 CÂU HỎI PHẢN BIỆN & TRẢ LỜI (Q&A)
*Ngắn gọn - Dễ hiểu - Đi thẳng vào trọng tâm kỹ thuật*

---

## 🏛 KIẾN TRÚC & BACKEND (ARCHITECTURE)

**1. Tại sao em chọn Clean Architecture thay vì kiến trúc 3 lớp (3-tier) truyền thống?**
> **Trả lời:** Clean Architecture giúp tách biệt hoàn toàn Business Logic (quy tắc nghiệp vụ) khỏi Database và Framework. Nhờ vậy, code dễ viết Unit Test hơn, dễ bảo trì, và sau này muốn đổi Database cũng không ảnh hưởng đến logic lõi.

**2. Tại sao lại áp dụng CQRS cho hệ thống này?**
> **Trả lời:** CQRS giúp tách biệt rạch ròi luồng Đọc (Query) và Ghi (Command). Luồng Ghi xử lý logic phức tạp, còn luồng Đọc có thể được tối ưu riêng để truy vấn tốc độ cao, thuận lợi hơn cho việc mở rộng (scale) hệ thống sau này.

**3. Nếu không dùng CQRS, hệ thống của em có hoạt động được không?**
> **Trả lời:** Dạ hoàn toàn hoạt động được. Nhưng khi logic phức tạp lên, các Controller sẽ bị phình to (fat controllers), khó quản lý và khó tối ưu hiệu năng độc lập cho các thao tác đọc/ghi.

**4. Em dùng thư viện MediatR để làm gì?**
> **Trả lời:** Em dùng MediatR để triển khai Mediator pattern. Nó giúp các class không gọi trực tiếp lẫn nhau (loose coupling) mà giao tiếp qua Command/Query. Ngoài ra, nó cung cấp Pipeline Middleware để xử lý tự động Logging và Validation ở một nơi duy nhất.

**5. Tại sao lại chọn ASP.NET Core thay vì Node.js hay Java?**
> **Trả lời:** ASP.NET Core có hiệu năng xử lý request rất cao, cơ chế kiểm tra kiểu dữ liệu chặt chẽ (strongly-typed) giúp hạn chế lỗi runtime, cùng với hệ sinh thái thư viện chuẩn enterprise rất ổn định.

---

## 🔒 BẢO MẬT (SECURITY)

**6. Tại sao không dùng JWT thông thường mà phải dùng Refresh Token Rotation?**
> **Trả lời:** JWT thông thường nếu bị lộ, hacker có thể dùng đến khi hết hạn. Refresh Token Rotation giúp cấp mới token liên tục, nếu phát hiện 1 token cũ bị sử dụng lại (Replay Attack), hệ thống sẽ vô hiệu hóa toàn bộ chuỗi token ngay lập tức.

**7. Việc lưu Refresh Token vào HttpOnly Cookie có tác dụng gì?**
> **Trả lời:** Để phòng chống tấn công XSS. HttpOnly Cookie khiến mã độc JavaScript trên trình duyệt không thể đọc được token, bảo vệ an toàn tuyệt đối cho Refresh Token.

**8. Idempotency là gì và tại sao lại cần khi tích hợp thanh toán SePay?**
> **Trả lời:** Idempotency là tính chất "xử lý 1 lần hay nhiều lần kết quả vẫn không đổi". Khi có giao dịch mạng chập chờn, SePay có thể gửi nhầm 2 Webhook cho 1 hóa đơn. Dùng Unique Key (Idempotency) đảm bảo người dùng không bị cộng dồn gói VIP 2 lần.

---

## 💾 CƠ SỞ DỮ LIỆU (DATABASE)

**9. Tại sao em chọn PostgreSQL thay vì MongoDB hay MySQL?**
> **Trả lời:** PostgreSQL hỗ trợ cực tốt cả dữ liệu quan hệ chặt chẽ (Relational) lẫn dữ liệu không cấu trúc (JSON). Nó có các cơ chế Index mạnh mẽ, tuân thủ ACID khắt khe và là mã nguồn mở hoàn toàn miễn phí.

**10. Composite Index là gì và tại sao em lại dùng nó cho bảng Flashcards?**
> **Trả lời:** Là chỉ mục (Index) tạo trên sự kết hợp của 2 cột: `UserId` và `NextReviewDate`. Nó giúp câu lệnh tìm "các thẻ cần ôn hôm nay của User A" chạy cực nhanh, giảm thời gian từ 500ms xuống 5ms so với rà quét toàn bộ bảng (Full Scan).

**11. Tại sao em lại dùng kỹ thuật Khử chuẩn (Denormalization) cho trường `WordText`?**
> **Trả lời:** Nhằm giảm bớt các lệnh JOIN bảng tốn kém khi load danh sách từ vựng. Đây là sự đánh đổi (trade-off) có chủ đích: hi sinh một chút không gian lưu trữ (lưu lặp lại text) để lấy tốc độ truy xuất dữ liệu tối đa.

---

## 🤖 TÍCH HỢP AI & STREAMING

**12. Cơ chế SSE (Server-Sent Events) khác gì với WebSockets?**
> **Trả lời:** SSE là kết nối 1 chiều (Server đẩy về Client) dùng giao thức HTTP thuần, trong khi WebSocket là kết nối 2 chiều liên tục. 

**13. Tại sao em dùng SSE thay vì WebSockets cho tính năng giải thích AI?**
> **Trả lời:** Vì tính năng AI Streaming chỉ cần Server trả kết quả chữ chạy về cho Client (1 chiều). Dùng SSE nhẹ hơn, ít tiêu tốn tài nguyên Server hơn và không cần thiết lập giao thức phức tạp như WebSockets.

**14. Thiết kế Abstraction layer (Provider-Agnostic) cho AI mang lại lợi ích gì?**
> **Trả lời:** Giúp hệ thống không bị kẹt (vendor lock-in) với một hãng AI. Nếu OpenAI gặp sự cố hoặc tăng giá, em có thể đổi sang dùng Gemini ngay lập tức chỉ bằng cách đổi file cấu hình, không cần sửa lại logic code chính.

**15. Nếu API của OpenAI bị lỗi (timeout), hệ thống của em sẽ ra sao?**
> **Trả lời:** App vẫn hoạt động bình thường vì AI chỉ là tính năng bổ trợ. Hệ thống sẽ có cơ chế Fallback báo lỗi thân thiện, người dùng vẫn có thể bắt từ và ôn tập qua thuật toán SuperMemo-2 một cách độc lập.

---

## 🌐 CHROME EXTENSION & TRẢI NGHIỆM

**16. Shadow DOM trong Chrome Extension dùng để làm gì?**
> **Trả lời:** Shadow DOM tạo ra một không gian cách ly. Nó giúp CSS của khung popup LexiVocab không bị phá vỡ bởi CSS của trang báo người dùng đang đọc (ví dụ NY Times), và ngược lại.

**17. Extension có làm chậm tốc độ tải trang của người dùng không?**
> **Trả lời:** Dạ không. Các tác vụ lưu từ vựng được giao cho Background Script xử lý ngầm (Asynchronous), nó hoàn toàn không làm block luồng render chính của giao diện trình duyệt.

---

## 🧠 THUẬT TOÁN SM-2 & VẬN HÀNH

**18. Thuật toán SuperMemo-2 hoạt động dựa trên nguyên lý nào?**
> **Trả lời:** Hoạt động dựa trên việc người dùng tự đánh giá độ khó của từ (0-5). Hệ thống sẽ tính ra hệ số EF (Easiness Factor) để giãn cách ngày ôn. Từ nào "Khó" sẽ ôn sớm, từ nào "Dễ" sẽ giãn ra vài tuần hoặc vài tháng.

**19. Tại sao em cần thêm "Fuzz Factor" vào thuật toán SM-2?**
> **Trả lời:** Để tránh hiện tượng "Review Hell" - quá nhiều thẻ có cùng lịch ôn bị dồn vào đúng một ngày. Fuzz Factor tạo ra độ lệch ngẫu nhiên (±5%) giúp rải đều các thẻ ra các ngày lân cận, làm việc học tự nhiên và đỡ áp lực hơn.

**20. Nếu sau này hệ thống có 100,000 users thì em tính mở rộng (Scale) thế nào?**
> **Trả lời:** Hiện tại kiến trúc đã chuẩn bị sẵn cho việc scale. Em có thể deploy nhiều instance của Core API chạy song song sau Load Balancer; dùng Stateless Auth (JWT) nên không lo mất session; và có thể gắn thêm Redis Cache để giảm tải cho Database.
