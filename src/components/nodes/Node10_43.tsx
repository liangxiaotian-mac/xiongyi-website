import styles from "./Node10_43.module.css";

const assets = {
  bgLayer: "https://www.figma.com/api/mcp/asset/c35ddb92-784f-406f-950a-b6d3c2609519",
  bgSwirl: "https://www.figma.com/api/mcp/asset/1aaf0d5b-691b-4690-b321-bb44985df23f",
  bgNoise: "https://www.figma.com/api/mcp/asset/bb4156cc-6d4b-4c96-b5d8-28faf7a70fc3",
  heroFigure: "https://www.figma.com/api/mcp/asset/757f5d7e-c74d-4f07-85f5-aeb31e19e347",
  heroMask: "https://www.figma.com/api/mcp/asset/cde35d12-8dad-4ef7-8f7e-ea877a48b150",
  heroGlow: "https://www.figma.com/api/mcp/asset/caa1798e-35f5-4302-b530-1b81e442bf1d",
  cardMobile: "https://www.figma.com/api/mcp/asset/36f66474-24d0-451b-a191-e63fbb1f8dd4",
  cardWeb: "https://www.figma.com/api/mcp/asset/ce13d442-a949-4fc0-89a5-f563d3b5a73a",
  cardData: "https://www.figma.com/api/mcp/asset/b9132654-ee9f-4ef0-9b81-637e011c0919",
  cardAigc: "https://www.figma.com/api/mcp/asset/bf1fe0a2-fdc9-4bcc-8f3e-29120235cf25",
  orb: "https://www.figma.com/api/mcp/asset/0fe0e587-7a5e-4ff5-a0d1-b7a355fc2db8",
};

const cards = [
  {
    index: "1",
    side: "mobile side",
    title: "移动端",
    lines: ["听客社交APP", "商城APP+小程序", "爱满智云", "代数零"],
    image: assets.cardMobile,
    tone: "mobile",
  },
  {
    index: "2",
    side: "web side",
    title: "WEB端",
    lines: ["OA陀螺匠", "账户通三端系统", "企业官网"],
    image: assets.cardWeb,
    tone: "web",
  },
  {
    index: "3",
    side: "data system",
    title: "数据大屏",
    lines: ["数据大屏"],
    image: assets.cardData,
    tone: "data",
  },
  {
    index: "4",
    side: "artificial",
    title: "AIGC",
    lines: ["抖音小游戏(AI协助)", "其他(AI协助)"],
    image: assets.cardAigc,
    tone: "aigc",
  },
];

export default function Node10_43() {
  return (
    <main className={styles.figmaPage}>
      <section className={styles.figmaHero}>
        <div className={styles.heroBackground}>
          <img src={assets.bgLayer} alt="" className={`${styles.heroLayer} ${styles.heroLayerBlur}`} />
          <img src={assets.bgSwirl} alt="" className={`${styles.heroLayer} ${styles.heroLayerSwirl}`} />
          <img src={assets.bgNoise} alt="" className={`${styles.heroLayer} ${styles.heroLayerNoise}`} />
          <div className={styles.heroVignette} />
        </div>

        <div className={styles.heroTopbar}>
          <span className={styles.heroTopbarMark}>Xy</span>
          <span className={styles.heroTopbarTitle}>{"{ UI 设计师 }"}</span>
          <img src={assets.orb} alt="" className={styles.heroTopbarOrb} />
          <span className={styles.heroTopbarYear}>2026 个人站</span>
        </div>

        <div className={styles.heroCopy}>
          <p className={styles.heroCopyCatalog}>作品展示 · 目录</p>
          <div className={styles.heroCopyHeading}>
            <span>UI DESIGN</span>
            <span>PORTFOLIO</span>
          </div>
          <div className={styles.heroCopyReflection}>
            <span>UI DESIGN</span>
            <span>PORTFOLIO</span>
          </div>
          <p className={styles.heroCopyRight}>USER INTERFACE</p>
        </div>

        <div className={styles.heroMainVisual}>
          <img src={assets.heroGlow} alt="" className={styles.heroMainVisualGlow} />
          <img src={assets.heroFigure} alt="" className={styles.heroMainVisualFigure} />
          <img src={assets.heroMask} alt="" className={styles.heroMainVisualMask} />
        </div>

        <div className={styles.worksPanel}>
          <div className={styles.worksPanelBg} />
          {cards.map((card, idx) => (
            <article
              className={`${styles.workCard} ${styles[`workCard${card.tone[0].toUpperCase() + card.tone.slice(1)}`]} ${idx > 1 ? styles.workCardLower : ""}`}
              key={card.title}
            >
              <p className={styles.workCardSide}>{card.side}</p>
              <img src={card.image} alt="" className={styles.workCardImage} />
              <p className={styles.workCardIndex}>{card.index}</p>
              <span className={styles.workCardArrow}>↗</span>
              <h3>{card.title}</h3>
              <ul>
                {card.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
