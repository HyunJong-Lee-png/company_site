import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true, // 정적 사이트에서는 이미지 최적화 비활성화
  },
  basePath: "/company_site", // GitHub Pages에서는 repository 이름을 설정해야 함
  assetPrefix: "/company_site", // 모든 정적 파일의 기본 경로
};

export default nextConfig;
