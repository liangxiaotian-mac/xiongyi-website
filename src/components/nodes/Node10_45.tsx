import styles from "./Node10_45.module.css";

const assets = {
  bgA: "https://www.figma.com/api/mcp/asset/20963c84-1c52-47ca-8655-bd10dc31feac",
  bgB: "https://www.figma.com/api/mcp/asset/163908d0-60ed-4eec-b4c1-d4c18689f75d",
  heroDesktop: "https://www.figma.com/api/mcp/asset/bf0af188-45d4-4598-ba28-0ad6abfe9164",
  heroGlow: "https://www.figma.com/api/mcp/asset/9f61d6b3-e49e-4e87-916d-8cf35e7e547f",
  heroPhoneFrame: "https://www.figma.com/api/mcp/asset/a280434c-cbcd-4614-ac2b-3d9ee8a0364c",

  pA1: "https://www.figma.com/api/mcp/asset/bc3a307b-8f84-451f-864d-cd1c1bcf6e6c",
  pA2: "https://www.figma.com/api/mcp/asset/8f4ba031-ded9-4976-a406-bba902ae7a56",
  pA3: "https://www.figma.com/api/mcp/asset/9bddc8d0-8ce7-49f1-a9c3-3b2ed077eb7d",
  pA4: "https://www.figma.com/api/mcp/asset/e94f9bf9-036b-46c2-ab3c-1cee071970b1",
  pA5: "https://www.figma.com/api/mcp/asset/b216f8d7-bb38-45a5-b533-66c74bebcd4f",
  pA6: "https://www.figma.com/api/mcp/asset/76c34d39-69af-4f30-afe6-73e06f7bbbf8",
  pA7: "https://www.figma.com/api/mcp/asset/7ce0ec11-edb7-4155-971e-1c4cec9496a3",

  pB1: "https://www.figma.com/api/mcp/asset/0b7ae4be-e782-4f7b-8ff3-409ef0b9fb7e",
  pB2: "https://www.figma.com/api/mcp/asset/42c0edb7-3af7-46ee-9922-17f570f780c5",
  pB3: "https://www.figma.com/api/mcp/asset/bb96c7f4-3bd6-4fdd-8d08-1347da577303",
  pB4: "https://www.figma.com/api/mcp/asset/a0a3dc44-ee05-4784-b41f-6e45ead1428d",
  pB5: "https://www.figma.com/api/mcp/asset/b5246a94-2089-474d-8fd9-63357de9766c",

  pC1: "https://www.figma.com/api/mcp/asset/cc1cdf7c-e5e9-4d0e-8460-2abd165c068b",
  pC2: "https://www.figma.com/api/mcp/asset/47c1ba49-ef51-4101-ba21-102a455d7edc",
  pC3: "https://www.figma.com/api/mcp/asset/845b38da-f93a-4b9b-9f0d-b3b87d2a192a",
  pC4: "https://www.figma.com/api/mcp/asset/058fd734-7b4e-4fb3-aa22-41fe90c5d517",
  pC5: "https://www.figma.com/api/mcp/asset/5c39d017-5d4c-48aa-9747-40b1e724dadf",

  cashA: "https://www.figma.com/api/mcp/asset/82233e60-1a3f-4963-bd43-7282535a6b25",
  cashB: "https://www.figma.com/api/mcp/asset/f1056046-d770-41bc-a9e8-c79e28d079f7",
  cashC: "https://www.figma.com/api/mcp/asset/f97ed278-d48a-45fc-98f5-29ab3aa792b8",
  cashD: "https://www.figma.com/api/mcp/asset/0e5a660c-ac49-43b1-a7c9-afd641f9a3fb",
  cashE: "https://www.figma.com/api/mcp/asset/227b403d-a700-462b-bdd2-e66e0ecdc25a",
  cashF: "https://www.figma.com/api/mcp/asset/305089f4-132b-4411-a2dc-a4887a921fd2",
  cashG: "https://www.figma.com/api/mcp/asset/e20ae413-190a-453d-8b9e-627cdb8176f7",

  adminA: "https://www.figma.com/api/mcp/asset/3c6b9ec7-81cd-4cbf-9a61-4daa0fac92f2",
  adminB: "https://www.figma.com/api/mcp/asset/2a27239a-c684-4d0e-a1c6-e553f82daea8",
  adminC: "https://www.figma.com/api/mcp/asset/c42185c0-e53e-4958-8b0a-64cfe49acef7",
  adminD: "https://www.figma.com/api/mcp/asset/93e50e33-dd90-4722-b16d-5391a45a1fda",
  adminE: "https://www.figma.com/api/mcp/asset/d70f7e1a-511b-4463-af54-b09298e0394f",
  adminF: "https://www.figma.com/api/mcp/asset/1769a184-fa38-48b5-ace6-2dcb201f81f5",
  adminG: "https://www.figma.com/api/mcp/asset/2eab0092-3a23-4d41-be7c-8ea59b05b6e1",
  adminH: "https://www.figma.com/api/mcp/asset/053569a5-cb95-4a4a-9046-19a14ef88054",
};

