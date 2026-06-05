// ============================================================
// WELDON'S FORGE - 溶接記号＋図面の見方
// SVG図を見やすく大きく全面改訂版
// ============================================================
import { useState } from "react";
const F = "'Courier New',monospace";

// ============================================================
// JIS溶接記号データ（SVGをReactコンポーネントで表示）
// ============================================================

// 各記号のイラストコンポーネント
function FigI(){
  return(
    <svg viewBox="0 0 300 100" width="100%" height="100">
      <rect x="20" y="20" width="110" height="35" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <rect x="170" y="20" width="110" height="35" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <rect x="128" y="20" width="44" height="35" fill="#E85D04"/>
      <text x="150" y="85" textAnchor="middle" fill="#E85D04" fontSize="14" fontWeight="bold">I形開先（そのままつける）</text>
      <text x="150" y="14" textAnchor="middle" fill="#475569" fontSize="11">← 板 →　　　溶接部　　　← 板 →</text>
    </svg>
  );
}
function FigV(){
  return(
    <svg viewBox="0 0 300 110" width="100%" height="110">
      <polygon points="20,15 125,55 20,55" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <polygon points="280,15 175,55 280,55" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <polygon points="125,55 175,55 150,15" fill="#1D4ED8"/>
      <text x="150" y="80" textAnchor="middle" fill="#1D4ED8" fontSize="14" fontWeight="bold">V字に削って溶接！</text>
      <text x="150" y="98" textAnchor="middle" fill="#475569" fontSize="11">開先角度：約60° （板厚が厚いほど必要）</text>
    </svg>
  );
}
function FigRe(){
  return(
    <svg viewBox="0 0 300 110" width="100%" height="110">
      <rect x="20" y="20" width="120" height="35" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <polygon points="280,20 165,55 280,55" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <polygon points="140,20 165,55 140,55" fill="#7C3AED"/>
      <text x="150" y="80" textAnchor="middle" fill="#7C3AED" fontSize="14" fontWeight="bold">片側だけ斜めに削る！</text>
      <text x="150" y="98" textAnchor="middle" fill="#475569" fontSize="11">AW検定・鉄骨溶接でよく使う</text>
    </svg>
  );
}
function FigFillet(){
  return(
    <svg viewBox="0 0 300 130" width="100%" height="130">
      <rect x="20" y="55" width="260" height="35" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <rect x="125" y="10" width="50" height="80" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <polygon points="125,55 175,55 125,10" fill="#D97706"/>
      <text x="100" y="115" textAnchor="middle" fill="#D97706" fontSize="13" fontWeight="bold">△ すみ肉溶接</text>
      <text x="200" y="115" textAnchor="middle" fill="#475569" fontSize="11">直角部分をつなぐ！</text>
      <text x="150" y="128" textAnchor="middle" fill="#475569" fontSize="10">一番よく使う溶接。T継手・角継手に使用</text>
    </svg>
  );
}
function FigUra(){
  return(
    <svg viewBox="0 0 300 120" width="100%" height="120">
      <rect x="20" y="25" width="110" height="35" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <rect x="170" y="25" width="110" height="35" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <polygon points="130,25 170,25 150,60" fill="#0891B2"/>
      <ellipse cx="150" cy="64" rx="18" ry="8" fill="#0891B2" opacity="0.7"/>
      <text x="150" y="14" textAnchor="middle" fill="#0891B2" fontSize="12" fontWeight="bold">▽ 裏波あり（完全溶込み）</text>
      <text x="150" y="90" textAnchor="middle" fill="#475569" fontSize="13" fontWeight="bold">裏面まで溶かして貫通させる！</text>
      <text x="150" y="108" textAnchor="middle" fill="#475569" fontSize="10">パイプ溶接・N-2P試験の基本</text>
    </svg>
  );
}
function FigPlug(){
  return(
    <svg viewBox="0 0 300 120" width="100%" height="120">
      <rect x="20" y="55" width="260" height="35" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <rect x="20" y="18" width="260" height="35" fill="#E2E8F0" stroke="#475569" strokeWidth="2"/>
      <circle cx="150" cy="36" r="20" fill="#166534"/>
      <text x="150" y="42" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">穴に溶接</text>
      <text x="150" y="108" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="bold">穴をあけて中を埋める溶接</text>
    </svg>
  );
}
function FigFlag(){
  return(
    <svg viewBox="0 0 300 100" width="100%" height="100">
      <line x1="60" y1="90" x2="60" y2="20" stroke="#475569" strokeWidth="3"/>
      <line x1="60" y1="55" x2="240" y2="55" stroke="#475569" strokeWidth="3"/>
      <polygon points="60,20 60,50 95,35" fill="#DC2626"/>
      <polygon points="170,55 180,42 185,55" fill="#D97706"/>
      <text x="105" y="45" fill="#DC2626" fontSize="13" fontWeight="bold">← 旗マーク＝現場溶接！</text>
      <text x="150" y="80" textAnchor="middle" fill="#475569" fontSize="12">工場じゃなく現場でやる溶接</text>
    </svg>
  );
}
function FigCircle(){
  return(
    <svg viewBox="0 0 300 100" width="100%" height="100">
      <line x1="60" y1="90" x2="60" y2="20" stroke="#475569" strokeWidth="3"/>
      <line x1="60" y1="55" x2="240" y2="55" stroke="#475569" strokeWidth="3"/>
      <circle cx="60" cy="55" r="12" fill="none" stroke="#0891B2" strokeWidth="3"/>
      <polygon points="170,55 180,42 185,55" fill="#D97706"/>
      <text x="95" y="45" fill="#0891B2" fontSize="13" fontWeight="bold">← ○ マーク＝全周溶接！</text>
      <text x="150" y="80" textAnchor="middle" fill="#475569" fontSize="12">ぐるっと一周全部溶接する</text>
    </svg>
  );
}
function FigFinish(){
  return(
    <svg viewBox="0 0 300 100" width="100%" height="100">
      <rect x="30" y="35" width="100" height="30" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <rect x="170" y="35" width="100" height="30" fill="#CBD5E1" stroke="#475569" strokeWidth="2"/>
      <path d="M125,35 Q137,22 150,35 Q163,48 175,35" fill="none" stroke="#7C3AED" strokeWidth="4"/>
      <text x="150" y="80" textAnchor="middle" fill="#7C3AED" fontSize="13" fontWeight="bold">波線＝表面仕上げ指示</text>
      <text x="150" y="96" textAnchor="middle" fill="#475569" fontSize="10">グラインダー等で余盛を削って平らにする</text>
    </svg>
  );
}

