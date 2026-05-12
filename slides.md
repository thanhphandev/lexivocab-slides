---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## LexiVocab
  Hệ thống học từ vựng Đa nền tảng
drawings:
  persist: false
transition: fade
mdc: true
duration: 30min
fonts:
  sans: Inter
  serif: Playfair Display
  mono: Fira Code
---

<div class="cover-slide h-full">
<div class="flex items-center gap-3 mb-6" v-motion :initial="{ opacity: 0, y: -20 }" :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
<img src="/logo.png" class="w-12 h-12 rounded-xl shadow-lg" alt="LexiVocab Logo" />
<div class="cover-logo">LexiVocab</div>
</div>

<h1 class="cover-tagline text-left max-w-3xl" v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }">
Xây dựng hệ thống học từ vựng đa nền tảng tích hợp <br/> <span class="gradient-text">thuật toán <u> lặp lại ngắt quãng</u></span>
</h1>

<p class="cover-sub text-left mt-4" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }">
Ứng dụng thuật toán Spaced Repetition SuperMemo-2 và AI tạo sinh để hỗ trợ quá trình học và ôn tập từ vựng trên nhiều thiết bị.
</p>

<div class="cover-meta flex justify-between items-end border-t border-gray-200 pt-6 mt-12 text-left" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 900, duration: 800 } }">
<div>
<div class="font-bold text-[#1D2235]">Phan Văn Thành</div>
<div class="text-xs">Sinh viên thực hiện (DTH225766)</div>
</div>
<div class="text-right">
<div class="font-bold text-[#1D2235]">Ths. Nguyễn Thái Dư</div>
<div class="text-xs">Giảng viên hướng dẫn</div>
</div>
</div>
</div>

<!--
Kính chào các thầy trong Hội đồng. Em là Phan Văn Thành, mã sinh viên DTH225766. Hôm nay em xin được trình bày đồ án tốt nghiệp với đề tài: Xây dựng hệ thống học từ vựng đa nền tảng tích hợp thuật toán lặp lại ngắt quãng. Dự án hướng tới việc ứng dụng thuật toán SuperMemo-2 và AI tạo sinh để hỗ trợ quá trình học và ôn tập từ vựng trên nhiều thiết bị.
-->



---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-4 animate-fade-up">RÀO CẢN #1</div>
<div class="grid-2 items-center gap-12">
<!-- Left Side -->
<div>
<h1 class="animate-fade-up animate-delay-1 text-4xl leading-tight mb-2">Mất tập trung khi tra từ</h1>
<h2 class="text-[var(--lv-primary)] mb-6 animate-fade-up animate-delay-2 text-xl font-semibold">Rào cản lớn nhất khi đọc tài liệu</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-gray-500 text-sm leading-relaxed">
Khi đang đọc một bài báo hay tài liệu ngoại ngữ, việc phải liên tục chuyển sang tab khác để tra từ điển sẽ làm đứt đoạn luồng tư duy và dễ sinh ra cảm giác nản chí.
</p>

<div class="highlight-box mt-8 animate-fade-up animate-delay-4">
<div class="flex gap-4 items-start">
<div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[var(--lv-primary)] border border-orange-100">
<div class="i-lucide-brain text-xl"></div>
</div>
<div>
<p class="font-bold text-sm text-gray-800 mb-1">Suy giảm hiệu suất học tập</p>
<p class="text-xs text-gray-500 leading-relaxed">Mỗi lần chuyển tab để tra từ, não bộ sẽ phải mất thêm rất nhiều thời gian để lấy lại sự tập trung vào bài đọc ban đầu.</p>
</div>
</div>
</div>
</div>

<!-- Right Side Visual -->
<div class="relative h-[280px] w-full flex items-center justify-center animate-fade-up animate-delay-2">
<img src="/context_switching.png" alt="Context Switching Illustration" class="w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-100" />

<!-- Distraction Metric -->
<div class="absolute bottom-3 left-3 z-20 hover:scale-105 transition-transform">
<div class="glass-card !p-4 !rounded-xl border-red-100 bg-white/95 text-center shadow-2xl backdrop-blur-xl">
<div class="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-1.5 text-red-500">
<div class="i-lucide-trending-down text-lg"></div>
</div>
<div class="text-red-500 font-black text-lg leading-none mb-0.5">Giảm sút</div>
<div class="text-[8px] font-bold uppercase tracking-widest text-gray-500">Hiệu suất</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Vấn đề" />

<!--
Rào cản đầu tiên là việc mất tập trung trong quá trình tra cứu. Khi đang đọc tài liệu, việc phải liên tục chuyển tab để tra từ điển sẽ làm đứt đoạn luồng tư duy. Những quãng ngắt này khiến não bộ mất nhiều thời gian hơn để tái tập trung, từ đó gây ra cảm giác mệt mỏi và dễ làm người học nản lòng.
-->

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-4 animate-fade-up">RÀO CẢN #2</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Đường cong quên lãng</h1>
<p class="text-gray-500 mb-6 max-w-2xl animate-fade-up animate-delay-2 text-sm">Học vẹt không ôn tập dẫn đến lãng phí công sức. Nếu không ôn tập đúng thời điểm, não bộ sẽ tự động loại bỏ thông tin để nhường chỗ cho dữ liệu mới.</p>

<div class="w-full flex-1 mb-8 animate-fade-up animate-delay-3">
  <ForgetCurve />
</div>

</div>

<BrandFooter section="Vấn đề" />

<!--
Rào cản thứ hai chính là sự quên lãng tự nhiên. Nếu không có kế hoạch ôn tập định kỳ, kiến thức mới sẽ rất nhanh chóng bị mai một. Điều này đặc biệt đúng khi chúng ta học từ vựng rời rạc, thiếu ngữ cảnh thực tế, dẫn đến việc ghi nhớ không hiệu quả và lãng phí công sức.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">GIẢI PHÁP</div>
<h1 class="animate-fade-up animate-delay-1 mb-16 text-5xl font-black tracking-tight">Giải pháp cốt lõi</h1>

