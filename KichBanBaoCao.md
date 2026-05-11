# KỊCH BẢN BÁO CÁO ĐỒ ÁN TỐT NGHIỆP
# LEXIVOCAB - HỆ SINH THÁI HỌC TỪ VỰNG OMNICHANNEL
# Sinh viên: Phan Văn Thành | Mã SV: DTH225766

---

## ⏱ PHÂN BỔ THỜI GIAN (Dự kiến 30 phút)
- **Phần Thuyết trình:** 15 phút
- **Phần Demo:** 10 phút
- **Phần Hỏi đáp:** 5 phút

---

## PHẦN 1: MỞ ĐẦU & ĐẶT VẤN ĐỀ

### SLIDE 1: Trang bìa
**Lời thoại:**
"Kính chào quý thầy cô trong Hội đồng. Em là Phan Văn Thành, mã sinh viên DTH225766. Hôm nay em xin được trình bày đồ án tốt nghiệp của mình với đề tài: **Xây dựng hệ thống học từ vựng đa nền tảng tích hợp thuật toán lặp lại ngắt quãng**. Dự án hướng tới việc ứng dụng thuật toán SuperMemo-2 và AI tạo sinh để hỗ trợ quá trình học và ôn tập từ vựng trên nhiều thiết bị."

**Ghi chú:**
- Giữ phong thái tự tin, giọng nói rõ ràng.
- Chào hội đồng bằng ánh mắt.

### SLIDE 2: Mục tiêu đồ án (Project Vision)
**Lời thoại:**
"Mục tiêu của đồ án là xây dựng một hệ thống học từ vựng, tập trung vào 4 phương diện: Trải nghiệm người dùng trên đa nền tảng; Tích hợp thuật toán SuperMemo-2 cá nhân hóa thời gian ôn tập; Ứng dụng AI tạo sinh để hỗ trợ ngữ cảnh học; và thiết kế kiến trúc hệ thống theo định hướng dễ triển khai thực tế."

### SLIDE 3: Rào cản #1 - Context Switching
**Lời thoại:**
"Rào cản đầu tiên là việc mất tập trung trong quá trình tra cứu. Khi đang đọc tài liệu, việc phải liên tục chuyển tab để tra từ điển sẽ làm đứt đoạn luồng tư duy. Theo nghiên cứu của Gloria Mark tại UC Irvine, mỗi quãng ngắt này khiến não bộ mất rất nhiều thời gian để tái tập trung, từ đó gây ra cảm giác mệt mỏi và dễ làm người học nản lòng."

### SLIDE 4: Rào cản #2 - Đường cong quên lãng
**Lời thoại:**
"Rào cản thứ hai chính là sự quên lãng tự nhiên. Nếu không có kế hoạch ôn tập định kỳ, kiến thức mới sẽ rất nhanh chóng bị mai một. Điều này đặc biệt đúng khi chúng ta học từ vựng rời rạc, thiếu ngữ cảnh thực tế, dẫn đến việc ghi nhớ không hiệu quả và lãng phí công sức."

### SLIDE 5: Giải pháp - Ba Trụ Cột của LexiVocab
**Lời thoại:**
"Để giải quyết các vấn đề trên, hệ thống được thiết kế dựa trên 3 tính năng chính: **Capture (Bắt từ)** thông qua Chrome Extension; **Remember (Ghi nhớ)** sử dụng thuật toán SM-2 để sắp xếp lịch ôn tập; và **Understand (Hiểu sâu)** dùng LLM để tạo ví dụ và ngữ cảnh thực tế cho từ vựng."

---

## PHẦN 2: HỆ SINH THÁI ĐA NỀN TẢNG

### SLIDE 6: Chuyển phần: Hệ sinh thái đa nền tảng
**Lời thoại:**
"Tiếp theo, em xin trình bày về kiến trúc tổng thể của hệ sinh thái, được thiết kế theo mô hình kết nối tập trung."