const FIGS = {j1:<FigI/>,j2:<FigV/>,j3:<FigRe/>,j4:<FigFillet/>,j5:<FigUra/>,j6:<FigPlug/>,j7:<FigFlag/>,j8:<FigCircle/>,j9:<FigFinish/>};

const JIS_SYMBOLS = [
  {id:"j1",category:"基本記号",name:"突合せ溶接（I形）",symbol:"I",color:"#E85D04",emoji:"📏",
   easy:"2枚の板をそのままくっつける。一番シンプルな溶接。",
   detail:"開先なし（I形開先）の突合せ溶接。薄い板に使う。板を面一に合わせてそのまま溶接する。"},
  {id:"j2",category:"基本記号",name:"V形突合せ溶接",symbol:"V",color:"#1D4ED8",emoji:"✌️",
   easy:"板の端をV字に削って溶接。よく現場で使う定番の形。",
   detail:"V形開先の突合せ溶接。板厚が厚いほど溶け込みが必要なのでV字に削る。開先角度は通常60°。"},
  {id:"j3",category:"基本記号",name:"レ形突合せ溶接（片側V形）",symbol:"レ",color:"#7C3AED",emoji:"✏️",
   easy:"片方だけV字に削る。鉄骨のスカラップ部分でよく使う。",
   detail:"片側だけ斜めに削ったレ形開先の突合せ溶接。AW検定の工場溶接でよく使われる。"},
  {id:"j4",category:"基本記号",name:"すみ肉溶接",symbol:"△",color:"#D97706",emoji:"📐",
   easy:"直角に合わさった板の角をつなぐ。一番よく使う溶接！",
   detail:"T継手・角継手などで使用。記号は△（三角形）で表す。サイズ（脚長）と長さを記載する。"},
  {id:"j5",category:"基本記号",name:"裏波溶接（▽）",symbol:"▽",color:"#0891B2",emoji:"🔄",
   easy:"板の裏側まで溶かして、裏にもビードを出す溶接。完全に貫通させる！",
   detail:"完全溶込み溶接で裏面にビードを出す。記号は▽（逆三角形）。パイプ溶接などで必須。"},
  {id:"j6",category:"基本記号",name:"プラグ溶接・スロット溶接",symbol:"○",color:"#166534",emoji:"🔘",
   easy:"穴をあけてその中を溶接で埋める。重ね板を固定するときに使う。",
   detail:"重ね継手で穴（円形＝プラグ、長穴＝スロット）を設けてその中を溶接する。"},
  {id:"j7",category:"補助記号",name:"現場溶接（旗マーク）",symbol:"🚩",color:"#DC2626",emoji:"🚩",
   easy:"工場じゃなくて現場でやる溶接！旗みたいなマークがついてたら現場溶接。",
   detail:"基線の折れ点に旗マーク（△）を付ける。工場で溶接できない現場組立部分に使用。"},
  {id:"j8",category:"補助記号",name:"全周溶接（○マーク）",symbol:"⭕",color:"#0891B2",emoji:"⭕",
   easy:"ぐるっと一周全部溶接！基線の折れ点に丸がついてたら全部溶接する。",
   detail:"基線の折れ点に○を付ける。部材の周囲全体を溶接することを示す。パイプの取合い部などに使用。"},
  {id:"j9",category:"補助記号",name:"表面仕上げ記号",symbol:"～",color:"#7C3AED",emoji:"✨",
   easy:"溶接した後にグラインダーなどで表面をきれいにすること。波線マークがヒント！",
   detail:"溶接後に機械加工・グラインダー仕上げなどで余盛を除去することを指示する記号。"},
];

