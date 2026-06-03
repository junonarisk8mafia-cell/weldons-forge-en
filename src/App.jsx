import { useState } from "react";
import { QUIZ_STAGES } from "./questions";

// ============================================================
// キャリアツリーデータ
// ============================================================
const TREE = [
  {id:"s0",stage:"STAGE 0",label:"現場サポート資格",color:"#0F766E",icon:"🔧",nodes:[
    {name:"自由研削といし特別教育",type:"特別教育",tc:"#0F766E",income:"現場必須",cost:"3,000〜5,000円 / 半日〜1日",req:"なし",desc:"グラインダーの砥石取り替えに必須。溶接前後の研磨・バリ取りで毎日使う。"},
    {name:"低圧電気取扱業務特別教育",type:"特別教育",tc:"#0F766E",income:"現場必須",cost:"6,000〜12,000円 / 1日",req:"なし",desc:"溶接機の接続・配線・ブレーカー操作に必要。600V以下の低圧電気の取扱に必須。"},
    {name:"フルハーネス特別教育",type:"特別教育",tc:"#0F766E",income:"高所作業必須",cost:"5,000〜8,000円 / 半日〜1日",req:"なし",desc:"高さ2m以上の高所作業でのフルハーネス使用に必須。2019年法改正で義務化。"},
    {name:"酸欠・硫化水素危険作業特別教育",type:"特別教育",tc:"#D97706",income:"造船・プラント必須",cost:"6,000〜10,000円 / 1日",req:"なし",desc:"タンク・船艙内での溶接作業に必須。密閉空間の溶接は酸欠リスクが高く死亡事故につながる。"},
    {name:"粉じん作業特別教育",type:"特別教育",tc:"#D97706",income:"現場必須",cost:"3,000〜6,000円 / 半日",req:"なし",desc:"2021年の法改正でアーク溶接が特定粉じん作業に追加。多くの現場で受講必須になった。"},
    {name:"ガス溶接技能講習",type:"技能講習",tc:"#E85D04",income:"時給+100〜300円",cost:"13,000〜16,000円 / 3日",req:"満15歳以上",desc:"アセチレン等を使用した溶接・溶断・加熱作業に必要。ガス切断もこの資格。"},
  ]},
  {id:"s0b",stage:"STAGE 0-B",label:"重機・運搬・高所資格",color:"#B45309",icon:"🏗️",nodes:[
    {name:"玉掛け技能講習",type:"技能講習",tc:"#B45309",income:"時給+200〜500円",cost:"18,000〜25,000円 / 3日",req:"満18歳以上",desc:"つり上げ荷重1t以上のクレーン等の玉掛け作業に必須。鉄骨・造船で毎日使う。"},
    {name:"小型移動式クレーン技能講習",type:"技能講習",tc:"#B45309",income:"時給+300〜500円",cost:"30,000〜35,000円 / 4〜5日",req:"満18歳以上",desc:"1t以上5t未満の移動式クレーン運転に必要。玉掛けと一緒に取ると費用と日数を節約できる。"},
    {name:"クレーン・デリック運転士免許",type:"国家免許",tc:"#DC2626",income:"時給+500〜1,000円",cost:"教習所：10〜15万円 / 独学+実技：4〜6万円",req:"満18歳以上",desc:"つり上げ荷重5t以上の天井クレーン・橋形クレーン・デリックの運転に必要な国家免許。"},
    {name:"フォークリフト運転技能講習",type:"技能講習",tc:"#B45309",income:"時給+200〜400円",cost:"普通免許あり：3〜4万円 / なし：4.5〜6万円",req:"満18歳以上",desc:"最大荷重1t以上のフォークリフト運転に必要。工場・造船所・建設現場でほぼ必須。"},
    {name:"高所作業車運転技能講習（10m以上）",type:"技能講習",tc:"#B45309",income:"時給+200〜500円",cost:"40,000〜50,000円 / 3〜4日（10m未満：1〜1.5万円）",req:"満18歳以上",desc:"作業床高さ10m以上の高所作業車の運転に必要。橋梁・鉄骨・プラントの高所溶接で使用。"},
  ]},
  {id:"s1",stage:"STAGE 1",label:"JIS溶接技能者",color:"#78716C",icon:"⚡",nodes:[
    {name:"アーク溶接特別教育",type:"必須",tc:"#DC2626",income:"受講必須",cost:"12,000〜16,000円 / 2〜3日",req:"15歳以上",desc:"労働安全衛生法に基づく安全資格。現場に立つための第一歩。"},
    {name:"JIS溶接技能者 基本級",type:"技能",tc:"#D97706",income:"時給 1,200〜1,500円",cost:"学科3〜5千円 / 実技2〜3.5万円",req:"特別教育修了 / 実務1ヶ月",desc:"下向き溶接の技量評価試験。溶接工の名刺代わり。"},
    {name:"JIS溶接技能者 専門級",type:"技能",tc:"#D97706",income:"時給 1,500〜2,000円",cost:"実技：30,000〜50,000円",req:"基本級 / 実務3ヶ月",desc:"立向・横向・上向・管溶接。N-2P（パイプ全姿勢）合格率30%。"},
  ]},
  {id:"s2",stage:"STAGE 2",label:"専門ルート分岐",color:"#1D4ED8",icon:"🔀",nodes:[
    {name:"AW検定",type:"鉄骨",tc:"#1D4ED8",route:"鉄骨🏗️",income:"時給 2,000〜2,800円",cost:"25〜30万円（会社負担が多い）/ 年1回（6〜9月）",req:"JIS専門級保有",desc:"建築鉄骨溶接の品質保証資格。年1回のみ。ゼネコン案件に必須。"},
    {name:"ボイラー溶接士（普通→特別）",type:"プラント",tc:"#E85D04",route:"プラント🏭",income:"時給 2,200〜3,000円",cost:"学科6,800円 / 実技18,900円（普通）21,800円（特別）",req:"溶接実務1年以上",desc:"普通（板厚25mm以下）→特別（全作業）の国家資格。プラント・圧力容器・発電設備に必須。"},
    {name:"潜水士免許",type:"水中",tc:"#0891B2",route:"水中🌊",income:"時給 3,000〜4,000円+",cost:"学科8,800円 / ダイビング実技：別途5〜10万円",req:"JIS専門級 / 18歳以上",desc:"筆記のみ合格率80%。JIS専門級と組み合わせで水中溶接工へ。年収1,000万超も現実。"},
  ]},
  {id:"s3",stage:"STAGE 3",label:"現場リーダー職",color:"#D97706",icon:"👑",nodes:[
    {name:"溶接作業指導者",type:"監督",tc:"#D97706",income:"時給 2,500〜3,500円",cost:"約50,000円 / 4日間講習",req:"JIS資格3年以上",desc:"現場の職長・班長クラス。技能者と管理技術者の中間。"},
    {name:"溶接管理技術者 2級",type:"管理",tc:"#7C3AED",income:"時給 3,000〜4,000円",cost:"受験料5.4万円 / 講習3〜5万円",req:"高卒+実務3年 / 大卒+実務1年",desc:"溶接作業の監督・指導・品質管理。工場認定・官公庁工事に必須。"},
    {name:"溶接管理技術者 1級",type:"管理",tc:"#7C3AED",income:"時給 4,000〜5,000円",cost:"受験料5.4万円 / 講習4〜6万円",req:"WES管理2級+実務経験",desc:"専門技術分野の職務担当。記述式試験。橋梁・造船・プラント全対応。"},
    {name:"溶接管理技術者 特別級",type:"管理",tc:"#7C3AED",income:"年収 600〜900万円",cost:"受験料5.4万円 / 口述試験あり",req:"WES管理1級+実務経験",desc:"溶接全般の計画・監督・品質管理を統括。小論文＋口述試験。現場の最高責任者。"},
  ]},
  {id:"s4",stage:"STAGE 4",label:"国際資格 最高峰",color:"#7C3AED",icon:"🌍",nodes:[
    {name:"AWS CWI",type:"AWS",tc:"#DC2626",route:"AWS🇺🇸",income:"時給 4,000〜6,000円",cost:"受験料5.4万円 / 講習15〜20万円",req:"25歳以上 / JIS資格 / 実務5年+",desc:"溶接品質・規格適合の検査官資格。全産業・全世界で通用する検査官証明。"},
    {name:"IIW IWT",type:"IIW",tc:"#059669",route:"IIW🌐",income:"年収 1,000万〜",cost:"教育訓練費：30〜50万円+",req:"IWS+技術面接合格",desc:"世界中で通用する溶接技術者の最高称号の一つ。技術面接・筆記・プロジェクトワーク。"},
    {name:"IIW IWE",type:"IIW",tc:"#059669",route:"IIW🌐",income:"年収 1,200万〜",cost:"教育訓練費：40〜70万円+",req:"理工系学位+所定訓練+実務",desc:"国際溶接エンジニア。設計・研究・開発レベルの最上位資格。"},
  ]},
];

