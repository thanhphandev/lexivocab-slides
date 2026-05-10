---
theme: default
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## LexiVocab
  Hệ sinh thái học từ vựng Omnichannel
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
Ứng dụng thuật toán Spaced Repetition SuperMemo-2 và AI sinh tạo để mang lại trải nghiệm liền mạch, tập trung.
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
Kính chào quý thầy cô trong Hội đồng. Em là Phan Văn Thành, mã sinh viên DTH225766. Hôm nay em rất vinh dự được trình bày đồ án tốt nghiệp với đề tài: LexiVocab - Hệ sinh thái học từ vựng đa nền tảng tích hợp thuật toán lặp lại ngắt quãng. Dự án ứng dụng thuật toán SuperMemo-2 và AI sinh tạo để mang lại trải nghiệm học tập tập trung và liền mạch.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-3 animate-fade-up">TẦM NHÌN DỰ ÁN</div>
<h1 class="animate-fade-up animate-delay-1 mb-2 text-3xl">Mục tiêu đồ án</h1>
<p class="text-gray-500 mb-6 max-w-2xl animate-fade-up animate-delay-2 text-[13px]">Xây dựng sản phẩm hoàn thiện, giải quyết triệt để bài toán học từ vựng của người dùng.</p>

<div class="grid grid-cols-2 gap-3">
  <!-- Card 1: Multi-platform -->
  <div class="feature-card animate-fade-up animate-delay-1 relative overflow-hidden group !p-4 flex items-center gap-4 bg-gradient-to-r from-orange-50/40 to-transparent">
    <div class="w-10 h-10 shrink-0 bg-white rounded shadow-sm border border-orange-100 flex items-center justify-center text-[var(--lv-primary)]">
      <div class="i-lucide-laptop text-lg"></div>
    </div>
    <div>
      <h3 class="font-bold text-gray-900 mb-0.5 text-sm">Hệ sinh thái Đa nền tảng</h3>
      <p class="text-xs text-gray-500 leading-snug">Trải nghiệm liền mạch qua Extension, Web & Mobile.</p>
    </div>
  </div>

  <!-- Card 2: Spaced Repetition -->
  <div class="feature-card animate-fade-up animate-delay-2 relative overflow-hidden group !p-4 flex items-center gap-4 bg-gradient-to-r from-blue-50/40 to-transparent">
    <div class="w-10 h-10 shrink-0 bg-white rounded shadow-sm border border-blue-100 flex items-center justify-center text-blue-500">
      <div class="i-lucide-brain text-lg"></div>
    </div>
    <div>
      <h3 class="font-bold text-gray-900 mb-0.5 text-sm">SuperMemo-2</h3>
      <p class="text-xs text-gray-500 leading-snug">Thuật toán tính chu kỳ ôn tập khoa học, cá nhân hóa.</p>
    </div>
  </div>

  <!-- Card 3: AI -->
  <div class="feature-card animate-fade-up animate-delay-3 relative overflow-hidden group !p-4 flex items-center gap-4 bg-gradient-to-r from-purple-50/40 to-transparent">
    <div class="w-10 h-10 shrink-0 bg-white rounded shadow-sm border border-purple-100 flex items-center justify-center text-purple-500">
      <div class="i-lucide-sparkles text-lg"></div>
    </div>
    <div>
      <h3 class="font-bold text-gray-900 mb-0.5 text-sm">AI Sinh tạo</h3>
      <p class="text-xs text-gray-500 leading-snug">Tích hợp LLM tạo ngữ cảnh, dịch thuật tự động.</p>
    </div>
  </div>

  <!-- Card 4: Production-Ready -->
  <div class="feature-card animate-fade-up animate-delay-4 relative overflow-hidden group !p-4 flex items-center gap-4 bg-gradient-to-r from-green-50/40 to-transparent">
    <div class="w-10 h-10 shrink-0 bg-white rounded shadow-sm border border-green-100 flex items-center justify-center text-green-500">
      <div class="i-lucide-rocket text-lg"></div>
    </div>
    <div>
      <h3 class="font-bold text-gray-900 mb-0.5 text-sm">Triển khai thực tế</h3>
      <p class="text-xs text-gray-500 leading-snug">Hệ thống Production-ready, chạy mượt mà trên môi trường thật.</p>
    </div>
  </div>
</div>
</div>

<BrandFooter section="Mở đầu" />

<!--
Mục tiêu cốt lõi của đồ án không chỉ là một ứng dụng học tập, mà là xây dựng một sản phẩm hoàn thiện (Production-ready). Giải quyết triệt để bài toán học từ vựng qua 4 phương diện: Trải nghiệm đa nền tảng liền mạch; Thuật toán SuperMemo-2 cá nhân hóa; Tích hợp AI sinh tạo để hiểu sâu ngữ cảnh; và triển khai thực tế trên môi trường Production.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-4 animate-fade-up">RÀO CẢN #1</div>
<div class="grid-2 items-center gap-12">
<!-- Left Side -->
<div>
<h1 class="animate-fade-up animate-delay-1 text-4xl leading-tight mb-2">Context Switching</h1>
<h2 class="text-[var(--lv-primary)] mb-6 animate-fade-up animate-delay-2 text-xl font-semibold">Kẻ thù của sự tập trung</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-gray-500 text-sm leading-relaxed">
Chuyển đổi qua lại giữa bài báo và ứng dụng từ điển làm đứt đoạn luồng tư duy, tạo ra cảm giác nản chí khi đọc tài liệu ngoại ngữ.
</p>