// ============================================================
// 図面の見方データ（SVGもコンポーネントで）
// ============================================================
function FigKihon(){
  return(
    <svg viewBox="0 0 300 130" width="100%" height="130">
      {/* 矢 */}
      <line x1="60" y1="115" x2="120" y2="70" stroke="#E85D04" strokeWidth="3"/>
      <polygon points="60,115 72,98 76,112" fill="#E85D04"/>
      {/* 基線 */}
      <line x1="120" y1="70" x2="260" y2="70" stroke="#475569" strokeWidth="3"/>
      {/* 記号（上＝反矢側） */}
      <polygon points="170,70 190,70 180,52" fill="#1D4ED8"/>
      {/* ラベル */}
      <text x="55" y="130" fill="#E85D04" fontSize="13" fontWeight="bold">矢（や）</text>
      <text x="180" y="95" textAnchor="middle" fill="#475569" fontSize="11">基線（きせん）</text>
      <text x="180" y="44" textAnchor="middle" fill="#1D4ED8" fontSize="12" fontWeight="bold">記号＝反矢側</text>
      <text x="180" y="118" textAnchor="middle" fill="#94A3B8" fontSize="10">↓ 記号が下なら矢側</text>
    </svg>
  );
}
function FigSunpo(){
  return(
    <svg viewBox="0 0 300 100" width="100%" height="100">
      <line x1="30" y1="55" x2="30" y2="20" stroke="#475569" strokeWidth="2.5"/>
      <line x1="30" y1="38" x2="270" y2="38" stroke="#475569" strokeWidth="2.5"/>
      <polygon points="140,38 152,28 157,38" fill="#D97706"/>
      <text x="110" y="34" textAnchor="end" fill="#D97706" fontSize="18" fontWeight="900">6</text>
      <text x="162" y="34" fill="#DC2626" fontSize="18" fontWeight="900">-200</text>
      <text x="95" y="70" fill="#D97706" fontSize="13" fontWeight="bold">↑ サイズ（脚長6mm）</text>
      <text x="162" y="70" fill="#DC2626" fontSize="13" fontWeight="bold">↑ 長さ（200mm）</text>
      <text x="150" y="92" textAnchor="middle" fill="#475569" fontSize="11">例：脚長6mm・長さ200mmのすみ肉溶接</text>
    </svg>
  );
}
function FigSanmen(){
  return(
    <svg viewBox="0 0 300 130" width="100%" height="130">
      <rect x="15" y="50" width="90" height="75" fill="#DBEAFE" stroke="#1D4ED8" strokeWidth="2"/>
      <rect x="115" y="50" width="65" height="75" fill="#D1FAE5" stroke="#166534" strokeWidth="2"/>
      <rect x="15" y="10" width="90" height="35" fill="#FEF3C7" stroke="#D97706" strokeWidth="2"/>
      <text x="60" y="93" textAnchor="middle" fill="#1D4ED8" fontSize="14" fontWeight="bold">正面図</text>
      <text x="147" y="93" textAnchor="middle" fill="#166534" fontSize="13" fontWeight="bold">側面図</text>
      <text x="60" y="32" textAnchor="middle" fill="#D97706" fontSize="13" fontWeight="bold">平面図</text>
      <text x="220" y="65" fill="#475569" fontSize="11">← 上から見た図</text>
      <text x="220" y="90" fill="#475569" fontSize="11">← 正面から見た図</text>
      <text x="200" y="115" fill="#475569" fontSize="11">← 横から見た図</text>
    </svg>
  );
}
function FigLines(){
  return(
    <svg viewBox="0 0 300 145" width="100%" height="145">
      {/* 太い実線 */}
      <line x1="20" y1="18" x2="130" y2="18" stroke="#1E293B" strokeWidth="4"/>
      <text x="140" y="23" fill="#1E293B" fontSize="13" fontWeight="bold">太い実線＝輪郭線</text>
      {/* 細い実線 */}
      <line x1="20" y1="45" x2="130" y2="45" stroke="#1E293B" strokeWidth="1.5"/>
      <text x="140" y="50" fill="#1E293B" fontSize="13" fontWeight="bold">細い実線＝寸法線</text>
      {/* 破線 */}
      <line x1="20" y1="72" x2="130" y2="72" stroke="#1E293B" strokeWidth="2" strokeDasharray="10,5"/>
      <text x="140" y="77" fill="#1E293B" fontSize="13" fontWeight="bold">破線＝かくれ線</text>
      {/* 一点鎖線 */}
      <line x1="20" y1="99" x2="130" y2="99" stroke="#1E293B" strokeWidth="1.5" strokeDasharray="16,4,3,4"/>
      <text x="140" y="104" fill="#1E293B" fontSize="13" fontWeight="bold">一点鎖線＝中心線</text>
      {/* 二点鎖線 */}
      <line x1="20" y1="126" x2="130" y2="126" stroke="#1E293B" strokeWidth="1.5" strokeDasharray="16,4,3,4,3,4"/>
      <text x="140" y="131" fill="#1E293B" fontSize="13" fontWeight="bold">二点鎖線＝想像線</text>
    </svg>
  );
}
function FigJitsurei(){
  return(
    <svg viewBox="0 0 300 120" width="100%" height="120">
      {/* 矢 */}
      <line x1="40" y1="105" x2="100" y2="65" stroke="#E85D04" strokeWidth="2.5"/>
      <polygon points="40,105 52,90 56,104" fill="#E85D04"/>
      {/* 基線 */}
      <line x1="100" y1="65" x2="260" y2="65" stroke="#475569" strokeWidth="2.5"/>
      {/* すみ肉記号 */}
      <polygon points="140,65 160,65 150,48" fill="#D97706"/>
      {/* 数値 */}
      <text x="128" y="62" fill="#D97706" fontSize="18" fontWeight="900">6</text>
      <text x="162" y="62" fill="#DC2626" fontSize="16" fontWeight="900">-200</text>
      {/* ラベル */}
      <text x="128" y="90" fill="#D97706" fontSize="12">↑脚長6mm</text>
      <text x="162" y="90" fill="#DC2626" fontSize="12">↑長さ200mm</text>
      <text x="150" y="112" textAnchor="middle" fill="#475569" fontSize="11">「△6-200」= 脚長6mm・200mm溶接</text>
    </svg>
  );
}