### SLIDE 7: Kiến trúc kết nối tập trung
**Lời thoại:**
"Hệ thống sử dụng **Core API (ASP.NET Core)** làm trung tâm, đóng vai trò là "bộ não" điều phối và đồng bộ dữ liệu giữa 3 ứng dụng vệ tinh: Chrome Extension, Mobile App và Web Dashboard. Cấu trúc kết nối tập trung này giúp người dùng có một trải nghiệm liền mạch: lưu từ vựng trên máy tính và ôn tập ngay trên điện thoại mà không gặp bất kỳ trở ngại nào."

### SLIDE 8: Chrome Extension - Bắt từ ngay khi đang đọc
**Lời thoại:**
"Thành phần đầu tiên là **Chrome Extension**, giúp chúng ta bắt từ và tra nghĩa trực tiếp ngay trên trình duyệt một cách cực kỳ dễ dàng. Điểm nổi bật là tính năng tự động nhận diện: Khi bạn gặp lại một từ đã lưu trong tương lai, Extension sẽ tự động highlight từ đó. Bạn chỉ cần di chuột qua là có thể xem lại ý nghĩa ngay lập tức, giúp củng cố trí nhớ một cách tự nhiên. Về kỹ thuật, em sử dụng **Shadow DOM** để đảm bảo giao diện luôn hiển thị ổn định trên mọi trang web."

### SLIDE 9: Mobile Application - Học tập mọi lúc
**Lời thoại:**
"Ứng dụng Mobile giúp việc học tập trở nên linh hoạt hơn bao giờ hết. Hệ thống sẽ tự động đồng bộ kho từ vựng từ đám mây về điện thoại của bạn. Điểm nhấn là tính năng **Nhắc nhở thông minh** - gửi thông báo nhắc ôn bài đúng vào 'thời điểm vàng', cùng với **Widget** trên màn hình chính giúp bạn tiếp cận từ vựng một cách thụ động và hiệu quả ngay cả khi không mở ứng dụng."

### SLIDE 10: Web Dashboard - Hệ thống quản trị
**Lời thoại:**
"Web Dashboard đóng vai trò là trung tâm quản trị và phân tích chuyên sâu của toàn hệ thống. Tại đây, người dùng có thể quản lý tập trung toàn bộ kho từ vựng và thực hiện các hiệu chỉnh chuyên nghiệp. Hệ thống cũng tối ưu hóa quy trình đăng ký các gói Subscription thông qua giải pháp thanh toán tự động SePay. Cuối cùng, thông qua các báo cáo thống kê và biểu đồ trực quan, người học có thể theo dõi chi tiết hiệu quả ghi nhớ của mình theo thời gian."

---

## PHẦN 3: KIẾN TRÚC BACKEND & BẢO MẬT

### SLIDE 11: Chuyển phần: Kiến trúc Backend
**Lời thoại:**
"Đằng sau sự liền mạch đó là một nền tảng Backend được thiết kế với các cơ chế bảo mật mà em sẽ trình bày ngay sau đây."

### SLIDE 12: Clean Architecture (ASP.NET Core)
**Lời thoại:**
"Backend được thiết kế theo **Clean Architecture**, tách biệt Business Logic khỏi Framework và Database. Lớp Domain ở trung tâm chứa các quy tắc cốt lõi, giúp hệ thống dễ mở rộng và dễ bảo trì hơn. Chúng ta có thể thay đổi Database hoặc tích hợp thêm các dịch vụ bên thứ ba mà không cần sửa đổi Logic nghiệp vụ chính."

### SLIDE 13: CQRS - Phân tách Luồng Đọc/Ghi
**Lời thoại:**
"Em kết hợp mẫu thiết kế **CQRS** để phân tách luồng Ghi (Command) và luồng Đọc (Query). Luồng Ghi xử lý các logic phức tạp và validation, trong khi luồng Đọc được tối ưu cho nhu cầu truy vấn đọc, không gây side-effect, thuận lợi hơn cho việc mở rộng hệ thống sau này."

