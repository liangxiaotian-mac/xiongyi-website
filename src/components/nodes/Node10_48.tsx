import type { ReactNode } from "react";
import styles from "./Node10_48.module.css";

const assets = {
  heroBgGlow: "https://www.figma.com/api/mcp/asset/c932ce37-9f35-4908-8c54-ef4d7a417e5a",
  heroStackMain: "https://www.figma.com/api/mcp/asset/8c0e1fb6-3406-4457-b030-d2a6437d30f1",
  heroPhoneShell: "https://www.figma.com/api/mcp/asset/abad4f55-0839-4d0d-aedb-2a50f2b7fe9f",
  heroPhoneBody: "https://www.figma.com/api/mcp/asset/2698af65-bca6-488a-a0e7-2146f86da397",

  collageA1: "https://www.figma.com/api/mcp/asset/80a4bbcf-1cd2-43df-a9f5-313b18290875",
  collageA2: "https://www.figma.com/api/mcp/asset/e660d6b0-8ac9-46d9-bf77-4e053d1a5c16",
  collageA3: "https://www.figma.com/api/mcp/asset/b63790ff-0948-4c88-941e-f2d66f895f43",
  collageA4: "https://www.figma.com/api/mcp/asset/4e49e6b9-b895-4ed8-85c2-402ddb2ae5cd",
  collageA5: "https://www.figma.com/api/mcp/asset/e87bf5dd-bdf7-4f50-99d0-d80903f95811",
  collageA6: "https://www.figma.com/api/mcp/asset/152fe988-0930-4422-87e1-4d28fade439a",

  collageB1: "https://www.figma.com/api/mcp/asset/88479343-7cae-45b6-9701-32def1d8a7a5",
  collageB2: "https://www.figma.com/api/mcp/asset/72473892-651e-4858-a982-748ccedda463",
  collageB3: "https://www.figma.com/api/mcp/asset/8dc81678-c6e5-4680-afef-d3e4cdccdd16",
  collageB4: "https://www.figma.com/api/mcp/asset/fd3f7560-944f-47d2-8df2-08a97df1392f",
  collageB5: "https://www.figma.com/api/mcp/asset/fee262dc-0819-4494-8fb8-ae869577257f",
  collageB6: "https://www.figma.com/api/mcp/asset/18a7296d-5190-4cb8-8d66-3635a4dc603e",

  collageC1: "https://www.figma.com/api/mcp/asset/506002ab-2a24-4f7e-920c-99a394af840e",
  collageC2: "https://www.figma.com/api/mcp/asset/bd552e8c-8694-4e4e-b9d8-51b2762c3ed7",
  collageC3: "https://www.figma.com/api/mcp/asset/8e2e0026-7aab-485a-9fda-d6d5ca9c3339",
  collageC4: "https://www.figma.com/api/mcp/asset/392e58e0-d538-4f04-a754-41bec2aa07e7",
  collageC5: "https://www.figma.com/api/mcp/asset/0bf927b9-c90e-40c7-a639-e069da0e5d87",
  collageC6: "https://www.figma.com/api/mcp/asset/01cb112a-1893-4f0e-ad78-54821ea320a0",

  laptopHero: "https://www.figma.com/api/mcp/asset/e857ade8-3a99-412b-8608-bafe0ea00e17",
  laptopHeroInner: "https://www.figma.com/api/mcp/asset/23587442-fb73-4679-8070-216595388296",

  bottomBg: "https://www.figma.com/api/mcp/asset/e367c76f-5ae0-4f66-99a4-adc00360bc2c",
  dongbaolingPhoneShell: "https://www.figma.com/api/mcp/asset/341c8689-876b-441a-89b1-41b2af0d1d88",
  dongbaolingPhoneBody: "https://www.figma.com/api/mcp/asset/4d6006a4-d583-4161-8ed0-652f12953bb3",
};

const collageA = [assets.collageA1, assets.collageA2, assets.collageA3, assets.collageA4, assets.collageA5, assets.collageA6];
const collageB = [assets.collageB1, assets.collageB2, assets.collageB3, assets.collageB4, assets.collageB5, assets.collageB6];
const collageC = [assets.collageC1, assets.collageC2, assets.collageC3, assets.collageC4, assets.collageC5, assets.collageC6];

const topCards = [
  { title: "账户通-商户端", desc: "提供专业的技术支持，通过稳定的产品服务满足客户高并发、高可靠性需求。" },
  { title: "账户通-运营中心", desc: "获取平台聚合的海量接口（如支付、风控、OCR等）及场景解决方案，快速构建业务能力矩阵。" },
  { title: "账户通-合作机构", desc: "通过稳定的产品服务满足客户高并发、高可靠性需求，并提供专业的技术支持。" },
  { title: "东宝令", desc: "企业级身份安全，从登录开始守护。动态密码守护数字资产安全。" },
];