const LEVELS = [
  {level:1, name:"見習い溶接工", minXP:0, color:"#92400E",
   evolveMsg:"溶接の世界へようこそ！WELDONが目覚めた！",
   weldonColor:"#E74C3C", helmetColor:"#7F8C8D"},
  {level:2, name:"一人前溶接工", minXP:250, color:"#1D4ED8",
   evolveMsg:"一人前に成長！WELDONがパワーアップ！",
   weldonColor:"#2980B9", helmetColor:"#2C3E50"},
  {level:3, name:"熟練溶接工", minXP:500, color:"#D97706",
   evolveMsg:"熟練の技を習得！WELDONに炎が宿った！",
   weldonColor:"#E67E22", helmetColor:"#E74C3C"},
  {level:4, name:"上級溶接工", minXP:800, color:"#7C3AED",
   evolveMsg:"上級者の域へ！WELDONが紫の輝きを放つ！",
   weldonColor:"#8E44AD", helmetColor:"#6C3483"},
  {level:5, name:"溶接マスター", minXP:1200, color:"#D4AC0D",
   evolveMsg:"伝説の溶接マスター誕生！WELDONが黄金に輝く！！",
   weldonColor:"#D4AC0D", helmetColor:"#B7950B"},
];

const getLv = xp => { for(let i=LEVELS.length-1;i>=0;i--) if(xp>=LEVELS[i].minXP) return LEVELS[i]; return LEVELS[0]; };
const getNxt = xp => { const c=getLv(xp); return LEVELS.find(l=>l.level===c.level+1)||null; };

