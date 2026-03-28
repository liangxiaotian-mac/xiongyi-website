import styles from "./Node10_46.module.css";

const assets = {
  bg: "https://www.figma.com/api/mcp/asset/4694cf66-d03d-4406-b04b-e7eff94fe327",

  heroPhone: "https://www.figma.com/api/mcp/asset/2d1d663c-0d22-4a58-81f0-af25d4250f1b",
  heroGlow: "https://www.figma.com/api/mcp/asset/6a1b57c5-ccdc-4e97-a5b4-dc77344e6491",
  heroCardA: "https://www.figma.com/api/mcp/asset/f1bdc5ac-ffd4-4491-b351-bea8422fbf77",
  heroCardB: "https://www.figma.com/api/mcp/asset/94b357b5-59b3-40d5-965e-2f998f69d6d5",
  heroCardC: "https://www.figma.com/api/mcp/asset/47810c3d-2623-4bb4-9eb6-d5991b474122",

  sec1A: "https://www.figma.com/api/mcp/asset/108371cb-e678-40d4-96f1-a5c447106f2b",
  sec1B: "https://www.figma.com/api/mcp/asset/7006128e-1bed-4262-b241-c16d952e3a60",
  sec1C: "https://www.figma.com/api/mcp/asset/8df73330-4b65-4a9e-a5e4-510798e637d5",

  sec2A: "https://www.figma.com/api/mcp/asset/26d5909c-a6a0-4b1e-83c5-637f0bd05d3d",
  sec2B: "https://www.figma.com/api/mcp/asset/a1c3b421-4457-478e-9ceb-a688c92322b0",
  sec2C: "https://www.figma.com/api/mcp/asset/0220d73b-ca8f-4189-bb59-c1aff31268de",
  sec2D: "https://www.figma.com/api/mcp/asset/19287ada-e9a1-4728-8c3f-7c9b9838e50b",

  collageA: "https://www.figma.com/api/mcp/asset/018fa344-a140-4afa-822b-2aeb06f74fd8",
  collageB: "https://www.figma.com/api/mcp/asset/32feb855-6b76-464d-a006-18965aba877b",
  collageC: "https://www.figma.com/api/mcp/asset/aa59fefa-23f9-4109-a52e-d1158a218c77",
  collageD: "https://www.figma.com/api/mcp/asset/8bf8e68f-df40-4162-bb25-f4b99122f017",
  collageE: "https://www.figma.com/api/mcp/asset/04eba811-ccae-4817-8aa7-21f834c48bf7",
  collageF: "https://www.figma.com/api/mcp/asset/93f05ae2-f191-41a8-87b0-62b280a04f12",
};

const sec1Imgs = [assets.sec1A, assets.sec1B, assets.sec1C];
const sec2Imgs = [assets.sec2A, assets.sec2B, assets.sec2C, assets.sec2D];
const collageImgs = [assets.collageA, assets.collageB, assets.collageC, assets.collageD, assets.collageE, assets.collageF];

function BlockTitle({ text }: { text: string }) {
  return (
    <div className={styles.blockTitle}>
      <span className={styles.blockDots} />
      <h3>{text}</h3>
    </div>
  );
}

export default function Node10_46() {
  return (
    <section className={styles.node1046}>
      <div className={styles.hero}>
        <img src={assets.bg} alt="" className={styles.heroBg} />

        <img src={assets.heroPhone} alt="爱满智云首页" className={styles.heroPhone} />

        <div className={styles.heroMain}>
          <h2>爱满智云</h2>
          <p className={styles.heroSub}>首页多状态展示</p>

          <div className={styles.heroCards}>
            <img src={assets.heroCardA} alt="" />
            <img src={assets.heroCardB} alt="" />
            <img src={assets.heroCardC} alt="" />
          </div>
        </div>

        <img src={assets.heroGlow} alt="" className={styles.heroGlow} />

        <div className={styles.progressWrap}>
          <div className={styles.progress}><i /></div>
          <span>移动端</span>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.section}>
          <BlockTitle text="智能家居 · 科技感和简洁感" />
          <p>
            设备管理区聚焦设备状态、控制入口与分类信息层级；保持简洁布局下的信息可读性，
            让用户快速完成查看、控制和设备添加。
          </p>
          <div className={styles.grid3}>
            {sec1Imgs.map((src) => (
              <img src={src} alt="" key={src} />
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <BlockTitle text="智能家居 · 科技感和简洁感" />
          <p>
            场景执行日志强调失败原因可读性，简化场景创建步骤，减少排错与操作成本，
            在统一视觉细节中强化状态反馈。
          </p>
          <div className={styles.grid4}>
            {sec2Imgs.map((src) => (
              <img src={src} alt="" key={src} />
            ))}
          </div>
        </div>

        <div className={styles.collage}>
          {collageImgs.map((src, idx) => (
            <img src={src} alt="" key={src} style={{ rotate: `${idx % 2 === 0 ? -22 : -17}deg` }} />
          ))}
        </div>
      </div>
    </section>
  );
}
