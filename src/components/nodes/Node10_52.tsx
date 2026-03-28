import styles from "./Node10_52.module.css";

const assets = {
  bgGlow: "https://www.figma.com/api/mcp/asset/899ec0af-de33-4cbe-adc6-aee159d4957a",

  heroPhone1: "https://www.figma.com/api/mcp/asset/3f9e1df1-d643-4f64-a623-4c09e35a4348",
  heroPhone2: "https://www.figma.com/api/mcp/asset/3d7b4b34-e802-434b-817d-63ff7f465aa1",
  heroPhone3: "https://www.figma.com/api/mcp/asset/f4f18d85-e3a2-4ce2-9d76-b43293bbdf50",

  phoneA1: "https://www.figma.com/api/mcp/asset/cc035b3b-74b2-4c9d-9f8a-605a6ce9d791",
  phoneA2: "https://www.figma.com/api/mcp/asset/2f7677f5-e08d-48bd-941c-b417ecb8c204",
  phoneA3: "https://www.figma.com/api/mcp/asset/e4a432ed-7d9e-4fd0-b158-2b1b74461e4d",
  phoneA4: "https://www.figma.com/api/mcp/asset/d2c560f9-e065-4e73-8686-9e70650f39d0",
  phoneA5: "https://www.figma.com/api/mcp/asset/b9422a96-5be3-4dc4-8d5d-62657c95ff3d",
  phoneA6: "https://www.figma.com/api/mcp/asset/1de12f87-c28a-4c4a-80eb-cda4946ef1c2",
  phoneA7: "https://www.figma.com/api/mcp/asset/88e9e069-fb32-460d-b090-bc0ce23f6b9d",
  phoneA8: "https://www.figma.com/api/mcp/asset/73f55173-602f-486c-94d3-b710d5aa5aab",
  phoneA9: "https://www.figma.com/api/mcp/asset/9dfebd5c-4080-4378-ad5f-2ed68f9dcedc",
  phoneA10: "https://www.figma.com/api/mcp/asset/ea01aeaa-c587-481e-854d-5daf8a74b5e6",
  phoneA11: "https://www.figma.com/api/mcp/asset/b14453c8-f11a-408c-a49b-55fed1fa8ff3",
  phoneA12: "https://www.figma.com/api/mcp/asset/e6c7b49d-091b-41a0-986f-439042f81ba6",
  phoneA13: "https://www.figma.com/api/mcp/asset/47a7cd07-a3f6-4557-8c14-38181a43dba5",
  phoneA14: "https://www.figma.com/api/mcp/asset/29ed9429-0b16-43f2-8270-4719ed45c174",

  iconSet1: "https://www.figma.com/api/mcp/asset/dd3fdb1a-2656-48bc-8bb7-e229b2aaf65b",
  iconSet2: "https://www.figma.com/api/mcp/asset/dccd5db6-3489-4dcc-aa4b-777e7850fce3",
  iconSet3: "https://www.figma.com/api/mcp/asset/6d3dd916-6853-4c7f-bb56-85fe6600fd95",
  iconSet4: "https://www.figma.com/api/mcp/asset/cf62e220-8d79-4652-82e5-cfa04af03fc5",
  iconSet5: "https://www.figma.com/api/mcp/asset/f18c8005-f92a-440e-b779-4f68b71aaac9",
  iconSet6: "https://www.figma.com/api/mcp/asset/9ed357ed-da29-4a3e-aa21-b66dc0824d44",
};

const phones = [
  assets.phoneA1,
  assets.phoneA2,
  assets.phoneA3,
  assets.phoneA4,
  assets.phoneA5,
  assets.phoneA6,
  assets.phoneA7,
  assets.phoneA8,
  assets.phoneA9,
  assets.phoneA10,
  assets.phoneA11,
  assets.phoneA12,
  assets.phoneA13,
  assets.phoneA14,
];

const iconSets = [assets.iconSet1, assets.iconSet2, assets.iconSet3, assets.iconSet4, assets.iconSet5, assets.iconSet6];

export default function Node10_52() {
  return (
    <section className={styles.node1052}>
      <div className={styles.hero}>
        <img src={assets.bgGlow} alt="" className={styles.bgGlow} />

        <div className={styles.heroTitle}>
          <h2>AIGC</h2>
          <p>让创造，从此无限</p>
          <span>AIGC</span>
        </div>

        <div className={styles.heroPhones}>
          <img src={assets.heroPhone1} alt="AIGC首页展示1" />
          <img src={assets.heroPhone2} alt="AIGC首页展示2" />
          <img src={assets.heroPhone3} alt="AIGC首页展示3" />
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.phoneGrid}>
          {phones.map((src) => (
            <img src={src} alt="" key={src} />
          ))}
        </div>

        <div className={styles.iconRows}>
          {iconSets.map((src) => (
            <img src={src} alt="" key={src} />
          ))}
        </div>

        <div className={styles.footerMask}>
          <h3>皆由MIDJOURNEY生成</h3>
          <p>LARGE-SCREEN DISPLAY OF DATA</p>
        </div>
      </div>
    </section>
  );
}