// ============================================================
// WELDON キャラクター（進化対応）
// ============================================================
function Weldon({lv, mood, anim, size=110, showEvolve=false}){
  const col = lv?.weldonColor || "#E74C3C";
  const hcol = lv?.helmetColor || "#7F8C8D";
  const lvn = lv?.level || 1;
  const mp = {
    smile:"M44,56 Q53,63 62,56",
    happy:"M42,54 Q53,66 64,54",
    surprised:"M49,54 Q53,61 57,54 Q53,64 49,54Z",
    neutral:"M46,58 L60,58"
  };
  const hasCrown = lvn >= 5;
  const hasFlame = lvn >= 3;

  return (
    <div style={{position:"relative",display:"inline-block"}}>
      {showEvolve && (
        <div style={{
          position:"absolute",top:"-20px",left:"50%",transform:"translateX(-50%)",
          background:"linear-gradient(135deg,#FFD700,#FF6B00)",
          borderRadius:20,padding:"4px 12px",
          fontSize:10,fontWeight:900,color:"#fff",
          whiteSpace:"nowrap",zIndex:10,
          boxShadow:"0 2px 8px rgba(255,107,0,0.5)"
        }}>✨ EVOLVED!</div>
      )}
      <svg width={size} height={size*1.3} viewBox="0 0 110 143" style={{
        filter:`drop-shadow(0 0 ${lvn*4}px ${col})`,
        transform:anim?"scale(1.12) rotate(-5deg)":"scale(1)",
        transition:"transform .3s ease, filter .5s ease",
        overflow:"visible"
      }}>
        {/* Aura for high levels */}
        {lvn>=3 && <ellipse cx="55" cy="130" rx="35" ry="8" fill={`${col}25`}><animate attributeName="rx" dur="2s" repeatCount="indefinite" values="28;40;28"/></ellipse>}
        {lvn>=5 && <ellipse cx="55" cy="130" rx="40" ry="10" fill={`${col}15`}><animate attributeName="rx" dur="1.5s" repeatCount="indefinite" values="35;48;35"/></ellipse>}

        {/* Flame effect Lv3+ */}
        {hasFlame && <>
          <path d="M38,112 Q32,100 36,88 Q42,105 40,112Z" fill={col} opacity="0.6"><animate attributeName="d" dur="0.6s" repeatCount="indefinite" values="M38,112 Q32,100 36,88 Q42,105 40,112Z;M38,112 Q30,98 34,85 Q44,108 40,112Z;M38,112 Q32,100 36,88 Q42,105 40,112Z"/></path>
          <path d="M72,112 Q78,100 74,88 Q68,105 70,112Z" fill={col} opacity="0.6"><animate attributeName="d" dur="0.7s" repeatCount="indefinite" values="M72,112 Q78,100 74,88 Q68,105 70,112Z;M72,112 Q80,98 76,85 Q66,108 70,112Z;M72,112 Q78,100 74,88 Q68,105 70,112Z"/></path>
        </>}

        {/* Legs */}
        <path d="M40,108 Q29,111 27,120 Q25,129 36,130 Q45,131 43,123 Q41,117 33,117 Q27,117 29,123" fill="none" stroke="#555" strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M70,108 Q81,111 83,120 Q85,129 74,130 Q65,131 67,123 Q69,117 77,117 Q83,117 81,123" fill="none" stroke="#555" strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M43,99 Q39,104 40,108" fill="none" stroke="#444" strokeWidth="5.5" strokeLinecap="round"/>
        <path d="M67,99 Q71,104 70,108" fill="none" stroke="#444" strokeWidth="5.5" strokeLinecap="round"/>

        {/* Body */}
        <rect x="29" y="52" width="52" height="50" rx="13" fill={`${col}CC`}/>
        <rect x="31" y="54" width="48" height="46" rx="12" fill={col}/>
        <rect x="32" y="55" width="22" height="42" rx="11" fill="white" opacity="0.15"/>
        <rect x="35" y="82" width="40" height="14" rx="4" fill={`${col}AA`}/>
        <text x="55" y="93" textAnchor="middle" fill="white" fontSize="7.5" fontWeight="900" letterSpacing="2" fontFamily="monospace" opacity="0.9">MIG</text>

        {/* Face */}
        <rect x="32" y="54" width="46" height="28" rx="12" fill={col}/>
        <rect x="37" y="54" width="36" height="9" rx="7" fill={`${col}CC`}/>

        {/* Helmet */}
        <rect x="28" y="30" width="54" height="28" rx="10" fill={hcol}/>
        <rect x="30" y="32" width="50" height="22" rx="9" fill={`${hcol}DD`}/>
        <rect x="26" y="48" width="58" height="8" rx="4" fill={`${hcol}BB`}/>

        {/* Visor */}
        <rect x="33" y="36" width="44" height="16" rx="5" fill="#1A1A2E"/>
        <rect x="34" y="37" width="42" height="14" rx="4" fill="#0D1B2A"/>

        {/* Eyes */}
        <ellipse cx="46" cy="44" rx={mood==="surprised"?5.5:4.5} ry={mood==="surprised"?5:3.5} fill="white"/>
        <ellipse cx="64" cy="44" rx={mood==="surprised"?5.5:4.5} ry={mood==="surprised"?5:3.5} fill="white"/>
        <ellipse cx="47" cy="45" rx="2.5" ry="2.5" fill={lvn>=4?"#C084FC":lvn>=3?"#60A5FA":"#1A1A1A"}/>
        <ellipse cx="65" cy="45" rx="2.5" ry="2.5" fill={lvn>=4?"#C084FC":lvn>=3?"#60A5FA":"#1A1A1A"}/>
        <circle cx="48.5" cy="44" r="1" fill="white"/><circle cx="66.5" cy="44" r="1" fill="white"/>

        {/* Mouth */}
        <path d={mp[mood]||mp.smile} fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" opacity="0.8"/>

        {/* Goose neck */}
        <path d="M55,30 Q57,20 60,13 Q63,7 70,4 Q76,1 80,6" fill="none" stroke="#444" strokeWidth="7" strokeLinecap="round"/>
        <path d="M55,30 Q57,20 60,13 Q63,7 70,4 Q76,1 80,6" fill="none" stroke="#666" strokeWidth="4.5" strokeLinecap="round" strokeDasharray="3,2.5"/>

        {/* Nozzle */}
        <rect x="76" y="1" width="13" height="9" rx="3" fill="#BDC3C7"/>
        <rect x="76" y="7" width="13" height="3" rx="1.5" fill="#D4AC0D"/>
        <ellipse cx="82" cy="1" rx="4" ry="2" fill="#7F8C8D"/>
        {/* Spark */}
        <circle cx="82" cy="-1" r="2.5" fill="#FFE500"><animate attributeName="opacity" dur="0.2s" repeatCount="indefinite" values="1;0.1;1"/></circle>
        <line x1="82" y1="-1" x2="77" y2="-6" stroke="#00D4FF" strokeWidth="1.5"><animate attributeName="opacity" dur="0.17s" repeatCount="indefinite" values="1;0;1"/></line>
        <line x1="82" y1="-1" x2="87" y2="-6" stroke="#FFE500" strokeWidth="1.5"><animate attributeName="opacity" dur="0.14s" repeatCount="indefinite" values="0;1;0"/></line>

        {/* Arms */}
        <path d="M29,66 Q17,62 13,71 Q10,78 17,81" fill="none" stroke="#444" strokeWidth="5.5" strokeLinecap="round"/>
        <ellipse cx="18" cy="82" rx="7.5" ry="5.5" fill={col}/><ellipse cx="12" cy="79" rx="2.8" ry="1.8" fill={`${col}CC`}/>
        <path d="M81,66 Q93,62 97,71 Q100,78 93,81" fill="none" stroke="#444" strokeWidth="5.5" strokeLinecap="round"/>
        <ellipse cx="92" cy="82" rx="7.5" ry="5.5" fill={col}/><ellipse cx="98" cy="79" rx="2.8" ry="1.8" fill={`${col}CC`}/>

        {/* Level badge */}
        <circle cx="90" cy="57" r="11" fill="white" stroke={col} strokeWidth="2"/>
        <text x="90" y="61.5" textAnchor="middle" fill={col} fontSize="7.5" fontWeight="900" fontFamily="monospace">Lv{lvn}</text>

        {/* Crown Lv5 */}
        {hasCrown && <g transform="translate(43,0)">
          <polygon points="12,4 6,14 0,8 0,20 24,20 24,8 18,14" fill="#FFD700" stroke="#FF8C00" strokeWidth="1"/>
          <circle cx="12" cy="4" r="2.5" fill="#FF4500"/>
          <circle cx="0" cy="8" r="2" fill="#FFD700"/>
          <circle cx="24" cy="8" r="2" fill="#FFD700"/>
        </g>}
      </svg>
    </div>
  );
}

