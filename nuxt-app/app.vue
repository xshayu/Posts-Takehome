<template>
  <nav class="px-4 py-2 flex items-center justify-start gap-4 border-b border-slate-200 sticky top-0 bg-white">
    <NuxtLink to="/" class="link">Home</NuxtLink>
    <NuxtLink to="/posts" class="link">Posts</NuxtLink>
  </nav>
  <div>
    <NuxtPage />
  </div>
  <footer class="px-4 py-2 flex items-center justify-end gap-4 border-t border-slate-200 fixed bottom-0 w-full bg-white">
    <a href="https://www.linkedin.com/in/ayush-w-xylar/" target="_blank" rel="author">
      LinkedIn
    </a>
    <a href="https://github.com/xylarshayu" target="_blank" rel="external">
      GitHub (Main one)
    </a>
    <a href="https://github.com/xshayu/Posts-Takehome" target="_blank" rel="external">
      Git Repo
    </a>
  </footer>
</template>
