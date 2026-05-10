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
"Kính chào quý thầy cô trong Hội đồng. Em là Phan Văn Thành, mã sinh viên DTH225766. Hôm nay em rất vinh dự được trình bày đồ án tốt nghiệp của mình với đề tài: **LexiVocab - Hệ sinh thái học từ vựng đa nền tảng tích hợp thuật toán lặp lại ngắt quãng**. Dự án hướng tới việc ứng dụng thuật toán SuperMemo-2 và AI sinh tạo để mang lại trải nghiệm học tập tập trung và liền mạch."

**Ghi chú:**
- Giữ phong thái tự tin, giọng nói rõ ràng.
- Chào hội đồng bằng ánh mắt.

### SLIDE 2: Mục tiêu đồ án (Project Vision)
**Lời thoại:**
"Mục tiêu cốt lõi của đồ án không chỉ là một ứng dụng học tập, mà là xây dựng một **sản phẩm hoàn thiện (Production-ready)**. Giải quyết triệt để bài toán học từ vựng qua 4 phương diện: Trải nghiệm đa nền tảng liền mạch; Thuật toán SuperMemo-2 cá nhân hóa; Tích hợp AI sinh tạo để hiểu sâu ngữ cảnh; và cuối cùng là một hệ thống có khả năng triển khai thực tế trên môi trường Production."

### SLIDE 3: Rào cản #1 - Context Switching
**Lời thoại:**
"Rào cản lớn nhất mà em nhận thấy là **Context Switching** - kẻ thù của sự tập trung. Khi người học đang đọc một bài báo tiếng Anh và gặp từ mới, việc phải chuyển tab sang từ điển làm đứt đoạn luồng tư duy. Theo nghiên cứu từ ĐH UC Irvine, não bộ mất tới 23 phút để lấy lại trạng thái tập trung cao độ (Flow) sau mỗi lần gián đoạn như vậy, làm giảm 40% hiệu suất học tập."

### SLIDE 4: Rào cản #2 - Đường cong quên lãng
**Lời thoại:**
"Rào cản thứ hai là **Đường cong quên lãng Ebbinghaus**. Nếu không có cơ chế ôn tập đúng thời điểm, não bộ sẽ tự động loại bỏ 80% thông tin mới chỉ sau 24 giờ. Việc học vẹt mà không có sự nhắc nhở khoa học dẫn đến lãng phí rất lớn công sức của người học."

### SLIDE 5: Giải pháp - Ba Trụ Cột của LexiVocab
**Lời thoại:**
"LexiVocab ra đời dựa trên 3 trụ cột: **Capture (Bắt từ)** - sử dụng Chrome Extension để lưu từ trực tiếp không làm gián đoạn luồng đọc; **Remember (Nhớ lâu)** - dùng thuật toán SM-2 để chuyển thông tin vào bộ nhớ dài hạn; và **Understand (Hiểu sâu)** - dùng AI tạo ngữ cảnh ví dụ thực tế giúp hiểu cặn kẽ mọi tầng nghĩa của từ."

---

## PHẦN 2: HỆ SINH THÁI 4 MẢNH GHÉP

### SLIDE 6: Chuyển phần: Hệ Sinh Thái
**Lời thoại:**
"Tiếp theo, em xin trình bày về hệ sinh thái 4 mảnh ghép của dự án, được thiết kế theo kiến trúc Hub & Spoke để bao phủ 100% không gian thiết bị của người dùng."

### SLIDE 7: Kiến trúc Hub & Spoke
**Lời thoại:**
"Hệ thống lấy **Core API (.NET 10)** làm trung tâm, kết nối đồng nhất dữ liệu giữa 3 nền tảng Client: Chrome Extension, Mobile App và Web Dashboard. Điều này đảm bảo người dùng có thể bắt từ trên máy tính tại văn phòng và ôn tập ngay trên điện thoại khi đang di chuyển."

### SLIDE 8: Chrome Extension - Bắt từ tức thì
**Lời thoại:**
"Chrome Extension là công cụ 'bắt từ' chủ lực. Em sử dụng chuẩn **Manifest V3** mới nhất để tối ưu hiệu năng. Đặc biệt, em áp dụng kỹ thuật **Shadow DOM** để cô lập hoàn toàn UI của extension, đảm bảo popup hiển thị đẹp mắt trên mọi website mà không bị ảnh hưởng bởi CSS của trang đó. Service Worker được sử dụng để xử lý đồng bộ ngầm giúp tiết kiệm tài nguyên."

