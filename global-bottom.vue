<template>
  <footer
    v-if="$nav.currentLayout !== 'cover' && $nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    class="absolute bottom-0 left-0 right-0 px-8 py-3 flex justify-between items-center"
  >
    <span class="text-[10px] text-[#807C7C] tracking-wider">COPILOT COWORK WORKSHOP 2026.3.25</span>
    <span class="text-[10px] text-[#807C7C]">{{ $nav.currentPage }} / {{ $nav.total }}</span>
  </footer>
</template>