<div class="grid grid-cols-3 divide-x divide-gray-100 relative z-10 animate-fade-up animate-delay-2">
<div class="pr-10">
<PillarCard 
number="1" 
title="Thu thập" 
enTitle="Capture"
icon="i-lucide-scan-line"
desc="Chrome Extension thu thập từ vựng trực tiếp trên trang web, không làm gián đoạn luồng đọc và tư duy của bạn."
delay="400" 
/>
</div>
<div class="px-10">
<PillarCard 
number="2" 
title="Nhớ lâu" 
enTitle="Remember"
icon="i-lucide-brain"
desc="Thuật toán SuperMemo-2 tối ưu hóa thời gian ôn tập, giúp chuyển thông tin từ bộ nhớ ngắn hạn sang dài hạn."
delay="600" 
/>
</div>
<div class="pl-10">
<PillarCard 
number="3" 
title="Hiểu sâu" 
enTitle="Understand"
icon="i-lucide-sparkles"
desc="Tận dụng sức mạnh của AI để tạo ngữ cảnh cá nhân hóa, ví dụ thực tế giúp bạn hiểu rõ cách sử dụng từ vựng."
delay="800" 
/>
</div>
</div>
</div>

<BrandFooter section="Giải pháp" />

<!--
LexiVocab được xây dựng dựa trên 3 giá trị cốt lõi: Thu thập - Chrome Extension lưu từ trực tiếp không gián đoạn; Remember (Nhớ lâu) - thuật toán SM-2 chuyển thông tin vào bộ nhớ dài hạn; Understand (Hiểu sâu) - AI tạo ngữ cảnh ví dụ thực tế giúp hiểu cặn kẽ mọi tầng nghĩa của từ.
-->

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
---

<SectionDivider 
number="02" 
title="Trải nghiệm đa nền tảng" 
desc="Mô hình kết nối tập trung giúp đồng bộ dữ liệu tức thì trên mọi thiết bị người dùng." 
/>

<!--
Chuyển phần: Trải nghiệm đa nền tảng, được thiết kế để bao phủ 100% không gian thiết bị của người dùng.
-->

---
transition: fade
---

<div class="h-full flex flex-col p-8">
<div class="badge badge-primary mb-2 animate-fade-up">ARCHITECTURE</div>
<h1 class="animate-fade-up animate-delay-1 mb-4 text-left">Mô hình kết nối tập trung</h1>

<div class="flex-grow flex items-center justify-center animate-fade-up animate-delay-2">
<HubSpoke />
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

<!--
Hệ thống sử dụng Core API (ASP.NET Core) làm trung tâm, kết nối và đồng bộ dữ liệu giữa 3 nền tảng Client: Chrome Extension, Mobile App và Web Dashboard. Điểm đặc biệt là cả 3 nền tảng này đều hỗ trợ đa ngôn ngữ (i18n), mang lại trải nghiệm bản địa hóa tốt nhất. Cấu trúc này hỗ trợ người dùng có thể lưu từ vựng trên máy tính và tiếp tục ôn tập trên thiết bị di động một cách thống nhất.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col px-8 py-2 bg-slate-50/50 justify-center overflow-hidden">
<div class="flex items-center justify-between mb-2 animate-fade-up">
<div>
<div class="badge badge-primary badge-outline text-[10px] mb-1 uppercase tracking-widest">CHROME ECOSYSTEM</div>
<h1 class="text-2xl font-black text-slate-900 tracking-tight">Chrome <span class="text-[#FF6B00]">Extension</span></h1>
</div>
<div class="text-right">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client 01</p>
<p class="text-xs font-medium text-slate-600 italic">Module thu thập từ vựng tức thì</p>
</div>
</div>
<div class="grid grid-cols-[1fr_1.3fr] gap-8 items-center flex-grow min-h-0">
<div class="animate-fade-up animate-delay-2">
<h2 class="text-2xl font-black text-gray-900 mb-4 leading-tight">Bắt từ vựng ngay khi đang đọc,<br/><span class="text-[#FF6B00]">Không gián đoạn.</span></h2>
<div class="space-y-3 text-xs">
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">01</div>
<div><strong>Tra cứu dễ dàng:</strong> Thu thập từ và tra nghĩa trực tiếp ngay trên trình duyệt một cách cực kỳ dễ dàng.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">02</div>
<div><strong>Tự động nhận diện:</strong> Khi bạn gặp lại một từ đã lưu trong tương lai, Extension sẽ tự động highlight từ đó.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">03</div>
<div><strong>Ôn tập tức thì:</strong> Khi di chuột vào từ đã highlight thì hiện nghĩa ngay lập tức, giúp củng cố trí nhớ.</div>
</div>
</div>
</div>
<div class="relative animate-fade-up animate-delay-3 h-[280px]">
<div class="absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col">
<div class="h-7 bg-slate-100 flex items-center px-4 gap-1.5 border-b border-slate-200">
<div class="flex gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-red-400"></div><div class="w-1.5 h-1.5 rounded-full bg-yellow-400"></div><div class="w-1.5 h-1.5 rounded-full bg-green-400"></div></div>
<div class="mx-auto h-4 w-48 bg-white/80 rounded-full text-[8px] text-center leading-4 text-slate-400 font-mono border border-slate-100">nytimes.com/article</div>
</div>
<div class="p-4 text-[9px] text-slate-400 leading-relaxed relative">
The <span class="bg-orange-100 text-[#FF6B00] px-1 rounded-sm font-bold select-none cursor-pointer">serendipity</span> of the moment was not lost on the researchers.
<br/>
<div class="w-full h-1.5 bg-slate-100 rounded mt-3"></div>
<div class="w-3/4 h-1.5 bg-slate-100 rounded mt-2"></div>
<div class="w-5/6 h-1.5 bg-slate-100 rounded mt-2"></div>
<div class="absolute top-8 left-16 w-52 bg-white shadow-2xl rounded-xl border border-slate-100 overflow-hidden" v-motion :initial="{ opacity: 0, y: 10, scale: 0.95 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1200, type: 'spring' } }">
<div class="bg-[#FF6B00] text-white px-3 py-1.5 flex justify-between items-center">
<span class="font-bold text-[10px] tracking-tight">serendipity</span>
<span class="text-[7px] bg-white/20 px-1.5 py-0.5 rounded font-black uppercase">Noun</span>
</div>
<div class="p-3">
<div class="text-[8px] text-slate-600 mb-3 leading-relaxed italic">"Sự tình cờ may mắn, khám phá ra thứ có giá trị khi không chủ đích tìm kiếm."</div>
<button class="w-full bg-[#1D2235] text-white text-[8px] py-1.5 rounded-lg font-bold hover:bg-black transition-colors">Save to LexiVocab</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

