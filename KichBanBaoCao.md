# LEXIVOCAB - HỆ THỐNG HỌC TỪ VỰNG ĐA NỀN TẢNG
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
"Kính chào hai thầy trong Hội đồng bảo vệ. Em là Phan Văn Thành, mã sinh viên DTH225766. Hôm nay em xin được trình bày đồ án tốt nghiệp của mình với đề tài: **Xây dựng hệ thống học từ vựng đa nền tảng tích hợp thuật toán lặp lại ngắt quãng**. Dự án hướng tới việc ứng dụng thuật toán SuperMemo-2 và AI tạo sinh để hỗ trợ quá trình học và ôn tập từ vựng trên thiết bị di động và máy tính.

Sau đây, em xin phép bắt đầu bằng những rào cản thực tế mà người học ngoại ngữ thường gặp phải."

**Từ khóa:** Chào hỏi, **Phan Văn Thành**, DTH225766, **Hệ thống đa nền tảng**, SM-2 & AI.

**Ghi chú:**
- Giữ phong thái tự tin, giọng nói rõ ràng.
- Chào hội đồng bằng ánh mắt.

### SLIDE 2: Rào cản #1 - Chuyển đổi ngữ cảnh (Context Switching)
**Lời thoại:**
"Rào cản đầu tiên là việc mất tập trung trong quá trình tra cứu. Khi đang đọc một bài báo hay tài liệu ngoại ngữ, việc phải liên tục chuyển sang tab khác để tra từ điển sẽ làm đứt đoạn luồng tư duy. Mỗi lần ngắt quãng như vậy, não bộ phải mất thêm rất nhiều thời gian để lấy lại sự tập trung ban đầu, dẫn đến hiệu suất học tập bị suy giảm và dễ sinh ra cảm giác nản chí."

**Từ khóa:** Mất tập trung, **Đứt đoạn luồng tư duy**, Chuyển tab, **Suy giảm hiệu suất**.

### SLIDE 3: Rào cản #2 - Đường cong quên lãng
**Lời thoại:**
"Rào cản thứ hai chính là sự quên lãng tự nhiên. Nếu không có kế hoạch ôn tập định kỳ, kiến thức mới sẽ rất nhanh chóng bị mai một. Điều này đặc biệt đúng khi chúng ta học từ vựng rời rạc, thiếu ngữ cảnh thực tế, dẫn đến việc ghi nhớ không hiệu quả và lãng phí công sức."

**Từ khóa:** Sự quên lãng, **Thiếu ngữ cảnh**, ôn tập định kỳ, hiệu quả ghi nhớ.

### SLIDE 4: Giải pháp - Hệ giá trị cốt lõi
**Lời thoại:**
"Để giải quyết các vấn đề trên, Hệ thống tập trung vào 3 giá trị then chốt: **Thu thập** thông qua Chrome Extension; **Ghi nhớ** sử dụng thuật toán SM-2 để sắp xếp lịch ôn tập; và **Hiểu sâu** dùng AI để tạo ví dụ và ngữ cảnh thực tế."

**Từ khóa:** 3 Giá trị: **Thu thập** (Extension), **Ghi nhớ** (SM-2), **Hiểu sâu** (AI).

---

## PHẦN 2: TRẢI NGHIỆM ĐA NỀN TẢNG

### SLIDE 5: Chuyển phần: Trải nghiệm đa nền tảng
**Lời thoại:**
"Tiếp theo, em xin trình bày cách hệ thống hiện diện và đồng bộ hóa trên mọi thiết bị của người dùng thông qua một mô hình kết nối tập trung."

### SLIDE 6: Mô hình kết nối tập trung
**Lời thoại:**
"Hệ thống sử dụng **Core API (ASP.NET Core)** làm trung tâm, đóng vai trò là "bộ não" điều phối và đồng bộ dữ liệu giữa 3 ứng dụng vệ tinh: Chrome Extension, Mobile App và Web Dashboard. Cấu trúc kết nối tập trung này giúp người dùng có một trải nghiệm liền mạch: lưu từ vựng trên máy tính và ôn tập ngay trên điện thoại mà không gặp bất kỳ trở ngại nào. Ngoài ra hệ thống còn hỗ trợ đa ngôn ngữ, giúp hỗ trợ bản địa hoá tốt hơn"

**Từ khóa:** **Core API (ASP.NET Core)**, 3 vệ tinh, **Đồng bộ dữ liệu**, trải nghiệm liền mạch.

