import { useState } from "react";

const QS = [
  {id:1,st:1,cat:"安全衛生",q:"アーク溶接で感電防止に有効でないものはどれか？",opts:["電撃防止装置を使用","乾燥した革手袋を着用","溶接機外箱をアース","濡れた手袋でも問題ない"],a:3,xp:15,exp:"濡れた手袋は抵抗が下がり感電リスクが急増する。電撃防止装置・革手袋・アースが三大対策。"},
  {id:2,st:1,cat:"溶接欠陥",q:"「アンダーカット」の主な発生原因はどれか？",opts:["電流が低すぎる","速度が遅すぎる","電流過大・速度過大","予熱温度が低い"],a:2,xp:20,exp:"電流過大・速度過大によりビード止端部の母材が掘れる欠陥。電流を下げるか速度を落として防止。"},
  {id:3,st:1,cat:"材料",q:"低水素系溶接棒の乾燥条件として正しいものはどれか？",opts:["50〜100℃で1時間","150〜200℃で1時間","300〜400℃で1〜2時間","500℃以上で30分"],a:2,xp:20,exp:"低水素系溶接棒は300〜400℃で1〜2時間の乾燥が標準。乾燥不足は水素割れの直接原因。"},
  {id:4,st:1,cat:"専門級",q:"N-2P（パイプ全姿勢溶接）試験の姿勢はどれか？",opts:["下向きのみ","水平固定","上向きのみ","水平固定管の全姿勢"],a:3,xp:30,exp:"N-2Pは水平固定パイプを全姿勢で溶接する最難関。合格率30%。初層（裏波）の完全溶込みが特に要求される。"},
  {id:5,st:2,cat:"AW検定",q:"AW検定の試験種目に含まれないものはどれか？",opts:["工場溶接","工事現場溶接","水中溶接","ロボット溶接オペレータ"],a:2,xp:30,exp:"AW検定は①工場溶接②工事現場溶接③鋼管溶接④ロボット溶接オペレータの4種。水中溶接はAW検定の対象外。"},
  {id:6,st:2,cat:"ボイラー",q:"普通ボイラー溶接士が溶接できない作業はどれか？",opts:["胴板の周継手（25mm以下）","鏡板の取付（25mm以下）","板厚32mmの胴板縦継手","管台の取付（25mm以下）"],a:2,xp:30,exp:"普通ボイラー溶接士は板厚25mm以下に限定。板厚32mmは特別ボイラー溶接士が必要。"},
  {id:7,st:2,cat:"水中溶接",q:"水中溶接士に最低限必要な資格はどれか？",opts:["普通自動車免許+JIS基本級","潜水士免許+JIS溶接技能者資格","ボイラー溶接士+自動車免許","アーク溶接特別教育のみ"],a:1,xp:40,exp:"水中溶接士は潜水士（国家資格）＋溶接技能者資格の組み合わせが基本。実務では専門級保有が推奨される。"},
  {id:8,st:3,cat:"溶接冶金",q:"HAZ粗粒域で起こりやすい問題はどれか？",opts:["硬さ低下と靭性向上","結晶粒粗大化による靭性低下","溶接金属の強度増加","スラグの巻き込み"],a:1,xp:40,exp:"HAZ粗粒域では結晶粒が粗大化し靭性（衝撃値）が著しく低下する。低温靭性が要求される構造物では特に重要。"},
  {id:9,st:3,cat:"非破壊検査",q:"超音波探傷試験（UT）が最も得意とする欠陥はどれか？",opts:["表面の微細割れ","内部の面状欠陥（融合不良・割れ）","表面酸化皮膜","余盛過大"],a:1,xp:40,exp:"UTは超音波の反射を利用するため面状欠陥の検出に優れる。RTが球状欠陥（気孔）に強いのとは対照的。"},
  {id:10,st:4,cat:"IIW体系",q:"IIW国際溶接資格の最上位に位置するものはどれか？",opts:["IWS（Specialist）","IWT（Technologist）","IWE（Engineer）","IWIP（Inspection Personnel）"],a:2,xp:70,exp:"IWEが最上位。IWE→IWT→IWS→IWIPの順。IWEは設計・研究・開発レベルのエンジニア資格で理工系学位が必要。"},
];

const STAGES = [
  {id:1,label:"STAGE 1 — JIS入門",color:"#78716C",icon:"⚡",unlockXP:0},
  {id:2,label:"STAGE 2 — AW・ボイラー・水中",color:"#1D4ED8",icon:"🔀",unlockXP:80},
  {id:3,label:"STAGE 3 — WES管理技術者",color:"#D97706",icon:"👑",unlockXP:180},
  {id:4,label:"STAGE 4 — 国際資格",color:"#7C3AED",icon:"🌍",unlockXP:300},
];