<!--
Thành phần đầu tiên là Chrome Extension, giúp chúng ta bắt từ và tra nghĩa trực tiếp ngay trên trình duyệt một cách cực kỳ dễ dàng. Điểm nổi bật là tính năng tự động nhận diện: Khi bạn gặp lại một từ đã lưu trong tương lai, Extension sẽ tự động highlight từ đó. Về kỹ thuật, em sử dụng Shadow DOM để đảm bảo giao diện luôn hiển thị ổn định trên mọi trang web.
-->

---
transition: fade
---

<div class="h-full flex flex-col px-8 py-2 bg-slate-50/50 justify-center overflow-hidden">
<div class="flex items-center justify-between mb-2 animate-fade-up">
<div>
<div class="badge badge-primary badge-outline text-[10px] mb-1 uppercase tracking-widest">MOBILE ECOSYSTEM</div>
<h1 class="text-2xl font-black text-slate-900 tracking-tight">Mobile <span class="text-[#FF6B00]">Application</span></h1>
</div>
<div class="text-right">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client 02</p>
<p class="text-xs font-medium text-slate-600 italic">Tối ưu hiệu năng ứng dụng di động</p>
</div>
</div>
<div class="grid grid-cols-[1fr_1.3fr] gap-8 items-center flex-grow min-h-0">
<div class="animate-fade-up animate-delay-2">
<h2 class="text-2xl font-black text-gray-900 mb-4 leading-tight">Học tập linh hoạt,<br/><span class="text-[#FF6B00]">Trên thiết bị di động.</span></h2>
<div class="space-y-3 text-xs">
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">01</div>
<div><strong>Đồng bộ đám mây:</strong> Tự động đồng bộ kho từ vựng từ đám mây về điện thoại của bạn một cách linh hoạt.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">02</div>
<div><strong>Nhắc nhở thông minh:</strong> Gửi thông báo nhắc ôn bài đúng vào thời gian đã cài đặt, tối ưu hóa trí nhớ.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">03</div>
<div><strong>Widget màn hình chính:</strong> Tiếp cận từ vựng thụ động và hiệu quả ngay cả khi không mở ứng dụng.</div>
</div>
</div>
</div>
<div class="flex justify-center animate-fade-up animate-delay-3 relative">
<div class="relative" style="width: 160px; height: 320px;">
<div class="absolute inset-0 bg-gray-900 rounded-[35px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] p-1.5">
<div class="w-full h-full bg-white rounded-[28px] overflow-hidden relative border-[2px] border-gray-800">
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center">
<div class="w-8 h-1 bg-white/20 rounded-full"></div>
</div>
<img src="/mobile_ui.png" class="w-full h-full object-cover" alt="LexiVocab Mobile UI" />
</div>
</div>
<div class="absolute -right-6 bottom-12 bg-white shadow-2xl rounded-2xl p-3 border border-slate-100 z-30 animate-bounce-slow">
<div class="flex items-center gap-2 mb-1">
<div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Live Status</span>
</div>
<div class="text-xs font-black text-slate-900 flex items-center gap-1">
<div class="i-lucide-cloud-refresh text-blue-500"></div> Synced
</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

<!--
Mobile App được xây dựng bằng React Native, mang lại trải nghiệm mượt mà. Điểm nhấn là tính năng SRS Notification - gửi thông báo nhắc ôn bài đúng vào 'thời điểm vàng' mà thuật toán tính toán. Dữ liệu được đồng bộ Real-time qua Cloud, giúp người dùng luôn cập nhật được những từ vựng mới nhất mình vừa bắt được trên trình duyệt.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col px-8 py-2 bg-slate-50/50 justify-center overflow-hidden">
<div class="flex items-center justify-between mb-1 animate-fade-up">
<div>
<div class="badge badge-primary badge-outline text-[10px] mb-1 uppercase tracking-widest">SYSTEM ARCHITECTURE</div>
<h1 class="text-2xl font-black text-slate-900 tracking-tight">Web <span class="text-[#FF6B00]">Dashboard</span></h1>
</div>
<div class="text-right">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client 03</p>
<p class="text-xs font-medium text-slate-600 italic">Central Management System</p>
</div>
</div>
<div class="grid grid-cols-[1fr_2fr] gap-6 items-center flex-grow min-h-0">
<div class="flex flex-col gap-3 animate-fade-up animate-delay-2 pr-4">
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">01</div>
<div class="text-xs"><strong>Quản lý chuyên nghiệp:</strong> Quản lý tập trung toàn bộ kho từ vựng và thực hiện các hiệu chỉnh chuyên sâu.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">02</div>
<div class="text-xs"><strong>Thanh toán tự động:</strong> Tối ưu hóa quy trình đăng ký các gói Subscription qua giải pháp SePay.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">03</div>
<div class="text-xs"><strong>Phân tích học tập:</strong> Theo dõi chi tiết hiệu quả ghi nhớ qua các báo cáo và biểu đồ trực quan.</div>
</div>
</div>
<div class="relative animate-fade-up animate-delay-3 h-[280px] min-h-0">
<div class="absolute inset-0 bg-orange-500/5 blur-[80px] rounded-full translate-x-8 translate-y-8"></div>
<div class="h-full bg-white rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] border border-slate-200 overflow-hidden flex flex-col relative">
<div class="h-6 bg-slate-50 flex items-center px-4 gap-2 border-b border-slate-100">
<div class="flex gap-1"><div class="w-1.5 h-1.5 rounded-full bg-slate-200"></div><div class="w-1.5 h-1.5 rounded-full bg-slate-200"></div><div class="w-1.5 h-1.5 rounded-full bg-slate-200"></div></div>
<div class="flex-grow flex justify-center"><div class="bg-white px-3 py-0.5 rounded-full text-[7px] text-slate-400 border border-slate-100 font-mono tracking-tighter">lexivocab.store/dashboard</div></div>
</div>
<div class="flex-grow overflow-hidden relative p-1 bg-slate-50/30">
<img src="/web_ui.png" class="w-full h-full object-contain rounded-lg shadow-sm" alt="LexiVocab Dashboard" />
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

