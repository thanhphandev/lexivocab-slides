# Kịch Bản Demo LexiVocab (Detailed Flow)

Tài liệu này cung cấp các bước thao tác chi tiết (Click-by-click) trong buổi bảo vệ để đảm bảo quá trình Demo diễn ra mượt mà, khớp 100% với kịch bản lời thoại và source code hiện tại.

---

## 🛠 Chuẩn bị trước khi Demo
1. **Môi trường:** 
   - Đảm bảo Backend (LexiVocabAPI) đang chạy hoặc đã deploy trên Railway.
   - Cài sẵn trên điện thoại preview cho ứng dụng Mobile.
   - Mở sẵn trình duyệt Chrome đã cài đặt `lexivocab-extension`.
   - Mở một trang web tiếng Anh (Ví dụ: The New York Times, Medium) có chứa từ "Serendipity" hoặc đoạn văn bản khó.
2. **Tài khoản:** Đăng nhập sẵn một tài khoản test trên cả 3 nền tảng (Extension, Web, Mobile).
3. **Data:** Chuẩn bị sẵn một vài từ vựng trong danh sách để phần biểu đồ (Web) và flashcard (Mobile) trông sinh động.

---

## 🎬 Các bước Demo Chi Tiết

### 🟢 BƯỚC 1: Bắt từ trên trình duyệt (Chrome Extension)
*Mục tiêu: Khoe tính năng Shadow DOM, popup không gián đoạn (smart-bubble) và đồng bộ.*

1. **Thao tác:** Mở tab chứa bài báo tiếng Anh (vd: Medium).
2. **Thao tác:** Dùng chuột bôi đen từ **"Serendipity"** (hoặc một từ bất kỳ).
3. **Hiệu ứng:** Lúc này `smart-bubble` sẽ tự động pop-up ngay trên đoạn text vừa bôi đen.
4. **Thao tác:** Click vào icon LexiVocab trên popup bubble.
5. **Hiệu ứng:** Khung `save-popup` hiện ra (hiển thị mượt mà nhờ Shadow DOM, không bị vỡ layout bởi CSS của trang gốc).
6. **Thao tác:** Nhấn nút **Save / Lưu từ**.
7. **Lời thoại (khớp slide):** *"Như thầy cô thấy, em có thể bôi đen và lưu từ vựng ngay lập tức. Khung popup này được bọc trong Shadow DOM giúp nó độc lập hoàn toàn với giao diện của trang báo, đảm bảo trải nghiệm không bị gián đoạn."*

### 🟢 BƯỚC 2: Học & Nhớ (Mobile App)
*Mục tiêu: Khoe thuật toán SuperMemo-2, UI mượt mà, và tính năng đồng bộ đa nền tảng.*

1. **Thao tác:** Chuyển màn hình sang Simulator/Emulator của Mobile App.
2. **Thao tác:** Ở màn hình Home (`index.tsx`), vuốt xuống để refresh hoặc chờ hệ thống tự sync. Cho hội đồng thấy từ **"Serendipity"** vừa lưu ở Bước 1 đã xuất hiện.
3. **Thao tác:** Chuyển sang tab **Review / Ôn tập** (`review.tsx`).
4. **Thao tác:** Bắt đầu phiên ôn tập flashcard.
5. **Thao tác:** Lật thẻ (Tap) để xem nghĩa. Hiển thị 3 nút đánh giá: **Khó (0-2) / Vừa / Dễ (3-5)**.
6. **Thao tác:** Bấm chọn nút **Dễ**.
7. **Lời thoại (khớp slide):** *"Sau khi lưu trên máy tính, từ vựng lập tức được đồng bộ xuống Mobile App. Khi em thực hiện lật thẻ và đánh giá 'Dễ', thuật toán SuperMemo-2 ở Backend sẽ tự động tính toán lại EF (Easiness Factor) và cộng thêm Fuzz Factor để đẩy lịch ôn tập của thẻ này ra xa hơn, giúp tránh tình trạng học dồn."*

### 🟢 BƯỚC 3: Hiểu sâu (AI Streaming)
*Mục tiêu: Khoe kiến trúc SSE (Server-Sent Events) giúp stream text realtime giống ChatGPT, không bị timeout.*

1. **Thao tác:** Trên Web Dashboard, mở chi tiết từ vựng **"Serendipity"**.
2. **Thao tác:** Click vào nút **"Giải thích bằng AI" (Explain with AI)**.
3. **Hiệu ứng:** Nội dung giải thích từ vựng và câu chuyện ngữ cảnh sẽ được in ra từng chữ một (streaming) ngay lập tức.
4. **Lời thoại (khớp slide):** *"Để người dùng hiểu sâu ngữ cảnh, em đã tích hợp AI tạo sinh. Điểm đặc biệt là thay vì chờ AI sinh xong toàn bộ văn bản mất đến 5-10 giây, em dùng cơ chế Streaming qua SSE. Chữ sẽ hiện ra ngay lập tức (Zero-delay về mặt cảm giác), giúp trải nghiệm cực kỳ mượt mà. Ngoài ra kiến trúc Provider-Agnostic cho phép dễ dàng switch qua lại giữa OpenAI hay Gemini tuỳ nhu cầu."*

### 🟢 BƯỚC 4: Quản lý & Vận hành (Web Dashboard & Android Widget)
*Mục tiêu: Khoe tính năng i18n, các biểu đồ thống kê, thanh toán tự động (nếu có hỏi) và Widget.*

1. **Thao tác:** Mở tab trình duyệt, truy cập vào Web Dashboard (`lexivocab-webapp`).
2. **Thao tác:** Vào mục **Analytics / Thống kê**. Rê chuột qua các biểu đồ (Charts) cho thấy hệ thống track tiến trình học tập rõ ràng.
3. **Thao tác:** Click vào góc trên đổi ngôn ngữ (Toggle Language) từ Tiếng Việt sang Tiếng Anh (Khoe tính năng i18n).
4. **Thao tác:** Nếu đang cast màn hình Android thật, vuốt ra màn hình chính, chỉ vào **Android Widget** hiển thị mục tiêu từ vựng trong ngày.
5. **Lời thoại (khớp slide):** *"Cuối cùng, người dùng có thể quản lý lộ trình học thông qua Web Dashboard với đa ngôn ngữ (i18n) tích hợp sẵn, cũng như theo dõi mục tiêu mỗi ngày ngay từ màn hình chính qua Android Widget."*

---

## 🆘 Kế hoạch dự phòng (Backup Plan)

Trong quá trình bảo vệ, có thể xảy ra các sự cố mạng hoặc API bên thứ 3 (đặc biệt là API LLM). Hãy chuẩn bị sẵn:
1. **Quay sẵn 1 video Demo 3 phút:** Lưu ở định dạng MP4 chất lượng cao. Nếu server Railway down, mạng lag, hoặc OpenAI/Gemini timeout, lập tức mở video lên và thuyết minh đè vào.
2. **Lỗi Sync:** Nếu ấn lưu trên Extension mà Mobile chưa hiện, hãy bình tĩnh nói *"Hệ thống đang đồng bộ ngầm, em xin phép vuốt để Pull-to-refresh cập nhật lại dữ liệu"*.
3. **Lỗi SePay Webhook (nếu hội đồng yêu cầu test thanh toán):** Hãy chuẩn bị sẵn 1 script test bằng Postman/Insomnia để giả lập Webhook bắn vào endpoint của mình thay vì chờ ngân hàng.

Chúc bạn Demo thật trơn tru và thuyết phục!
