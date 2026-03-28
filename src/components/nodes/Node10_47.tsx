import styles from "./Node10_47.module.css";

const assets = {
  heroBg: "https://www.figma.com/api/mcp/asset/1aa29423-49d6-482c-a364-a73cc72f871e",
  heroDesktopShell: "https://www.figma.com/api/mcp/asset/4c24c874-0189-4d86-8b01-c97d12003d9c",
  heroDesktopScreen: "https://www.figma.com/api/mcp/asset/22b55e3e-bb2d-4c22-9dbd-6b5c2359c433",
  heroPhoneShell: "https://www.figma.com/api/mcp/asset/ebb920de-7b40-455c-9fcf-abaf3a8fb7d2",
  heroPhoneBottom: "https://www.figma.com/api/mcp/asset/4423d0f6-5f4d-4a2c-98a7-ee291af61438",

  workbenchVisual: "https://www.figma.com/api/mcp/asset/54efbe05-8908-4f31-bdf9-be3c4174a537",
  chartsVisual: "https://www.figma.com/api/mcp/asset/d5909c05-14c9-4f47-a896-b61c090f867e",
  communityVisual: "https://www.figma.com/api/mcp/asset/37c6fd78-762a-4b3a-99c0-bcb4e0cdeb22",
  reportVisual: "https://www.figma.com/api/mcp/asset/0f3103eb-839e-433b-a5ca-c748e193a715",

  icon1: "https://www.figma.com/api/mcp/asset/0c2347b5-45cd-4639-a515-31000f8d7f01",
  icon2: "https://www.figma.com/api/mcp/asset/635dbca8-4cad-4489-bd65-04bcb298a419",
  icon3: "https://www.figma.com/api/mcp/asset/85454faf-a630-4c19-9015-6e6cece01263",
  icon4: "https://www.figma.com/api/mcp/asset/2bfc9ccb-f396-4c48-9316-51198cba2408",
  icon5: "https://www.figma.com/api/mcp/asset/9db70f63-f4f0-4ca4-b605-822c2f696d66",
  icon6: "https://www.figma.com/api/mcp/asset/795d5c13-2575-4455-9c01-e73d57a9782a",
  icon7: "https://www.figma.com/api/mcp/asset/ae13fbd5-a8a9-41b4-a728-1b2a5a91365f",
  icon8: "https://www.figma.com/api/mcp/asset/42c4c948-f2bb-411a-9ab6-4a560eaf4ea3",
  icon9: "https://www.figma.com/api/mcp/asset/ffd33986-af67-468d-b8ba-c6784b7265e1",
  icon10: "https://www.figma.com/api/mcp/asset/99bd6a82-472c-4c5d-b993-97d735082d89",
  icon11: "https://www.figma.com/api/mcp/asset/ce96a048-76ff-433d-b233-14d13b507338",
  icon12: "https://www.figma.com/api/mcp/asset/456991db-5419-4f7c-969b-ffb0196746d5",
  icon13: "https://www.figma.com/api/mcp/asset/a1306a62-7b41-4b34-afc3-c9d0c0f8009e",
};

const boardIcons = [
  { name: "我的日程", src: assets.icon1 },
  { name: "云文件", src: assets.icon2 },
  { name: "职位说明", src: assets.icon3 },
  { name: "发票管理", src: assets.icon4 },
  { name: "工作汇报", src: assets.icon5 },
  { name: "企业通讯录", src: assets.icon6 },
  { name: "企业动态", src: assets.icon7 },
  { name: "客户列表", src: assets.icon8 },
  { name: "合同管理", src: assets.icon9 },
  { name: "记事本", src: assets.icon10 },
  { name: "绩效考核", src: assets.icon11 },
  { name: "申请审批", src: assets.icon12 },
  { name: "通讯录", src: assets.icon13 },
];

type SectionProps = {
  title: string;
  subtitle: string;
  description: string;
  visual: string;
  reverse?: boolean;
};

function BlockTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={styles.blockTitle}>
      <span className={styles.bracket}>（</span>
      <span className={styles.dot} />
      <h3>
        <strong>{title}</strong>
        {" · "}
        <span>{subtitle}</span>
      </h3>
      <span className={styles.dot} />
      <span className={styles.bracket}>）</span>
    </div>
  );
}

function ContentSection({ title, subtitle, description, visual, reverse }: SectionProps) {
  return (
    <section className={`${styles.contentSection} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.sectionText}>
        <BlockTitle title={title} subtitle={subtitle} />
        <p>{description}</p>
      </div>
      <div className={styles.sectionVisualWrap}>
        <img src={visual} alt={title} className={styles.sectionVisual} />
      </div>
    </section>
  );
}

export default function Node10_47() {
  return (
    <section className={styles.node1047}>
      <div className={styles.hero}>
        <img src={assets.heroBg} alt="" className={styles.heroBg} />

        <h2>OA陀螺匠</h2>

        <div className={styles.infoCard}>
          <h4>项目背景</h4>
          <p>
            帮助中小企业进行高效管理，实现人员能力数字化、图表化；
            落实公司制度，实时掌握工作与业务进度，解决签单找人难等问题。
          </p>
        </div>

        <div className={styles.iconCard}>
          <h4>板块图标</h4>
          <div className={styles.iconGrid}>
            {boardIcons.map((icon) => (
              <div className={styles.iconItem} key={icon.name}>
                <img src={icon.src} alt="" />
                <span>{icon.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.devices}>
          <img src={assets.heroDesktopShell} alt="" className={styles.desktopShell} />
          <img src={assets.heroDesktopScreen} alt="OA工作台网页端" className={styles.desktopScreen} />

          <div className={styles.phoneWrap}>
            <img src={assets.heroPhoneShell} alt="OA工作台移动端" className={styles.phoneShell} />
            <img src={assets.heroPhoneBottom} alt="" className={styles.phoneBottom} />
          </div>
        </div>

        <div className={styles.progressWrap}>
          <span>web端</span>
          <div className={styles.progressBar}><i /></div>
        </div>
      </div>

      <div className={styles.panel}>
        <ContentSection
          title="工作台"
          subtitle="从管理中枢到移动终端的设计思考"
          description="围绕个性化工作门户组织任务、审批、企业动态与看板信息，重点解决高信息密度下的可读性与操作效率问题。"
          visual={assets.workbenchVisual}
        />

        <ContentSection
          title="统计图表"
          subtitle="智能洞察"
          description="针对企业级角色权限差异，建立下属与主管两端的图表展示层级，兼顾信息统一性、交互清晰度和决策效率。"
          visual={assets.chartsVisual}
          reverse
        />

        <ContentSection
          title="社区"
          subtitle="内容取舍策略"
          description="在信息丰富度与认知负荷之间平衡，保留标题、来源、互动等关键字段，压缩次要信息并采用卡片化布局增强浏览效率。"
          visual={assets.communityVisual}
        />

        <ContentSection
          title="我的汇报"
          subtitle="高频功能"
          description="将汇报场景由表格改造为卡片形式，按人员、类型、时间和操作重组信息，让移动端快速查看与处理更顺手。"
          visual={assets.reportVisual}
          reverse
        />
      </div>
    </section>
  );
}