<!--
Web Dashboard đóng vai trò là trung tâm quản trị và phân tích chuyên sâu. Tại đây, người dùng quản lý tập trung kho từ vựng, thực hiện thanh toán tự động SePay và theo dõi hiệu quả ghi nhớ qua biểu đồ Analytics trực quan.
-->

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
transition: view-transition
---

<SectionDivider
  number="03"
  title="Kiến trúc & Bảo mật"
  desc="Clean Architecture, và cơ chế xác thực Access/Refresh Token đảm bảo hiệu năng cốt lõi." 
/>

<!--
Chuyển phần: Kiến trúc Backend & Bảo mật. Đằng sau sự liền mạch đó là một nền tảng Backend vững chắc và bảo mật mà em sẽ trình bày ngay sau đây.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col px-8 py-2 justify-center overflow-hidden">
<div class="badge badge-primary badge-outline text-[10px] mb-2 uppercase tracking-widest animate-fade-up">ARCHITECTURE</div>
<div class="grid grid-cols-[1.2fr_1fr] gap-8 items-center flex-grow min-h-0">
<div class="animate-fade-up animate-delay-1">
<h1 class="text-3xl font-black text-slate-900 tracking-tight mb-1">Clean Architecture</h1>
<h2 class="text-[#FF6B00] text-lg font-bold mb-4 animate-fade-up animate-delay-2">ASP.NET Core</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-sm leading-relaxed text-slate-600">Tách biệt logic cốt lõi khỏi framework và cơ sở dữ liệu để tối ưu tính linh hoạt và bảo trì.</p>

<div class="space-y-4 animate-fade-up animate-delay-4 text-xs mt-6">
<div class="highlight-box bg-white shadow-sm border border-slate-100 p-3 rounded-xl">
<p><strong>Dependency Rule:</strong> Các dependency chỉ được hướng vào trong. Domain Layer ở trung tâm chứa business logic thuần túy.</p>
</div>
<div class="text-slate-400 text-[11px] px-2 flex items-center gap-2"><div class="i-lucide-lightbulb text-yellow-500"></div> Dễ dàng mở rộng, thay đổi Database mà không cần sửa Core Logic.</div>
</div>
</div>

<div class="flex items-center justify-center h-[320px] min-h-0 animate-fade-up animate-delay-3">
<LayerDiagram class="max-h-full" />
</div>
</div>
</div>

<BrandFooter section="Backend" />

<!--
Backend được thiết kế theo Clean Architecture, tách biệt Business Logic khỏi Framework và Database. Lớp Domain ở trung tâm chứa các quy tắc cốt lõi, giúp hệ thống dễ mở rộng và dễ bảo trì hơn. Chúng ta có thể thay đổi Database hoặc tích hợp thêm các dịch vụ bên thứ ba mà không cần sửa đổi Logic nghiệp vụ chính.
-->

---
transition: fade
---

<div class="h-full flex items-center justify-center bg-white px-16 py-10 overflow-hidden">
<div class="grid grid-cols-2 gap-16 w-full items-center">
<div class="space-y-6 animate-fade-in-left">
<div>
<p class="text-orange-500 font-bold text-xs uppercase tracking-[0.2em] mb-1">Authentication Security</p>
<h1 class="text-4xl font-black text-slate-900 leading-tight">
Cơ chế <br/>
<span class="text-blue-600">Access & Refresh Token</span>
</h1>
<div class="w-16 h-1.5 bg-blue-600 rounded-full mt-4"></div>
</div>
<p class="text-slate-500 text-sm leading-relaxed max-w-sm">
Sử dụng chuẩn <strong>JWT</strong> để đảm bảo tính bảo mật và tối ưu hóa trải nghiệm học tập của người dùng.
</p>
<div class="flex gap-2">
<span class="px-2 py-1 bg-slate-100 rounded text-[9px] font-bold text-slate-400 uppercase">#Stateless</span>
<span class="px-2 py-1 bg-slate-100 rounded text-[9px] font-bold text-slate-400 uppercase">#Security</span>
</div>
</div>

<div class="space-y-6 animate-fade-in-right">
<div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
<div class="flex items-center gap-4 mb-3">
<div class="p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
<div class="i-lucide-key w-5 h-5"></div>
</div>
<h3 class="text-xl font-bold text-slate-800">Access Token</h3>
</div>
<p class="text-[11px] text-slate-500 leading-relaxed italic">
"Chìa khóa" truy cập tạm thời cho mỗi yêu cầu. Hiệu lực ngắn (15 phút) để bảo vệ tài khoản tối đa.
</p>
</div>

<div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
<div class="flex items-center gap-4 mb-3">
<div class="p-2.5 bg-green-600 text-white rounded-xl shadow-lg shadow-green-100">
<div class="i-lucide-refresh-cw w-5 h-5"></div>
</div>
<h3 class="text-xl font-bold text-slate-800">Refresh Token</h3>
</div>
<p class="text-[11px] text-slate-500 leading-relaxed italic">
Dùng để tự động gia hạn chìa khóa mới khi hết hạn, giúp người học không phải đăng nhập lại nhiều lần.
</p>
</div>
</div>
</div>
</div>

<BrandFooter section="Bảo mật" />

<!--
Hệ thống sử dụng cơ chế xác thực dựa trên JSON Web Token (JWT) với bộ đôi Access và Refresh Token. Access Token đóng vai trò là 'chìa khóa' truy cập tạm thời cho mỗi yêu cầu. Khi Access Token hết hạn, hệ thống sẽ tự động sử dụng Refresh Token để cấp lại chìa khóa mới mà không yêu cầu người dùng phải đăng nhập lại. Cơ chế này giúp cân bằng hoàn hảo giữa tính bảo mật cao và trải nghiệm người dùng mượt mà.
-->