const TREE = [
  {id:"s0",stage:"STAGE 0",label:"現場サポート資格",color:"#0F766E",icon:"🔧",nodes:[
    {name:"自由研削といし特別教育",type:"特別教育",tc:"#10B981",income:"現場必須",cost:"3,000〜5,000円 / 半日〜1日",req:"なし",desc:"グラインダーの砥石取り替えに必須。溶接前後の研磨・バリ取りで毎日使う。"},
    {name:"低圧電気取扱業務特別教育",type:"特別教育",tc:"#10B981",income:"現場必須",cost:"6,000〜12,000円 / 1日",req:"なし",desc:"溶接機の接続・配線・ブレーカー操作に必要。600V以下の低圧電気の取扱に必須。"},
    {name:"フルハーネス特別教育",type:"特別教育",tc:"#10B981",income:"高所作業必須",cost:"5,000〜8,000円 / 半日〜1日",req:"なし",desc:"高さ2m以上の高所作業でのフルハーネス使用に必須。2019年法改正で義務化。"},
    {name:"酸欠・硫化水素危険作業特別教育",type:"特別教育",tc:"#F59E0B",income:"造船・プラント必須",cost:"6,000〜10,000円 / 1日",req:"なし",desc:"タンク・船艙内での溶接作業に必須。密閉空間の溶接は酸欠リスクが高く死亡事故につながる。"},
    {name:"粉じん作業特別教育",type:"特別教育",tc:"#F59E0B",income:"現場必須",cost:"3,000〜6,000円 / 半日",req:"なし",desc:"2021年の法改正でアーク溶接が特定粉じん作業に追加。多くの現場で受講必須になった。"},
    {name:"ガス溶接技能講習",type:"技能講習",tc:"#F97316",income:"時給+100〜300円",cost:"13,000〜16,000円 / 3日",req:"満15歳以上",desc:"アセチレン等を使用した溶接・溶断・加熱作業に必要。ガス切断もこの資格。"},
  ]},
  {id:"s0b",stage:"STAGE 0-B",label:"重機・運搬・高所資格",color:"#B45309",icon:"🏗️",nodes:[
    {name:"玉掛け技能講習",type:"技能講習",tc:"#D97706",income:"時給+200〜500円",cost:"18,000〜25,000円 / 3日",req:"満18歳以上",desc:"つり上げ荷重1t以上のクレーン等の玉掛け作業に必須。鉄骨・造船で毎日使う。小型クレーンとセット取得がお得。"},
    {name:"小型移動式クレーン技能講習",type:"技能講習",tc:"#D97706",income:"時給+300〜500円",cost:"30,000〜35,000円 / 4〜5日",req:"満18歳以上",desc:"1t以上5t未満の移動式クレーン運転に必要。玉掛けと一緒に取ると費用と日数を節約できる。"},
    {name:"クレーン・デリック運転士免許",type:"国家免許",tc:"#EF4444",income:"時給+500〜1,000円",cost:"教習所：10〜15万円 / 独学+実技：4〜6万円",req:"満18歳以上",desc:"つり上げ荷重5t以上の天井クレーン・橋形クレーン・デリックの運転に必要な国家免許。"},
    {name:"フォークリフト運転技能講習",type:"技能講習",tc:"#D97706",income:"時給+200〜400円",cost:"普通免許あり：3〜4万円 / なし：4.5〜6万円",req:"満18歳以上",desc:"最大荷重1t以上のフォークリフト運転に必要。工場・造船所・建設現場でほぼ必須。"},
    {name:"高所作業車運転技能講習（10m以上）",type:"技能講習",tc:"#D97706",income:"時給+200〜500円",cost:"40,000〜50,000円 / 3〜4日（10m未満：1〜1.5万円）",req:"満18歳以上",desc:"作業床高さ10m以上の高所作業車の運転に必要。橋梁・鉄骨・プラントの高所溶接で使用。"},
  ]},
  {id:"s1",stage:"STAGE 1",label:"JIS溶接技能者",color:"#78716C",icon:"⚡",nodes:[
    {name:"アーク溶接特別教育",type:"必須",tc:"#EF4444",income:"受講必須",cost:"12,000〜16,000円 / 2〜3日",req:"15歳以上",desc:"労働安全衛生法に基づく安全資格。現場に立つための第一歩。"},
    {name:"JIS溶接技能者 基本級",type:"技能",tc:"#F59E0B",income:"時給 1,200〜1,500円",cost:"学科3〜5千円 / 実技2〜3.5万円",req:"特別教育修了 / 実務1ヶ月",desc:"下向き溶接の技量評価試験。溶接工の名刺代わり。"},
    {name:"JIS溶接技能者 専門級",type:"技能",tc:"#F59E0B",income:"時給 1,500〜2,000円",cost:"実技：30,000〜50,000円",req:"基本級 / 実務3ヶ月",desc:"立向・横向・上向・管溶接。N-2P（パイプ全姿勢）合格率30%。"},
  ]},
  {id:"s2",stage:"STAGE 2",label:"専門ルート分岐",color:"#1D4ED8",icon:"🔀",nodes:[
    {name:"AW検定",type:"鉄骨",tc:"#3B82F6",route:"鉄骨🏗️",income:"時給 2,000〜2,800円",cost:"25〜30万円（会社負担が多い）/ 年1回（6〜9月）",req:"JIS専門級保有",desc:"建築鉄骨溶接の品質保証資格。年1回のみ。ゼネコン案件に必須。"},
    {name:"ボイラー溶接士（普通→特別）",type:"プラント",tc:"#F97316",route:"プラント🏭",income:"時給 2,200〜3,000円",cost:"学科6,800円 / 実技18,900円（普通）21,800円（特別）",req:"溶接実務1年以上",desc:"普通（板厚25mm以下）→特別（全作業）の国家資格。プラント・圧力容器・発電設備に必須。"},
    {name:"潜水士免許",type:"水中",tc:"#06B6D4",route:"水中🌊",income:"時給 3,000〜4,000円+",cost:"学科8,800円 / ダイビング実技：別途5〜10万円",req:"JIS専門級 / 18歳以上",desc:"筆記のみ合格率80%。JIS専門級と組み合わせで水中溶接工へ。年収1,000万超も現実。"},
  ]},
  {id:"s3",stage:"STAGE 3",label:"現場リーダー職",color:"#D97706",icon:"👑",nodes:[
    {name:"溶接作業指導者",type:"監督",tc:"#EAB308",income:"時給 2,500〜3,500円",cost:"約50,000円 / 4日間講習",req:"JIS資格3年以上",desc:"現場の職長・班長クラス。技能者と管理技術者の中間。"},
    {name:"溶接管理技術者 2級",type:"管理",tc:"#A78BFA",income:"時給 3,000〜4,000円",cost:"受験料5.4万円 / 講習3〜5万円 / テキスト4,125円",req:"高卒+実務3年 / 大卒+実務1年",desc:"溶接作業の監督・指導・品質管理。工場認定・官公庁工事に必須。"},
    {name:"溶接管理技術者 1級",type:"管理",tc:"#A78BFA",income:"時給 4,000〜5,000円",cost:"受験料5.4万円 / 講習4〜6万円 / テキスト9,900円",req:"WES管理2級+実務経験",desc:"専門技術分野の職務担当。記述式試験。橋梁・造船・プラント全対応。"},
    {name:"溶接管理技術者 特別級",type:"管理",tc:"#A78BFA",income:"年収 600〜900万円",cost:"受験料5.4万円 / 口述試験あり",req:"WES管理1級+実務経験",desc:"溶接全般の計画・監督・品質管理を統括。小論文＋口述試験。現場の最高責任者。"},
  ]},
  {id:"s4",stage:"STAGE 4",label:"国際資格 最高峰",color:"#7C3AED",icon:"🌍",nodes:[
    {name:"AWS CWI",type:"AWS",tc:"#EF4444",route:"AWS🇺🇸",income:"時給 4,000〜6,000円",cost:"受験料5.4万円 / 講習15〜20万円",req:"25歳以上 / JIS資格 / 実務5年+",desc:"溶接品質・規格適合の検査官資格。全産業・全世界で通用する検査官証明。"},
    {name:"IIW IWT",type:"IIW",tc:"#10B981",route:"IIW🌐",income:"年収 1,000万〜",cost:"教育訓練費：30〜50万円+",req:"IWS+技術面接合格",desc:"世界中で通用する溶接技術者の最高称号の一つ。技術面接・筆記・プロジェクトワーク。"},
    {name:"IIW IWE",type:"IIW",tc:"#10B981",route:"IIW🌐",income:"年収 1,200万〜",cost:"教育訓練費：40〜70万円+",req:"理工系学位+所定訓練+実務",desc:"国際溶接エンジニア。設計・研究・開発レベルの最上位資格。"},
  ]},
];