<div class="highlight-box mt-8 animate-fade-up animate-delay-4">
<div class="flex gap-4 items-start">
<div class="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0 text-[var(--lv-primary)] border border-orange-100">
<div class="i-lucide-brain text-xl"></div>
</div>
<div>
<p class="font-bold text-sm text-gray-800 mb-1">Mất 23 phút</p>
<p class="text-xs text-gray-500 leading-relaxed">để não bộ lấy lại sự tập trung và quay về trạng thái "Flow" sau mỗi lần gián đoạn.</p>
<p class="text-[10px] text-gray-400 mt-2 uppercase tracking-wide">— Nghiên cứu từ ĐH UC Irvine</p>
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
<div class="i-lucide-arrow-left-right text-lg"></div>
</div>
<div class="text-red-500 font-black text-xl leading-none mb-0.5">-40%</div>
<div class="text-[8px] font-bold uppercase tracking-widest text-gray-500">Hiệu suất</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Vấn đề" />

<!--
Rào cản lớn nhất là Context Switching - kẻ thù của sự tập trung. Khi đọc bài báo tiếng Anh gặp từ mới, phải chuyển tab sang từ điển làm đứt đoạn luồng tư duy. Theo nghiên cứu từ ĐH UC Irvine, não bộ mất tới 23 phút để lấy lại trạng thái Flow, làm giảm 40% hiệu suất học tập.
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
Rào cản thứ hai là Đường cong quên lãng Ebbinghaus. Nếu không có cơ chế ôn tập đúng thời điểm, não bộ sẽ tự động loại bỏ 80% thông tin mới chỉ sau 24 giờ. Việc học vẹt mà không có sự nhắc nhở khoa học dẫn đến lãng phí rất lớn công sức của người học.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">GIẢI PHÁP</div>
<h1 class="animate-fade-up animate-delay-1 mb-16 text-5xl font-black tracking-tight">Ba Trụ Cột của LexiVocab</h1>

<div class="grid grid-cols-3 divide-x divide-gray-100 relative z-10 animate-fade-up animate-delay-2">
<div class="pr-10">
<PillarCard 
number="1" 
title="Bắt từ" 
enTitle="Capture"
icon="i-lucide-scan-line"
desc="Chrome Extension bắt từ vựng trực tiếp trên trang web, không làm gián đoạn luồng đọc và tư duy của bạn."
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
desc="Tận dụng sức mạnh của AI để tạo ngữ cảnh cá nhân hóa, ví dụ thực tế giúp bạn hiểu cặn kẽ mọi tầng nghĩa."
delay="800" 
/>
</div>
</div>
</div>

<BrandFooter section="Giải pháp" />

<!--
LexiVocab ra đời dựa trên 3 trụ cột: Capture (Bắt từ) - Chrome Extension lưu từ trực tiếp không gián đoạn; Remember (Nhớ lâu) - thuật toán SM-2 chuyển thông tin vào bộ nhớ dài hạn; Understand (Hiểu sâu) - AI tạo ngữ cảnh ví dụ thực tế giúp hiểu cặn kẽ mọi tầng nghĩa của từ.
-->

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
---

<SectionDivider 
number="02" 
title="Hệ Sinh Thái 4 Mảnh Ghép" 
desc="Kiến trúc Hub & Spoke kết nối đa nền tảng, bao phủ 100% không gian thiết bị." 
/>

<!--
Chuyển phần: Hệ sinh thái 4 mảnh ghép, thiết kế theo kiến trúc Hub & Spoke để bao phủ 100% không gian thiết bị của người dùng.
-->

---
transition: fade
---

<div class="h-full flex flex-col p-8">
<div class="badge badge-primary mb-2 animate-fade-up">ARCHITECTURE</div>
<h1 class="animate-fade-up animate-delay-1 mb-4 text-left">Kiến trúc Hub & Spoke</h1>

<div class="flex-grow flex items-center justify-center animate-fade-up animate-delay-2">
<HubSpoke />
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