---
transition: slide-up
---

<div class="h-full flex flex-col px-12 py-0 pt-4 justify-start" style="zoom: 0.82">
<div class="badge badge-primary mb-2 animate-fade-up w-max !text-[9px] !py-1">DATA LAYER</div>
<div class="grid grid-cols-[1fr_1.25fr] gap-10 items-start flex-grow min-h-0">
<!-- Left Side: Shortened Text -->
<div class="animate-fade-up">
<div class="text-[2rem] leading-tight font-black mb-1 text-slate-900 tracking-tight whitespace-nowrap">Database Design</div>
<h2 class="text-slate-500 text-xs mb-6">Tối ưu truy vấn dữ liệu lớn.</h2>
<div class="space-y-4">
<div class="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 hover:border-blue-200 transition-colors">
<div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 p-1.5 hover:scale-110 transition-transform duration-300">
  <img src="/postgresql_elephant.png" class="w-full h-full object-contain" alt="PostgreSQL Logo" />
</div>
<div>
<h3 class="font-bold text-slate-800 text-[12px] mb-0.5">PostgreSQL (B-Tree Index)</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Đánh chỉ mục (Index) trên các trường <code>Word</code> và <code>NextReview</code>, giúp hệ thống truy vấn dữ liệu nhanh chóng.</p>
</div>
</div>
<div class="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 hover:border-orange-200 transition-colors">
<div class="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0"><div class="i-lucide-zap text-xl"></div></div>
<div>
<h3 class="font-bold text-slate-800 text-[12px] mb-0.5">Khử Chuẩn (Denormalization)</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Lưu sẵn <code>WordText</code> ở bảng cá nhân (UserVocab). Giảm thiểu các lệnh JOIN phức tạp khi render UI.</p>
</div>
</div>
</div>
</div>
<!-- Right Side: DB Schema -->
<div class="animate-fade-up animate-delay-2 relative w-full h-full flex flex-col items-center justify-center bg-slate-50/80 rounded-3xl border border-slate-100 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] overflow-hidden p-6">
<div class="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-70"></div>
<div class="relative w-full flex flex-col items-center z-10 max-w-[400px]">
<div class="flex justify-between w-full relative z-20">
<div class="bg-white rounded-xl shadow-lg border border-slate-200 w-44 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
<div class="bg-slate-800 text-white text-[10px] font-bold px-3 py-2 flex justify-between items-center">
<span class="flex items-center gap-1.5"><div class="i-lucide-users text-blue-400"></div> Users</span>
</div>
<div class="p-2.5 flex flex-col gap-1.5 text-[9px] font-mono text-slate-600 bg-slate-50/50">
<div class="flex justify-between items-center"><span class="font-bold text-amber-600 flex items-center gap-1"><div class="i-lucide-key text-[8px]"></div> Id</span><span class="text-slate-400">uuid</span></div>
<div class="flex justify-between items-center"><span>Email</span><span class="text-slate-400">varchar</span></div>
<div class="flex justify-between items-center"><span>Role</span><span class="text-slate-400">enum</span></div>
</div>
</div>
<div class="bg-white rounded-xl shadow-lg border border-slate-200 w-44 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
<div class="bg-emerald-600 text-white text-[10px] font-bold px-3 py-2 flex justify-between items-center">
<span class="flex items-center gap-1.5"><div class="i-lucide-library text-emerald-200"></div> MasterVocabs</span>
</div>
<div class="p-2.5 flex flex-col gap-1.5 text-[9px] font-mono text-slate-600 bg-slate-50/50">
<div class="flex justify-between items-center"><span class="font-bold text-slate-800">Word <span class="text-emerald-500">(Idx)</span></span><span class="text-slate-400">varchar</span></div>
<div class="flex justify-between items-center"><span>Phonetic</span><span class="text-slate-400">varchar</span></div>
<div class="flex justify-between items-center"><span>CefrLevel</span><span class="text-slate-400">varchar</span></div>
</div>
</div>
</div>
<div class="w-full h-10 relative flex justify-center -my-1 z-0">
<svg viewBox="0 0 200 40" class="w-full h-full overflow-visible">
<path d="M 45 0 C 45 20, 95 20, 95 40" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3 3"/>
<polygon points="92,36 98,36 95,42" fill="#3b82f6" />
<text x="62" y="14" fill="#3b82f6" font-size="2" font-weight="bold" font-family="sans-serif">1 : N</text>
<path d="M 155 0 C 155 20, 105 20, 105 40" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3 3"/>
<polygon points="102,36 108,36 105,42" fill="#10b981" />
<text x="132" y="14" fill="#10b981" font-size="2" font-weight="bold" font-family="sans-serif">1 : N</text>
</svg>
</div>
<div class="bg-white rounded-xl shadow-lg border border-slate-200 w-[240px] overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 z-20 relative mt-1">
<div class="bg-orange-500 text-white text-[10px] font-bold px-3 py-2 flex justify-between items-center">
<span class="flex items-center gap-1.5"><div class="i-lucide-book-open text-orange-100"></div> UserVocabs</span>
</div>
<div class="p-3 flex flex-col gap-1.5 text-[9px] font-mono text-slate-600 bg-slate-50/50">
<div class="flex justify-between items-center"><span class="font-bold text-amber-600 flex items-center gap-1"><div class="i-lucide-key text-[8px]"></div> Id</span><span class="text-slate-400">uuid</span></div>
<div class="flex justify-between items-center"><span class="text-blue-600 font-bold flex items-center gap-1"><div class="i-lucide-link text-[8px]"></div> UserId</span><span class="text-slate-400">uuid</span></div>
<div class="flex justify-between items-center font-bold text-slate-800"><span>WordText <span class="text-orange-500 font-normal ml-1 border border-orange-200 px-1 rounded-sm text-[7px] bg-orange-50">#NO_JOIN</span></span><span class="text-slate-400">varchar</span></div>
<div class="flex justify-between items-center text-purple-600 font-bold"><span>RepetitionCount</span><span class="text-slate-400">int</span></div>
<div class="flex justify-between items-center text-green-600 font-bold"><span>IntervalDays</span><span class="text-slate-400">int</span></div>
<div class="flex justify-between items-center text-green-600 font-bold"><span>EasinessFactor</span><span class="text-slate-400">real</span></div>
<div class="flex justify-between items-center text-orange-600 font-bold"><span>NextReview <span class="text-emerald-500 font-normal ml-1 border border-emerald-200 px-1 rounded-sm text-[7px] bg-emerald-50">#INDEX</span></span><span class="text-slate-400">time</span></div>
</div>
</div>
</div>
</div>