### SLIDE 7: Chrome Extension - Bắt từ ngay khi đang đọc
**Lời thoại:**
"Thành phần đầu tiên là **Chrome Extension**, giúp chúng ta bắt từ và tra nghĩa trực tiếp ngay trên trình duyệt một cách cực kỳ dễ dàng. Điểm nổi bật là tính năng **tự động nhận diện**: Khi bạn gặp lại một từ đã lưu trong tương lai, Extension sẽ tự động highlight từ đó. Khi cần ôn tập, chúng ta chỉ cần di chuột vào từ được highlight, toàn bộ thông tin ngữ nghĩa sẽ hiển thị tức thì mà không cần phải chuyển tab."

**Từ khóa:** Tra cứu dễ dàng, **Tự động nhận diện**, **Ôn tập tức thì (Hover)**.

### SLIDE 8: Mobile Application - Học tập mọi lúc
**Lời thoại:**
"Ứng dụng Mobile giúp việc học tập trở nên linh hoạt hơn bao giờ hết. Hệ thống sẽ tự động đồng bộ kho từ vựng từ đám mây về điện thoại của bạn. Điểm nhấn là tính năng **Nhắc nhở thông minh** - gửi thông báo nhắc ôn bài đúng vào thời gian đã cài đặt, cùng với **Widget** trên màn hình chính giúp bạn tiếp cận từ vựng một cách thụ động và hiệu quả ngay cả khi không mở ứng dụng."

**Từ khóa:** Đồng bộ đám mây, **Nhắc nhở thông minh**, **Widget màn hình chính**.

### SLIDE 9: Web Dashboard - Hệ thống quản trị
**Lời thoại:**
"Web Dashboard đóng vai trò là trung tâm quản trị và phân tích chuyên sâu của toàn hệ thống. Tại đây, người dùng có thể quản lý tập trung toàn bộ kho từ vựng và thực hiện các hiệu chỉnh chuyên nghiệp. Hệ thống cũng tối ưu hóa quy trình đăng ký các gói Subscription thông qua giải pháp thanh toán tự động SePay. Cuối cùng, thông qua các báo cáo thống kê và biểu đồ trực quan, người học có thể theo dõi chi tiết hiệu quả ghi nhớ của mình theo thời gian."

**Từ khóa:** Quản lý chuyên nghiệp, **Thanh toán tự động SePay**, **Báo cáo thống kê** (Biểu đồ).

---

## PHẦN 3: KIẾN TRÚC BACKEND & BẢO MẬT

### SLIDE 10: Chuyển phần: Kiến trúc Backend
**Lời thoại:**
"Đằng sau sự liền mạch đó là một nền tảng Backend được thiết kế với các cơ chế bảo mật mà em sẽ trình bày ngay sau đây."

### SLIDE 11: Clean Architecture (ASP.NET Core)
**Lời thoại:**
"Backend được thiết kế theo **Clean Architecture**, tách biệt Business Logic khỏi Framework và Database. Lớp Domain ở trung tâm chứa các quy tắc cốt lõi, giúp hệ thống dễ mở rộng và dễ bảo trì hơn. Chúng ta có thể thay đổi Database hoặc tích hợp thêm các dịch vụ bên thứ ba mà không cần sửa đổi Logic nghiệp vụ chính."

**Từ khóa:** **Clean Architecture**, tách biệt Logic, dễ mở rộng/bảo trì.

"Em kết hợp mẫu thiết kế **CQRS** để phân tách luồng Ghi (Command) và luồng Đọc (Query). Luồng Ghi xử lý các logic phức tạp và kiểm tra dữ liệu, trong khi luồng Đọc được tối ưu cho nhu cầu truy vấn, không gây tác động phụ (side-effect), thuận lợi hơn cho việc mở rộng hệ thống sau này."

**Từ khóa:** **CQRS**, Luồng Ghi (**Command**) / Đọc (**Query**), không gây **tác động phụ**.

"Để điều phối mô hình CQRS, em sử dụng thư viện **MediatR**. Mọi yêu cầu đều được xử lý tập trung qua một **Luồng xử lý trung gian (Pipeline)**. Tại đây, hệ thống sẽ tự động thực thi các tác vụ xuyên suốt như: Ghi nhật ký hệ thống (Logging) và Kiểm tra tính hợp lệ của dữ liệu (Validation). Cơ chế này giúp mã nguồn trở nên sạch sẽ hơn, loại bỏ việc lặp lại logic và nâng cao khả năng bảo trì hệ thống."