### SLIDE 14: MediatR & Middleware Pipeline
**Lời thoại:**
"Để điều phối mô hình CQRS, em sử dụng thư viện **MediatR**. Mọi yêu cầu từ phía Client đều được xử lý qua một **Pipeline Middleware** tập trung. Tại đây, hệ thống sẽ tự động thực thi các tác vụ xuyên suốt như: Ghi nhật ký hệ thống (Logging) và Kiểm tra tính hợp lệ của dữ liệu đầu vào (Validation). Cơ chế này giúp mã nguồn trở nên sạch sẽ hơn, triệt tiêu việc lặp lại logic và nâng cao khả năng bảo trì lâu dài cho hệ thống."

### SLIDE 15: Bảo mật - Refresh Token Rotation
**Lời thoại:**
"Về cơ chế xác thực, em triển khai mô hình **Refresh Token Rotation**. Access Token được lưu trong **Cookie** với thời gian hết hạn ngắn, còn Refresh Token được lưu trong **HttpOnly Cookie** nhằm hạn chế tấn công XSS. Khi Refresh Token được sử dụng để cấp mới, token cũ sẽ bị vô hiệu hóa, giúp giảm thiểu rủi ro từ Replay Attack."

### SLIDE 16: Database Design (PostgreSQL)
**Lời thoại:**
"Về tầng dữ liệu, em sử dụng **PostgreSQL**. Để tối ưu truy vấn, em đánh chỉ mục (Index) trên các trường thường xuyên tìm kiếm như Word và NextReview. Ngoài ra, em áp dụng kỹ thuật **Khử chuẩn (Denormalization)** đối với trường WordText tại bảng UserVocabs để giảm bớt các câu lệnh JOIN khi load danh sách từ vựng trên UI."

---

## PHẦN 4: USE-CASES LÕI & XỬ LÝ TẢI

### SLIDE 17: Chuyển phần: Use-Cases & Xử lý tải
**Lời thoại:**
"Sau đây là cách hệ thống xử lý các tác vụ thông minh và tối ưu hóa hiệu năng thực tế."

### SLIDE 18: Thuật toán Spaced Repetition (SM-2)
**Lời thoại:**
"Một thành phần cốt lõi của hệ thống là thuật toán **SuperMemo-2**. Dựa trên đánh giá độ khó của người dùng, hệ thống tính toán EF (Easiness Factor) để giãn cách chu kỳ ôn tập. Em đã cải tiến thêm **Fuzz Factor (lệch ±5%)** để tránh hiện tượng 'Review Hell' - khi quá nhiều thẻ dồn vào cùng một ngày, giúp trải nghiệm học tập tự nhiên hơn."

### SLIDE 19: Tối ưu hiệu năng - Composite Index
**Lời thoại:**
"Để tối ưu câu truy vấn thẻ cần ôn, em áp dụng **Composite Index** trên cặp (UserId, NextReviewDate). Benchmark mô phỏng với khoảng 10,000 bản ghi cho thấy thời gian truy vấn giảm đáng kể từ ~500ms (khi full table scan) xuống khoảng ~5ms, cải thiện hiệu năng rõ rệt cho endpoint này."

### SLIDE 20: Tích hợp AI - Kiến trúc Streaming SSE
**Lời thoại:**
"Chức năng tra cứu ngữ cảnh AI sử dụng cơ chế **Streaming qua Server-Sent Events (SSE)**. Việc trả về từng phần dữ liệu giúp giảm độ trễ (latency) ở Client và sử dụng kết nối HTTP 1 chiều nhẹ hơn WebSockets. Hệ thống được thiết kế theo hướng abstraction layer cho AI Provider, cho phép chuyển đổi giữa OpenAI hoặc Gemini mà không ảnh hưởng logic chính."

### SLIDE 21: Tự động hóa & Webhook
**Lời thoại:**
"Hệ thống tích hợp Webhook của SePay để tự động cập nhật gói thành viên. Để xử lý an toàn, em áp dụng cơ chế **Idempotency** thông qua Unique Key ở Database nhằm giảm thiểu lỗi xử lý trùng lặp giao dịch. Bên cạnh đó, các tác vụ định kỳ như gửi email nhắc nhở hay dọn dẹp dữ liệu được quản lý thông qua thư viện **Hangfire**."