function TitleLine({ children }: { children: ReactNode }) {
  return (
    <div className={styles.titleLine}>
      <span />
      <h3>{children}</h3>
    </div>
  );
}

function SplitSection({
  title,
  subtitle,
  points,
  visuals,
  reverse,
}: {
  title: string;
  subtitle: string;
  points: string[];
  visuals: string[];
  reverse?: boolean;
}) {
  return (
    <section className={`${styles.splitSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textCol}>
        <h2>{title}</h2>
        <p className={styles.tagline}>（● {subtitle} ●）</p>
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className={styles.visualGrid}>
        {visuals.map((src) => (
          <img src={src} alt="" key={src} />
        ))}
      </div>
    </section>
  );
}

export default function Node10_48() {
  return (
    <section className={styles.node1048}>
      <div className={styles.hero}>
        <img src={assets.heroBgGlow} alt="" className={styles.heroBg} />

        <div className={styles.heroLeft}>
          <img src={assets.heroStackMain} alt="账户通介绍" className={styles.heroStack} />

          <div className={styles.heroPhoneWrap}>
            <img src={assets.heroPhoneBody} alt="" className={styles.heroPhoneBody} />
            <img src={assets.heroPhoneShell} alt="账户通移动端" className={styles.heroPhone} />
          </div>
        </div>

        <div className={styles.heroRight}>
          <h1>账户通</h1>

          <TitleLine>账户通三端</TitleLine>
          <div className={styles.cardList}>
            {topCards.slice(0, 3).map((item) => (
              <article className={styles.glassCard} key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <TitleLine>东宝令</TitleLine>
          <article className={styles.glassCard}>
            <h4>{topCards[3].title}</h4>
            <p>{topCards[3].desc}</p>
          </article>
        </div>
      </div>

      <div className={styles.panel}>
        <section className={styles.normSection}>
          <h2>规范 B端后台的规范化价值</h2>
          <p className={styles.tagline}>（● 团队协作效率和产品可维护性的基础 ●）</p>

          <div className={styles.normCols}>
            <div>
              <h4>弹窗规范</h4>
              <p>宽度按 8 的倍数设计，覆盖 400/480/560/600/720/800 等规格；高度建议 200-560，超出时内容区滚动。</p>
            </div>
            <div>
              <h4>筛选项规范</h4>
              <p>单行最多 5 个筛选条件，超过时使用“展开更多”；时间范围始终前置，确保用户快速定位核心条件。</p>
            </div>
          </div>

          <div className={styles.laptopStage}>
            <img src={assets.laptopHero} alt="商户端设计展示" className={styles.laptopOuter} />
            <img src={assets.laptopHeroInner} alt="" className={styles.laptopInner} />
          </div>
        </section>

        <SplitSection
          title="账户通 商户端"
          subtitle="交易核心的稳定支撑"
          points={[
            "市场全域触达：通过稳定产品服务满足高并发、高可靠性交易场景。",
            "跨供应商合作：与跨行业供应商共建场景化解决方案，提升客户粘性。",
            "数据精准反哺：调用趋势与行为分析反向指导产品优化。",
            "品牌营销赋能：通过标杆案例与品牌背书提升市场信任度。",
          ]}
          visuals={collageA}
          reverse
        />

        <SplitSection
          title="账户通 合作机构"
          subtitle="生态共赢的开放平台"
          points={[
            "市场全域触达：统一平台管理多账户，降低操作门槛。",
            "跨合作机构合作：协同共创场景化方案，实现精准触达与变现。",
            "数据精准反哺：匿名数据洞察帮助合作机构持续优化。",
            "品牌营销赋能：行业案例包装增强合作机构市场竞争力。",
          ]}
          visuals={collageB}
        />

        <SplitSection
          title="账户通 运营中心"
          subtitle="业务构建的敏捷引擎"
          points={[
            "海量产品服务：聚合支付、风控、OCR 等能力快速调用。",
            "跨机构合作：共享企业级客户池，缩短获客路径。",
            "精准资源共享：整合资源与运营能力，提升业务增长效率。",
            "品牌营销赋能：提升合作品牌曝光和平台影响力。",
          ]}
          visuals={collageC}
          reverse
        />

        <section className={styles.dongSection}>
          <img src={assets.bottomBg} alt="" className={styles.dongBg} />
          <h2>东宝令</h2>
          <p>通过统一平台管理多个账户，无需记忆复杂密码，轻松实现高效便捷的账户管理。</p>

          <div className={styles.phoneRow}>
            {Array.from({ length: 5 }).map((_, idx) => (
              <div className={styles.phoneItem} key={idx}>
                <img src={assets.dongbaolingPhoneBody} alt="" className={styles.phoneBody} />
                <img src={assets.dongbaolingPhoneShell} alt="东宝令移动端" className={styles.phoneShell} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