const LEVELS=[{level:1,name:"見習い溶接工",minXP:0,color:"#92400E"},{level:2,name:"一人前溶接工",minXP:80,color:"#6B7280"},{level:3,name:"熟練溶接工",minXP:180,color:"#D97706"},{level:4,name:"上級溶接工",minXP:300,color:"#2563EB"},{level:5,name:"溶接マスター",minXP:450,color:"#7C3AED"}];
const getLv=xp=>{for(let i=LEVELS.length-1;i>=0;i--)if(xp>=LEVELS[i].minXP)return LEVELS[i];return LEVELS[0];};
const getNxt=xp=>{const c=getLv(xp);return LEVELS.find(l=>l.level===c.level+1)||null;};

const F="'Courier New',monospace";
const BG="linear-gradient(160deg,#020818 0%,#0D1B2A 60%,#050D18 100%)";

function Weldon({lv,mood,anim}){
  const col=lv?.color||"#92400E";
  const lvn=lv?.level||1;
  const mp={smile:"M44,56 Q53,63 62,56",happy:"M42,55 Q53,65 64,55",surprised:"M49,54 Q53,61 57,54 Q53,64 49,54Z",neutral:"M46,58 L60,58"};
  return(
    <svg width="100" height="125" viewBox="0 0 110 138" style={{filter:`drop-shadow(0 0 ${lvn*3}px ${col})`,transform:anim?"scale(1.1) rotate(-4deg)":"scale(1)",transition:"transform .3s",overflow:"visible"}}>
      <path d="M40,105 Q29,108 27,117 Q25,126 36,127 Q45,128 43,120 Q41,114 33,114 Q27,114 29,120" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
      <path d="M70,105 Q81,108 83,117 Q85,126 74,127 Q65,128 67,120 Q69,114 77,114 Q83,114 81,120" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
      <path d="M43,96 Q39,101 40,105" fill="none" stroke="#222" strokeWidth="5" strokeLinecap="round"/>
      <path d="M67,96 Q71,101 70,105" fill="none" stroke="#222" strokeWidth="5" strokeLinecap="round"/>
      <rect x="29" y="50" width="52" height="50" rx="12" fill="#A93226"/>
      <rect x="31" y="52" width="48" height="46" rx="11" fill="#E74C3C"/>
      <rect x="35" y="80" width="40" height="14" rx="4" fill="#922B21"/>
      <text x="55" y="91" textAnchor="middle" fill="#F1948A" fontSize="7" fontWeight="900" letterSpacing="2" fontFamily="monospace">MIG</text>
      <rect x="32" y="52" width="46" height="27" rx="11" fill="#E74C3C"/>
      <rect x="37" y="52" width="36" height="8" rx="7" fill="#C0392B"/>
      <path d={mood==="surprised"?"M41,47 Q47,44 53,47":"M41,50 Q47,46 53,49"} fill="none" stroke="#7B241C" strokeWidth="2.2" strokeLinecap="round"/>
      <path d={mood==="surprised"?"M57,47 Q63,44 69,47":"M57,49 Q63,46 69,50"} fill="none" stroke="#7B241C" strokeWidth="2.2" strokeLinecap="round"/>
      <ellipse cx="46" cy="46" rx={mood==="surprised"?5:4.5} ry={mood==="surprised"?5:3.5} fill="#FDFEFE"/>
      <ellipse cx="64" cy="46" rx={mood==="surprised"?5:4.5} ry={mood==="surprised"?5:3.5} fill="#FDFEFE"/>
      <ellipse cx="47" cy="47" rx="2.3" ry="2.3" fill="#111"/><ellipse cx="65" cy="47" rx="2.3" ry="2.3" fill="#111"/>
      <circle cx="48" cy="46" r="0.9" fill="white"/><circle cx="66" cy="46" r="0.9" fill="white"/>
      <path d={mp[mood]||mp.smile} fill="none" stroke="#7B241C" strokeWidth="2" strokeLinecap="round"/>
      <path d="M55,28 Q57,18 60,12 Q63,6 70,3 Q76,0 79,5" fill="none" stroke="#111" strokeWidth="6.5" strokeLinecap="round"/>
      <path d="M55,28 Q57,18 60,12 Q63,6 70,3 Q76,0 79,5" fill="none" stroke="#333" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="3,2.5"/>
      <rect x="75" y="0" width="12" height="9" rx="3" fill="#BDC3C7"/>
      <rect x="75" y="6" width="12" height="3" rx="1.5" fill="#D4AC0D"/>
      <circle cx="81" cy="-1" r="2" fill="#FFE500"><animate attributeName="opacity" dur="0.22s" repeatCount="indefinite" values="1;0.1;1"/></circle>
      <path d="M29,64 Q17,60 13,69 Q10,76 17,79" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round"/>
      <ellipse cx="18" cy="80" rx="7.5" ry="5.5" fill="#C0392B"/><ellipse cx="12" cy="77" rx="2.8" ry="1.8" fill="#C0392B"/>
      <path d="M81,64 Q93,60 97,69 Q100,76 93,79" fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round"/>
      <ellipse cx="92" cy="80" rx="7.5" ry="5.5" fill="#C0392B"/><ellipse cx="98" cy="77" rx="2.8" ry="1.8" fill="#C0392B"/>
      <circle cx="88" cy="55" r="10" fill="#060F1A" stroke={col} strokeWidth="1.8"/>
      <text x="88" y="59" textAnchor="middle" fill={col} fontSize="7.5" fontWeight="900" fontFamily="monospace">Lv{lvn}</text>
      {lvn>=5&&<g transform="translate(46,-1)"><polygon points="9,5 4,14 0,9 0,19 18,19 18,9 14,14" fill="#FFD700" stroke="#FF8C00" strokeWidth="0.8"/></g>}
    </svg>
  );
}