const DFIGS = {d1:<FigKihon/>,d2:<FigSunpo/>,d3:<FigSanmen/>,d4:<FigLines/>,d5:<FigJitsurei/>};

const DRAWING_BASICS = [
  {id:"d1",title:"溶接記号の基本構造",emoji:"📐",color:"#E85D04",
   easy:"溶接記号は「矢」と「基線」と「記号」の3つでできている！",
   items:[
     {label:"矢（や）",     desc:"どこを溶接するか指差している線。ここが「矢側（やがわ）」！"},
     {label:"基線（きせん）",desc:"水平な線。ここに溶接の情報を全部書く。"},
     {label:"記号",         desc:"どんな溶接をするか表す形（△・V・Iなど）。基線の上か下に書く。"},
     {label:"上側＝反矢側", desc:"基線の上に記号 → 矢の反対側を溶接する。"},
     {label:"下側＝矢側",   desc:"基線の下に記号 → 矢が指している側を溶接する。"},
   ]},
  {id:"d2",title:"寸法の書き方",emoji:"📏",color:"#1D4ED8",
   easy:"記号の左に数字＝サイズ（太さ）、右に数字＝長さ！",
   items:[
     {label:"サイズ（左の数字）",  desc:"すみ肉溶接なら脚長（きゃくちょう）。溶接の「太さ」。"},
     {label:"長さ（右の数字）",    desc:"どのくらいの長さを溶接するか。"},
     {label:"数×ピッチ",          desc:"「3×50(100)」なら「長さ50mmを100mm間隔で3か所」溶接。"},
     {label:"例：△6-150",         desc:"脚長6mmのすみ肉溶接を150mmの長さで行う。"},
   ]},
  {id:"d3",title:"三面図の基本（正面・側面・平面）",emoji:"📦",color:"#D97706",
   easy:"箱を3方向から見た図。正面・横・上から見た3枚の絵！",
   items:[
     {label:"正面図（せいめんず）",desc:"正面から見た形。一番大事な図。"},
     {label:"側面図（そくめんず）",desc:"横から見た形。右側から見ることが多い。"},
     {label:"平面図（へいめんず）",desc:"上から見た形。俯瞰（ふかん）図ともいう。"},
     {label:"配置ルール",          desc:"正面図の右に側面図、正面図の上に平面図を置く。"},
   ]},
  {id:"d4",title:"線の種類と意味",emoji:"✏️",color:"#7C3AED",
   easy:"図面の線にはルールがある！太さと形で意味が変わる。",
   items:[
     {label:"太い実線（───）",    desc:"見えている輪郭線。一番大事な線。"},
     {label:"細い実線（───）",    desc:"寸法線・引出線・ハッチング。補助的な線。"},
     {label:"破線（- - -）",      desc:"隠れて見えない線（かくれ線）。裏側の形。"},
     {label:"一点鎖線（－・－）",  desc:"中心線（ちゅうしんせん）。穴や丸の中心。"},
     {label:"二点鎖線（－‥－）",  desc:"想像線。参考のために書く線。"},
   ]},
  {id:"d5",title:"溶接記号の読み方（実例）",emoji:"🔍",color:"#DC2626",
   easy:"実際の図面に書いてある記号を読んでみよう！",
   items:[
     {label:"△6",       desc:"脚長6mmのすみ肉溶接。記号の左の数字がサイズ。"},
     {label:"△6-200",   desc:"脚長6mm・長さ200mmのすみ肉溶接。"},
     {label:"▽V",       desc:"V形開先で裏波あり（▽）の完全溶込み溶接。パイプ溶接の基本。"},
     {label:"🚩△6",     desc:"現場溶接でのすみ肉溶接6mm。旗マーク＝現場！"},
   ]},
];

