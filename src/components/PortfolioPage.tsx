"use client";


const assets = {
  heroGlow: "/figma/hero-bg.png",
  heroCard1: "/figma/hero-screen-1.png",
  heroCard2: "/figma/hero-screen-2.png",
  gameGlow: "https://www.figma.com/api/mcp/asset/4ddb6f6a-8cf6-4e02-a6d8-1a49a7488339",
  game1: "https://www.figma.com/api/mcp/asset/a3c3b4be-0539-4ccf-9d59-d87ae87a1380",
  game2: "https://www.figma.com/api/mcp/asset/4f785dd4-bf29-4e0c-a25b-7daa6ee57abb",
  game3: "https://www.figma.com/api/mcp/asset/450bc644-2736-49e0-8331-37dbacfb10bd",
  portalGlow: "https://www.figma.com/api/mcp/asset/0bd9fa1d-69d9-4182-b5d3-650f0fb55da2",
  accountGlow: "https://www.figma.com/api/mcp/asset/3f46f1af-ca8c-43da-aeba-7d19b2303222",
  laptopFrame: "https://www.figma.com/api/mcp/asset/b4f2c267-b5be-4ca3-a8e5-1f81a8cfc977",
  laptopMask: "https://www.figma.com/api/mcp/asset/33e70d24-0e67-42ec-8c31-8ca42d28a657",
  laptopMaskFill: "https://www.figma.com/api/mcp/asset/f634ef7c-941c-48b6-a9ea-5abac48f4852",
  laptopScreen: "https://www.figma.com/api/mcp/asset/b4fbe4e7-dacf-4697-b7c4-9b3faafe154d",
  dashboardFrame: "https://www.figma.com/api/mcp/asset/c8a8edd0-4ea1-467f-bc6d-46886363b962",
  dashboardMask: "https://www.figma.com/api/mcp/asset/0d789ef4-529b-4d37-a7c6-1ae620c531a8",
  dashboardMaskFill: "https://www.figma.com/api/mcp/asset/968c212e-18cb-4d18-a514-6025ecd64935",
  dashboardScreen: "https://www.figma.com/api/mcp/asset/2c8bb41e-47c1-4373-8dad-931b252f69ef",
  dashboardScreenOverlay: "https://www.figma.com/api/mcp/asset/17dc607a-ddcd-435f-a9dc-69605a3c75d4",
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="section section--hero">
        <div className="section__canvas">
          <div className="hero-glow">
            <img src={assets.heroGlow} alt="" />
          </div>
          <div className="hero-gradient" />
          <div className="hero-card hero-card--primary">
            <img src={assets.heroCard1} alt="" />
          </div>
          <div className="hero-card hero-card--secondary">
            <img src={assets.heroCard2} alt="" />
          </div>
        </div>
      </section>

      <section className="section section--game">
        <div className="section__canvas">
          <div className="hero-glow">
            <img src={assets.gameGlow} alt="" />
          </div>
          <div className="hero-gradient" />
          <div className="phone-card phone-card--left">
            <img src={assets.game2} alt="" />
          </div>
          <div className="phone-card phone-card--center">
            <img src={assets.game1} alt="" />
          </div>
          <div className="phone-card phone-card--right">
            <img src={assets.game3} alt="" />
          </div>
        </div>
      </section>

      <section className="section section--portal">
        <div className="section__canvas">
          <div className="hero-glow hero-glow--portal">
            <img src={assets.portalGlow} alt="" />
          </div>
          <div className="hero-gradient" />
          <div className="portal-copy">
            <h3>品牌形象的数字门户</h3>
            <div className="portal-card">
              <p className="portal-title">要点</p>
              <p>
                数据大屏的设计，本质是在信息的复杂性与认知的简洁性之间寻找平衡。
                它不是数据的简单堆砌，而是通过设计让数据会说话、有温度、可决策。
              </p>
            </div>
            <div className="portal-card">
              <p className="portal-title">一目了然</p>
              <ul>
                <li>3秒原则：用户3秒内理解大屏核心信息</li>
                <li>视觉聚焦：核心指标突出显示（大号字体/品牌色）</li>
                <li>信息降噪：去除装饰性元素，数据即视觉主体</li>
              </ul>
            </div>
            <div className="portal-card">
              <p className="portal-title">层次清晰</p>
              <ul>
                <li>黄金圈法则：核心KPI→过程指标→维度分析，层层递进</li>
                <li>布局逻辑：左上到右下，重要→次要的信息流</li>
                <li>视觉权重：字号/色彩/位置构建清晰层级</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--account">
        <div className="section__canvas">
          <div className="hero-glow hero-glow--account">
            <img src={assets.accountGlow} alt="" />
          </div>
          <div className="hero-gradient" />
          <div className="account-copy">
            <h2>账户通</h2>
            <div className="account-section">
              <span className="account-line" />
              <h3>账户通三端</h3>
              <div className="account-card">
                <h4>账户通-商户端</h4>
                <p>提供专业的技术支持，通过稳定的产品服务满足客户高并发、高可靠性需求。</p>
              </div>
              <div className="account-card">
                <h4>账户通-运营中心</h4>
                <p>
                  获取平台聚合的海量接口（如支付、风控、OCR等）及场景解决方案，快速构建业务能力矩阵。
                </p>
              </div>
              <div className="account-card">
                <h4>账户通-合作机构</h4>
                <p>通过稳定的产品服务满足客户高并发、高可靠性需求，并提供专业的技术支持。</p>
              </div>
            </div>
            <div className="account-section">
              <span className="account-line" />
              <h3>东宝令</h3>
              <div className="account-card">
                <h4>东宝令</h4>
                <p>企业级身份安全，从登录开始守护。动态密码守护数字资产安全。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--laptop">
        <div className="section__canvas section__canvas--laptop">
          <div className="laptop-frame">
            <img src={assets.laptopFrame} alt="" />
          </div>
          <div
            className="laptop-mask"
            style={{
              maskImage: `url('${assets.laptopMask}')`,
              WebkitMaskImage: `url('${assets.laptopMask}')`,
            }}
          >
            <img src={assets.laptopMaskFill} alt="" />
          </div>
          <div
            className="laptop-screen"
            style={{
              maskImage: `url('${assets.laptopMask}')`,
              WebkitMaskImage: `url('${assets.laptopMask}')`,
            }}
          >
            <img src={assets.laptopScreen} alt="" />
          </div>
        </div>
      </section>

      <section className="section section--laptop">
        <div className="section__canvas section__canvas--laptop">
          <div className="laptop-frame">
            <img src={assets.dashboardFrame} alt="" />
          </div>
          <div
            className="laptop-mask"
            style={{
              maskImage: `url('${assets.dashboardMask}')`,
              WebkitMaskImage: `url('${assets.dashboardMask}')`,
            }}
          >
            <img src={assets.dashboardMaskFill} alt="" />
          </div>
          <div
            className="laptop-screen"
            style={{
              maskImage: `url('${assets.dashboardMask}')`,
              WebkitMaskImage: `url('${assets.dashboardMask}')`,
            }}
          >
            <img src={assets.dashboardScreen} alt="" />
            <img className="laptop-screen__overlay" src={assets.dashboardScreenOverlay} alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