</div>
</div>

<BrandFooter section="Backend" />

<!--
Về tầng dữ liệu, em sử dụng PostgreSQL. Để tối ưu cho hàng triệu bản ghi, em đánh chỉ mục B-Tree trên các trường quan trọng như Word và NextReview. Đặc biệt, em sử dụng kỹ thuật Khử chuẩn (Denormalization) - lưu sẵn WordText tại bảng UserVocabs để tăng tốc độ render UI, tránh các lệnh JOIN phức tạp làm chậm hệ thống.
-->

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
transition: view-transition
---

<SectionDivider 
number="04" 
title="Công nghệ cốt lõi" 
desc="Thuật toán SM-2 tối ưu trí nhớ và giải pháp Streaming AI." 
/>

<!--
Chuyển phần: Use-Cases & Xử lý tải. Sau đây là cách hệ thống xử lý các tác vụ thông minh và tối ưu hóa hiệu năng thực tế.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col px-10 py-0 pt-2 justify-start" style="zoom: 0.85">
<div class="badge badge-primary mb-2 animate-fade-up w-max !text-[9px] !py-1">CORE ALGORITHM</div>
<div class="grid grid-cols-[1.25fr_1fr] gap-8 items-start flex-grow min-h-0">
<!-- Left Side: Algorithm & Math -->
<div class="animate-fade-up">
<div class="text-[1.8rem] leading-tight font-black mb-1 text-slate-900 tracking-tight whitespace-nowrap">Spaced Repetition</div>
<h2 class="text-slate-500 text-xs mb-4">Thuật toán SuperMemo-2 tối ưu hóa trí nhớ.</h2>
<!-- Formula -->
<div class="p-3 rounded-xl bg-slate-900 shadow-xl border border-slate-700 text-white mb-4 relative">
<div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-50"></div>
<div class="text-[9px] text-blue-400 font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 relative z-10">
<div class="i-lucide-function-square"></div> SM-2 Formula
</div>
<div class="font-mono text-[10px] leading-relaxed relative z-10">
  <div class="flex items-center gap-4 mb-2">
    <span>EF' = EF + (0.1 - (5-q) × (0.08 + (5-q) × 0.02))</span>
    <div class="text-[8px] text-slate-400 font-sans italic border-l border-slate-700 pl-2">
      <b>EF:</b> Độ dễ (Easiness Factor)<br/>
      <b>q:</b> Đánh giá của người dùng (0-5)
    </div>
  </div>
  <div class="text-blue-300 mt-1 block opacity-80">I(n) = I(n-1) × EF</div>
</div>
</div>
<!-- Optimization Blocks -->
<div class="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5 mt-4">
<div class="i-lucide-zap text-orange-500"></div> System Optimizations
</div>
<div class="space-y-2">
<!-- Optimization 1 -->
<div class="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-2.5 items-center hover:border-orange-200 transition-colors">
<div class="bg-orange-50 text-orange-500 w-7 h-7 rounded-lg flex items-center justify-center shrink-0"><div class="i-lucide-shuffle text-sm"></div></div>
<div>
<h4 class="font-bold text-[11px] text-slate-800">Fuzz Factor</h4>
<p class="text-[9px] text-slate-500 mt-0.5">Lệch ±5% chu kỳ, tránh tình trạng quá tải thẻ ôn tập (Review Hell).</p>
</div>
</div>
</div>
</div>
<!-- Right Side: Flow -->
<div class="animate-fade-up animate-delay-2 flex flex-col gap-4">
<div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-5 flex flex-col items-center">
<div class="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
<div class="i-lucide-activity"></div> Memory Cycle
</div>
<div class="w-full flex justify-center py-2">
<TimelineFlow />
</div>
</div>
<!-- Scoring -->
<div class="grid grid-cols-2 gap-3">
<div class="bg-white p-2.5 rounded-xl shadow-sm border border-red-100 flex items-center gap-2.5">
<div class="w-1 h-full bg-red-400 rounded-full"></div>
<div>
<div class="font-bold text-[10px] text-red-600 uppercase tracking-wider">Khó (0-2)</div>
<div class="text-[8px] text-slate-500">Giảm EF, ôn sớm 1-3 ngày</div>
</div>
</div>
<div class="bg-white p-2.5 rounded-xl shadow-sm border border-green-100 flex items-center gap-2.5">
<div class="w-1 h-full bg-green-400 rounded-full"></div>
<div>
<div class="font-bold text-[10px] text-green-600 uppercase tracking-wider">Dễ (4-5)</div>
<div class="text-[8px] text-slate-500">Tăng EF, giãn 1-4 tháng</div>
</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />

<!--
Một thành phần cốt lõi của hệ thống là thuật toán SuperMemo-2. Dựa trên đánh giá độ khó của người dùng, hệ thống tính toán EF (Easiness Factor) để giãn cách chu kỳ ôn tập. Em đã cải tiến thêm Fuzz Factor (lệch ±5%) để tránh hiện tượng quá nhiều thẻ ôn tập bị dồn vào cùng một ngày (hay còn gọi là 'Review Hell'), giúp trải nghiệm học tập tự nhiên hơn.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col px-8 py-0 justify-center">
<div class="badge badge-primary mb-1 animate-fade-up">REALTIME AI</div>
<div class="grid grid-cols-[1.1fr_0.9fr] gap-4 items-center flex-grow min-h-0">
<div class="animate-fade-up">
<h1 class="text-2xl font-black mb-0.5">Kiến trúc AI Tối ưu</h1>
<h2 class="text-[#FF6B00] text-base font-bold mb-2">Linh hoạt & Tốc độ cao</h2>