const AWS_VS_JIS = [
  {item:"基線上側の記号",   jis:"反矢側",          aws:"反矢側（Other Side）", note:"同じ！"},
  {item:"基線下側の記号",   jis:"矢側",            aws:"矢側（Arrow Side）",   note:"同じ！"},
  {item:"現場溶接",         jis:"旗マーク（△）",   aws:"旗マーク（同じ形）",   note:"ほぼ同じ"},
  {item:"全周溶接",         jis:"○（折れ点）",     aws:"○（同じ位置）",        note:"同じ！"},
  {item:"すみ肉サイズ",     jis:"記号左に脚長",     aws:"記号左に脚長",         note:"同じ！"},
  {item:"仕上げ記号",       jis:"波線（～）",       aws:"C/M/G等の英字",         note:"ここが違う！"},
  {item:"溶接プロセス",     jis:"記載なし（慣例）", aws:"テールに英字（SMAW等）",note:"AWは詳細記載"},
];

// ============================================================
// Symbol画面
// ============================================================
export function SymbolScreen(){
  const [tab,  setTab]  = useState("jis");
  const [open, setOpen] = useState(null);

  return(
    <div style={{display:"flex",flexDirection:"column"}}>

      {/* サブタブ */}
      <div style={{display:"flex",gap:4,marginBottom:10}}>
        {[{id:"jis",l:"🔣 JIS記号"},{id:"draw",l:"📐 図面の見方"},{id:"aws",l:"🇺🇸 JIS vs AWS"}].map(t=>(
          <button key={t.id} onClick={()=>{setTab(t.id);setOpen(null);}} style={{
            flex:1,padding:"8px 0",border:"none",
            borderBottom:`3px solid ${tab===t.id?"#E85D04":"transparent"}`,
            background:"white",color:tab===t.id?"#1E293B":"#94A3B8",
            fontSize:10,fontWeight:700,cursor:"pointer",fontFamily:F,
            borderRadius:"6px 6px 0 0",
          }}>{t.l}</button>
        ))}
      </div>

      {/* ── JIS記号タブ ── */}
      {tab==="jis"&&(
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          <div style={{background:"#FFF7ED",border:"1px solid #FED7AA",borderRadius:10,padding:"9px 12px",marginBottom:4}}>
            <div style={{color:"#C2410C",fontSize:10,fontWeight:700}}>💡 タップすると大きな図と説明が出るよ！</div>
            <div style={{color:"#92400E",fontSize:9,lineHeight:1.6,marginTop:2}}>まずは△（すみ肉）とV（突合せ）を覚えよう。</div>
          </div>
          {["基本記号","補助記号"].map(cat=>(
            <div key={cat}>
              <div style={{color:"#475569",fontSize:9,fontWeight:700,padding:"4px 8px",background:"#F1F5F9",borderRadius:6,marginBottom:5}}>{cat}</div>
              {JIS_SYMBOLS.filter(s=>s.category===cat).map(s=>{
                const isO=open===s.id;
                return(
                  <div key={s.id} onClick={()=>setOpen(isO?null:s.id)} style={{
                    background:isO?`${s.color}08`:"white",
                    border:`1px solid ${isO?s.color:"#E2E8F0"}`,
                    borderRadius:10,padding:"10px 12px",cursor:"pointer",
                    transition:"all .2s",marginBottom:5,
                  }}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div style={{width:40,height:40,borderRadius:8,background:`${s.color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{s.emoji}</div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                          <span style={{background:`${s.color}15`,border:`1px solid ${s.color}40`,color:s.color,fontSize:14,padding:"1px 10px",borderRadius:20,fontWeight:900,fontFamily:F}}>{s.symbol}</span>
                          <span style={{color:"#1E293B",fontSize:11,fontWeight:700}}>{s.name}</span>
                        </div>
                        <div style={{color:"#64748B",fontSize:10,lineHeight:1.5}}>{s.easy}</div>
                      </div>
                      <span style={{color:s.color,fontSize:12}}>{isO?"▲":"▼"}</span>
                    </div>
                    {isO&&(
                      <div style={{marginTop:10,borderTop:`1px solid ${s.color}20`,paddingTop:10}}>
                        {/* 大きな図 */}
                        <div style={{background:`${s.color}06`,borderRadius:10,padding:"12px 8px",marginBottom:10,border:`1px solid ${s.color}20`}}>
                          {FIGS[s.id]}
                        </div>
                        <div style={{background:"#F8FAFC",borderRadius:8,padding:"10px 12px"}}>
                          <div style={{color:"#475569",fontSize:9,fontWeight:700,marginBottom:4}}>📖 詳しい説明</div>
                          <div style={{color:"#1E293B",fontSize:12,lineHeight:1.8}}>{s.detail}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* ── 図面の見方タブ ── */}
      {tab==="draw"&&(
        <div style={{display:"flex",flexDirection:"column",gap:5}}>
          <div style={{background:"#EFF6FF",border:"1px solid #BFDBFE",borderRadius:10,padding:"9px 12px",marginBottom:4}}>
            <div style={{color:"#1D4ED8",fontSize:10,fontWeight:700}}>💡 図面を読めると仕事の幅が広がる！</div>
            <div style={{color:"#1E40AF",fontSize:9,lineHeight:1.6,marginTop:2}}>まず「記号の基本構造」から読もう！</div>
          </div>
          {DRAWING_BASICS.map(d=>{
            const isO=open===d.id;
            return(
              <div key={d.id} onClick={()=>setOpen(isO?null:d.id)} style={{
                background:isO?`${d.color}08`:"white",
                border:`1px solid ${isO?d.color:"#E2E8F0"}`,
                borderRadius:10,padding:"10px 12px",cursor:"pointer",
                transition:"all .2s",marginBottom:5,
              }}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:40,height:40,borderRadius:8,background:`${d.color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{d.emoji}</div>
                  <div style={{flex:1}}>
                    <div style={{color:d.color,fontSize:12,fontWeight:700}}>{d.title}</div>
                    <div style={{color:"#64748B",fontSize:10,marginTop:2,lineHeight:1.5}}>{d.easy}</div>
                  </div>
                  <span style={{color:d.color,fontSize:12}}>{isO?"▲":"▼"}</span>
                </div>
                {isO&&(
                  <div style={{marginTop:10,borderTop:`1px solid ${d.color}20`,paddingTop:10}}>
                    {/* 大きな図 */}
                    <div style={{background:`${d.color}06`,borderRadius:10,padding:"12px 8px",marginBottom:10,border:`1px solid ${d.color}20`}}>
                      {DFIGS[d.id]}
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:5}}>
                      {d.items.map((item,i)=>(
                        <div key={i} style={{background:"#F8FAFC",borderRadius:7,padding:"8px 12px",border:"1px solid #E2E8F0"}}>
                          <div style={{color:d.color,fontSize:11,fontWeight:700,marginBottom:2}}>📌 {item.label}</div>
                          <div style={{color:"#1E293B",fontSize:12,lineHeight:1.6}}>{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── JIS vs AWS タブ ── */}
      {tab==="aws"&&(
        <div>
          <div style={{background:"#FEF2F2",border:"1px solid #FCA5A5",borderRadius:10,padding:"9px 12px",marginBottom:10}}>
            <div style={{color:"#991B1B",fontSize:10,fontWeight:700}}>⚠️ JISとAWSは混同注意！</div>
            <div style={{color:"#7F1D1D",fontSize:9,lineHeight:1.6,marginTop:2}}>
              海外の図面を読むときはAWS規格。ほとんど同じだけど、仕上げ記号など違う部分がある！
            </div>
          </div>
          <div style={{background:"white",borderRadius:10,overflow:"hidden",border:"1px solid #E2E8F0",marginBottom:10}}>
            <div style={{display:"flex",background:"#1E293B",padding:"9px 10px"}}>
              <div style={{flex:1.5,color:"#94A3B8",fontSize:10,fontWeight:700}}>項目</div>
              <div style={{flex:2,color:"#60A5FA",fontSize:10,fontWeight:700}}>🇯🇵 JIS</div>
              <div style={{flex:2,color:"#F87171",fontSize:10,fontWeight:700}}>🇺🇸 AWS</div>
            </div>
            {AWS_VS_JIS.map((row,i)=>(
              <div key={i} style={{display:"flex",padding:"9px 10px",background:i%2===0?"#F8FAFC":"white",borderBottom:"1px solid #F1F5F9",alignItems:"flex-start"}}>
                <div style={{flex:1.5,color:"#475569",fontSize:10,fontWeight:600,paddingRight:4,lineHeight:1.5}}>{row.item}</div>
                <div style={{flex:2,color:"#1E3A8A",fontSize:10,paddingRight:4,lineHeight:1.5}}>{row.jis}</div>
                <div style={{flex:2,color:"#991B1B",fontSize:10,lineHeight:1.5}}>{row.aws}
                  {row.note==="ここが違う！"&&<span style={{color:"#DC2626",fontSize:9,fontWeight:700,display:"block"}}>⚠️ {row.note}</span>}
                </div>
              </div>
            ))}
          </div>
          <div style={{background:"#F0FDF4",border:"1px solid #86EFAC",borderRadius:10,padding:"10px 12px",marginBottom:20}}>
            <div style={{color:"#166534",fontSize:11,fontWeight:700,marginBottom:6}}>✅ 覚えるポイント</div>
            {[
              "基本的な記号の形（△V▽など）はJISもAWSもほぼ同じ！",
              "基線の上下の意味もJIS・AWSとも同じ（上＝反矢側・下＝矢側）",
              "仕上げ記号はAWSだとC（チッピング）・M（機械仕上げ）・G（グラインダー）",
              "日本の現場ではほぼJIS。海外・船舶・プラントではAWSやISOが混在する",
            ].map((p,i)=>(
              <div key={i} style={{display:"flex",gap:6,marginBottom:6}}>
                <span style={{color:"#16A34A",fontSize:12,flexShrink:0}}>✓</span>
                <div style={{color:"#1E293B",fontSize:11,lineHeight:1.6}}>{p}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