**Từ khóa:** **MediatR**, **Luồng xử lý trung gian**, Logging/Validation, mã nguồn sạch.

"Hệ thống sử dụng cơ chế xác thực dựa trên **JSON Web Token (JWT)** với bộ đôi **Access và Refresh Token**. Access Token đóng vai trò là 'chìa khóa' truy cập tạm thời. Khi hết hạn, hệ thống sẽ tự động sử dụng Refresh Token để cấp lại chìa khóa mới thông qua cơ chế **Xoay vòng Token (Rotation)**. Điều này giúp cân bằng giữa tính bảo mật và trải nghiệm người dùng mượt mà."

**Từ khóa:** **JWT**, Access/Refresh Token, **Xoay vòng Token**, Bảo mật & Trải nghiệm.

### SLIDE 15: Database Design (PostgreSQL)
**Lời thoại:**
"Về tầng dữ liệu, em sử dụng **PostgreSQL**. Để tối ưu truy vấn, em đánh chỉ mục (Index) trên các trường thường xuyên tìm kiếm như Word và NextReview. Ngoài ra, em áp dụng kỹ thuật **Khử chuẩn (Denormalization)** đối với trường WordText tại bảng UserVocabs để giảm bớt các câu lệnh JOIN khi load danh sách từ vựng trên UI."

**Từ khóa:** **PostgreSQL**, Đánh chỉ mục (**Index**), **Khử chuẩn (Denormalization)**.

---

## PHẦN 4: USE-CASES LÕI & XỬ LÝ TẢI

### SLIDE 16: Chuyển phần: Công nghệ cốt lõi
**Lời thoại:**
"Sau đây, em xin trình bày về những công nghệ cốt lõi giúp LexiVocab trở nên thông minh và tối ưu hơn."

### SLIDE 17: Thuật toán Spaced Repetition (SM-2)
**Lời thoại:**
"Thành phần của hệ thống chính là thuật toán **SuperMemo-2 (SM-2)**. Như các thầy thấy trên màn hình, hệ thống sẽ tính toán thời điểm ôn tập tối ưu dựa trên hai công thức chính:

Đầu tiên là việc cập nhật **EF (Easiness Factor)** - hay còn gọi là chỉ số độ dễ của từ. Dựa trên đánh giá **q** từ 0 đến 5 của người dùng sau mỗi lần học, thuật toán sẽ tự động điều chỉnh EF. Nếu người dùng đánh giá từ này dễ (q=4 hoặc 5), EF sẽ tăng lên; ngược lại nếu từ khó (q < 4), EF sẽ giảm xuống.

Tiếp theo là công thức tính **Interval I(n)** - tức là khoảng thời gian cho đến lần ôn tập kế tiếp. Khoảng cách này được tính bằng cách lấy Interval trước đó nhân với chỉ số EF vừa cập nhật. Nhờ cơ chế nhân dồn này, những từ bạn đã thuộc kỹ sẽ được giãn cách ra rất xa (có thể là vài tháng), trong khi từ khó sẽ xuất hiện thường xuyên hơn để củng cố trí nhớ.

Ngoài ra, em có bổ sung thêm cơ chế **Fuzz Factor** (lệch ±5% chu kỳ) để tránh hiện tượng 'Review Hell' - khi quá nhiều thẻ bị dồn vào cùng một ngày, giúp lộ trình học trở nên tự nhiên và bền bỉ hơn."

**Từ khóa:** **SM-2**, Easiness Factor (**EF**), **Interval I(n)**, **Fuzz Factor**.


"Đối với chức năng AI, em áp dụng cơ chế **Streaming** giúp hiển thị kết quả ngay lập tức theo thời gian thực. Thay vì phải chờ đợi phản hồi toàn bộ, dữ liệu được 'đổ' về liên tục giúp người dùng có thể theo dõi ngữ cảnh ngay khi kết quả vừa được khởi tạo. Ngoài ra, hệ thống được thiết kế theo hướng **Lớp trung gian (Abstraction)**, cho phép chuyển đổi linh hoạt giữa OpenAI hoặc Gemini mà không ảnh hưởng đến logic cốt lõi."

**Từ khóa:** AI Context, **Streaming SSE**, Giảm độ trễ, **Lớp trung gian AI**.