<div class="space-y-2">
<div class="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start hover:border-orange-200 transition-all">
<div class="w-8 h-8 rounded-lg bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0">
<div class="i-lucide-zap text-lg"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-xs mb-0.5">Thiết kế Streaming (SSE)</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Trả về từng phần dữ liệu tới client, giúp giảm độ trễ (latency) và phù hợp cho luồng dữ liệu một chiều hơn WebSockets.</p>
</div>
</div>

<div class="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start hover:border-blue-200 transition-all">
<div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
<div class="i-lucide-infinity text-lg"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-xs mb-0.5">Provider linh hoạt</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Thiết kế abstraction layer cho phép thay đổi nhà cung cấp AI mà không ảnh hưởng logic chính.</p>
</div>
</div>
</div>
</div>

<div class="flex-center h-[220px] animate-fade-up animate-delay-2 relative">
<div class="absolute inset-0 bg-gradient-to-tr from-orange-50/50 to-transparent rounded-3xl border border-orange-100/50"></div>
<div class="relative z-10 w-full p-4">
<div class="text-[9px] font-bold text-orange-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
<div class="i-lucide-zap text-[10px]"></div> Ví dụ kết quả xử lý AI
</div>
<StreamingText text='"Serendipity" — Sự tình cờ may mắn. Ví dụ, Alexander Fleming phát hiện ra Penicillin là một serendipity vĩ đại.' />
</div>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />

<!--
Chức năng tra cứu ngữ cảnh AI sử dụng cơ chế Streaming qua Server-Sent Events (SSE). Việc trả về từng phần dữ liệu giúp giảm độ trễ (latency) ở Client và sử dụng kết nối HTTP 1 chiều nhẹ hơn WebSockets. Hệ thống cũng được thiết kế theo hướng Provider-Agnostic - thiết kế một abstraction layer cho phép thay đổi nhà cung cấp AI (như OpenAI, Gemini) mà không ảnh hưởng đến logic chính.
-->

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
transition: view-transition
---

<SectionDivider 
number="05" 
title="Triển khai & DevOps" 
desc="Tối ưu Docker Image và triển khai trên hạ tầng Cloud." 
/>

---
transition: fade
---

<div class="h-full flex items-center justify-center bg-white px-16 py-10 overflow-hidden">
<div class="grid grid-cols-2 gap-16 w-full items-center">
<div class="space-y-8 animate-fade-in-left">
<div>
<p class="text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-2">DevOps & Deployment</p>
<h1 class="text-4xl font-black text-slate-900 leading-tight">
Đóng gói & <br/>
<span class="text-[#FF6B00]">Triển khai hệ thống</span>
</h1>
<div class="w-16 h-1.5 bg-[#FF6B00] rounded-full mt-4"></div>
</div>
<p class="text-slate-500 text-sm leading-relaxed max-w-sm">
Sử dụng công nghệ Container hóa để đảm bảo hệ thống hoạt động ổn định trên mọi môi trường.
</p>
<div class="flex gap-2">
<span class="px-2 py-1 bg-slate-100 rounded text-[9px] font-bold text-slate-400 uppercase">#Docker</span>
<span class="px-2 py-1 bg-slate-100 rounded text-[9px] font-bold text-slate-400 uppercase">#Portability</span>
<span class="px-2 py-1 bg-slate-100 rounded text-[9px] font-bold text-slate-400 uppercase">#CI_CD</span>
</div>
</div>

<div class="space-y-6 animate-fade-in-right">
<div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue-400 transition-all duration-300 group">
<div class="flex items-center gap-4 mb-3">
<div class="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
<img src="/docker_logo.png" class="w-full h-full object-contain" alt="Docker Logo" />
</div>
<h3 class="text-xl font-bold text-slate-800">Docker (Portable)</h3>
</div>
<p class="text-[11px] text-slate-500 leading-relaxed italic">
Đóng gói toàn bộ hệ thống vào Container. Sẵn sàng triển khai nhanh chóng trên các môi trường <strong>hỗ trợ Docker</strong> mà không lo xung đột.
</p>
</div>

<div class="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-orange-400 transition-all duration-300 group">
<div class="flex items-center gap-4 mb-3">
<div class="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
<img src="/railway_logo.png" class="w-full h-full object-contain" alt="Railway Logo" />
</div>
<h3 class="text-xl font-bold text-slate-800">Railway (Active)</h3>
</div>
<p class="text-[11px] text-slate-500 leading-relaxed italic">
Nền tảng triển khai thực tế. Tích hợp quy trình CI/CD tự động: <strong>Push code → Build → Auto Deploy</strong> cùng cơ chế giám sát 24/7.
</p>
</div>
</div>
</div>
</div>

<BrandFooter section="DevOps" />

<!--
Cuối cùng là phần triển khai. Em sử dụng Multi-stage Docker giúp tối ưu tối đa dung lượng image, đảm bảo việc triển khai nhanh chóng. Hệ thống chạy trên Railway với quy trình CI/CD tự động và cơ chế Health check để giám sát hệ thống 24/7.
-->

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
transition: view-transition
---

<SectionDivider 
number="06" 
title="Live Demo" 
desc="Trải nghiệm thực tế hệ sinh thái LexiVocab." 
/>

<!--
Chuyển phần: Live Demo. Bây giờ, em xin phép bắt đầu phần Demo thực tế qua 3 giai đoạn chính: Capture trên Extension; Quản trị & AI trên Web Dashboard; và Học tập trên Mobile App.
-->
---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
transition: view-transition
---

<SectionDivider 
number="07" 
title="Kết Luận" 
desc="Tổng kết đóng góp, định hướng phát triển và phần hỏi đáp Hội đồng." 
/>

<!--
Chuyển phần: Kết luận. Tổng kết lại, đồ án LexiVocab đã đạt được 3 giá trị lớn: Một kiến trúc Backend hiện đại; Một trải nghiệm người dùng thông minh; Và một hệ sinh thái sản phẩm hoàn chỉnh.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">SUMMARY</div>
<h1 class="animate-fade-up animate-delay-1 mb-8">Tổng kết</h1>

