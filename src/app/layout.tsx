import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "熊伊 · 作品集",
  description: "品牌形象、数据大屏、企业官网与AIGC设计作品集。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