<!--
Hệ thống lấy Core API (.NET 10) làm trung tâm, kết nối đồng nhất dữ liệu giữa 3 nền tảng Client: Chrome Extension, Mobile App và Web Dashboard. Điều này đảm bảo người dùng có thể bắt từ trên máy tính tại văn phòng và ôn tập ngay trên điện thoại khi đang di chuyển.
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
<p class="text-xs font-medium text-slate-600 italic">Instant Capture Engine</p>
</div>
</div>
<div class="grid grid-cols-[1fr_1.3fr] gap-8 items-center flex-grow min-h-0">
<div class="animate-fade-up animate-delay-2">
<h2 class="text-2xl font-black text-gray-900 mb-4 leading-tight">Bắt từ vựng tức thì,<br/><span class="text-[#FF6B00]">Không gián đoạn.</span></h2>
<div class="space-y-3 text-xs">
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">01</div>
<div><strong>Manifest V3:</strong> Chuẩn bảo mật mới nhất, tối ưu hiệu năng và quyền riêng tư.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">02</div>
<div><strong>Shadow DOM:</strong> Cô lập hoàn toàn UI popup khỏi CSS của website hiện tại.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">03</div>
<div><strong>Service Worker:</strong> Xử lý ngầm hiệu quả, tiết kiệm tài nguyên hệ thống.</div>
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
Chrome Extension là công cụ bắt từ chủ lực. Manifest V3 mới nhất tối ưu hiệu năng. Shadow DOM cô lập hoàn toàn UI, popup hiển thị đẹp trên mọi website. Service Worker xử lý đồng bộ ngầm tiết kiệm tài nguyên.
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
<p class="text-xs font-medium text-slate-600 italic">Native Experience Engine</p>
</div>
</div>
<div class="grid grid-cols-[1fr_1.3fr] gap-8 items-center flex-grow min-h-0">
<div class="animate-fade-up animate-delay-2">
<h2 class="text-2xl font-black text-gray-900 mb-4 leading-tight">Học tập liền mạch,<br/><span class="text-[#FF6B00]">Mọi lúc mọi nơi.</span></h2>
<div class="space-y-3 text-xs">
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">01</div>
<div><strong>Đồng bộ Real-time:</strong> Dữ liệu từ Extension và Web được đồng bộ tức thì qua Cloud.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">02</div>
<div><strong>SRS Notification:</strong> Thuật toán gửi thông báo ôn bài chính xác vào "thời điểm vàng".</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-orange-200 transition-all">
<div class="text-[#FF6B00] font-black shrink-0">03</div>
<div><strong>Native Performance:</strong> Trải nghiệm vuốt chạm mượt mà, tối ưu cho cả Android và iOS.</div>
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
<h1 class="text-2xl font-black text-slate-900 tracking-tight">Web <span class="text-blue-600">Dashboard</span></h1>
</div>
<div class="text-right">
<p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client 03</p>
<p class="text-xs font-medium text-slate-600 italic">Central Management System</p>
</div>
</div>
<div class="grid grid-cols-[1fr_2fr] gap-6 items-center flex-grow min-h-0">
<div class="flex flex-col gap-3 animate-fade-up animate-delay-2 pr-4">
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-blue-200 transition-all">
<div class="text-blue-600 font-black shrink-0">01</div>
<div class="text-xs"><strong>Automation:</strong> SePay Webhooks Sync tự động hóa quy trình thanh toán.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-blue-200 transition-all">
<div class="text-blue-600 font-black shrink-0">02</div>
<div class="text-xs"><strong>SEO & i18n:</strong> Routing đa ngôn ngữ chuẩn quốc tế, tối ưu tìm kiếm.</div>
</div>
<div class="p-3 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start group hover:border-blue-200 transition-all">
<div class="text-blue-600 font-black shrink-0">03</div>
<div class="text-xs"><strong>Analytics:</strong> Biểu đồ trực quan theo dõi tiến độ và hiệu quả ghi nhớ.</div>
</div>
</div>
<div class="relative animate-fade-up animate-delay-3 h-[280px] min-h-0">
<div class="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full translate-x-8 translate-y-8"></div>
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
Web Dashboard trên Next.js, tích hợp SePay Webhooks tự động hóa nâng cấp VIP qua QR code. Biểu đồ Analytics trực quan theo dõi tiến độ và hiệu quả ghi nhớ theo thời gian.
-->

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
transition: view-transition
---

<SectionDivider 
number="03" 
title="Kiến trúc Backend & Bảo mật" 
desc="Clean Architecture, CQRS, và cơ chế xác thực kép đảm bảo hiệu năng cốt lõi." 
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
<h2 class="text-[#FF6B00] text-lg font-bold mb-4 animate-fade-up animate-delay-2">Core API .NET 10</h2>
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
Backend được thiết kế theo Clean Architecture, tách biệt hoàn toàn Business Logic khỏi Framework và Database. Lớp Domain ở trung tâm chứa các quy tắc cốt lõi, giúp hệ thống cực kỳ linh hoạt. Chúng ta có thể thay đổi Database hoặc tích hợp thêm các dịch vụ bên thứ ba mà không cần sửa đổi Logic nghiệp vụ chính.
-->

---
transition: fade
---

<div class="h-full flex flex-col px-8 py-4 justify-center">
<div class="badge badge-primary badge-outline text-[10px] mb-2 uppercase tracking-widest animate-fade-up w-max">DESIGN PATTERN</div>
<h1 class="text-4xl font-black text-slate-900 tracking-tight mb-2 flex items-baseline gap-1">
<span class="animate-fade-up animate-delay-1 inline-flex items-baseline">C<span class="text-slate-400 font-medium text-3xl">ommand</span></span>
<span class="animate-fade-up animate-delay-2 inline-flex items-baseline">Q<span class="text-slate-400 font-medium text-3xl">uery</span></span>
<span class="animate-fade-up animate-delay-3 inline-flex items-baseline">R<span class="text-slate-400 font-medium text-3xl">esponsibility</span></span>
<span class="animate-fade-up animate-delay-4 inline-flex items-baseline">S<span class="text-slate-400 font-medium text-3xl">egregation</span></span>
</h1>
<p class="text-slate-500 text-[14px] mb-8 max-w-2xl animate-fade-up animate-delay-2 leading-relaxed">
Phân tách hoàn toàn luồng xử lý <strong class="text-[#FF6B00] font-semibold">Ghi (Command)</strong> và <strong class="text-blue-500 font-semibold">Đọc (Query)</strong> để tối ưu hóa hiệu năng độc lập và khả năng mở rộng hệ thống.
</p>

<div class="grid grid-cols-2 gap-8 items-stretch flex-grow min-h-0">
<!-- Command Side -->
<div class="animate-fade-right animate-delay-3 relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex flex-col overflow-hidden group">
<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF6B00] shrink-0 shadow-sm group-hover:scale-110 transition-transform">
<div class="i-lucide-pen-tool text-xl"></div>
</div>
<div>
<h3 class="font-black text-xl text-slate-800 leading-tight">Command</h3>
<p class="text-[10px] text-[#FF6B00] font-black uppercase tracking-widest">Luồng Ghi Dữ Liệu</p>
</div>
</div>

<div class="flex-grow space-y-2.5">
<div class="bg-white rounded-lg p-3 font-mono text-[11px] text-slate-600 border border-slate-100 shadow-sm flex items-center gap-3">
<div class="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></div> CreateFlashcardCommand
</div>
<div class="bg-white rounded-lg p-3 font-mono text-[11px] text-slate-600 border border-slate-100 shadow-sm flex items-center gap-3">
<div class="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></div> UpdateReviewResultCommand
</div>
</div>

<div class="mt-6 p-4 rounded-xl bg-orange-50/80 border border-orange-100">
<p class="text-xs text-orange-900/80 leading-relaxed">
<strong class="text-[#FF6B00] block mb-1">Nhiệm vụ:</strong>
Thực thi business logic và validation phức tạp. Ghi trực tiếp vào Primary Database.
</p>
</div>
</div>

