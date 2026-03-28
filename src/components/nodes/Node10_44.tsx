import styles from "./Node10_44.module.css";

const assets = {
  bg: "https://www.figma.com/api/mcp/asset/6bbd511f-3107-4c45-be21-0c7d16efae30",
  glow: "https://www.figma.com/api/mcp/asset/fc1a4db5-6f93-4efe-9f86-0a158fa14117",
  topCardLeft: "https://www.figma.com/api/mcp/asset/3edd4a86-3dba-4250-87bd-c424064f715f",
  topCardRight: "https://www.figma.com/api/mcp/asset/7d3ef482-9d40-4366-9139-208a50d2474e",
  featureA: "https://www.figma.com/api/mcp/asset/0fe5411b-b9e9-48ab-b00c-e7ea8e0a165f",
  featureB: "https://www.figma.com/api/mcp/asset/a53f47c5-4b2d-4b37-b1b9-4dc45e15d39b",
  featureC: "https://www.figma.com/api/mcp/asset/f43e8776-ab38-401c-93b5-17db5ebfa7c9",
  heroPhone: "https://www.figma.com/api/mcp/asset/39598250-50bd-47f9-88e4-531911a9bf28",
  whitePanelFlow: "https://www.figma.com/api/mcp/asset/608cbe0f-93d3-4a4c-851b-cf904ec81f36",
  tagBg: "https://www.figma.com/api/mcp/asset/e6bc9800-e729-41aa-b512-e4fd64bbf1d6",
  phoneFrame: "https://www.figma.com/api/mcp/asset/5a350306-1331-4410-b975-08314089faeb",
  phoneShot: "https://www.figma.com/api/mcp/asset/f75f3042-e05b-4bc2-a6fa-e194fcb8790c",
};

const emojis = [
  "https://www.figma.com/api/mcp/asset/da751909-bd48-4acc-aad7-1ae7280cb39d",
  "https://www.figma.com/api/mcp/asset/59db2724-d62a-4708-ac98-1b9104d1a809",
  "https://www.figma.com/api/mcp/asset/baee645b-3bd7-4224-abc0-56b752252dfd",
  "https://www.figma.com/api/mcp/asset/58854441-3f68-4926-bd10-461e4cd29305",
  "https://www.figma.com/api/mcp/asset/3b9af87e-b140-4a2e-966e-953037721ecb",
  "https://www.figma.com/api/mcp/asset/738c5d4f-5341-4a28-9fe1-adb4c00ea444",
  "https://www.figma.com/api/mcp/asset/d1dfe0c9-aae5-4a65-845b-8b7a5f446fef",
  "https://www.figma.com/api/mcp/asset/5aa649d6-47ce-44c8-8df2-63e04e733cfb",
  "https://www.figma.com/api/mcp/asset/71b72ae9-ac81-420b-809c-fd108aabb8db",
  "https://www.figma.com/api/mcp/asset/72819414-cbd8-4f6f-ab0c-695d7b93836d",
  "https://www.figma.com/api/mcp/asset/e4e1a9cd-ecf7-4ff8-ad12-1a630e549ffe",
  "https://www.figma.com/api/mcp/asset/07c8b9e2-c4ee-4f3c-b317-0d365c96c1f3",
];

export default function Node10_44() {
  return (
    <section className={styles.node1044}>
      <div className={styles.hero}>
        <img src={assets.bg} alt="" className={styles.heroBg} />
        <img src={assets.glow} alt="" className={styles.heroGlow} />
        <div className={styles.heroShade} />

        <img src={assets.heroPhone} alt="听客社交 App 界面" className={styles.heroPhone} />

        <div className={styles.heroContent}>
          <h1>听客社交APP</h1>
          <p>功能区展示</p>
          <div className={styles.topCards}>
            <img src={assets.topCardLeft} alt="" />
            <img src={assets.topCardRight} alt="" />
          </div>
          <p className={styles.subTitle}>精准触达</p>
          <div className={styles.featureRow}>
            <img src={assets.featureA} alt="" />
            <img src={assets.featureB} alt="" />
            <img src={assets.featureC} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.mainPanel}>
        <img src={assets.whitePanelFlow} alt="听客社交设计稿总览" className={styles.flowImage} />

        <div className={styles.infoSection}>
          <div>
            <h2>{"{ 信息密度 · 视觉节奏的控制 ·< }"}</h2>
            <p>
              分割线弱化，依靠留白与阴影自然分层。布局顺着用户直觉操作路径组织，
              并通过轻渐变头图强化个人空间感，整体维持轻盈、可读、可浏览的节奏。
            </p>
            <div className={styles.tags}>
              <img src={assets.tagBg} alt="设计标签" />
            </div>
          </div>

          <div className={styles.phoneStack}>
            <img src={assets.phoneShot} alt="" className={styles.phoneShot} />
            <img src={assets.phoneFrame} alt="" className={styles.phoneFrame} />
          </div>
        </div>

        <div className={styles.sectionCard}>
          <h3>{"{ 私密会晤感 · 从“演进层景”到“安全措辞” ·< }"}</h3>
          <p>
            把“私密感”从文案、图层、间距到互动反馈统一在同一语气里，减少表达冲突，
            让内容浏览和关系互动在同一条情绪轨道上自然切换。
          </p>
        </div>

        <div className={styles.sectionCard}>
          <h3>{"{ 四象限社交 · 全场景社交 ·< }"}</h3>
          <p>
            动态流、好友、短视频、资讯四块能力被拆分为独立场景，再通过统一视觉骨架连接，
            既确保功能可达，也避免信息干扰。
          </p>
        </div>

        <div className={styles.emojiCard}>
          <div className={styles.emojiTitle}>{"{ 表情包 ·< }"}</div>
          <div className={styles.emojiGrid}>
            {emojis.map((src, idx) => (
              <img src={src} alt="" key={src + idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
