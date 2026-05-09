const fs = require('fs');

const content = `---
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
<div class="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FFA63D] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">L</div>
<div class="cover-logo">LexiVocab</div>
</div>

<h1 class="cover-tagline text-left max-w-3xl" v-motion :initial="{ opacity: 0, x: -30 }" :enter="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }">
Nền tảng học từ vựng <br/> <span class="gradient-text">chủ động đa môi trường</span>
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

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">TẦM NHÌN DỰ ÁN</div>
<h1 class="animate-fade-up animate-delay-1">Mục tiêu đồ án</h1>
<p class="text-gray-500 mb-10 max-w-2xl animate-fade-up animate-delay-2">Xây dựng sản phẩm Production-Ready giải quyết bài toán của người học ngoại ngữ.</p>

<div class="grid-2">
<div class="feature-card animate-fade-up animate-delay-1">
<div class="feature-icon feature-icon-orange"><div class="i-lucide-blocks text-3xl"></div></div>
<h3 class="font-bold text-[#1D2235] mb-2">Đa nền tảng</h3>
<p class="text-sm">Trải nghiệm liền mạch: Chrome Extension, Web Dashboard & Mobile App.</p>
</div>

<div class="feature-card animate-fade-up animate-delay-2">
<div class="feature-icon feature-icon-purple"><div class="i-lucide-brain-circuit text-3xl"></div></div>
<h3 class="font-bold text-[#1D2235] mb-2">Thuật toán SuperMemo-2</h3>
<p class="text-sm">Tự động tính toán chu kỳ ôn tập khoa học, cá nhân hóa.</p>
</div>

<div class="feature-card animate-fade-up animate-delay-3">
<div class="feature-icon feature-icon-blue"><div class="i-lucide-sparkles text-3xl"></div></div>
<h3 class="font-bold text-[#1D2235] mb-2">AI Sinh tạo</h3>
<p class="text-sm">Tích hợp LLM tạo ngữ cảnh thông minh, dịch thuật và giải thích từ.</p>
</div>

<div class="feature-card animate-fade-up animate-delay-4">
<div class="feature-icon feature-icon-green"><div class="i-lucide-server-cog text-3xl"></div></div>
<h3 class="font-bold text-[#1D2235] mb-2">Microservices & DevOps</h3>
<p class="text-sm">Kiến trúc Clean Architecture, deploy Docker & CI/CD tự động.</p>
</div>
</div>
</div>

<BrandFooter section="Mở đầu" />

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">BỐI CẢNH</div>
<h1 class="animate-fade-up animate-delay-1">Thực trạng thị trường</h1>
<p class="text-gray-500 mb-12 max-w-2xl animate-fade-up animate-delay-2">Các ứng dụng hiện tại (Anki, Quizlet) thiếu tính liền mạch, tạo ra khoảng trống lớn.</p>

<div class="grid-3">
<StatCard value="1.5 Tỷ" label="Người học tiếng Anh toàn cầu" icon="i-lucide-globe-2 text-3xl" delay="300" />
<StatCard value="80%" label="Gặp khó khăn với từ vựng mới" icon="i-lucide-trending-down text-3xl" delay="450" />
<StatCard value="$404B" label="Quy mô thị trường EdTech 2025" icon="i-lucide-trending-up text-3xl" delay="600" />
</div>
</div>

<BrandFooter section="Bối cảnh" />

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6">RÀO CẢN #1</div>
<div class="grid-2-1 items-center">
<div>
<h1>Context Switching</h1>
<h2 class="text-[#FF6B00] mb-6">Kẻ thù của sự tập trung</h2>
<p class="mb-4">Chuyển đổi qua lại giữa bài báo và từ điển làm phá vỡ luồng tư duy.</p>

<div class="highlight-box mt-8" v-click>
<p><strong>Mất 23 phút</strong> để não bộ lấy lại sự tập trung sau mỗi lần gián đoạn.</p>
<p class="text-xs text-gray-400 mt-2">— Gloria Mark, UC Irvine</p>
</div>
</div>

<div class="flex-center" v-click>
<div class="glass-card w-full text-center py-10 relative overflow-hidden">
<div class="absolute inset-0 bg-red-50 opacity-50"></div>
<div class="i-lucide-timer text-4xl mb-4 relative z-10 text-red-500 mx-auto"></div>
<div class="text-red-500 font-bold text-2xl mb-2 relative z-10">-40%</div>
<div class="text-sm font-semibold relative z-10">Giảm hiệu suất học tập</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Vấn đề" />

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6">RÀO CẢN #2</div>
<h1>Đường cong quên lãng</h1>
<p class="text-gray-500 mb-8 max-w-2xl">Học vẹt không ôn tập dẫn đến lãng phí công sức.</p>

<div class="flex gap-12 items-center">
<div class="flex-1">
<ForgetCurve />
</div>

<div class="w-1/3">
<div class="space-y-4">
<div class="metric-row" v-click>
<div class="metric-value">60%</div>
<div class="metric-label">Quên sau 1 giờ</div>
</div>
<div class="metric-row" v-click>
<div class="metric-value">80%</div>
<div class="metric-label">Quên sau 24 giờ</div>
</div>
<div class="metric-row" v-click>
<div class="metric-value">90%</div>
<div class="metric-label">Quên sau 1 tuần</div>
</div>
</div>

<div class="mt-8 text-sm text-[#FF6B00] font-semibold bg-orange-50 p-4 rounded-lg" v-click>
"Hệ quả của vòng lặp học nhồi nhét."
</div>
</div>
</div>
</div>

<BrandFooter section="Vấn đề" />

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center text-center">
<div class="badge badge-primary mb-6 animate-fade-up">GIẢI PHÁP</div>
<h1 class="animate-fade-up animate-delay-1 mb-12">Ba Trụ Cột của LexiVocab</h1>

<div class="grid-3 relative z-10">
<PillarCard 
number="1" 
title="Bắt từ" 
enTitle="Capture"
desc="Chrome Extension bắt từ vựng trực tiếp trên web, không cần chuyển tab."
delay="200" 
/>
<PillarCard 
number="2" 
title="Nhớ lâu" 
enTitle="Remember"
desc="Thuật toán SuperMemo-2 tự động tính toán chu kỳ ôn tập khoa học."
delay="400" 
/>
<PillarCard 
number="3" 
title="Hiểu sâu" 
enTitle="Understand"
desc="AI sinh tạo ngữ cảnh thông minh, tạo ví dụ thực tế và kể chuyện."
delay="600" 
/>
</div>

<div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
<div class="w-[600px] h-[600px] bg-gradient-to-tr from-[#FF6B00] to-transparent rounded-full blur-3xl"></div>
</div>
</div>

<BrandFooter section="Giải pháp" />

---
transition: view-transition
---

<SectionDivider 
number="02" 
title="Hệ Sinh Thái 4 Mảnh Ghép" 
desc="Kiến trúc Hub & Spoke kết nối đa nền tảng, bao phủ 100% không gian thiết bị." 
/>

---
transition: fade
---

<div class="h-full flex flex-col justify-center text-center">
<div class="badge badge-primary mb-4 animate-fade-up">ARCHITECTURE</div>
<h1 class="animate-fade-up animate-delay-1 mb-8">Kiến trúc Hub & Spoke</h1>

<div class="flex-center animate-fade-up animate-delay-2 h-[380px]">
<HubSpoke />
</div>

<div class="mt-8 text-sm text-gray-500 max-w-2xl mx-auto animate-fade-up animate-delay-3" v-click>
<strong>Nguyên lý:</strong> Mọi client xoay quanh một Core API duy nhất. Dữ liệu đồng bộ realtime đảm bảo trải nghiệm liền mạch.
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">CLIENT 1</div>
<div class="grid-2 gap-12 items-center">
<div>
<h1 class="animate-fade-up animate-delay-1">Chrome Extension</h1>
<h2 class="text-[#FF6B00] mb-6 animate-fade-up animate-delay-2">Công cụ "Bắt từ" tức thì</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-sm">Tra từ và lưu trữ mà không cần rời khỏi trang web. Tối đa hóa sự tập trung.</p>

<div class="space-y-4 animate-fade-up animate-delay-4 text-sm">
<div class="flex gap-3 items-start">
<div class="text-[#FF6B00] font-bold">01</div>
<div><strong>Manifest V3:</strong> Chuẩn bảo mật mới nhất của Chrome.</div>
</div>
<div class="flex gap-3 items-start">
<div class="text-[#FF6B00] font-bold">02</div>
<div><strong>Shadow DOM:</strong> Cô lập hoàn toàn UI popup khỏi CSS của website hiện tại, chống vỡ layout.</div>
</div>
<div class="flex gap-3 items-start">
<div class="text-[#FF6B00] font-bold">03</div>
<div><strong>Service Worker:</strong> Tối ưu RAM, chỉ hoạt động khi gọi API background.</div>
</div>
</div>
</div>

<div class="relative animate-fade-up animate-delay-3 h-[400px]">
<div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 shadow-xl overflow-hidden flex flex-col">
<!-- Browser header -->
<div class="h-8 bg-gray-200 flex items-center px-3 gap-1.5 border-b border-gray-300">
<div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
<div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
<div class="mx-auto h-4 w-48 bg-white/50 rounded text-[9px] text-center leading-4 text-gray-500 font-mono">nytimes.com/article</div>
</div>
<!-- Browser content -->
<div class="p-6 text-xs text-gray-400 leading-relaxed relative">
The <span class="bg-blue-100 text-blue-800 px-1 rounded select-none cursor-pointer">serendipity</span> of the moment was not lost on the researchers.
<br/>
<div class="w-full h-2 bg-gray-200 rounded mt-4"></div>
<div class="w-3/4 h-2 bg-gray-200 rounded mt-2"></div>
<div class="w-5/6 h-2 bg-gray-200 rounded mt-2"></div>

<!-- Extension Popup Simulation -->
<div class="absolute top-12 left-20 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden" v-motion :initial="{ opacity: 0, y: 10, scale: 0.95 }" :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: 1200, type: 'spring' } }">
<div class="bg-[#FF6B00] text-white px-4 py-2 flex justify-between items-center">
<span class="font-bold text-sm">serendipity</span>
<span class="text-[10px] bg-white/20 px-2 py-0.5 rounded">NOUN</span>
</div>
<div class="p-4">
<div class="text-xs text-gray-600 mb-3">Sự tình cờ may mắn, khám phá ra thứ có giá trị khi không chủ đích tìm kiếm.</div>
<button class="w-full bg-[#1D2235] text-white text-xs py-2 rounded-lg font-bold">Save to LexiVocab</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">CLIENT 2</div>
<div class="grid-1-2 gap-12 items-center">

<div class="relative animate-fade-up animate-delay-2 h-[450px] flex justify-center">
<!-- Phone Mockup -->
<div class="w-[220px] h-[450px] bg-black rounded-[30px] p-2 shadow-2xl relative overflow-hidden ring-4 ring-gray-100">
<div class="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-b-xl w-32 mx-auto"></div>
<div class="w-full h-full bg-[#F6F1EA] rounded-[22px] overflow-hidden flex flex-col">
<div class="h-16 bg-white flex justify-between items-end px-4 pb-3 border-b border-gray-100">
<div class="font-bold text-sm text-[#1D2235]">Review</div>
<div class="text-[#FF6B00] font-bold text-sm">24 thẻ</div>
</div>
<div class="flex-1 p-4 flex items-center justify-center relative">
<!-- Flashcard Stack -->
<div class="w-full aspect-[3/4] bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center p-4 text-center absolute z-10" v-motion :initial="{ rotate: 0 }" :enter="{ rotate: -4, x: -10, transition: { delay: 1500 } }">
<div class="text-xs text-gray-400 uppercase tracking-widest mb-4">NOUN</div>
<div class="text-2xl font-bold text-[#1D2235] font-serif">advocacy</div>
</div>
<div class="w-full aspect-[3/4] bg-white rounded-xl shadow border border-gray-100 absolute scale-95 translate-y-3 z-0"></div>
</div>
<div class="h-20 bg-white border-t border-gray-100 flex justify-around items-center px-2">
<div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-xs">HARD</div>
<div class="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 font-bold text-xs">EASY</div>
</div>
</div>
</div>

<!-- Widget Callout -->
<div class="absolute -right-8 top-1/4 bg-white shadow-xl rounded-xl p-3 border border-gray-100 w-40" v-motion :initial="{ opacity: 0, x: 20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 800 } }">
<div class="text-[10px] font-bold text-[#FF6B00] mb-1 uppercase">Android Widget</div>
<div class="text-xs text-gray-600 leading-tight">Chạy nền bằng Headless JS, hiển thị thẻ ngay trên màn hình chờ.</div>
</div>
</div>

<div>
<h1 class="animate-fade-up animate-delay-1">Mobile App & Widget</h1>
<h2 class="text-[#FF6B00] mb-6 animate-fade-up animate-delay-2">Học mọi lúc, mọi nơi</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-sm">Ứng dụng đa nền tảng tối ưu trải nghiệm vuốt (swipe) thẻ Flashcard.</p>

<div class="space-y-4 animate-fade-up animate-delay-4 text-sm">
<div class="flex gap-3 items-center">
<div class="i-lucide-smartphone text-[#FF6B00] text-xl"></div>
<div><strong>React Native + Expo:</strong> UI mượt mà bằng Reanimated 3 trên 1 codebase.</div>
</div>
<div class="flex gap-3 items-center">
<div class="i-lucide-lock text-[#FF6B00] text-xl"></div>
<div><strong>SecureStore:</strong> Lưu JWT Token mã hóa trong Keychain của thiết bị.</div>
</div>
<div class="flex gap-3 items-center">
<div class="i-lucide-refresh-cw text-[#FF6B00] text-xl"></div>
<div><strong>Real-time Sync:</strong> Luôn đồng bộ trạng thái thẻ học với Cloud.</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">CLIENT 3</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Web Dashboard</h1>
<p class="text-gray-500 mb-8 max-w-2xl animate-fade-up animate-delay-2">Next.js 14 App Router với Server Components tối ưu SEO và Analytics.</p>

<div class="grid-2 gap-8 items-center">
<div class="space-y-6 animate-fade-up animate-delay-3">
<div class="flex gap-4 items-start">
<div class="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0"><div class="i-lucide-bar-chart-3 text-xl"></div></div>
<div>
<h3 class="text-[#1D2235] font-bold text-sm mb-1">Analytics Reports</h3>
<p class="text-xs text-gray-500 leading-relaxed">Sử dụng Recharts trực quan hóa: Tỷ lệ ghi nhớ, Streak days, Heatmap.</p>
</div>
</div>

<div class="flex gap-4 items-start">
<div class="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0"><div class="i-lucide-credit-card text-xl"></div></div>
<div>
<h3 class="text-[#1D2235] font-bold text-sm mb-1">Thanh toán tự động</h3>
<p class="text-xs text-gray-500 leading-relaxed">Tích hợp Webhook SePay chống duplicate events bằng Idempotency.</p>
</div>
</div>

<div class="flex gap-4 items-start">
<div class="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0"><div class="i-lucide-globe text-xl"></div></div>
<div>
<h3 class="text-[#1D2235] font-bold text-sm mb-1">Đa ngôn ngữ (i18n)</h3>
<p class="text-xs text-gray-500 leading-relaxed">Hỗ trợ 4 ngôn ngữ UI, mở rộng quy mô quốc tế dễ dàng.</p>
</div>
</div>
</div>

<div class="relative animate-fade-up animate-delay-4">
<div class="glass-card p-1 shadow-2xl relative z-10 overflow-hidden border border-gray-200">
<div class="bg-[#FAFAFA] rounded-xl overflow-hidden aspect-video flex">
<div class="w-1/4 bg-white border-r border-gray-200 p-4 flex flex-col gap-3">
<div class="w-full h-6 bg-orange-100 rounded mb-4"></div>
<div class="w-3/4 h-3 bg-gray-200 rounded"></div>
<div class="w-2/3 h-3 bg-gray-200 rounded"></div>
<div class="w-5/6 h-3 bg-gray-200 rounded"></div>
</div>
<div class="flex-1 p-6 flex flex-col gap-4">
<div class="w-1/3 h-6 bg-gray-200 rounded"></div>
<div class="flex gap-4">
<div class="flex-1 h-20 bg-white border border-gray-200 rounded-lg p-3">
<div class="w-8 h-8 bg-orange-100 rounded-full mb-2"></div>
<div class="w-1/2 h-4 bg-gray-200 rounded"></div>
</div>
<div class="flex-1 h-20 bg-white border border-gray-200 rounded-lg p-3">
<div class="w-8 h-8 bg-blue-100 rounded-full mb-2"></div>
<div class="w-1/2 h-4 bg-gray-200 rounded"></div>
</div>
<div class="flex-1 h-20 bg-white border border-gray-200 rounded-lg p-3">
<div class="w-8 h-8 bg-green-100 rounded-full mb-2"></div>
<div class="w-1/2 h-4 bg-gray-200 rounded"></div>
</div>
</div>
<div class="w-full flex-1 bg-white border border-gray-200 rounded-lg"></div>
</div>
</div>
</div>
<div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
</div>
</div>
</div>

<BrandFooter section="Hệ sinh thái" />

---
transition: view-transition
---

<SectionDivider 
number="03" 
title="Kiến trúc Backend & Bảo mật" 
desc="Clean Architecture, CQRS, và cơ chế xác thực kép đảm bảo hiệu năng cốt lõi." 
/>

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">ARCHITECTURE</div>
<div class="grid-2 gap-12 items-center">
<div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Clean Architecture</h1>
<h2 class="text-[#FF6B00] mb-6 animate-fade-up animate-delay-2">Core API .NET 10</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-sm">Tách biệt logic cốt lõi khỏi framework và cơ sở dữ liệu.</p>

<div class="space-y-4 animate-fade-up animate-delay-4 text-sm mt-8">
<div class="highlight-box">
<p><strong>Dependency Rule:</strong> Các dependency chỉ được hướng vào trong. Domain Layer ở trung tâm chứa business logic thuần túy.</p>
</div>
<p class="text-gray-500 text-xs px-2 flex items-center gap-2"><div class="i-lucide-lightbulb text-yellow-500"></div> Dễ dàng mở rộng, thay đổi Database mà không cần sửa Core Logic.</p>
</div>
</div>

<div class="flex-center h-[400px]">
<LayerDiagram />
</div>
</div>
</div>

<BrandFooter section="Backend" />

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">PATTERN</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">CQRS</h1>
<p class="text-gray-500 mb-8 max-w-2xl animate-fade-up animate-delay-2">Phân tách rõ ràng thao tác Ghi và Đọc để tối ưu hóa riêng biệt.</p>

<div class="grid-2 gap-8 items-center animate-fade-up animate-delay-3">
<!-- Command Side -->
<div class="glass-card border-l-4 border-l-[#FF6B00]">
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-2">
<div class="i-lucide-pen-tool text-xl text-[#FF6B00]"></div> Command (Ghi)
</h3>
<ul class="text-sm space-y-2 mb-4 text-gray-600 font-mono">
<li>CreateFlashcardCommand</li>
<li>UpdateReviewResultCommand</li>
</ul>
<div class="text-xs text-[#FF6B00] bg-orange-50 p-2 rounded">
Thực thi validation phức tạp. Ghi vào Primary DB.
</div>
</div>

<!-- Query Side -->
<div class="glass-card border-l-4 border-l-[#3B82F6]">
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-2">
<div class="i-lucide-search text-xl text-[#3B82F6]"></div> Query (Đọc)
</h3>
<ul class="text-sm space-y-2 mb-4 text-gray-600 font-mono">
<li>GetDueFlashcardsQuery</li>
<li>GetUserStatisticsQuery</li>
</ul>
<div class="text-xs text-blue-600 bg-blue-50 p-2 rounded">
Tối ưu tốc độ đọc, không side-effects. Có thể scale Read Replica.
</div>
</div>
</div>
</div>

<BrandFooter section="Backend" />

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">MEDIATR</div>
<div class="grid-2 gap-12 items-center">
<div>
<h1 class="animate-fade-up animate-delay-1 mb-2">MediatR & Pipeline</h1>
<h2 class="text-[#FF6B00] mb-6 animate-fade-up animate-delay-2">Xử lý Cross-cutting Concerns</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-sm">Điều phối Command/Query đến đúng Handler tương ứng.</p>

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

\`\`\`mermaid
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
\`\`\`

</div>
</div>
</div>

<BrandFooter section="Backend" />

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">BẢO MẬT</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Stateful Identity</h1>
<p class="text-gray-500 mb-12 max-w-2xl animate-fade-up animate-delay-2">Cơ chế xác thực kép chống tấn công XSS hiệu quả, UX liền mạch.</p>

<div class="flex justify-center animate-fade-up animate-delay-3">
<TokenFlow />
</div>
</div>

<BrandFooter section="Bảo mật" />

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">DATA LAYER</div>
<div class="grid-1-2 gap-12 items-center">

<div class="animate-fade-up animate-delay-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-sm">

\`\`\`mermaid
erDiagram
User ||--o{ UserVocabulary : learns
User ||--o{ Payment : makes
User ||--o| Subscription : has

UserVocabulary ||--o{ ReviewLog : tracks
UserVocabulary {
uuid Id
uuid UserId
string Word
int EF
int Interval
datetime NextReview
}
\`\`\`

</div>

<div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Database Design</h1>
<h2 class="text-[#FF6B00] mb-6 animate-fade-up animate-delay-2">PostgreSQL & EF Core 9</h2>
<p class="mb-6 animate-fade-up animate-delay-3 text-sm">Thiết kế schema chuẩn hóa với Code First Migration.</p>

<div class="space-y-4 animate-fade-up animate-delay-4 text-sm">
<div class="flex gap-3 items-start">
<div class="i-logos-postgresql text-xl mt-[-2px]"></div>
<div><strong>PostgreSQL:</strong> Tận dụng sức mạnh xử lý JSONB và Full-text search.</div>
</div>
<div class="flex gap-3 items-start">
<div class="i-logos-dotnet text-xl mt-[-2px]"></div>
<div><strong>EF Core 9:</strong> ORM mạnh mẽ nhất hệ sinh thái .NET.</div>
</div>
<div class="flex gap-3 items-start">
<div class="i-lucide-trash-2 text-[#FF6B00] text-xl mt-[-2px]"></div>
<div><strong>Soft Delete:</strong> Dữ liệu không bị xóa vật lý (IsDeleted cờ). Đảm bảo toàn vẹn dữ liệu.</div>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Backend" />

---
transition: view-transition
---

<SectionDivider 
number="04" 
title="Use-Cases & Xử lý tải" 
desc="Thuật toán lõi, tối ưu truy vấn Database, và kỹ thuật Streaming AI." 
/>

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">CORE ALGORITHM</div>
<div class="grid-2-1 gap-12 items-center">
<div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Thuật toán SuperMemo-2</h1>
<h2 class="text-[#FF6B00] mb-6 animate-fade-up animate-delay-2">Trái tim của hệ sinh thái</h2>
<p class="mb-4 animate-fade-up animate-delay-3 text-sm">Tính toán thời điểm hoàn hảo để ôn tập trước khi não bộ kịp quên.</p>

<div class="formula-box mb-6 animate-fade-up animate-delay-4">
EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))<br/>
<span class="text-xs text-gray-400 mt-2 block">I(n) = I(n-1) * EF</span>
</div>

<div class="grid-2 text-sm animate-fade-up animate-delay-4">
<div class="bg-red-50 p-3 rounded border border-red-100">
<div class="font-bold text-red-600 mb-1">Khó (0-2)</div>
<div class="text-gray-600 text-xs">Ôn sau: 1-3 ngày</div>
</div>
<div class="bg-green-50 p-3 rounded border border-green-100">
<div class="font-bold text-green-600 mb-1">Dễ (3-5)</div>
<div class="text-gray-600 text-xs">Ôn sau: 1-4 tháng</div>
</div>
</div>
</div>

<div>
<div class="glass-card">
<h3 class="font-bold text-center mb-6">Mô phỏng chu kỳ</h3>
<TimelineFlow />

<div class="mt-8 border-t border-gray-100 pt-4" v-click>
<div class="text-[#FF6B00] font-bold text-sm mb-1 flex items-center gap-2"><div class="i-lucide-wand-2"></div> Fuzz Factor (Cải tiến)</div>
<p class="text-xs text-gray-500">Tránh hiện tượng Review Hell (hàng loạt thẻ dồn lại một ngày).</p>
</div>
</div>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />

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

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">REALTIME AI</div>
<div class="grid-2 gap-12 items-center">
<div>
<h1 class="animate-fade-up animate-delay-1 mb-2">AI Streaming (SSE)</h1>
<h2 class="text-[#FF6B00] mb-6 animate-fade-up animate-delay-2">Trải nghiệm Zero-delay</h2>
<p class="mb-4 animate-fade-up animate-delay-3 text-sm">Server-Sent Events đẩy dữ liệu text ngay lập tức, không bắt user chờ đợi 5s.</p>

<div class="bg-white rounded-lg p-4 border border-gray-200 shadow-sm animate-fade-up animate-delay-4 mt-6">
<table class="compare-table">
<thead>
<tr>
<th>Tiêu chí</th>
<th>WebSockets</th>
<th>SSE (LexiVocab)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Giao tiếp</td>
<td>2 chiều (Duplex)</td>
<td><strong class="text-[#FF6B00] flex items-center gap-2"><div class="i-lucide-arrow-right"></div> 1 chiều (Server → Client)</strong></td>
</tr>
<tr>
<td>Giao thức</td>
<td>Custom (ws://)</td>
<td><strong class="text-[#FF6B00]">HTTP thuần</strong></td>
</tr>
<tr>
<td>Tài nguyên</td>
<td>Nặng (Handshake)</td>
<td><strong class="text-[#FF6B00]">Nhẹ, tiết kiệm</strong></td>
</tr>
</tbody>
</table>
</div>
</div>

<div class="flex-center h-[350px] animate-fade-up animate-delay-3 relative">
<div class="absolute inset-0 bg-gradient-to-tr from-orange-50 to-transparent rounded-2xl z-0"></div>
<div class="relative z-10 w-full">
<StreamingText text='"Serendipity" — Sự tình cờ may mắn. Ví dụ, Alexander Fleming phát hiện ra Penicillin là một serendipity vĩ đại.' />
</div>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">GENERATIVE AI</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Tích hợp LLM & Prompting</h1>
<p class="text-gray-500 mb-8 max-w-2xl animate-fade-up animate-delay-2">Kiến trúc AI hỗ trợ GPT-4, Claude, và Gemini qua Factory Pattern.</p>

<div class="grid-3 gap-6 animate-fade-up animate-delay-3">
<div class="bg-white p-5 rounded-xl border border-gray-200">
<div class="i-lucide-bot text-3xl mb-3 text-purple-600"></div>
<h3 class="font-bold text-sm mb-2">Prompt Engineering</h3>
<p class="text-xs text-gray-500">Few-shot prompting. Set <code>Temperature=0.7</code> cân bằng sáng tạo & chính xác.</p>
</div>

<div class="bg-white p-5 rounded-xl border border-gray-200">
<div class="i-lucide-puzzle text-3xl mb-3 text-blue-600"></div>
<h3 class="font-bold text-sm mb-2">Đa dạng Use-cases</h3>
<p class="text-xs text-gray-500">Giải nghĩa theo ngữ cảnh trang web, phân tích cấu trúc ngữ pháp phức tạp.</p>
</div>

<div class="bg-white p-5 rounded-xl border border-[#FF6B00] relative overflow-hidden shadow-sm">
<div class="absolute top-0 right-0 bg-[#FF6B00] w-12 h-12 rounded-bl-full flex items-start justify-end p-2 text-white"><div class="i-lucide-coins text-lg"></div></div>
<div class="i-lucide-zap text-3xl mb-3 text-[#FF6B00]"></div>
<h3 class="font-bold text-sm mb-2">Cost Optimization</h3>
<p class="text-xs text-gray-500">Cache Redis các từ phổ biến. Batch API requests tối ưu Token.</p>
</div>
</div>
</div>

<BrandFooter section="Use Cases" />

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">PAYMENT & JOBS</div>
<div class="grid-2 gap-12 items-center">

<div>
<h1 class="animate-fade-up animate-delay-1 mb-2">SePay & Idempotency</h1>
<p class="mb-4 animate-fade-up animate-delay-2 text-sm text-gray-600">Xử lý webhook thanh toán an toàn, chống Duplicate Transaction.</p>

<div class="bg-orange-50 p-4 rounded-lg border border-orange-200 animate-fade-up animate-delay-3 mb-8">
<h3 class="font-bold text-sm text-[#FF6B00] mb-2 flex items-center gap-2"><div class="i-lucide-shield-check"></div> Idempotency Pattern</h3>
<p class="text-xs text-gray-700 leading-relaxed">
Đánh <code>UNIQUE KEY</code> cột <code>TransactionId</code>. Khi SePay gửi trùng webhook do timeout, DB văng lỗi <code>23505</code>. <strong>Tuyệt đối không cộng VIP 2 lần.</strong>
</p>
</div>

<h2 class="animate-fade-up animate-delay-3 text-lg font-bold mb-2 flex items-center gap-2"><div class="i-lucide-clock"></div> Hangfire Background Jobs</h2>
<ul class="text-xs text-gray-600 space-y-2 animate-fade-up animate-delay-4 pl-4 list-disc">
<li><strong>SendReviewReminder:</strong> Push notification ôn bài.</li>
<li><strong>ProcessExpiredVIP:</strong> Hạ cấp account hết hạn.</li>
</ul>
</div>

<div class="animate-fade-up animate-delay-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-sm flex justify-center">

\`\`\`mermaid
stateDiagram-v2
[*] --> Pending : QR Generated
Pending --> Processing : Webhook Received
Processing --> Completed : Valid Signature
Processing --> Failed : Invalid Data
Completed --> [*] : Grant VIP
Failed --> [*] : Alert Admin
\`\`\`

</div>
</div>
</div>

<BrandFooter section="Use Cases" />

---
transition: view-transition
---

<SectionDivider 
number="05" 
title="Triển khai & DevOps" 
desc="Tối ưu Docker Image, thiết lập CI/CD Pipeline và triển khai trên hạ tầng Cloud." 
/>

---
transition: fade
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">DEPLOYMENT</div>
<h1 class="animate-fade-up animate-delay-1 mb-2">Docker & Railway Ecosystem</h1>
<p class="text-gray-500 mb-8 max-w-2xl animate-fade-up animate-delay-2">Kiến trúc triển khai tự động hóa cao, tối ưu dung lượng.</p>

<div class="grid-2 gap-8 items-center animate-fade-up animate-delay-3">
<div class="glass-card">
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-2">
<div class="i-logos-docker-icon text-2xl"></div> Multi-stage Docker
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
<h3 class="font-bold text-[#1D2235] mb-4 flex items-center gap-2">
<div class="i-lucide-train text-2xl text-purple-600"></div> Railway PaaS
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
transition: view-transition
---

<SectionDivider 
number="06" 
title="Live Demo" 
desc="Trải nghiệm thực tế hệ sinh thái LexiVocab qua 4 kịch bản sử dụng." 
/>

---
transition: slide-up
---

<div class="h-full flex flex-col justify-center">
<div class="badge badge-primary mb-6 animate-fade-up">DEMONSTRATION</div>
<h1 class="animate-fade-up animate-delay-1 mb-8">Kịch bản Demo</h1>

<div class="grid-2 gap-6 animate-fade-up animate-delay-2">
<!-- Demo 1 -->
<div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex gap-4">
<div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl shrink-0">1</div>
<div>
<h3 class="font-bold text-[#1D2235] text-sm mb-1">Bắt từ vựng tức thì</h3>
<p class="text-xs text-gray-500">Chrome Extension: Bôi đen từ khó trên web và lưu vào hệ thống qua Shadow DOM Popup.</p>
</div>
</div>

<!-- Demo 2 -->
<div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex gap-4">
<div class="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xl shrink-0">2</div>
<div>
<h3 class="font-bold text-[#1D2235] text-sm mb-1">Ôn tập với SuperMemo-2</h3>
<p class="text-xs text-gray-500">Mobile App: Vuốt flashcard, xem hệ thống tính toán Next Review Date real-time.</p>
</div>
</div>

<!-- Demo 3 -->
<div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex gap-4">
<div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl shrink-0">3</div>
<div>
<h3 class="font-bold text-[#1D2235] text-sm mb-1">AI Streaming (SSE)</h3>
<p class="text-xs text-gray-500">Tính năng "Explain with AI": Trải nghiệm tốc độ streaming từng token như ChatGPT.</p>
</div>
</div>

<!-- Demo 4 -->
<div class="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex gap-4">
<div class="w-12 h-12 bg-orange-100 text-[#FF6B00] rounded-lg flex items-center justify-center text-xl shrink-0">4</div>
<div>
<h3 class="font-bold text-[#1D2235] text-sm mb-1">Widget & Dashboard</h3>
<p class="text-xs text-gray-500">Android Widget nền chờ, theo dõi Analytics Chart và i18n trên Web Dashboard.</p>
</div>
</div>
</div>

<div class="mt-8 text-center animate-fade-up animate-delay-3" v-click>
<div class="inline-flex items-center gap-2 bg-[#1D2235] text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
<div class="i-lucide-radio text-red-500 animate-pulse text-xl"></div> Bắt đầu trình diễn
</div>
</div>
</div>

<BrandFooter section="Live Demo" />

---
transition: view-transition
---

<SectionDivider 
number="07" 
title="Kết Luận" 
desc="Tổng kết đóng góp, định hướng phát triển và phần hỏi đáp Hội đồng." 
/>

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
<li>Docker & CI/CD Pipeline.</li>
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

---
layout: center
class: text-center
---

<div class="thanks-slide h-full w-full absolute inset-0">
<div class="relative z-10 flex flex-col items-center justify-center h-full animate-fade-up">
<div class="w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#FFA63D] rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-2xl mb-8">L</div>

<h1 class="mb-4">Xin trân trọng cảm ơn!</h1>
<p class="text-gray-400 max-w-lg mb-12">Cảm ơn Quý Thầy Cô Hội đồng đã dành thời gian lắng nghe.</p>

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
`;

fs.writeFileSync('e:/lexivocab/slides.md', content, 'utf8');
console.log('Replaced all emojis with UnoCSS professional icons (lucide/logos/ph)');