<!-- Query Side -->
<div class="animate-fade-left animate-delay-3 relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col overflow-hidden group">
<div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 shrink-0 shadow-sm group-hover:scale-110 transition-transform">
<div class="i-lucide-search text-xl"></div>
</div>
<div>
<h3 class="font-black text-xl text-slate-800 leading-tight">Query</h3>
<p class="text-[10px] text-blue-500 font-black uppercase tracking-widest">Luồng Đọc Dữ Liệu</p>
</div>
</div>

<div class="flex-grow space-y-2.5">
<div class="bg-white rounded-lg p-3 font-mono text-[11px] text-slate-600 border border-slate-100 shadow-sm flex items-center gap-3">
<div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div> GetDueFlashcardsQuery
</div>
<div class="bg-white rounded-lg p-3 font-mono text-[11px] text-slate-600 border border-slate-100 shadow-sm flex items-center gap-3">
<div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div> GetUserStatisticsQuery
</div>
</div>

<div class="mt-6 p-4 rounded-xl bg-blue-50/80 border border-blue-100">
<p class="text-xs text-blue-900/80 leading-relaxed">
<strong class="text-blue-600 block mb-1">Nhiệm vụ:</strong>
Truy vấn tốc độ cao, không có side-effects. Có thể scale mạnh mẽ thông qua Read Replica.
</p>
</div>
</div>
</div>
</div>

<BrandFooter section="Backend" />

<!--
Em kết hợp mẫu thiết kế CQRS để phân tách hoàn toàn luồng Ghi (Command) và luồng Đọc (Query). Luồng Ghi xử lý các logic phức tạp và validation, trong khi luồng Đọc được tối ưu hóa để truy vấn dữ liệu với tốc độ cao nhất, không gây side-effect, giúp hệ thống dễ dàng scale theo chiều ngang.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col px-8 py-2 justify-center overflow-hidden">
<div class="badge badge-primary badge-outline text-[10px] mb-2 uppercase tracking-widest animate-fade-up">MEDIATR</div>
<div class="grid grid-cols-[1.2fr_1fr] gap-8 items-center flex-grow min-h-0">
<div class="animate-fade-up animate-delay-1">
<h1 class="text-3xl font-black text-slate-900 tracking-tight mb-1">MediatR & Pipeline</h1>
<h2 class="text-[#FF6B00] text-lg font-bold mb-4 animate-fade-up animate-delay-2">Xử lý Cross-cutting Concerns</h2>
<p class="mb-4 animate-fade-up animate-delay-3 text-sm text-slate-600">Điều phối Command/Query đến đúng Handler tương ứng thông qua Middleware Pipeline.</p>

<div class="space-y-3 animate-fade-up animate-delay-4 text-xs font-mono text-gray-600">
<div class="flex items-center gap-3 bg-white p-2 rounded border border-gray-200">
<div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">1</div>
<div>LoggingBehavior <span>→ Ghi log I/O</span></div>
</div>
<div class="flex items-center gap-3 bg-white p-2 rounded border border-gray-200">
<div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">2</div>
<div>ValidationBehavior <span>→ FluentValidation</span></div>
</div>
<div class="flex items-center gap-3 bg-white p-2 rounded border border-gray-200">
<div class="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">3</div>
<div>TransactionBehavior <span>→ Auto Commit/Rollback</span></div>
</div>
<div class="flex items-center gap-3 bg-orange-50 text-[#FF6B00] p-2 rounded border border-orange-200 font-bold">
<div class="w-6 h-6 rounded bg-orange-100 flex items-center justify-center">4</div>
<div>CommandHandler / QueryHandler</div>
</div>
</div>
</div>

<div class="animate-fade-up animate-delay-3 flex justify-center">

```mermaid
graph TD
Req[Request] --> MB1

subgraph Pipeline
MB1[Logging] --> MB2
MB2[Validation] --> MB3
MB3[Transaction] --> Handler[Target Handler]
end

Handler -.->|Response| MB3
MB3 -.->|Commit/Rollback| MB2
MB2 -.-> MB1
MB1 -.-> Res[Response]

style Handler fill:#FF6B00,stroke:#E55A00,color:#fff
style Req fill:#1D2235,stroke:#141824,color:#fff
style Res fill:#10B981,stroke:#059669,color:#fff
```

</div>
</div>
</div>

<!--
Để điều phối CQRS, em sử dụng thư viện MediatR. Mọi yêu cầu đều đi qua một Pipeline Middleware tập trung, nơi xử lý các vấn đề như: Logging tự động, Validation dữ liệu bằng FluentValidation, và Transaction Management. Điều này giúp code sạch hơn và dễ bảo trì hơn rất nhiều.
-->

---
transition: fade
---

