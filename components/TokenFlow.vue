<template>
  <div class="token-flow-container max-w-lg w-full relative">
    <div class="flex flex-col gap-6">
      
      <!-- Access Token -->
      <div class="token-box border-l-4 border-l-blue-500" v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 300 } }">
        <div class="flex justify-between items-center mb-2">
          <div class="token-header m-0 text-blue-700">Access Token</div>
          <div class="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono">15 phút</div>
        </div>
        <div class="token-detail">
          <ul class="text-xs space-y-1 list-disc pl-4 text-gray-600">
            <li>Lưu trong <strong>RAM (Memory)</strong> của ứng dụng</li>
            <li>Đính kèm Header <code>Authorization: Bearer</code> mọi request</li>
            <li>Mã hóa JWT với thuật toán bất đối xứng <strong>RS256</strong></li>
          </ul>
        </div>
      </div>
      
      <!-- Refresh Token -->
      <div class="token-box border-l-4 border-l-green-500" v-motion :initial="{ opacity: 0, x: -20 }" :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }">
        <div class="flex justify-between items-center mb-2">
          <div class="token-header m-0 text-green-700">Refresh Token</div>
          <div class="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-mono">7 ngày</div>
        </div>
        <div class="token-detail">
          <ul class="text-xs space-y-1 list-disc pl-4 text-gray-600">
            <li>Lưu trong <strong>HttpOnly Cookie</strong> (Trình duyệt)</li>
            <li>JavaScript không thể truy cập → <strong>Chống tấn công XSS</strong></li>
            <li>Tự động gia hạn Access Token khi hết hạn</li>
          </ul>
        </div>
      </div>
      
    </div>
    
    <!-- Flow visual -->
    <div class="absolute right-[-80px] top-1/2 -translate-y-1/2 w-48 text-center" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1000 } }">
      <div class="text-xl text-[#FF6B00] mb-2">🔄</div>
      <div class="text-[10px] font-bold text-[#FF6B00] bg-orange-50 p-2 rounded border border-orange-100">
        Silent Refresh Flow
      </div>
      <div class="text-[9px] text-gray-500 mt-2">
        Trải nghiệm không gián đoạn.<br>User không cần đăng nhập lại.
      </div>
    </div>
  </div>
</template>