### SLIDE 19: Đóng gói & Triển khai (Docker & Railway)
**Lời thoại:**
"Về phần triển khai, em sử dụng **Docker** để đóng gói ứng dụng, giúp loại bỏ hoàn toàn các lỗi phát sinh do khác biệt môi trường. Điều này đảm bảo LexiVocab có tính **di động (portability)** cực cao, sẵn sàng di chuyển hoặc mở rộng sang bất kỳ nền tảng cloud nào mà không cần cấu hình lại mã nguồn. Hiện tại, dự án đã được vận hành thực tế trên **Railway** với quy trình tự động hóa hoàn toàn, giúp việc cập nhật tính năng trở nên an toàn hơn."

**Từ khóa:** **Docker**, **Multi-stage** (tối ưu dung lượng), **Railway**, CI/CD tự động.

---

## PHẦN 5: DEMO & KẾT LUẬN

### SLIDE 20 & 21: Kịch bản Demo thực chiến
**Lời thoại:**
1. **Capture (Extension):** Bắt từ 'Serendipity' trực tiếp trên trình duyệt.
2. **Management & AI (Web Dashboard):** Kiểm tra đồng bộ, đa ngôn ngữ, thanh toán tự động và trải nghiệm **AI Streaming SSE** tốc độ cao.
3. **Học tập khoa học (Mobile):** Ôn tập Flashcard SM-2 và học tập thụ động qua Widget."

**Từ khóa:** Demo 3 giai đoạn: **Extension** -> **Web Dashboard** -> **Mobile App**.

**(Thực hiện Demo theo kịch bản này)**

### SLIDE 22 & 23: Tổng kết đóng góp
**Lời thoại:**
"Tổng kết lại, đồ án LexiVocab đã đạt được 3 giá trị lớn: Một kiến trúc Backend hiện đại, bảo mật; Một trải nghiệm người dùng được hỗ trợ bởi AI và thuật toán SM-2; Và một hệ sinh thái sản phẩm tích hợp, có thể triển khai thử nghiệm trong môi trường thực tế."

**Từ khóa:** Tổng kết: **Kiến trúc**, **AI & SM-2**, **Hệ sinh thái**.

### SLIDE 24: Hạn chế & Hướng phát triển
**Lời thoại:**
"Hệ thống vẫn còn những hạn chế như chưa hỗ trợ đầy đủ Offline Mode hay chi phí API AI còn cao. Trong tương lai, em sẽ phát triển Offline Mode with IndexedDB và tự host các Model AI nhỏ như Llama 3B để tối ưu chi phí và tăng tính riêng tư."

**Từ khóa:** Hạn chế (**Offline**, **Cost**), Tương lai (**Model nhỏ**, IndexedDB).

### SLIDE 25: Cảm ơn & Hỏi đáp
**Lời thoại:**
"Phần trình bày của em đến đây là kết thúc. Em xin chân thành cảm ơn hai thầy đã dành thời gian lắng nghe. Em rất mong nhận được những câu hỏi và góp ý từ hai thầy để hoàn thiện dự án hơn nữa. Em xin cảm ơn ạ!"

---

## 🧠 BÍ KÍP TRẢ LỜI CÂU HỎI PHẢN BIỆN (Dự phòng)
1. **Tại sao dùng Clean Architecture?** -> Tách biệt logic, dễ test, không phụ thuộc DB.
2. **SSE khác gì WebSocket?** -> SSE 1 chiều, nhẹ, dùng HTTP thuần, tối ưu cho streaming text.
3. **Xử lý trùng lặp thanh toán thế nào?** -> Dùng Unique Key (Idempotency) trong Database.
4. **Tại sao dùng ASP.NET Core?** -> Hiệu năng cao, cơ chế kiểm tra kiểu dữ liệu chặt chẽ giúp hạn chế lỗi runtime, hệ sinh thái ổn định.
5. **Shadow DOM có tác dụng gì?** -> Cách ly CSS, bảo vệ UI của Extension không bị vỡ.
6. **Nếu có 100k user thì sao?** -> Hiện tại hệ thống mới benchmark ở quy mô nhỏ. Tuy nhiên kiến trúc đã chuẩn bị các hướng mở rộng như caching, queue processing và horizontal scaling.
7. **Em benchmark như thế nào?** -> Đây là benchmark nội bộ trên dữ liệu mô phỏng khoảng 10,000 bản ghi trong môi trường local. Mục tiêu chính là so sánh tương đối giữa truy vấn có index và không có index, chưa phải benchmark production-scale.