<div class="h-full flex flex-col px-8 py-2 bg-slate-50/50 justify-center overflow-hidden">
<div class="flex items-center justify-between mb-1 animate-fade-up">
<div>
<div class="badge badge-primary badge-outline text-[10px] mb-1 tracking-[0.2em] uppercase">SECURITY MODEL</div>
<h1 class="text-2xl font-black text-slate-900 tracking-tight">Refresh Token <span class="text-blue-600">Rotation</span></h1>
</div>
<div class="text-right">
<div class="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Defense Level</div>
<div class="text-xs font-bold text-slate-500 italic">Advanced XSS Protection</div>
</div>
</div>
<div class="grid grid-cols-[1fr_1.4fr] gap-4 flex-grow min-h-0 items-stretch transform scale-90 origin-top">
<div class="flex flex-col justify-center gap-2 animate-fade-up animate-delay-2 pr-4">
<div class="group">
<div class="text-[9px] font-black text-blue-500 mb-1 tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity uppercase">01 • Access Token (JWT)</div>
<div class="space-y-0.5">
<p class="text-[11px] font-bold text-slate-800 leading-none">Application Memory (RAM)</p>
<p class="text-[10px] text-slate-500 leading-relaxed italic">Hết hạn sau 15 phút — Cô lập hoàn toàn.</p>
</div>
</div>
<div class="group">
<div class="text-[9px] font-black text-green-500 mb-1 tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity uppercase">02 • Refresh Token</div>
<div class="space-y-0.5">
<p class="text-[11px] font-bold text-slate-800 leading-none">HttpOnly Cookie</p>
<p class="text-[10px] text-slate-500 leading-relaxed italic">Chống XSS 100%. JS không thể truy cập.</p>
</div>
</div>
<div class="mt-1 p-2 rounded-xl bg-orange-50/50">
<p class="text-[9px] text-orange-800 leading-relaxed"><strong>Rotation:</strong> Token cũ bị vô hiệu hóa ngay khi cấp mới, ngăn chặn tuyệt đối Replay Attack.</p>
</div>
</div>
<div class="animate-fade-up animate-delay-3 bg-white rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] border border-slate-100 p-3 flex flex-col items-center justify-center relative overflow-hidden">
<div class="absolute inset-0 bg-blue-500/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>
<p class="text-[9px] font-black text-slate-400 mb-1 uppercase tracking-[0.3em]">Silent Refresh Flow</p>
<div class="w-full transform scale-[0.65] origin-top -mb-16">

```mermaid
sequenceDiagram
    participant C as Client
    participant S as Auth Server
    Note over C: AT Expired
    C->>S: POST /refresh (Cookie)
    S->>S: Verify & Rotate
    S-->>C: New RT + New AT
    Note over C: Session Extended
```

</div>
</div>
</div>
</div>

<BrandFooter section="Bảo mật" />


---
transition: slide-up
---

<div class="h-full flex flex-col px-12 py-0 pt-4 justify-start" style="zoom: 0.82">
<div class="badge badge-primary mb-2 animate-fade-up w-max !text-[9px] !py-1">DATA LAYER</div>
<div class="grid grid-cols-[1fr_1.25fr] gap-10 items-start flex-grow min-h-0">
<!-- Left Side: Shortened Text -->
<div class="animate-fade-up">
<div class="text-[2rem] leading-tight font-black mb-1 text-slate-900 tracking-tight whitespace-nowrap">Database Design</div>
<h2 class="text-slate-500 text-xs mb-6">Tối ưu truy vấn hàng triệu bản ghi.</h2>
<div class="space-y-4">
<div class="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 hover:border-blue-200 transition-colors">
<div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 p-1.5 hover:scale-110 transition-transform duration-300">
  <img src="/postgresql_elephant.png" class="w-full h-full object-contain" alt="PostgreSQL Logo" />
</div>
<div>
<h3 class="font-bold text-slate-800 text-[12px] mb-0.5">PostgreSQL (B-Tree Index)</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Đánh chỉ mục (Index) trên trường <code>Word</code> và <code>NextReview</code>, giúp hệ thống truy vấn lịch ôn tập siêu tốc.</p>
</div>
</div>
<div class="p-4 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 hover:border-orange-200 transition-colors">
<div class="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0"><div class="i-lucide-zap text-xl"></div></div>
<div>
<h3 class="font-bold text-slate-800 text-[12px] mb-0.5">Khử Chuẩn (Denormalization)</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Lưu sẵn <code>WordText</code> ở bảng cá nhân (UserVocab). Không cần lệnh JOIN phức tạp khi render UI.</p>
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
title="Use-Cases & Xử lý tải" 
desc="Thuật toán lõi, tối ưu truy vấn Database, và kỹ thuật Streaming AI." 
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
EF' = EF + (0.1 - (5-q) × (0.08 + (5-q) × 0.02))<br/>
<span class="text-blue-300 mt-0.5 block opacity-80">I(n) = I(n-1) × EF</span>
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
<p class="text-[9px] text-slate-500 mt-0.5">Lệch ±5% chu kỳ, tránh hiện tượng Review Hell.</p>
</div>
</div>
<!-- Optimization 2 -->
<div class="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-2.5 items-center hover:border-blue-200 transition-colors">
<div class="bg-blue-50 text-blue-500 w-7 h-7 rounded-lg flex items-center justify-center shrink-0"><div class="i-lucide-shield-alert text-sm"></div></div>
<div>
<h4 class="font-bold text-[11px] text-slate-800">Cơ chế Phạt (Soft Reset)</h4>
<p class="text-[9px] text-slate-500 mt-0.5">Giảm 80% Interval thay vì reset 0 khi lỡ quên từ.</p>
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
<div class="font-bold text-[10px] text-green-600 uppercase tracking-wider">Dễ (3-5)</div>
<div class="text-[8px] text-slate-500">Tăng EF, giãn 1-4 tháng</div>
</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />

<!--
Trái tim của hệ thống là thuật toán SuperMemo-2. Dựa trên đánh giá độ khó của người dùng, hệ thống tính toán EF (Easiness Factor) để giãn cách chu kỳ ôn tập. Em đã cải tiến thêm Fuzz Factor (lệch ±5%) để tránh hiện tượng 'Review Hell' - khi quá nhiều thẻ dồn vào cùng một ngày, giúp trải nghiệm học tập tự nhiên hơn.
-->

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">PERFORMANCE OPTIMIZATION</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">B-Tree Indexing</h1>
<p class="text-gray-500 mb-8 max-w-2xl animate-fade-up animate-delay-2">Tối ưu hóa câu truy vấn: "Lấy thẻ cần ôn hôm nay".</p>

