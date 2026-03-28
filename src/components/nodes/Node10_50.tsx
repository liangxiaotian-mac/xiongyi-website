import styles from "./Node10_50.module.css";

const assets = {
  bgGlow: "https://www.figma.com/api/mcp/asset/afd20d02-850a-4dab-82f1-b65c24cb9cf3",
  heroBack: "https://www.figma.com/api/mcp/asset/a53820b6-02b1-49f0-9abc-016a58a07fed",
  heroMain: "https://www.figma.com/api/mcp/asset/35b8d653-764f-4bf1-aabf-040ef072a1a2",

  collage1: "https://www.figma.com/api/mcp/asset/bb3e31dd-a6c0-4cda-afb5-e53b33dd831c",
  collage2: "https://www.figma.com/api/mcp/asset/a1634e22-2cfb-4f69-abe1-c7e68c7b2637",
  collage3: "https://www.figma.com/api/mcp/asset/d75996fb-9350-458f-8fbd-37e8f3456d77",
  collage4: "https://www.figma.com/api/mcp/asset/9a362e60-8fa6-4c17-953c-678ab6db2ce5",
  collage5: "https://www.figma.com/api/mcp/asset/8aaaa14d-ac03-43c2-8ee7-766117b7a1d6",
  collage6: "https://www.figma.com/api/mcp/asset/5dfde9b5-3789-4a97-80cd-e805749737a1",
  collage7: "https://www.figma.com/api/mcp/asset/72c510c1-cdfa-4b47-97ef-8fd0ea035af5",
  collage8: "https://www.figma.com/api/mcp/asset/1d434d52-a310-4661-b781-de3eec58de90",
  collage9: "https://www.figma.com/api/mcp/asset/18f013a1-2e4c-4215-ba11-fe8b9ccd42b8",
  collage10: "https://www.figma.com/api/mcp/asset/caff3d78-0dc8-4d12-ae62-521832177790",
};

const cards = [
  {
    title: "要点",
    lines: ["数据大屏的设计，本质是在信息的复杂性与认知的简洁性之间寻找平衡。", "它不是数据的简单堆砌，而是通过设计让数据会说话、有温度、可决策。"],
  },
  {
    title: "一目了然",
    lines: ["3秒原则：用户3秒内理解大屏核心信息", "视觉聚焦：核心指标突出显示（大号字体/品牌色）", "信息降噪：去除装饰性元素，数据即视觉主体"],
  },
  {
    title: "层次清晰",
    lines: ["黄金圈法则：核心KPI→过程指标→维度分析，层层递进", "布局逻辑：左上到右下，重要→次要的信息流", "视觉权重：字号/色彩/位置构建清晰层级"],
  },
];

const collage = [
  assets.collage1,
  assets.collage2,
  assets.collage3,
  assets.collage4,
  assets.collage5,
  assets.collage6,
  assets.collage7,
  assets.collage8,
  assets.collage9,
  assets.collage10,
];

export default function Node10_50() {
  return (
    <section className={styles.node1050}>
      <div className={styles.hero}>
        <img src={assets.bgGlow} alt="" className={styles.heroBg} />

        <div className={styles.heroVisual}>
          <img src={assets.heroBack} alt="" className={styles.backBoard} />
          <img src={assets.heroMain} alt="华山修缮智能驾驶舱" className={styles.mainBoard} />
        </div>

        <div className={styles.heroText}>
          <h2>品牌形象的数字门户</h2>
          <div className={styles.cardList}>
            {cards.map((card) => (
              <article key={card.title} className={styles.textCard}>
                <h4>{card.title}</h4>
                <ul>
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.collageWrap}>
        <div className={styles.collageGrid}>
          {collage.map((src, idx) => (
            <img src={src} alt="" key={src} style={{ transform: `rotate(${idx % 2 === 0 ? -14 : -11}deg)` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