const diyImages = [assets.pA1, assets.pA2, assets.pA3, assets.pA4, assets.pA5, assets.pA6, assets.pA7];
const splitImages = [assets.pB1, assets.pB2, assets.pB3, assets.pB4, assets.pB5];
const styleImages = [assets.pC1, assets.pC2, assets.pC3, assets.pC4, assets.pC5];
const cashImages = [assets.cashB, assets.cashC, assets.cashD, assets.cashE, assets.cashF, assets.cashG];
const adminImages = [assets.adminD, assets.adminE, assets.adminF, assets.adminG, assets.adminH];

function SectionTitle({ title, suffix }: { title: string; suffix: string }) {
  return (
    <div className={styles.sectionTitle}>
      <span className={styles.titleDots} />
      <h3>{title}</h3>
      <span className={styles.dot} />
      <p>{suffix}</p>
    </div>
  );
}

export default function Node10_45() {
  return (
    <section className={styles.node1045}>
      <div className={styles.hero}>
        <img src={assets.bgA} alt="" className={styles.heroBgA} />
        <img src={assets.bgB} alt="" className={styles.heroBgB} />

        <h2 className={styles.pageTitle}>CRMEB单商户系统</h2>

        <div className={styles.introGrid}>
          <article>
            <h4>项目背景</h4>
            <p>
              针对希望打通线上线下的品牌企业，提供私域客户关系管理与营销电商系统，
              帮助商家实现公域引流、私域沉淀和全渠道经营。
            </p>
          </article>
          <article>
            <h4>项目介绍</h4>
            <p>
              支持多端数据统一管理，覆盖活动营销、商品管理、客户管理、订单与分销、
              财务与供应商系统，并可对接企业微信客服导购能力。
            </p>
          </article>
        </div>

        <div className={styles.heroMockup}>
          <img src={assets.heroDesktop} alt="" className={styles.desktop} />
          <img src={assets.heroGlow} alt="" className={styles.glow} />
          <img src={assets.heroPhoneFrame} alt="项目手机端展示" className={styles.phone} />
        </div>

        <div className={styles.progressWrap}>
          <span>移动端</span>
          <div className={styles.progress}>
            <i />
          </div>
        </div>
      </div>

      <div className={styles.board}>
        <div className={styles.band} />

        <SectionTitle title="主页设计" suffix="线上上架+智能分销" />
        <p className={styles.desc}>
          首页聚焦商品触达与活动承接，强调首屏导购、功能入口和列表信息效率，支持快速装修和主题替换。
        </p>
        <div className={styles.grid7}>
          {diyImages.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>

        <SectionTitle title="基调换色" suffix="风格一键同步" />
        <p className={styles.desc}>
          提供多套品牌色调方案，切换后可同步到商城端页面、活动素材与导航组件，保证视觉一致性。
        </p>
        <div className={styles.grid5}>
          {styleImages.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>

        <SectionTitle title="裂变营销" suffix="分红让分佣" />
        <p className={styles.desc}>
          通过分销、任务和激励机制打造增长闭环，让用户转化为推广者，推动自传播与二次转化。
        </p>
        <div className={styles.gridSplit}>
          {splitImages.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>

        <div className={styles.subPanel}>
          <h4>收银台</h4>
          <img src={assets.cashA} alt="" className={styles.cashMain} />
          <div className={styles.gridCash}>
            {cashImages.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
        </div>

        <div className={styles.subPanel}>
          <h4>后台</h4>
          <div className={styles.adminWrap}>
            <img src={assets.adminA} alt="" className={styles.adminBgA} />
            <img src={assets.adminB} alt="" className={styles.adminBgB} />
            <img src={assets.adminC} alt="" className={styles.adminMain} />
            <div className={styles.gridAdmin}>
              {adminImages.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