<div class="grid-2 gap-8 items-center animate-fade-up animate-delay-3">
<!-- Before -->
<div class="glass-card">
<h3 class="font-bold text-[#1D2235] mb-2 text-center text-red-500">Trước khi tối ưu (Full Scan)</h3>
<div class="bg-gray-100 rounded-lg p-4 font-mono text-[10px] text-gray-700 mb-4 overflow-x-auto">
SELECT * FROM "Flashcards"<br/>
WHERE "NextReviewDate" <= NOW()
</div>
<div class="flex items-center justify-between border-t border-gray-200 pt-4">
<div class="text-xs text-gray-500">Thời gian (10K user)</div>
<div class="text-xl font-bold text-red-500">~500 ms</div>
</div>
</div>

<!-- After -->
<div class="glass-card border-2 border-[#FF6B00] relative overflow-hidden">
<div class="absolute top-0 right-0 bg-[#FF6B00] text-white text-[9px] font-bold px-2 py-1 rounded-bl-lg">99.9% FASTER</div>
<h3 class="font-bold text-[#1D2235] mb-2 text-center text-green-500">Thêm Composite Index</h3>
<div class="bg-[#1D2235] text-blue-300 rounded-lg p-4 font-mono text-[10px] mb-4 overflow-x-auto">
CREATE INDEX IX_NextReview <br/>
ON "Flashcards" ("UserId", "NextReviewDate")
</div>
<div class="flex items-center justify-between border-t border-gray-200 pt-4">
<div class="text-xs text-gray-500">Thời gian (10K user)</div>
<div class="text-xl font-bold text-green-500">&lt; 1 µs</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />

<!--
Để giải quyết bài toán truy vấn thẻ cần ôn của hàng vạn người dùng cùng lúc, em đã thay thế Full Scan bằng Composite Index trên cặp (UserId, NextReviewDate). Kết quả thực tế cho thấy thời gian truy vấn giảm từ 500ms xuống dưới 1 micro-giây, tức là nhanh hơn gấp hàng nghìn lần.
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
<p class="text-[10px] text-slate-500 leading-relaxed">Đẩy từng token về client liên tục (1 chiều), mang lại trải nghiệm Zero-delay với chi phí tài nguyên thấp hơn WebSockets.</p>
</div>
</div>

<div class="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 flex gap-3 items-start hover:border-blue-200 transition-all">
<div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
<div class="i-lucide-infinity text-lg"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-xs mb-0.5">Provider-Agnostic</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Kiến trúc độc lập (không vendor lock-in). Dễ dàng chuyển đổi giữa OpenAI, Gemini, Claude qua Interface tiêu chuẩn.</p>
</div>
</div>
</div>
</div>

<div class="flex-center h-[220px] animate-fade-up animate-delay-2 relative">
<div class="absolute inset-0 bg-gradient-to-tr from-orange-50/50 to-transparent rounded-3xl border border-orange-100/50"></div>
<div class="relative z-10 w-full p-4">
<div class="text-[9px] font-bold text-orange-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
<div class="i-lucide-zap text-[10px]"></div> Live Demo Output
</div>
<StreamingText text='"Serendipity" — Sự tình cờ may mắn. Ví dụ, Alexander Fleming phát hiện ra Penicillin là một serendipity vĩ đại.' />
</div>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />
---
transition: slide-up
---

<div class="h-full flex flex-col px-8 py-0 pt-4 justify-start">
<div class="badge badge-primary mb-1 animate-fade-up w-max !text-[9px] !py-1">OPERATIONS</div>
<div class="grid grid-cols-[1.35fr_1fr] gap-6 items-start flex-grow min-h-0 scale-[0.9] origin-top">
<div class="animate-fade-up">
<div class="text-4xl font-black mb-1 text-slate-900 tracking-tight whitespace-nowrap">Payment <span class="text-blue-600">& Automation</span></div>
<h2 class="text-slate-500 text-xs mb-4">Xử lý thanh toán an toàn và tự động hóa tác vụ ngầm.</h2>

<div class="space-y-3">
<!-- SePay Webhook & Idempotency -->
<div class="p-3 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex gap-3 items-start hover:border-orange-200 transition-all">
<div class="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
<div class="i-lucide-shield-check text-lg"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-[13px] mb-0.5">Idempotent Webhook (SePay)</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Chống Duplicate Transaction bằng <code>Unique Key</code> (Postgres). Database tự động reject webhook bị trùng lặp (Mã 23505), đảm bảo không cộng dư VIP.</p>
</div>
</div>

<!-- Hangfire Automation -->
<div class="p-3 rounded-xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex gap-3 items-start hover:border-blue-200 transition-all">
<div class="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
<div class="i-lucide-clock text-lg"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-[13px] mb-0.5">Background Jobs (Hangfire)</h3>
<p class="text-[10px] text-slate-500 leading-relaxed">Tự động hóa gửi Email nhắc nhở (SRS) và dọn dẹp dữ liệu rác (Soft Delete) định kỳ mỗi đêm mà không ảnh hưởng tới luồng người dùng.</p>
</div>
</div>
</div>
</div>

<div class="animate-fade-up animate-delay-2 flex flex-col items-center justify-center bg-white rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] border border-slate-100 p-6 relative overflow-hidden">
<div class="absolute inset-0 bg-slate-50/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none"></div>
<div class="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1 z-10 flex items-center gap-1.5">
<div class="i-lucide-git-merge text-xs"></div> Payment Flow
</div>
<div class="flex flex-col gap-1.5 w-full max-w-[240px] mt-2 z-10">
<!-- Pending -->
<div class="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div class="flex items-center gap-2 text-[11px] font-bold text-slate-700">
<div class="w-7 h-7 rounded bg-slate-100 flex items-center justify-center text-slate-500"><div class="i-lucide-webhook text-sm"></div></div>
Receive Webhook
</div>
<div class="bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider">Pending</div>
</div>