function Bar({xp,lv,nxt}){
  const p=Math.min(100,((xp-lv.minXP)/((nxt?.minXP||lv.minXP+300)-lv.minXP))*100);
  return(
    <div style={{background:"#E5E7EB",borderRadius:8,height:12,overflow:"hidden",border:"1px solid #D1D5DB"}}>
      <div style={{width:`${p}%`,height:"100%",background:`linear-gradient(90deg,${lv.color},${lv.color}99)`,borderRadius:8,transition:"width .8s ease",boxShadow:`0 0 6px ${lv.color}50`}}/>
    </div>
  );
}

const F = "'Courier New',monospace";
const css = `
  @keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  @keyframes fk{0%,100%{text-shadow:0 0 8px #E85D04}50%{text-shadow:0 0 20px #E85D04,0 0 40px #FFB800}}
  @keyframes lu{0%{transform:scale(.3) rotate(-10deg);opacity:0}60%{transform:scale(1.2) rotate(3deg)}100%{transform:scale(1) rotate(0deg);opacity:1}}
  @keyframes gt{0%,100%{text-shadow:0 0 12px #D4AC0D}50%{text-shadow:0 0 30px #D4AC0D,0 0 60px #E85D04}}
  @keyframes si{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
  @keyframes sparkle{0%,100%{opacity:0;transform:scale(0)}50%{opacity:1;transform:scale(1)}}
  @keyframes evolve{0%{transform:scale(0.5) rotate(-20deg);opacity:0}50%{transform:scale(1.3) rotate(5deg);opacity:1}100%{transform:scale(1) rotate(0deg);opacity:1}}
`;

