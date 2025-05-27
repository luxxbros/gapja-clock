import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages에 배포할 저장소 이름으로 변경해주세요.
  // 예: https://<username>.github.io/my-repo/ 라면 base: '/my-repo/'
  base: '/gapja-clock/', // 여기에 실제 GitHub 저장소 이름을 입력하세요.
});