### SLIDE 9: Mobile Application - Học tập mọi lúc
**Lời thoại:**
"Mobile App được xây dựng bằng React Native, mang lại trải nghiệm mượt mà. Điểm nhấn là tính năng **SRS Notification** - gửi thông báo nhắc ôn bài đúng vào 'thời điểm vàng' mà thuật toán tính toán. Dữ liệu được đồng bộ Real-time qua Cloud, giúp người dùng luôn cập nhật được những từ vựng mới nhất mình vừa bắt được trên trình duyệt."

### SLIDE 10: Web Dashboard - Hệ thống quản trị
**Lời thoại:**
"Web Dashboard được xây dựng trên **Next.js**, là nơi quản lý tập trung và phân tích dữ liệu. Hệ thống tích hợp **SePay Webhooks** để tự động hóa quy trình nâng cấp gói VIP qua QR code. Ngoài ra, Dashboard cung cấp các biểu đồ Analytics trực quan giúp người dùng theo dõi tiến độ và hiệu quả ghi nhớ theo thời gian."

---

## PHẦN 3: KIẾN TRÚC BACKEND & BẢO MẬT

### SLIDE 11: Chuyển phần: Kiến trúc Backend
**Lời thoại:**
"Đằng sau sự liền mạch đó là một nền tảng Backend vững chắc và bảo mật mà em sẽ trình bày ngay sau đây."

### SLIDE 12: Clean Architecture (Core API .NET 10)
**Lời thoại:**
"Backend được thiết kế theo **Clean Architecture**, tách biệt hoàn toàn Business Logic khỏi Framework và Database. Lớp Domain ở trung tâm chứa các quy tắc cốt lõi, giúp hệ thống cực kỳ linh hoạt. Chúng ta có thể thay đổi Database hoặc tích hợp thêm các dịch vụ bên thứ ba mà không cần sửa đổi Logic nghiệp vụ chính."

### SLIDE 13: CQRS - Phân tách Luồng Đọc/Ghi
**Lời thoại:**
"Em kết hợp mẫu thiết kế **CQRS** để phân tách hoàn toàn luồng Ghi (Command) và luồng Đọc (Query). Luồng Ghi xử lý các logic phức tạp và validation, trong khi luồng Đọc được tối ưu hóa để truy vấn dữ liệu với tốc độ cao nhất, không gây side-effect, giúp hệ thống dễ dàng scale theo chiều ngang."

### SLIDE 14: MediatR & Middleware Pipeline
**Lời thoại:**
"Để điều phối CQRS, em sử dụng thư viện **MediatR**. Mọi yêu cầu đều đi qua một **Pipeline Middleware** tập trung, nơi xử lý các vấn đề như: Logging tự động, Validation dữ liệu bằng FluentValidation, và Transaction Management. Điều này giúp code sạch hơn và dễ bảo trì hơn rất nhiều."

### SLIDE 15: Bảo mật - Refresh Token Rotation
**Lời thoại:**
"Về bảo mật, em triển khai cơ chế **Refresh Token Rotation**. Access Token lưu trong RAM và hết hạn nhanh, trong khi Refresh Token được lưu trong **HttpOnly Cookie** - ngăn chặn 100% các cuộc tấn công XSS. Mỗi khi cấp mới, token cũ sẽ bị vô hiệu hóa ngay lập tức, loại bỏ hoàn toàn rủi ro bị Replay Attack."

### SLIDE 16: Database Design (PostgreSQL)
**Lời thoại:**
"Về tầng dữ liệu, em sử dụng **PostgreSQL**. Để tối ưu cho hàng triệu bản ghi, em đánh chỉ mục B-Tree trên các trường quan trọng như Word và NextReview. Đặc biệt, em sử dụng kỹ thuật **Khử chuẩn (Denormalization)** - lưu sẵn WordText tại bảng UserVocabs để tăng tốc độ render UI, tránh các lệnh JOIN phức tạp làm chậm hệ thống."

---

## PHẦN 4: USE-CASES LÕI & XỬ LÝ TẢI

### SLIDE 17: Chuyển phần: Use-Cases & Xử lý tải
**Lời thoại:**
"Sau đây là cách hệ thống xử lý các tác vụ thông minh và tối ưu hóa hiệu năng thực tế."

### SLIDE 18: Thuật toán Spaced Repetition (SM-2)
**Lời thoại:**
"Trái tim của hệ thống là thuật toán **SuperMemo-2**. Dựa trên đánh giá độ khó của người dùng, hệ thống tính toán EF (Easiness Factor) để giãn cách chu kỳ ôn tập. Em đã cải tiến thêm **Fuzz Factor (lệch ±5%)** để tránh hiện tượng 'Review Hell' - khi quá nhiều thẻ dồn vào cùng một ngày, giúp trải nghiệm học tập tự nhiên hơn."