export default function App(){
  const [sc,setSc] = useState("home");
  const [xp,setXp] = useState(0);
  const [tab,setTab] = useState("quiz");
  const [qi,setQi] = useState(0);
  const [qs,setQs] = useState([]);
  const [sel,setSel] = useState(null);
  const [ans,setAns] = useState([]);
  const [earned,setEarned] = useState(0);
  const [score,setScore] = useState(0);
  const [mood,setMood] = useState("smile");
  const [anim,setAnim] = useState(false);
  const [prevLv,setPrevLv] = useState(null);
  const [openS,setOpenS] = useState(null);
  const [openN,setOpenN] = useState(null);
  const [selSt,setSelSt] = useState(null);
  const [showEvolve,setShowEvolve] = useState(false);

  const lv=getLv(xp), nxt=getNxt(xp);

  function startQuiz(st){
    setSelSt(st);
    setQs([...st.questions].sort(()=>Math.random()-0.5).slice(0,10));
    setQi(0);setSel(null);setAns([]);setEarned(0);setScore(0);setMood("smile");
    setSc("quiz");
  }

  function doAnswer(idx){
    if(sel!==null) return;
    setSel(idx);
    const q=qs[qi], ok=idx===q.a;
    setAns(p=>[...p,{ok,exp:q.exp,cat:q.cat,xp:q.xp}]);
    if(ok){setScore(s=>s+1);setEarned(v=>v+q.xp);setMood("happy");}
    else setMood("surprised");
    setAnim(ok);
    setTimeout(()=>{setAnim(false);setMood(ok?"smile":"neutral");},900);
  }

  function doNext(){
    if(qi+1>=qs.length){
      const pl=getLv(xp), nx=xp+earned, nl=getLv(nx);
      setXp(nx);
      if(nl.level>pl.level){
        setPrevLv(pl);
        setShowEvolve(true);
        setTimeout(()=>setSc("lvlup"),300);
      } else setSc("result");
    } else {
      setQi(q=>q+1);setSel(null);setMood("smile");
    }
  }

  const q=qs[qi], qc=selSt?.color||"#E85D04";

  // ── HOME ──
  if(sc==="home") return(
    <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:F}}>
      <style>{css}</style>
      {/* Header */}
      <div style={{background:"linear-gradient(135deg,#1E293B,#0F172A)",padding:"20px 16px 24px",textAlign:"center"}}>
        <div style={{animation:"fl 3s ease-in-out infinite",display:"inline-block"}}>
          <Weldon lv={lv} mood="smile" anim={false} size={110}/>
        </div>
        <div style={{marginTop:4}}>
          <div style={{fontSize:9,letterSpacing:7,color:"#E85D04",opacity:.9}}>WELDON'S</div>
          <div style={{fontSize:34,fontWeight:900,color:"#FFE500",letterSpacing:3,animation:"fk 2.2s infinite"}}>FORGE</div>
          <div style={{fontSize:9,color:"#94A3B8",letterSpacing:2}}>溶接資格RPG学習アプリ</div>
        </div>
        {/* Status */}
        <div style={{marginTop:12,background:"rgba(255,255,255,0.08)",borderRadius:12,padding:"10px 16px",maxWidth:280,margin:"12px auto 0"}}>
          <div style={{color:lv.color,fontSize:14,fontWeight:900}}>{lv.name}</div>
          <div style={{color:"#FFE500",fontSize:11,marginTop:2}}>XP: {xp}</div>
          <div style={{margin:"6px 0"}}><Bar xp={xp} lv={lv} nxt={nxt}/></div>
          {nxt&&<div style={{color:"#94A3B8",fontSize:9}}>「{nxt.name}」まで {nxt.minXP-xp} XP</div>}
        </div>
      </div>

      {/* Tabs */}
      <div style={{display:"flex",gap:0,borderBottom:"2px solid #E2E8F0",background:"white"}}>
        {[{id:"quiz",l:"🎮 クイズ"},{id:"tree",l:"🗺️ ツリー"},{id:"cost",l:"💰 コスト"}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            flex:1,padding:"12px 0",border:"none",
            borderBottom:`3px solid ${tab===t.id?qc:"transparent"}`,
            background:"white",color:tab===t.id?"#1E293B":"#94A3B8",
            fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:F,
            transition:"all .2s"
          }}>{t.l}</button>
        ))}
      </div>

      <div style={{padding:"14px 14px 40px",maxWidth:400,margin:"0 auto"}}>

        {/* クイズ */}
        {tab==="quiz"&&(
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <div style={{background:"#FFF7ED",border:"1px solid #FED7AA",borderRadius:10,padding:"10px 14px",marginBottom:4}}>
              <div style={{color:"#C2410C",fontSize:10,fontWeight:700}}>💡 各ステージ20問から10問出題</div>
              <div style={{color:"#7C3AED",fontSize:9,marginTop:2}}>XPを稼いで次のSTAGEを解放しよう！</div>
            </div>
            {QUIZ_STAGES.map(s=>{
              const ok=xp>=s.unlockXP;
              return(
                <button key={s.stageId} onClick={()=>ok&&startQuiz(s)} style={{
                  background:ok?"white":"#F8FAFC",
                  border:`2px solid ${ok?s.color:"#E2E8F0"}`,
                  borderRadius:14,padding:"14px 16px",
                  display:"flex",alignItems:"center",gap:12,
                  cursor:ok?"pointer":"default",fontFamily:F,
                  boxShadow:ok?"0 2px 8px rgba(0,0,0,0.08)":"none",
                  transition:"all .2s",opacity:ok?1:0.5
                }}>
                  <div style={{
                    width:44,height:44,borderRadius:12,
                    background:ok?`${s.color}15`:"#F1F5F9",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:20,border:`1px solid ${ok?s.color+"30":"#E2E8F0"}`
                  }}>{ok?s.icon:"🔒"}</div>
                  <div style={{flex:1,textAlign:"left"}}>
                    <div style={{color:ok?s.color:"#94A3B8",fontSize:10,fontWeight:900,letterSpacing:1}}>{s.label}</div>
                    <div style={{color:"#64748B",fontSize:9,marginTop:2}}>
                      {s.questions.length}問収録 / {ok?"解放済み ✓":`XP ${s.unlockXP}以上で解放`}
                    </div>
                  </div>
                  {ok&&<div style={{color:s.color,fontSize:18,fontWeight:900}}>▶</div>}
                </button>
              );
            })}
          </div>
        )}

        {/* ツリー */}
        {tab==="tree"&&(
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            <div style={{background:"#F0FDF4",border:"1px solid #86EFAC",borderRadius:10,padding:"10px 14px",marginBottom:4}}>
              <div style={{color:"#166534",fontSize:10,fontWeight:700}}>💡 STAGE 0から取ろう</div>
              <div style={{color:"#166534",fontSize:9,lineHeight:1.6,marginTop:2}}>グラインダー・電気・玉掛けは溶接資格より先に取るべき。安くて早い。</div>
            </div>
            {TREE.map((s,si)=>{
              const isO=openS===s.id;
              return(
                <div key={s.id}>
                  {si>0&&<div style={{display:"flex",justifyContent:"center",margin:"2px 0"}}>
                    <div style={{width:2,height:14,background:`linear-gradient(${TREE[si-1].color},${s.color})`,borderRadius:2,opacity:.4}}/>
                  </div>}
                  <button onClick={()=>setOpenS(isO?null:s.id)} style={{
                    width:"100%",background:isO?`${s.color}08`:"white",
                    border:`2px solid ${isO?s.color:s.color+"30"}`,
                    borderRadius:12,padding:"11px 14px",
                    display:"flex",alignItems:"center",gap:10,
                    cursor:"pointer",fontFamily:F,
                    boxShadow:"0 1px 4px rgba(0,0,0,0.06)",transition:"all .2s"
                  }}>
                    <span style={{fontSize:16}}>{s.icon}</span>
                    <div style={{flex:1,textAlign:"left"}}>
                      <div style={{color:s.color,fontSize:9,letterSpacing:2,fontWeight:700}}>{s.stage}</div>
                      <div style={{color:"#1E293B",fontSize:12,fontWeight:700}}>{s.label}</div>
                    </div>
                    <span style={{color:s.color,fontSize:9,background:`${s.color}15`,border:`1px solid ${s.color}30`,borderRadius:5,padding:"2px 6px"}}>{s.nodes.length}資格</span>
                    <span style={{color:s.color,fontSize:10}}>{isO?"▲":"▼"}</span>
                  </button>
                  {isO&&(
                    <div style={{background:"#FAFAFA",border:`1px solid ${s.color}20`,borderTop:"none",borderRadius:"0 0 12px 12px",padding:"8px 6px 10px",display:"flex",flexDirection:"column",gap:5}}>
                      {s.nodes.map((n,ni)=>{
                        const k=`${s.id}-${ni}`,isNO=openN===k;
                        return(
                          <div key={k} onClick={()=>setOpenN(isNO?null:k)} style={{
                            background:isNO?`${s.color}08`:"white",
                            border:`1px solid ${isNO?s.color:"#E2E8F0"}`,
                            borderRadius:10,padding:"10px 12px",cursor:"pointer",
                            transition:"all .2s",animation:"si .25s ease"
                          }}>
                            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                              <div style={{flex:1}}>
                                <div style={{display:"flex",gap:4,marginBottom:3,flexWrap:"wrap"}}>
                                  <span style={{background:`${n.tc}15`,border:`1px solid ${n.tc}40`,color:n.tc,fontSize:8,padding:"1px 6px",borderRadius:20,fontWeight:700}}>{n.type}</span>
                                  {n.route&&<span style={{color:"#64748B",fontSize:8,padding:"1px 6px",borderRadius:20,border:"1px solid #E2E8F0",background:"#F8FAFC"}}>{n.route}</span>}
                                </div>
                                <div style={{color:"#1E293B",fontSize:12,fontWeight:700}}>{n.name}</div>
                                <div style={{color:s.color,fontSize:10,fontWeight:700,marginTop:1}}>{n.income}</div>
                              </div>
                              <span style={{color:s.color,fontSize:10,marginLeft:6}}>{isNO?"▲":"▼"}</span>
                            </div>
                            {isNO&&(
                              <div style={{marginTop:8,borderTop:`1px solid ${s.color}20`,paddingTop:8,animation:"si .2s ease"}}>
                                <p style={{color:"#475569",fontSize:11,lineHeight:1.8,margin:"0 0 8px"}}>{n.desc}</p>
                                <div style={{background:"#F0FDF4",border:"1px solid #86EFAC",borderRadius:8,padding:"8px 10px",marginBottom:6}}>
                                  <div style={{color:"#166534",fontSize:9,fontWeight:700,marginBottom:2}}>💰 費用目安</div>
                                  <div style={{color:"#1E293B",fontSize:11,lineHeight:1.6}}>{n.cost}</div>
                                </div>
                                <div style={{background:"#EFF6FF",border:"1px solid #BFDBFE",borderRadius:8,padding:"8px 10px"}}>
                                  <div style={{color:"#1D4ED8",fontSize:9,fontWeight:700,marginBottom:2}}>📋 必要条件</div>
                                  <div style={{color:"#1E293B",fontSize:11}}>{n.req}</div>
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

        {/* コスト */}
        {tab==="cost"&&(
          <div>
            {[
              {l:"🔧 現場サポート資格",c:"#0F766E",items:[["自由研削といし特別教育","3,000〜5,000円"],["低圧電気取扱特別教育","6,000〜12,000円"],["フルハーネス特別教育","5,000〜8,000円"],["酸欠・硫化水素特別教育","6,000〜10,000円"],["粉じん作業特別教育","3,000〜6,000円"],["ガス溶接技能講習","13,000〜16,000円"]]},
              {l:"🏗️ 重機・運搬・高所",c:"#B45309",items:[["玉掛け技能講習","18,000〜25,000円"],["小型移動式クレーン","30,000〜35,000円"],["クレーン・デリック運転士免許","40,000〜150,000円"],["フォークリフト技能講習","30,000〜60,000円"],["高所作業車（10m以上）","40,000〜50,000円"]]},
              {l:"⚡ JIS溶接技能者",c:"#78716C",items:[["アーク溶接特別教育","12,000〜16,000円"],["JIS基本級","23,000〜40,000円"],["JIS専門級","30,000〜50,000円"]]},
              {l:"🔀 専門ルート",c:"#1D4ED8",items:[["AW検定","250,000〜300,000円"],["ボイラー溶接士（普通）","25,700円"],["潜水士免許","8,800円〜"]]},
              {l:"👑 WES管理技術者",c:"#D97706",items:[["溶接作業指導者","約50,000円"],["WES管理2級","84,000〜110,000円"],["WES管理1級","100,000〜130,000円"]]},
              {l:"🌍 国際資格",c:"#7C3AED",items:[["AWS CWI","200,000〜260,000円"],["IIW IWT","300,000〜500,000円+"],["IIW IWE","400,000〜700,000円+"]]},
            ].map((g,gi)=>(
              <div key={gi} style={{marginBottom:14}}>
                <div style={{color:g.c,fontSize:11,fontWeight:700,padding:"7px 12px",background:"white",border:`1px solid ${g.c}30`,borderRadius:8,marginBottom:6,boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>{g.l}</div>
                {g.items.map(([name,cost],ii)=>(
                  <div key={ii} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 10px",background:ii%2===0?"#F8FAFC":"white",borderRadius:7,marginBottom:2,border:"1px solid #F1F5F9"}}>
                    <div style={{color:"#374151",fontSize:11}}>{name}</div>
                    <div style={{color:g.c,fontSize:11,fontWeight:700}}>{cost}</div>
                  </div>
                ))}
              </div>
            ))}
            <div style={{background:"white",border:"2px solid #E85D04",borderRadius:14,padding:14,marginTop:8,boxShadow:"0 2px 8px rgba(232,93,4,0.1)"}}>
              <div style={{color:"#E85D04",fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8}}>📊 投資総額の目安</div>
              {[["最低限（現場に立つだけ）","〜5万円","#0F766E"],["即戦力（サポート資格込み）","〜20万円","#D97706"],["専門職（専門資格取得）","〜60万円","#1D4ED8"],["管理職（WES管理）","〜80万円","#D97706"],["最高峰（国際資格）","〜200万円+","#7C3AED"]].map(([l,c,col],i)=>(
                <div key={i} style={{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid #F1F5F9"}}>
                  <div style={{color:"#374151",fontSize:11}}><span style={{color:col,marginRight:5}}>●</span>{l}</div>
                  <div style={{color:col,fontSize:12,fontWeight:700}}>{c}</div>
                </div>
              ))}
            </div>
            <div style={{height:20}}/>
          </div>
        )}
      </div>
    </div>
  );

  // ── QUIZ ──
  if(sc==="quiz"&&q) return(
    <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:F}}>
      <style>{css}</style>
      {/* Quiz Header */}
      <div style={{background:"linear-gradient(135deg,#1E293B,#0F172A)",padding:"14px 16px"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
          <button onClick={()=>setSc("home")} style={{background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,color:"white",padding:"6px 12px",cursor:"pointer",fontSize:11,fontFamily:F}}>← 戻る</button>
          <div style={{color:qc,fontSize:10,fontWeight:700}}>{selSt?.label}</div>
          <div style={{background:"rgba(255,220,0,0.15)",border:"1px solid #FFE500",borderRadius:8,padding:"4px 10px",color:"#FFE500",fontSize:11,fontWeight:700}}>XP: {xp+earned}</div>
        </div>
        {/* Progress */}
        <div style={{background:"rgba(255,255,255,0.1)",borderRadius:6,height:6,overflow:"hidden"}}>
          <div style={{width:`${(qi/qs.length)*100}%`,height:"100%",background:qc,borderRadius:6,transition:"width .5s",boxShadow:`0 0 8px ${qc}`}}/>
        </div>
        <div style={{color:"#94A3B8",fontSize:9,textAlign:"center",marginTop:4}}>{qi+1} / {qs.length}問</div>
      </div>

      <div style={{padding:"14px",maxWidth:480,margin:"0 auto"}}>
        {/* WELDON + info */}
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14,background:"white",borderRadius:14,padding:"12px 14px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:"1px solid #F1F5F9"}}>
          <Weldon lv={lv} mood={mood} anim={anim} size={80}/>
          <div>
            <div style={{background:`${qc}15`,border:`1px solid ${qc}40`,borderRadius:6,padding:"3px 10px",color:qc,fontSize:10,fontWeight:700,display:"inline-block",marginBottom:5}}>{q.cat}</div>
            <div style={{color:"#E85D04",fontSize:12,fontWeight:700}}>+{q.xp} XP</div>
            <div style={{color:lv.color,fontSize:11,fontWeight:900}}>{lv.name}</div>
          </div>
        </div>

        {/* Question */}
        <div style={{background:"white",border:`2px solid ${qc}25`,borderRadius:14,padding:16,marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
          <div style={{color:"#1E293B",fontSize:14,lineHeight:1.85,fontWeight:600}}>{q.q}</div>
        </div>

        {/* Options */}
        <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:14}}>
          {q.opts.map((o,i)=>{
            let bg="white",border="1px solid #E2E8F0",color="#374151",shadow="0 1px 3px rgba(0,0,0,0.05)";
            if(sel!==null){
              if(i===q.a){bg="#F0FDF4";border="2px solid #16A34A";color="#166534";shadow="0 2px 8px rgba(22,163,74,0.15)";}
              else if(i===sel){bg="#FEF2F2";border="2px solid #DC2626";color="#991B1B";shadow="0 2px 8px rgba(220,38,38,0.15)";}
            }
            return(
              <button key={i} onClick={()=>doAnswer(i)} disabled={sel!==null} style={{
                background:bg,border,borderRadius:12,padding:"13px 15px",
                color,fontSize:13,textAlign:"left",cursor:sel===null?"pointer":"default",
                fontFamily:F,transition:"all .25s ease",boxShadow:shadow,fontWeight:600
              }}>
                <span style={{color:qc,marginRight:8,fontWeight:900}}>{["Ａ","Ｂ","Ｃ","Ｄ"][i]}．</span>{o}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {sel!==null&&(
          <>
            <div style={{
              background:sel===q.a?"#F0FDF4":"#FEF2F2",
              border:`2px solid ${sel===q.a?"#16A34A":"#DC2626"}`,
              borderRadius:12,padding:14,marginBottom:14,animation:"si .3s"
            }}>
              <div style={{color:sel===q.a?"#166534":"#991B1B",fontWeight:900,marginBottom:5,fontSize:13}}>
                {sel===q.a?`✅ 正解！ +${q.xp} XP 獲得`:"❌ 不正解"}
              </div>
              <div style={{color:"#475569",fontSize:12,lineHeight:1.7}}>{q.exp}</div>
            </div>
            <button onClick={doNext} style={{
              width:"100%",background:`linear-gradient(135deg,${qc},${qc}CC)`,
              border:"none",borderRadius:12,padding:"14px",
              color:"#fff",fontSize:14,fontWeight:900,cursor:"pointer",
              fontFamily:F,letterSpacing:2,boxShadow:`0 4px 14px ${qc}40`
            }}>{qi+1>=qs.length?"🏁 結果を見る →":"次の問題 →"}</button>
          </>
        )}
      </div>
    </div>
  );

  // ── LEVEL UP ──
  if(sc==="lvlup") return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0F172A,#1E293B)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:F,padding:20,textAlign:"center"}}>
      <style>{css}</style>
      {/* Sparkles */}
      {[...Array(8)].map((_,i)=>(
        <div key={i} style={{position:"absolute",left:`${10+i*12}%`,top:`${15+((i*23)%70)}%`,fontSize:16,animation:`sparkle ${0.8+i*0.3}s ${i*0.2}s infinite`}}>✨</div>
      ))}
      <div style={{animation:"evolve .8s cubic-bezier(.34,1.56,.64,1) forwards"}}>
        <Weldon lv={lv} mood="happy" anim={true} size={150} showEvolve={true}/>
      </div>
      <div style={{marginTop:16,animation:"gt 1.5s infinite"}}>
        <div style={{fontSize:11,color:"#E85D04",letterSpacing:6,marginBottom:4}}>LEVEL UP!!</div>
        <div style={{fontSize:52,fontWeight:900,color:"#FFE500"}}>Lv.{lv.level}</div>
        <div style={{fontSize:20,color:lv.color,fontWeight:900,marginTop:4}}>{lv.name}</div>
      </div>
      <div style={{marginTop:10,color:"#94A3B8",fontSize:12}}>{prevLv?.name} → <span style={{color:lv.color,fontWeight:700}}>{lv.name}</span></div>

      {/* Evolve message */}
      <div style={{marginTop:14,background:"rgba(255,255,255,0.1)",border:`1px solid ${lv.color}`,borderRadius:14,padding:"12px 20px",maxWidth:280}}>
        <div style={{color:lv.color,fontSize:12,fontWeight:700,lineHeight:1.6}}>{lv.evolveMsg}</div>
      </div>

      {lv.level===2&&<div style={{marginTop:10,background:"rgba(29,78,216,0.2)",border:"1px solid #1D4ED8",borderRadius:10,padding:"9px 14px",color:"#93C5FD",fontSize:11}}>🔓 STAGE 2「AW・ボイラー・水中」解放！</div>}
      {lv.level===3&&<div style={{marginTop:10,background:"rgba(217,119,6,0.2)",border:"1px solid #D97706",borderRadius:10,padding:"9px 14px",color:"#FDE68A",fontSize:11}}>🔓 STAGE 3「WES管理技術者」解放！</div>}
      {lv.level===4&&<div style={{marginTop:10,background:"rgba(124,58,237,0.2)",border:"1px solid #7C3AED",borderRadius:10,padding:"9px 14px",color:"#C4B5FD",fontSize:11}}>🔓 STAGE 4「国際資格」解放！</div>}
      {lv.level===5&&<div style={{marginTop:10,background:"rgba(212,172,13,0.2)",border:"1px solid #D4AC0D",borderRadius:10,padding:"9px 14px",color:"#FDE68A",fontSize:11}}>👑 伝説の溶接マスター！全STAGE解放！！</div>}

      <button onClick={()=>{setShowEvolve(false);setSc("result");}} style={{
        marginTop:24,background:"linear-gradient(135deg,#E85D04,#D4AC0D)",
        border:"none",borderRadius:14,padding:"14px 40px",
        color:"#fff",fontSize:15,fontWeight:900,cursor:"pointer",
        fontFamily:F,letterSpacing:2,boxShadow:"0 4px 20px rgba(232,93,4,0.4)"
      }}>結果を確認 →</button>
    </div>
  );

  // ── RESULT ──
  if(sc==="result") return(
    <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:F}}>
      <style>{css}</style>
      <div style={{background:"linear-gradient(135deg,#1E293B,#0F172A)",padding:"20px 16px",textAlign:"center"}}>
        <div style={{fontSize:10,color:"#94A3B8",letterSpacing:4,marginBottom:4}}>BATTLE RESULT</div>
        <div style={{fontSize:40,fontWeight:900,color:"#FFE500"}}>{score} / {qs.length}</div>
        <div style={{color:"#94A3B8",fontSize:12}}>+{earned} XP 獲得</div>
        <div style={{display:"flex",justifyContent:"center",marginTop:10}}>
          <Weldon lv={lv} mood={score>=qs.length*0.7?"happy":"neutral"} anim={score>=qs.length*0.7} size={100}/>
        </div>
      </div>

      <div style={{padding:"14px",maxWidth:480,margin:"0 auto"}}>
        {/* XP Bar */}
        <div style={{background:"white",borderRadius:14,padding:"14px",marginBottom:14,boxShadow:"0 2px 8px rgba(0,0,0,0.06)",border:"1px solid #F1F5F9"}}>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
            <span style={{color:lv.color,fontSize:13,fontWeight:900}}>{lv.name}</span>
            <span style={{color:"#1E293B",fontSize:12,fontWeight:700}}>XP: {xp}</span>
          </div>
          <Bar xp={xp} lv={lv} nxt={nxt}/>
          {nxt&&<div style={{color:"#94A3B8",fontSize:10,marginTop:4}}>「{nxt.name}」まで {nxt.minXP-xp} XP</div>}
        </div>

        {/* Answers */}
        <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:16}}>
          {ans.map((a,i)=>(
            <div key={i} style={{
              background:a.ok?"#F0FDF4":"#FEF2F2",
              border:`1px solid ${a.ok?"#86EFAC":"#FCA5A5"}`,
              borderRadius:12,padding:12,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"
            }}>
              <div style={{color:a.ok?"#166534":"#991B1B",fontSize:11,fontWeight:700,marginBottom:3}}>
                {a.ok?"✅ 正解":"❌ 不正解"} — {a.cat}
                {a.ok&&<span style={{color:"#D97706",marginLeft:6,fontWeight:900}}>+{a.xp}XP</span>}
              </div>
              <div style={{color:"#475569",fontSize:11,lineHeight:1.6}}>{a.exp}</div>
            </div>
          ))}
        </div>

        <div style={{display:"flex",gap:8}}>
          <button onClick={()=>setSc("home")} style={{flex:1,background:"linear-gradient(135deg,#E85D04,#D4AC0D)",border:"none",borderRadius:12,padding:"14px 0",color:"#fff",fontSize:13,fontWeight:900,cursor:"pointer",fontFamily:F,boxShadow:"0 4px 14px rgba(232,93,4,0.3)"}}>🔥 もう一戦</button>
          <button onClick={()=>{setSc("home");setTab("tree");}} style={{flex:1,background:"white",border:"2px solid #7C3AED",borderRadius:12,padding:"14px 0",color:"#7C3AED",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:F}}>🗺️ ツリー</button>
        </div>
      </div>
    </div>
  );

  return null;
}



  