<div class="grid-3 gap-6 animate-fade-up animate-delay-2">
<div class="glass-card !p-5">
<div class="text-[#FF6B00] font-bold text-sm mb-2 border-b border-gray-100 pb-2 flex items-center gap-2"><div class="i-lucide-server"></div> Về Kiến trúc</div>
<ul class="text-xs space-y-2 text-gray-600 list-disc pl-4">
<li>Clean Architecture.</li>
<li>Bảo mật Stateless.</li>
</ul>
</div>

<div class="glass-card !p-5">
<div class="text-[#FF6B00] font-bold text-sm mb-2 border-b border-gray-100 pb-2 flex items-center gap-2"><div class="i-lucide-zap"></div> Về Trải nghiệm</div>
<ul class="text-xs space-y-2 text-gray-600 list-disc pl-4">
<li>Cải tiến SuperMemo-2 + Fuzz Factor.</li>
<li>Tích hợp hệ thống AI tạo sinh cho việc phân tích.</li>

</ul>
</div>

<div class="glass-card !p-5">
<div class="text-[#FF6B00] font-bold text-sm mb-2 border-b border-gray-100 pb-2 flex items-center gap-2"><div class="i-lucide-package"></div> Về Sản phẩm</div>
<ul class="text-xs space-y-2 text-gray-600 list-disc pl-4">
<li>Hệ sinh thái đồng nhất Chrome, Mobile, Web.</li>
<li>Tích hợp SePay thanh toán tự động.</li>
<li>Dashboard Analytics đa ngôn ngữ.</li>
</ul>
</div>
</div>

<div class="mt-8 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-center font-bold text-sm animate-fade-up animate-delay-3" v-click>
<div class="i-lucide-trophy text-yellow-500 inline-block text-lg mb-[-4px] mr-1"></div> Hệ thống đã đạt được các mục tiêu đề ra và sẵn sàng cho giai đoạn vận hành thử nghiệm.
</div>
</div>

<BrandFooter section="Kết luận" />

<!--
Tổng kết lại, đồ án LexiVocab đã đạt được 3 giá trị lớn: Một kiến trúc Backend hiện đại, bảo mật; Một trải nghiệm người dùng thông minh nhờ AI và thuật toán SM-2; Và một hệ sinh thái sản phẩm hoàn chỉnh, có thể triển khai thử nghiệm trong môi trường thực tế.
-->

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">FUTURE ROADMAP</div>
<h1 class="animate-fade-up animate-delay-1 mb-8">Hạn chế & Hướng phát triển</h1>

<div class="grid-2 gap-12 animate-fade-up animate-delay-2">
<div>
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-2">
<div class="i-lucide-alert-triangle text-red-500 text-xl"></div> Hạn chế hiện tại
</h3>
<div class="space-y-3">
<div class="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-600">
Chưa hỗ trợ Offline Mode hoàn toàn.
</div>
<div class="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-600">
Widget hiện chỉ hỗ trợ nền tảng Android.
</div>
<div class="bg-gray-50 p-3 rounded border border-gray-200 text-xs text-gray-600">
Chi phí LLM API cao khi người dùng (DAU) lớn.
</div>
</div>
</div>

<div>
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-2">
<div class="i-lucide-rocket text-green-500 text-xl"></div> Tương lai
</h3>
<div class="space-y-3">
<div class="bg-white p-3 rounded border-l-4 border-[#FF6B00] shadow-sm text-xs text-gray-700 font-medium">
Offline Mode với Service Worker + IndexedDB.
</div>
<div class="bg-white p-3 rounded border-l-4 border-[#FF6B00] shadow-sm text-xs text-gray-700 font-medium">
Phát triển iOS Widget bằng Native Modules (SwiftUI).
</div>
<div class="bg-white p-3 rounded border-l-4 border-[#FF6B00] shadow-sm text-xs text-gray-700 font-medium">
Phát triển các mô hình ngôn ngữ nhỏ để tối ưu hóa chi phí và tính riêng tư.
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Kết luận" />

<!--
Tất nhiên hệ thống vẫn còn những hạn chế như chưa hỗ trợ Offline Mode hoàn toàn hay chi phí API AI còn cao. Trong tương lai, em sẽ phát triển Offline Mode với IndexedDB và tự host các Model AI nhỏ như Llama 3B để tối ưu chi phí và tăng tính riêng tư.
-->

---
layout: center
class: text-center
---

<div class="thanks-slide h-full w-full absolute inset-0">
<div class="relative z-10 flex flex-col items-center justify-center h-full animate-fade-up">
<img src="/logo.png" class="w-16 h-16 rounded-2xl shadow-2xl mb-8" alt="LexiVocab Logo" />

<h1 class="mb-4">Xin trân trọng cảm ơn!</h1>
<p class="max-w-lg mb-12">Cảm ơn Quý Thầy Cô Hội đồng đã dành thời gian lắng nghe.</p>

<div class="flex gap-8 justify-center mt-8">
<div class="text-left bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10">
<div class="text-xs text-gray-400 mb-1 uppercase tracking-wider font-bold">Sinh viên</div>
<div class="text-white font-medium">Phan Văn Thành</div>
<div class="text-gray-400 text-xs mt-1">DTH225766</div>
</div>

<div class="text-left bg-white/5 p-4 rounded-xl backdrop-blur-md border border-white/10">
<div class="text-xs text-[#FF6B00] mb-1 uppercase tracking-wider font-bold">Q&A</div>
<div class="text-white font-medium">Mời Hội đồng</div>
<div class="text-gray-400 text-xs mt-1">đặt câu hỏi</div>
</div>
</div>
</div>
</div>

<!--
Phần trình bày của em đến đây là kết thúc. Em xin chân thành cảm ơn hai thầy đã dành thời gian lắng nghe. Em rất mong nhận được những câu hỏi và góp ý từ hai thầy để hoàn thiện dự án hơn nữa. Em xin cảm ơn ạ!
-->