### SLIDE 22: Triển khai & DevOps (Docker & Railway)
**Lời thoại:**
"Cuối cùng là phần triển khai. Em sử dụng **Multi-stage Docker** giúp giảm dung lượng image từ 1GB xuống còn 200MB. Hệ thống được triển khai trên nền tảng **Railway** với quy trình CI/CD tự động và cơ chế Health check hỗ trợ giám sát, khởi động lại service khi xảy ra lỗi."

---

## PHẦN 5: DEMO & KẾT LUẬN

### SLIDE 23 & 24: Kịch bản Demo thực chiến
**Lời thoại:**
"Bây giờ, em xin phép bắt đầu phần Demo thực tế qua 4 bước: 
1. Bắt từ vựng 'Serendipity' ngay trên trang báo New York Times qua Chrome Extension.
2. Kiểm tra việc đồng bộ và ôn tập thẻ này trên Mobile App.
3. Sử dụng AI Streaming để giải thích chi tiết và tạo câu chuyện cho từ vừa học.
4. Cuối cùng là quản lý tiến độ và xem biểu đồ phân tích trên Web Dashboard."

**(Thực hiện Demo theo kịch bản này)**

### SLIDE 25 & 26: Tổng kết đóng góp
**Lời thoại:**
"Tổng kết lại, đồ án LexiVocab đã đạt được 3 giá trị lớn: Một kiến trúc Backend hiện đại, bảo mật; Một trải nghiệm người dùng được hỗ trợ bởi AI và thuật toán SM-2; Và một hệ sinh thái sản phẩm tích hợp, có thể triển khai thử nghiệm trong môi trường thực tế."

### SLIDE 27: Hạn chế & Hướng phát triển
**Lời thoại:**
"Tất nhiên hệ thống vẫn còn những hạn chế như chưa hỗ trợ đầy đủ Offline Mode hay chi phí API AI còn cao. Trong tương lai, em sẽ phát triển Offline Mode với IndexedDB và tự host các Model AI nhỏ như Llama 3B để tối ưu chi phí và tăng tính riêng tư."

### SLIDE 28: Cảm ơn & Hỏi đáp
**Lời thoại:**
"Phần trình bày của em đến đây là kết thúc. Em xin chân thành cảm ơn Quý Thầy Cô Hội đồng đã dành thời gian lắng nghe. Em rất mong nhận được những câu hỏi và góp ý từ Quý Thầy Cô để hoàn thiện dự án hơn nữa. Em xin cảm ơn ạ!"

---

## 🧠 BÍ KÍP TRẢ LỜI CÂU HỎI PHẢN BIỆN (Dự phòng)
1. **Tại sao dùng Clean Architecture?** -> Tách biệt logic, dễ test, không phụ thuộc DB.
2. **SSE khác gì WebSocket?** -> SSE 1 chiều, nhẹ, dùng HTTP thuần, tối ưu cho streaming text.
3. **Xử lý trùng lặp thanh toán thế nào?** -> Dùng Unique Key (Idempotency) trong Database.
4. **Tại sao dùng ASP.NET Core?** -> Hiệu năng cao, cơ chế kiểm tra kiểu dữ liệu chặt chẽ giúp hạn chế lỗi runtime, hệ sinh thái ổn định.
5. **Shadow DOM có tác dụng gì?** -> Cách ly CSS, bảo vệ UI của Extension không bị vỡ.
6. **Nếu có 100k user thì sao?** -> Hiện tại hệ thống mới benchmark ở quy mô nhỏ. Tuy nhiên kiến trúc đã chuẩn bị các hướng mở rộng như caching, queue processing và horizontal scaling.
7. **Em benchmark như thế nào?** -> Đây là benchmark nội bộ trên dữ liệu mô phỏng khoảng 10,000 bản ghi trong môi trường local. Mục tiêu chính là so sánh tương đối giữa truy vấn có index và không có index, chưa phải benchmark production-scale.