"use client";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__logo">熊伊</div>
        <nav className="site-header__nav">
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
      </div>
    </header>
  );
}