function Bar({xp,lv,nxt}){
  const p=Math.min(100,((xp-lv.minXP)/((nxt?.minXP||lv.minXP+200)-lv.minXP))*100);
  return <div style={{background:"#0D1B2A",borderRadius:8,height:10,border:"1px solid #1E3A5F",overflow:"hidden"}}><div style={{width:`${p}%`,height:"100%",background:lv.color,borderRadius:8,transition:"width .8s ease"}}/></div>;
}

export default function App(){
  const [sc,setSc]=useState("home");
  const [xp,setXp]=useState(0);
  const [tab,setTab]=useState("quiz");
  const [qi,setQi]=useState(0);
  const [qs,setQs]=useState([]);
  const [sel,setSel]=useState(null);
  const [ans,setAns]=useState([]);
  const [earned,setEarned]=useState(0);
  const [score,setScore]=useState(0);
  const [mood,setMood]=useState("smile");
  const [anim,setAnim]=useState(false);
  const [prevLv,setPrevLv]=useState(null);
  const [openS,setOpenS]=useState(null);
  const [openN,setOpenN]=useState(null);
  const [selSt,setSelSt]=useState(null);

  const lv=getLv(xp),nxt=getNxt(xp);

  function startQuiz(st){
    const pool=QS.filter(q=>q.st===st.id).sort(()=>Math.random()-0.5);
    setSelSt(st);setQs(pool);setQi(0);setSel(null);
    setAns([]);setEarned(0);setScore(0);setMood("smile");
    setSc("quiz");
  }

  function doAnswer(idx){
    if(sel!==null)return;
    setSel(idx);
    const q=qs[qi],ok=idx===q.a;
    setAns(p=>[...p,{ok,exp:q.exp,cat:q.cat,xp:q.xp}]);
    if(ok){setScore(s=>s+1);setEarned(v=>v+q.xp);setMood("happy");}
    else setMood("surprised");
    setAnim(ok);
    setTimeout(()=>{setAnim(false);setMood(ok?"smile":"neutral");},800);
  }

  function doNext(){
    if(qi+1>=qs.length){
      const pl=getLv(xp),nx=xp+earned,nl=getLv(nx);
      setXp(nx);
      if(nl.level>pl.level){setPrevLv(pl);setTimeout(()=>setSc("lvlup"),200);}
      else setSc("result");
    }else{setQi(q=>q+1);setSel(null);setMood("smile");}
  }

  const q=qs[qi],qc=selSt?.color||"#E94F37";

  const css=`
    @keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
    @keyframes fk{0%,100%{text-shadow:0 0 10px #E94F37}50%{text-shadow:0 0 24px #E94F37,0 0 48px #FFE500}}
    @keyframes lu{0%{transform:scale(.3);opacity:0}70%{transform:scale(1.15)}100%{transform:scale(1);opacity:1}}
    @keyframes gt{0%,100%{text-shadow:0 0 16px #FFE500}50%{text-shadow:0 0 40px #FFE500,0 0 80px #E94F37}}
    @keyframes si{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
  `;

  if(sc==="home") return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:F,padding:14,display:"flex",flexDirection:"column",alignItems:"center"}}>
      <style>{css}</style>
      <div style={{animation:"fl 3s ease-in-out infinite",marginTop:10}}><Weldon lv={lv} mood="smile" anim={false}/></div>
      <div style={{textAlign:"center",marginTop:4}}>
        <div style={{fontSize:8,letterSpacing:7,color:"#E94F37"}}>WELDON'S</div>
        <div style={{fontSize:34,fontWeight:900,color:"#FFE500",letterSpacing:3,animation:"fk 2s infinite"}}>FORGE</div>
        <div style={{fontSize:9,color:"#00D4FF",letterSpacing:2}}>溶接資格RPG学習アプリ</div>
      </div>
      <div style={{marginTop:6,width:"100%",maxWidth:280,textAlign:"center"}}>
        <div style={{color:lv.color,fontSize:13,fontWeight:700}}>{lv.name}</div>
        <div style={{color:"#FFE500",fontSize:10}}>XP: {xp}</div>
        <div style={{margin:"4px 0"}}><Bar xp={xp} lv={lv} nxt={nxt}/></div>
        {nxt&&<div style={{color:"#6B7280",fontSize:9}}>「{nxt.name}」まで {nxt.minXP-xp} XP</div>}
      </div>

      <div style={{display:"flex",gap:5,marginTop:10,width:"100%",maxWidth:280}}>
        {[{id:"quiz",l:"🎮 クイズ"},{id:"tree",l:"🗺️ ツリー"},{id:"cost",l:"💰 コスト"}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,padding:"7px 0",borderRadius:8,border:`1px solid ${tab===t.id?"#E94F37":"#1E3A5F"}`,background:tab===t.id?"#E94F3720":"#0D1B2A",color:tab===t.id?"#FFE500":"#6B7280",fontSize:10,fontWeight:700,cursor:"pointer",fontFamily:F}}>{t.l}</button>
        ))}
      </div>

      {tab==="quiz"&&(
        <div style={{marginTop:10,width:"100%",maxWidth:280,display:"flex",flexDirection:"column",gap:6}}>
          {STAGES.map(s=>{
            const ok=xp>=s.unlockXP;
            const cnt=QS.filter(q=>q.st===s.id).length;
            return(
              <button key={s.id} onClick={()=>ok&&startQuiz(s)} style={{background:ok?`${s.color}18`:"#0A1628",border:`1px solid ${ok?s.color:s.color+"25"}`,borderRadius:11,padding:"10px 12px",display:"flex",alignItems:"center",gap:8,cursor:ok?"pointer":"default",fontFamily:F,opacity:ok?1:0.4}}>
                <span style={{fontSize:16}}>{ok?s.icon:"🔒"}</span>
                <div style={{flex:1,textAlign:"left"}}>
                  <div style={{color:ok?s.color:"#475569",fontSize:9,fontWeight:700}}>{s.label}</div>
                  <div style={{color:"#475569",fontSize:8,marginTop:1}}>{cnt}問 / {ok?"解放済み":`XP ${s.unlockXP}以上で解放`}</div>
                </div>
                {ok&&<span style={{color:s.color,fontSize:10}}>▶</span>}
              </button>
            );
          })}
        </div>
      )}

      {tab==="tree"&&(
        <div style={{marginTop:10,width:"100%",maxWidth:280,display:"flex",flexDirection:"column",gap:4}}>
          {TREE.map((s,si)=>{
            const isO=openS===s.id;
            return(
              <div key={s.id}>
                {si>0&&<div style={{display:"flex",justifyContent:"center"}}><div style={{width:2,height:12,background:`linear-gradient(${TREE[si-1].color},${s.color})`,borderRadius:2,opacity:.5}}/></div>}
                <button onClick={()=>setOpenS(isO?null:s.id)} style={{width:"100%",background:isO?`${s.color}15`:"#0D1B2A",border:`1.5px solid ${isO?s.color:s.color+"35"}`,borderRadius:10,padding:"8px 11px",display:"flex",alignItems:"center",gap:7,cursor:"pointer",fontFamily:F}}>
                  <span style={{fontSize:14}}>{s.icon}</span>
                  <div style={{flex:1,textAlign:"left"}}>
                    <div style={{color:s.color,fontSize:8,letterSpacing:2,fontWeight:700}}>{s.stage}</div>
                    <div style={{color:"#F1F5F9",fontSize:11,fontWeight:700}}>{s.label}</div>
                  </div>
                  <span style={{color:s.color,fontSize:9,background:`${s.color}18`,border:`1px solid ${s.color}`,borderRadius:4,padding:"1px 5px"}}>{s.nodes.length}</span>
                  <span style={{color:s.color,fontSize:9}}>{isO?"▲":"▼"}</span>
                </button>
                {isO&&(
                  <div style={{background:"#060F1A",border:`1px solid ${s.color}18`,borderTop:"none",borderRadius:"0 0 10px 10px",padding:"5px 4px 7px",display:"flex",flexDirection:"column",gap:3}}>
                    {s.nodes.map((n,ni)=>{
                      const k=`${s.id}-${ni}`,isNO=openN===k;
                      return(
                        <div key={k} onClick={()=>setOpenN(isNO?null:k)} style={{background:isNO?`${s.color}0C`:"#0D1B2A",border:`1px solid ${isNO?s.color:"#1E3A5F"}`,borderRadius:8,padding:"7px 9px",cursor:"pointer",animation:"si .25s ease"}}>
                          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                            <div style={{flex:1}}>
                              <div style={{display:"flex",gap:3,marginBottom:2}}>
                                <span style={{background:`${n.tc}20`,border:`1px solid ${n.tc}`,color:n.tc,fontSize:8,padding:"1px 5px",borderRadius:20,fontWeight:700}}>{n.type}</span>
                                {n.route&&<span style={{color:"#94A3B8",fontSize:8,padding:"1px 5px",borderRadius:20,border:"1px solid #374151"}}>{n.route}</span>}
                              </div>
                              <div style={{color:"#F1F5F9",fontSize:11,fontWeight:700}}>{n.name}</div>
                              <div style={{color:"#FFE500",fontSize:9}}>{n.income}</div>
                            </div>
                            <span style={{color:s.color,fontSize:9}}>{isNO?"▲":"▼"}</span>
                          </div>
                          {isNO&&(
                            <div style={{marginTop:7,borderTop:`1px solid ${s.color}18`,paddingTop:7}}>
                              <p style={{color:"#CBD5E1",fontSize:11,lineHeight:1.75,margin:"0 0 6px"}}>{n.desc}</p>
                              <div style={{background:"#0A1628",border:"1px solid #10B98135",borderRadius:6,padding:"5px 8px",marginBottom:4}}>
                                <div style={{color:"#10B981",fontSize:8,fontWeight:700,marginBottom:1}}>💰 費用</div>
                                <div style={{color:"#E2E8F0",fontSize:10,lineHeight:1.6}}>{n.cost}</div>
                              </div>
                              <div style={{background:"#0A1628",border:"1px solid #1E3A5F",borderRadius:6,padding:"5px 8px"}}>
                                <div style={{color:"#00D4FF",fontSize:8,fontWeight:700,marginBottom:1}}>📋 必要条件</div>
                                <div style={{color:"#94A3B8",fontSize:10}}>{n.req}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {tab==="cost"&&(
        <div style={{marginTop:10,width:"100%",maxWidth:280}}>
          {[
            {l:"🔧 現場サポート",c:"#0F766E",items:[["自由研削といし特別教育","3,000〜5,000円"],["低圧電気取扱特別教育","6,000〜12,000円"],["フルハーネス特別教育","5,000〜8,000円"],["酸欠・硫化水素特別教育","6,000〜10,000円"],["粉じん作業特別教育","3,000〜6,000円"],["ガス溶接技能講習","13,000〜16,000円"]]},
            {l:"🏗️ 重機・運搬・高所",c:"#B45309",items:[["玉掛け技能講習","18,000〜25,000円"],["小型移動式クレーン","30,000〜35,000円"],["クレーン・デリック運転士免許","40,000〜150,000円"],["フォークリフト技能講習","30,000〜60,000円"],["高所作業車（10m以上）","40,000〜50,000円"]]},
            {l:"⚡ JIS溶接技能者",c:"#78716C",items:[["アーク溶接特別教育","12,000〜16,000円"],["JIS基本級","23,000〜40,000円"],["JIS専門級","30,000〜50,000円"]]},
            {l:"🔀 専門ルート",c:"#1D4ED8",items:[["AW検定","250,000〜300,000円"],["ボイラー溶接士（普通）","25,700円"],["潜水士免許","8,800円〜"]]},
            {l:"👑 WES管理技術者",c:"#D97706",items:[["溶接作業指導者","約50,000円"],["WES管理2級","84,000〜110,000円"],["WES管理1級","100,000〜130,000円"]]},
            {l:"🌍 国際資格",c:"#7C3AED",items:[["AWS CWI","200,000〜260,000円"],["IIW IWT","300,000〜500,000円+"],["IIW IWE","400,000〜700,000円+"]]},
          ].map((g,gi)=>(
            <div key={gi} style={{marginBottom:10}}>
              <div style={{color:g.c,fontSize:10,fontWeight:700,padding:"4px 8px",background:"#0D1B2A",border:`1px solid ${g.c}40`,borderRadius:6,marginBottom:4}}>{g.l}</div>
              {g.items.map(([name,cost],ii)=>(
                <div key={ii} style={{display:"flex",justifyContent:"space-between",padding:"5px 7px",background:ii%2===0?"#060F1A":"#0A1220",borderRadius:5,marginBottom:2}}>
                  <div style={{color:"#CBD5E1",fontSize:10}}>{name}</div>
                  <div style={{color:"#FFE500",fontSize:10,fontWeight:700}}>{cost}</div>
                </div>
              ))}
            </div>
          ))}
          <div style={{background:"#0D1B2A",border:"1px solid #E94F3740",borderRadius:10,padding:10,marginTop:4}}>
            <div style={{color:"#E94F37",fontSize:10,fontWeight:700,textAlign:"center",marginBottom:6}}>📊 投資総額の目安</div>
            {[["最低限（現場に立つだけ）","〜5万円","#10B981"],["即戦力（サポート資格込み）","〜20万円","#F59E0B"],["専門職（専門資格取得）","〜60万円","#3B82F6"],["管理職（WES管理）","〜80万円","#D97706"],["最高峰（国際資格）","〜200万円+","#7C3AED"]].map(([l,c,col],i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"5px 0",borderBottom:"1px solid #1E3A5F"}}>
                <div style={{color:"#CBD5E1",fontSize:10}}><span style={{color:col,marginRight:4}}>●</span>{l}</div>
                <div style={{color:"#FFE500",fontSize:10,fontWeight:700}}>{c}</div>
              </div>
            ))}
          </div>
          <div style={{height:20}}/>
        </div>
      )}
    </div>
  );

  if(sc==="quiz"&&q) return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:F,padding:14,display:"flex",flexDirection:"column",maxWidth:480,margin:"0 auto"}}>
      <style>{css}</style>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
        <button onClick={()=>setSc("home")} style={{background:"none",border:"1px solid #1E3A5F",borderRadius:6,color:"#6B7280",padding:"4px 8px",cursor:"pointer",fontSize:10,fontFamily:F}}>← 戻る</button>
        <div style={{color:qc,fontSize:9,fontWeight:700}}>{selSt?.label}</div>
        <div style={{color:"#FFE500",fontSize:10}}>XP: {xp+earned}</div>
      </div>
      <div style={{background:"#0D1B2A",borderRadius:4,height:4,marginBottom:10,border:"1px solid #1E3A5F"}}>
        <div style={{width:`${(qi/qs.length)*100}%`,height:"100%",background:qc,borderRadius:4,transition:"width .5s"}}/>
      </div>
      <div style={{color:"#475569",fontSize:9,textAlign:"center",marginBottom:8}}>{qi+1} / {qs.length}問</div>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
        <Weldon lv={lv} mood={mood} anim={anim}/>
        <div>
          <div style={{background:"#1E3A5F",border:`1px solid ${qc}`,borderRadius:5,padding:"2px 7px",color:qc,fontSize:9,display:"inline-block",marginBottom:3}}>{q.cat}</div>
          <div style={{color:"#E94F37",fontSize:10}}>+{q.xp} XP</div>
          <div style={{color:lv.color,fontSize:10,fontWeight:700}}>{lv.name}</div>
        </div>
      </div>
      <div style={{background:"#0D1B2A",border:`1px solid ${qc}30`,borderRadius:10,padding:12,marginBottom:10}}>
        <div style={{color:"#E2E8F0",fontSize:13,lineHeight:1.8}}>{q.q}</div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
        {q.opts.map((o,i)=>{
          let bg="#0D1B2A",border="1px solid #1E3A5F",color="#E2E8F0";
          if(sel!==null){if(i===q.a){bg="#00D4FF10";border="2px solid #00D4FF";color="#00D4FF";}else if(i===sel){bg="#E94F3710";border="2px solid #E94F37";color="#E94F37";}}
          return <button key={i} onClick={()=>doAnswer(i)} disabled={sel!==null} style={{background:bg,border,borderRadius:8,padding:"10px 11px",color,fontSize:12,textAlign:"left",cursor:sel===null?"pointer":"default",fontFamily:F,transition:"all .3s"}}><span style={{color:"#E94F37",marginRight:6}}>{["Ａ","Ｂ","Ｃ","Ｄ"][i]}．</span>{o}</button>;
        })}
      </div>
      {sel!==null&&(
        <>
          <div style={{background:sel===q.a?"#00D4FF0C":"#E94F370C",border:`1px solid ${sel===q.a?"#00D4FF":"#E94F37"}`,borderRadius:8,padding:11,marginBottom:10,animation:"si .3s"}}>
            <div style={{color:sel===q.a?"#00D4FF":"#E94F37",fontWeight:700,marginBottom:3}}>{sel===q.a?`✅ 正解！ +${q.xp} XP`:"❌ 不正解"}</div>
            <div style={{color:"#9CA3AF",fontSize:11,lineHeight:1.6}}>{q.exp}</div>
          </div>
          <button onClick={doNext} style={{background:`linear-gradient(135deg,${qc},#FF6B00)`,border:"none",borderRadius:8,padding:"11px",color:"#fff",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:F,letterSpacing:2}}>{qi+1>=qs.length?"🏁 結果を見る":"次の問題 →"}</button>
        </>
      )}
    </div>
  );

  if(sc==="lvlup") return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0A0A1A,#1A0500)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:F,padding:20,textAlign:"center"}}>
      <style>{css}</style>
      <div style={{animation:"lu .8s cubic-bezier(.4,0,.2,1) forwards"}}><Weldon lv={lv} mood="happy" anim={true}/></div>
      <div style={{marginTop:12,animation:"gt 1.5s infinite"}}>
        <div style={{fontSize:10,color:"#E94F37",letterSpacing:5}}>LEVEL UP!!</div>
        <div style={{fontSize:44,fontWeight:900,color:"#FFE500"}}>Lv.{lv.level}</div>
        <div style={{fontSize:18,color:lv.color,fontWeight:700}}>{lv.name}</div>
      </div>
      <div style={{marginTop:8,color:"#9CA3AF",fontSize:12}}>{prevLv?.name} → <span style={{color:lv.color}}>{lv.name}</span></div>
      {lv.level===2&&<div style={{marginTop:8,background:"#1D4ED820",border:"1px solid #1D4ED8",borderRadius:8,padding:"8px 12px",color:"#93C5FD",fontSize:11}}>🔓 STAGE 2「AW・ボイラー・水中」解放！</div>}
      {lv.level===3&&<div style={{marginTop:8,background:"#D9770620",border:"1px solid #D97706",borderRadius:8,padding:"8px 12px",color:"#FDE68A",fontSize:11}}>🔓 STAGE 3「WES管理技術者」解放！</div>}
      {lv.level===4&&<div style={{marginTop:8,background:"#7C3AED20",border:"1px solid #7C3AED",borderRadius:8,padding:"8px 12px",color:"#C4B5FD",fontSize:11}}>🔓 STAGE 4「国際資格」解放！</div>}
      <button onClick={()=>setSc("result")} style={{marginTop:20,background:"linear-gradient(135deg,#E94F37,#FF6B00)",border:"none",borderRadius:10,padding:"11px 30px",color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:F,letterSpacing:2}}>結果を確認 →</button>
    </div>
  );

  if(sc==="result") return(
    <div style={{minHeight:"100vh",background:BG,fontFamily:F,padding:14,display:"flex",flexDirection:"column",maxWidth:480,margin:"0 auto"}}>
      <style>{css}</style>
      <div style={{textAlign:"center",marginBottom:10}}>
        <div style={{fontSize:9,color:"#E94F37",letterSpacing:4}}>BATTLE RESULT</div>
        <div style={{fontSize:32,fontWeight:900,color:"#FFE500",marginTop:3}}>{score} / {qs.length}</div>
        <div style={{color:"#9CA3AF",fontSize:11}}>+{earned} XP 獲得</div>
      </div>
      <div style={{display:"flex",justifyContent:"center",marginBottom:10}}><Weldon lv={lv} mood={score>=qs.length*0.7?"happy":"neutral"} anim={score>=qs.length*0.7}/></div>
      <div style={{marginBottom:10}}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
          <span style={{color:lv.color,fontSize:11,fontWeight:700}}>{lv.name}</span>
          <span style={{color:"#FFE500",fontSize:10}}>XP: {xp}</span>
        </div>
        <Bar xp={xp} lv={lv} nxt={nxt}/>
        {nxt&&<div style={{color:"#6B7280",fontSize:9,marginTop:2}}>「{nxt.name}」まで {nxt.minXP-xp} XP</div>}
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:10}}>
        {ans.map((a,i)=>(
          <div key={i} style={{background:a.ok?"#00D4FF06":"#E94F3706",border:`1px solid ${a.ok?"#00D4FF20":"#E94F3720"}`,borderRadius:7,padding:8}}>
            <div style={{color:a.ok?"#00D4FF":"#E94F37",fontSize:10,marginBottom:2}}>{a.ok?"✅ 正解":"❌ 不正解"} — {a.cat}{a.ok&&<span style={{color:"#FFE500",marginLeft:4}}>+{a.xp}XP</span>}</div>
            <div style={{color:"#9CA3AF",fontSize:10,lineHeight:1.5}}>{a.exp}</div>
          </div>
        ))}
      </div>
      <div style={{display:"flex",gap:6}}>
        <button onClick={()=>setSc("home")} style={{flex:1,background:"linear-gradient(135deg,#E94F37,#FF6B00)",border:"none",borderRadius:8,padding:"11px 0",color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:F}}>🔥 もう一戦</button>
        <button onClick={()=>{setSc("home");setTab("tree");}} style={{flex:1,background:"#0D1B2A",border:"1px solid #7C3AED",borderRadius:8,padding:"11px 0",color:"#C4B5FD",fontSize:12,cursor:"pointer",fontFamily:F}}>🗺️ ツリー</button>
      </div>
    </div>
  );

  return null;
}