<div class="flex justify-center text-slate-300 -my-1"><div class="i-lucide-arrow-down text-base"></div></div>

<!-- Validate -->
<div class="bg-white border border-blue-200 rounded-xl p-2.5 flex items-center justify-between shadow-[0_4px_15px_rgba(59,130,246,0.1)] relative ring-2 ring-blue-50">
<div class="flex items-center gap-2 text-[11px] font-bold text-slate-700">
<div class="w-7 h-7 rounded bg-blue-50 flex items-center justify-center text-blue-500"><div class="i-lucide-shield-check text-sm"></div></div>
Signature & Idem.
</div>
<div class="bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider animate-pulse">Processing</div>
</div>

<!-- SVG Split Arrows -->
<div class="w-full flex justify-center -my-1.5 h-6">
<svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60 0 C 60 12, 30 12, 30 24" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="2 2"/>
<path d="M60 0 C 60 12, 90 12, 90 24" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="2 2"/>
</svg>
</div>

<div class="grid grid-cols-2 gap-3 mt-0">
<!-- Success -->
<div class="bg-white border border-green-200 rounded-xl p-3 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(16,185,129,0.05)] hover:border-green-300 transition-colors group">
<div class="text-green-500 mb-1 group-hover:scale-110 transition-transform"><div class="i-lucide-check-circle text-xl"></div></div>
<div class="text-[9px] font-bold text-slate-800 uppercase tracking-wide">Success</div>
<div class="text-[8px] text-slate-400 mt-0.5">+ Grant VIP</div>
</div>

<!-- Failed -->
<div class="bg-white border border-red-200 rounded-xl p-3 flex flex-col items-center text-center shadow-[0_2px_10px_rgba(239,68,68,0.05)] hover:border-red-300 transition-colors group">
<div class="text-red-400 mb-1 group-hover:scale-110 transition-transform"><div class="i-lucide-x-circle text-xl"></div></div>
<div class="text-[9px] font-bold text-slate-800 uppercase tracking-wide">Invalid</div>
<div class="text-[8px] text-slate-400 mt-0.5">Admin Alert</div>
</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Vận hành" />

<!--
Về vận hành, em sử dụng cơ chế Idempotency cho Webhooks thanh toán SePay để đảm bảo một giao dịch không bao giờ bị xử lý trùng lặp. Đồng thời, thư viện Hangfire được dùng để tự động hóa các tác vụ ngầm như gửi Email nhắc nhở học tập và dọn dẹp dữ liệu rác định kỳ mỗi đêm.
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

<!--
Cuối cùng là phần triển khai. Em sử dụng Multi-stage Docker giúp giảm dung lượng image từ 1GB xuống còn 200MB. Hệ thống được triển khai trên nền tảng Railway với đầy đủ quy trình CI/CD tự động, cơ chế Health check tự khởi động lại khi có sự cố, đảm bảo tính sẵn sàng cao.
-->

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">DEPLOYMENT</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Docker & Railway Ecosystem</h1>
<p class="text-gray-500 mb-8 max-w-2xl animate-fade-up animate-delay-2">Kiến trúc triển khai tự động hóa cao, tối ưu dung lượng.</p>

<div class="grid-2 gap-8 items-center animate-fade-up animate-delay-3">
<div class="glass-card">
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-3">
<img src="/docker_logo.png" class="w-8 h-8 object-contain" /> Multi-stage Docker
</h3>
<div class="space-y-3 text-sm text-gray-600">
<p><strong>Stage 1 (Build):</strong> .NET SDK (~800MB) biên dịch code.</p>
<p><strong>Stage 2 (Runtime):</strong> ASP.NET Runtime siêu nhẹ.</p>
<div class="mt-4 bg-green-50 text-green-700 px-3 py-2 rounded text-xs font-bold text-center border border-green-200">
Giảm dung lượng Image từ 1GB xuống 200MB (-80%)
</div>
</div>
</div>

<div class="glass-card">
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-3">
<img src="/railway_logo.png" class="w-8 h-8 object-contain" /> Railway PaaS
</h3>
<div class="space-y-3 text-sm text-gray-600">
<div class="flex gap-2 items-start">
<div class="text-[#FF6B00]"><div class="i-lucide-check"></div></div>
<div><strong>CI/CD Tự động:</strong> Push code → Build & Deploy.</div>
</div>
<div class="flex gap-2 items-start">
<div class="text-[#FF6B00]"><div class="i-lucide-check"></div></div>
<div><strong>Auto-provisioning:</strong> Khởi tạo Postgres & Redis.</div>
</div>
<div class="flex gap-2 items-start">
<div class="text-[#FF6B00]"><div class="i-lucide-check"></div></div>
<div><strong>Health checks:</strong> Auto-restart khi crash.</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="DevOps" />

---
layout: cover
class: "!p-0 bg-[#09090B] text-white"
transition: view-transition
---

<SectionDivider 
number="06" 
title="Live Demo" 
desc="Trải nghiệm thực tế hệ sinh thái LexiVocab qua 4 kịch bản sử dụng." 
/>

<!--
Chuyển phần: Live Demo. Bây giờ, em xin phép bắt đầu phần Demo thực tế qua 4 bước: Bắt từ vựng 'Serendipity' trên trình duyệt; Ôn tập trên Mobile; Sử dụng AI Streaming; và Quản lý trên Web Dashboard.
-->

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-2 animate-fade-up w-max !text-[9px] !py-1">DEMONSTRATION</div>
<h1 class="text-3xl font-black text-slate-900 tracking-tight mb-2 animate-fade-up animate-delay-1">DEMO</h1>
<p class="text-slate-500 text-sm mb-6 animate-fade-up animate-delay-2">Trải nghiệm thực tế hệ sinh thái LexiVocab qua User Journey.</p>

<div class="grid grid-cols-2 gap-4 animate-fade-up animate-delay-3 flex-grow min-h-0">