### SLIDE 19: Tối ưu hiệu năng - B-Tree Indexing
**Lời thoại:**
"Để giải quyết bài toán truy vấn thẻ cần ôn của hàng vạn người dùng cùng lúc, em đã thay thế Full Scan bằng **Composite Index** trên cặp (UserId, NextReviewDate). Kết quả thực tế cho thấy thời gian truy vấn giảm từ 500ms xuống dưới 1 micro-giây, tức là nhanh hơn gấp hàng nghìn lần."

### SLIDE 20: Realtime AI - Kiến trúc Streaming SSE
**Lời thoại:**
"Tính năng AI được thiết kế theo kiến trúc **Streaming qua Server-Sent Events (SSE)**. Thay vì bắt người dùng chờ 3-5 giây để AI xử lý xong, hệ thống đẩy từng từ (token) về Client ngay lập tức. Điều này mang lại trải nghiệm Zero-delay tương tự như ChatGPT nhưng với chi phí tài nguyên thấp hơn nhiều so với WebSockets."

### SLIDE 21: Thanh toán & Tự động hóa
**Lời thoại:**
"Về vận hành, em sử dụng cơ chế **Idempotency** cho Webhooks thanh toán SePay để đảm bảo một giao dịch không bao giờ bị xử lý trùng lặp. Đồng thời, thư viện **Hangfire** được dùng để tự động hóa các tác vụ ngầm như gửi Email nhắc nhở học tập và dọn dẹp dữ liệu rác định kỳ mỗi đêm."

### SLIDE 22: Triển khai & DevOps (Docker & Railway)
**Lời thoại:**
"Cuối cùng là phần triển khai. Em sử dụng **Multi-stage Docker** giúp giảm dung lượng image từ 1GB xuống còn 200MB. Hệ thống được triển khai trên nền tảng **Railway** với đầy đủ quy trình CI/CD tự động, cơ chế Health check tự khởi động lại khi có sự cố, đảm bảo tính sẵn sàng cao."

---

## PHẦN 5: DEMO & KẾT LUẬN

### SLIDE 23 & 24: Kịch bản Demo thực chiến
**Lời thoại:**
"Bây giờ, em xin phép bắt đầu phần Demo thực tế qua 4 bước: 
1. Bắt từ vựng 'Serendipity' ngay trên trang báo New York Times qua Chrome Extension.
2. Kiểm tra việc đồng bộ và ôn tập thẻ này trên Mobile App.
3. Sử dụng AI Streaming để giải thích cặn kẽ và tạo câu chuyện cho từ vừa học.
4. Cuối cùng là quản lý tiến độ và xem biểu đồ phân tích trên Web Dashboard."

**(Thực hiện Demo theo kịch bản này)**

### SLIDE 25 & 26: Tổng kết đóng góp
**Lời thoại:**
"Tổng kết lại, đồ án LexiVocab đã đạt được 3 giá trị lớn: Một kiến trúc Backend hiện đại, bảo mật; Một trải nghiệm người dùng thông minh nhờ AI và thuật toán SM-2; Và một hệ sinh thái sản phẩm hoàn chỉnh, sẵn sàng cho người dùng thực tế."

### SLIDE 27: Hạn chế & Hướng phát triển
**Lời thoại:**
"Tất nhiên hệ thống vẫn còn những hạn chế như chưa hỗ trợ Offline Mode hoàn toàn hay chi phí API AI còn cao. Trong tương lai, em sẽ phát triển Offline Mode với IndexedDB và tự host các Model AI nhỏ như Llama 3B để tối ưu chi phí và tăng tính riêng tư."

### SLIDE 28: Cảm ơn & Hỏi đáp
**Lời thoại:**
"Phần trình bày của em đến đây là kết thúc. Em xin chân thành cảm ơn Quý Thầy Cô Hội đồng đã dành thời gian lắng nghe. Em rất mong nhận được những câu hỏi và góp ý từ Quý Thầy Cô để hoàn thiện dự án hơn nữa. Em xin cảm ơn ạ!"

---

## 🧠 BÍ KÍP TRẢ LỜI CÂU HỎI PHẢN BIỆN (Dự phòng)
1. **Tại sao dùng Clean Architecture?** -> Tách biệt logic, dễ test, không phụ thuộc DB.
2. **SSE khác gì WebSocket?** -> SSE 1 chiều, nhẹ, dùng HTTP thuần, tối ưu cho streaming text.
3. **Xử lý trùng lặp thanh toán thế nào?** -> Dùng Unique Key (Idempotency) trong Database.
4. **Tại sao dùng .NET 10?** -> Hiệu năng cao, Native AOT, Type-safety mạnh, hệ sinh thái ổn định.
5. **Shadow DOM có tác dụng gì?** -> Cách ly CSS, bảo vệ UI của Extension không bị vỡ.