<!-- Step 1 -->
<div class="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 hover:border-orange-200 transition-all items-start">
<div class="w-10 h-10 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
<div class="i-lucide-chrome text-lg text-orange-500"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-sm mb-1">1. Bắt từ (Chrome Ext)</h3>
<p class="text-xs text-slate-500 leading-tight">Bôi đen & lưu từ khó trực tiếp qua Shadow DOM, không cần chuyển tab.</p>
</div>
</div>

<!-- Step 2 -->
<div class="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 hover:border-blue-200 transition-all items-start">
<div class="w-10 h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
<div class="i-lucide-smartphone text-lg text-blue-500"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-sm mb-1">2. Học & Nhớ (Mobile App)</h3>
<p class="text-xs text-slate-500 leading-tight">Vuốt flashcard. Hệ thống chạy SuperMemo-2 tính ngày ôn tập realtime.</p>
</div>
</div>

<!-- Step 3 -->
<div class="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 hover:border-purple-200 transition-all items-start">
<div class="w-10 h-10 bg-purple-50 border border-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
<div class="i-lucide-sparkles text-lg text-purple-500"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-sm mb-1">3. Hiểu sâu (AI Streaming)</h3>
<p class="text-xs text-slate-500 leading-tight">Dùng "Explain with AI" để tạo ví dụ. Trải nghiệm Zero-delay nhờ SSE.</p>
</div>
</div>

<!-- Step 4 -->
<div class="bg-white/80 p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 hover:border-green-200 transition-all items-start">
<div class="w-10 h-10 bg-green-50 border border-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
<div class="i-lucide-layout-dashboard text-lg text-green-500"></div>
</div>
<div>
<h3 class="font-bold text-slate-800 text-sm mb-1">4. Quản lý (Web/Widget)</h3>
<p class="text-xs text-slate-500 leading-tight">Xem biểu đồ phân tích trên Web và theo dõi mục tiêu qua Android Widget.</p>
</div>
</div>

</div>

<div class="mt-6 text-center animate-fade-up animate-delay-4" v-click>
<button class="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
<div class="i-lucide-play-circle text-orange-500 text-lg"></div> Bắt đầu trình diễn
</button>
</div>
</div>

<BrandFooter section="Live Demo" />

<!--
Thực hiện Demo theo kịch bản:
1. Bắt từ vựng 'Serendipity' ngay trên trang báo New York Times qua Chrome Extension.
2. Kiểm tra việc đồng bộ và ôn tập thẻ này trên Mobile App.
3. Sử dụng AI Streaming để giải thích cặn kẽ và tạo câu chuyện cho từ vừa học.
4. Cuối cùng là quản lý tiến độ và xem biểu đồ phân tích trên Web Dashboard.
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
<h1 class="animate-fade-up animate-delay-1 mb-8">Tổng kết đóng góp</h1>

<div class="grid-3 gap-6 animate-fade-up animate-delay-2">
<div class="glass-card !p-5">
<div class="text-[#FF6B00] font-bold text-sm mb-2 border-b border-gray-100 pb-2 flex items-center gap-2"><div class="i-lucide-server"></div> Về Kiến trúc</div>
<ul class="text-xs space-y-2 text-gray-600 list-disc pl-4">
<li>Clean Architecture, CQRS (MediatR).</li>
<li>Bảo mật Stateful Identity (HttpOnly Cookie).</li>
</ul>
</div>

<div class="glass-card !p-5">
<div class="text-[#FF6B00] font-bold text-sm mb-2 border-b border-gray-100 pb-2 flex items-center gap-2"><div class="i-lucide-zap"></div> Về Trải nghiệm</div>
<ul class="text-xs space-y-2 text-gray-600 list-disc pl-4">
<li>Cải tiến SuperMemo-2 + Fuzz Factor.</li>
<li>Giao tiếp 1 chiều tối ưu SSE (AI Streaming).</li>
<li>Shadow DOM bảo vệ UI Extension.</li>
</ul>
</div>

<div class="glass-card !p-5">
<div class="text-[#FF6B00] font-bold text-sm mb-2 border-b border-gray-100 pb-2 flex items-center gap-2"><div class="i-lucide-package"></div> Về Sản phẩm</div>
<ul class="text-xs space-y-2 text-gray-600 list-disc pl-4">
<li>Hệ sinh thái đồng nhất Chrome, Mobile, Web.</li>
<li>Tích hợp SePay tự động với Idempotency.</li>
<li>Dashboard Analytics đa ngôn ngữ.</li>
</ul>
</div>
</div>

<div class="mt-8 bg-green-50 border border-green-200 text-green-700 p-4 rounded-xl text-center font-bold text-sm animate-fade-up animate-delay-3" v-click>
<div class="i-lucide-trophy text-yellow-500 inline-block text-lg mb-[-4px] mr-1"></div> LexiVocab đã đạt chuẩn Production-Ready với khả năng mở rộng mạnh mẽ.
</div>
</div>

<BrandFooter section="Kết luận" />

<!--
Tổng kết lại, đồ án LexiVocab đã đạt được 3 giá trị lớn: Một kiến trúc Backend hiện đại, bảo mật; Một trải nghiệm người dùng thông minh nhờ AI và thuật toán SM-2; Và một hệ sinh thái sản phẩm hoàn chỉnh, sẵn sàng cho người dùng thực tế.
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
Tự host Fine-tuned model nhỏ (Llama 3B) giảm chi phí.
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
Phần trình bày của em đến đây là kết thúc. Em xin chân thành cảm ơn Quý Thầy Cô Hội đồng đã dành thời gian lắng nghe. Em rất mong nhận được những câu hỏi và góp ý từ Quý Thầy Cô để hoàn thiện dự án hơn nữa. Em xin cảm ơn ạ!
-->

