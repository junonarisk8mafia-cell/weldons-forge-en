import React from "react";

// ============================================================
// WELDON'S FORGE - WELDONキャラクター
// レベルに応じて外見・色・エフェクトが変化
// ============================================================

// レベルデータ（App.jsxと共有）
export const LEVELS = [
  {level:1, name:"見習い溶接工",    minXP:0,    color:"#E85D04", hp:60,  wCol:"#E74C3C", evolveMsg:"WELDONが目覚めた！"},
  {level:2, name:"一人前溶接工",    minXP:200,  color:"#1D4ED8", hp:90,  wCol:"#2980B9", evolveMsg:"一人前に成長！WELDONがパワーアップ！"},
  {level:3, name:"熟練溶接工",      minXP:550,  color:"#D97706", hp:130, wCol:"#E67E22", evolveMsg:"熟練の技を習得！炎が宿った！"},
  {level:4, name:"上級溶接工",      minXP:950,  color:"#DC2626", hp:170, wCol:"#C0392B", evolveMsg:"上級者の域へ！赤い闘気を放つ！"},
  {level:5, name:"溶接マスター",    minXP:1450, color:"#7C3AED", hp:220, wCol:"#8E44AD", evolveMsg:"溶接マスター誕生！紫の覇気！"},
  {level:6, name:"IIW溶接エンジニア", minXP:2000, color:"#D4AC0D", hp:280, wCol:"#D4AC0D", evolveMsg:"伝説の称号！黄金のWELDON！！"},
];

export const getLv = xp => { for(let i=LEVELS.length-1;i>=0;i--) if(xp>=LEVELS[i].minXP) return LEVELS[i]; return LEVELS[0]; };
export const getNxt = xp => { const c=getLv(xp); return LEVELS.find(l=>l.level===c.level+1)||null; };

// ============================================================
// ピクセルアートWELDON本体
// mood: smile / happy / surprised / neutral / hurt
// ============================================================
export function PixelWeldon({size=100, mood="smile", bounce=false, hit=false, col="#E74C3C", level=1}){
  const mp = {
    smile:     "M42,70 Q50,76 58,70",
    happy:     "M40,69 Q50,78 60,69",
    surprised: "M47,70 a4,5 0 1,0 6,0",
    neutral:   "M43,70 L57,70",
    hurt:      "M42,72 Q50,68 58,72",
  };
  // レベルに応じた目の色
  const eyeCol = level>=6?"#FFD700":level>=5?"#C084FC":level>=3?"#60A5FA":"#5B7FDB";
  // レベルに応じたオーラ
  const hasFlame  = level>=3;
  const hasCrown  = level>=5;
  const hasAura   = level>=4;

  return(
    <svg width={size} height={size*1.15} viewBox="0 0 100 115" style={{
      imageRendering:"pixelated",
      transform: bounce?"translateY(-9px)": hit?"translateX(7px)":"translateY(0)",
      transition:"transform .15s ease",
      filter:`drop-shadow(0 0 8px rgba(255,255,255,0.6)) drop-shadow(0 4px 2px rgba(0,0,0,0.45)) drop-shadow(0 0 ${level*3}px ${col}55)`,
      overflow:"visible",
    }}>

      {/* ── オーラ（Lv4+） ── */}
      {hasAura&&<ellipse cx="50" cy="85" rx="38" ry="30" fill={col} opacity="0.07">
        <animate attributeName="rx" dur="2s" repeatCount="indefinite" values="35;42;35"/>
      </ellipse>}

      {/* ── 炎エフェクト（Lv3+） ── */}
      {hasFlame&&<>
        <path d="M34,100 Q28,88 32,76 Q38,93 36,100Z" fill={col} opacity="0.55">
          <animate attributeName="d" dur="0.55s" repeatCount="indefinite"
            values="M34,100 Q28,88 32,76 Q38,93 36,100Z;M34,100 Q26,85 30,72 Q40,96 36,100Z;M34,100 Q28,88 32,76 Q38,93 36,100Z"/>
        </path>
        <path d="M66,100 Q72,88 68,76 Q62,93 64,100Z" fill={col} opacity="0.55">
          <animate attributeName="d" dur="0.65s" repeatCount="indefinite"
            values="M66,100 Q72,88 68,76 Q62,93 64,100Z;M66,100 Q74,85 70,72 Q60,96 64,100Z;M66,100 Q72,88 68,76 Q62,93 64,100Z"/>
        </path>
      </>}

      {/* ── 影 ── */}
      <ellipse cx="50" cy="111" rx="22" ry="4" fill="#000" opacity="0.35"/>
      {/* ── スポットライト ── */}
      <ellipse cx="50" cy="113" rx="30" ry="7" fill="white" opacity="0.12">
        <animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="0.08;0.18;0.08"/>
        <animate attributeName="rx" dur="2s" repeatCount="indefinite" values="28;33;28"/>
      </ellipse>

      {/* ── 足（コイルケーブル） ── */}
      <rect x="36" y="91" width="4" height="14" fill="#1C1C1C"/>
      <rect x="60" y="91" width="4" height="14" fill="#1C1C1C"/>
      <rect x="28" y="99" width="20" height="4" rx="2" fill="#1C1C1C"/>
      <rect x="52" y="99" width="20" height="4" rx="2" fill="#1C1C1C"/>
      <rect x="28" y="103" width="4"  height="4" fill="#1C1C1C"/>
      <rect x="44" y="103" width="4"  height="4" fill="#1C1C1C"/>
      <rect x="52" y="103" width="4"  height="4" fill="#1C1C1C"/>
      <rect x="68" y="103" width="4"  height="4" fill="#1C1C1C"/>

      {/* ── ボディ ── */}
      <rect x="30" y="48" width="40" height="47" rx="4" fill={`${col}BB`}/>
      <rect x="32" y="50" width="36" height="43" rx="3" fill={col}/>
      <rect x="33" y="51" width="11" height="39" rx="2" fill="white" opacity="0.12"/>
      <rect x="36" y="80" width="28" height="12" rx="2" fill={`${col}AA`}/>
      <text x="50" y="89" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="monospace">MIG</text>

      {/* ── 顔 ── */}
      <rect x="33" y="50" width="34" height="29" rx="3" fill={col}/>

      {/* ── 眉毛 ── */}
      <rect x="37" y="56" width="10" height="2" rx="1" fill={`${col}CC`}/>
      <rect x="53" y="56" width="10" height="2" rx="1" fill={`${col}CC`}/>

      {/* ── 目 ── */}
      <rect x="36" y="59" width="10" height="8" rx="1" fill="white"/>
      <rect x="54" y="59" width="10" height="8" rx="1" fill="white"/>
      <rect x="38" y="61" width="6"  height="5" rx="1" fill={eyeCol}/>
      <rect x="56" y="61" width="6"  height="5" rx="1" fill={eyeCol}/>
      <rect x="39" y="62" width="2"  height="2" fill="#1A1A2E"/>
      <rect x="57" y="62" width="2"  height="2" fill="#1A1A2E"/>
      <rect x="43" y="61" width="2"  height="2" fill="white"/>
      <rect x="61" y="61" width="2"  height="2" fill="white"/>

      {/* ── 口 ── */}
      <path d={mp[mood]||mp.smile} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>

      {/* ── グースネック（トーチホース） ── */}
      <rect x="46" y="28" width="6" height="22" rx="2" fill="#2C2C2C"/>
      <rect x="48" y="16" width="5" height="14" rx="2" fill="#2C2C2C" transform="rotate(-20,50,22)"/>
      <rect x="58" y="8"  width="5" height="14" rx="2" fill="#2C2C2C" transform="rotate(-50,60,14)"/>

      {/* ── ノズル ── */}
      <rect x="64" y="4"  width="18" height="8"  rx="2" fill="#BDC3C7"/>
      <rect x="64" y="9"  width="18" height="3"  rx="1" fill="#D4AC0D"/>
      <rect x="78" y="2"  width="6"  height="12" rx="2" fill="#7F8C8D"/>

      {/* ── アーク火花 ── */}
      {[
        {x:82,y:2,w:3,h:3,c:"#FFE500",d:"0.20s",v:"0.9;0.1;0.9"},
        {x:86,y:0,w:2,h:2,c:"#00D4FF",d:"0.15s",v:"0.8;0;0.8"},
        {x:84,y:6,w:2,h:2,c:"#FFE500",d:"0.18s",v:"0;0.7;0"},
        {x:89,y:3,w:2,h:2,c:"#FFFFFF",d:"0.12s",v:"0;0.95;0"},
        {x:91,y:7,w:1,h:3,c:"#00D4FF",d:"0.22s",v:"0.7;0;0.7"},
        {x:80,y:5,w:2,h:1,c:"#FFE500",d:"0.16s",v:"0.5;0;0.5"},
        {x:87,y:9,w:2,h:2,c:"#FFFFFF",d:"0.14s",v:"0;0.6;0"},
        {x:93,y:1,w:1,h:1,c:"#FFE500",d:"0.10s",v:"0.8;0;0.8"},
      ].map((s,i)=>(
        <rect key={i} x={s.x} y={s.y} width={s.w} height={s.h} fill={s.c}>
          <animate attributeName="opacity" dur={s.d} repeatCount="indefinite" values={s.v}/>
        </rect>
      ))}
      {/* 放射スパーク線 */}
      {[
        {x1:83,y1:5,x2:92,y2:-3,d:"0.17s"},
        {x1:83,y1:5,x2:95,y2:5, d:"0.21s"},
        {x1:83,y1:5,x2:91,y2:13,d:"0.13s"},
        {x1:83,y1:5,x2:78,y2:0, d:"0.19s"},
      ].map((l,i)=>(
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#FFE500" strokeWidth="0.6">
          <animate attributeName="opacity" dur={l.d} repeatCount="indefinite" values="0.7;0;0.7"/>
        </line>
      ))}

      {/* ── 腕 ── */}
      <rect x="14" y="58" width="18" height="5" rx="2" fill="#2C2C2C"/>
      <rect x="68" y="58" width="18" height="5" rx="2" fill="#2C2C2C"/>
      <rect x="8"  y="54" width="10" height="14" rx="2" fill={col}/>
      <rect x="6"  y="54" width="4"  height="4"  rx="1" fill={col}/>
      <rect x="6"  y="60" width="4"  height="4"  rx="1" fill={col}/>
      <rect x="6"  y="66" width="4"  height="4"  rx="1" fill={col}/>
      <rect x="82" y="54" width="10" height="14" rx="2" fill={col}/>
      <rect x="90" y="54" width="4"  height="4"  rx="1" fill={col}/>
      <rect x="90" y="60" width="4"  height="4"  rx="1" fill={col}/>
      <rect x="90" y="66" width="4"  height="4"  rx="1" fill={col}/>

      {/* ── レベルバッジ ── */}
      <circle cx="88" cy="58" r="10" fill="white" stroke={col} strokeWidth="1.5"/>
      <text x="88" y="62" textAnchor="middle" fill={col} fontSize="7" fontWeight="900" fontFamily="monospace">Lv{level}</text>

      {/* ── 王冠（Lv5+） ── */}
      {hasCrown&&<g transform="translate(43,0)">
        <polygon points="9,4 4,14 0,8 0,20 18,20 18,8 14,14" fill="#FFD700" stroke="#FF8C00" strokeWidth="0.8"/>
        <circle cx="9" cy="4" r="2" fill="#FF4500"/>
        <circle cx="0" cy="8" r="1.5" fill="#FFD700"/>
        <circle cx="18" cy="8" r="1.5" fill="#FFD700"/>
      </g>}

      {/* ── 黄金オーラ（Lv6） ── */}
      {level>=6&&<>
        {[-25,-15,-5,5,15,25].map((x,i)=>(
          <circle key={i} cx={50+x} cy="20" r="2" fill="#FFD700" opacity="0.8">
            <animate attributeName="opacity" dur={`${0.4+i*0.1}s`} repeatCount="indefinite" values="0.8;0.1;0.8"/>
            <animate attributeName="cy" dur={`${0.6+i*0.15}s`} repeatCount="indefinite" values="20;10;20"/>
          </circle>
        ))}
      </>}
    </svg>
  );
}

// ============================================================
// レベルアップ変身イベント画面
// ============================================================
export function LevelUpEvent({lv, prevLv, onNext}){
  const F = "'Courier New',monospace";
  const css=`
    @keyframes evolve{0%{transform:scale(0.4) rotate(-15deg);opacity:0}60%{transform:scale(1.5) rotate(4deg);opacity:1}80%{transform:scale(1.25) rotate(-2deg)}100%{transform:scale(1.35) rotate(0deg);opacity:1}}
    @keyframes glow{0%,100%{text-shadow:0 0 15px #FFE500}50%{text-shadow:0 0 40px #FFE500,0 0 80px #FF6B00}}
    @keyframes sparkle{0%,100%{opacity:0;transform:scale(0)}50%{opacity:1;transform:scale(1)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
    @keyframes goldflash{0%{opacity:1}100%{opacity:0}}
    @keyframes lvuptext{0%{transform:scale(0) rotate(-20deg);opacity:0}45%{transform:scale(1.4) rotate(6deg);opacity:1}65%{transform:scale(0.9) rotate(-3deg)}80%{transform:scale(1.15) rotate(2deg)}100%{transform:scale(1) rotate(0deg);opacity:1}}
    @keyframes spark{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--dx),var(--dy)) scale(0);opacity:0}}
    @keyframes fireflicker{0%,100%{opacity:0.7;transform:translateY(0) scale(1)}50%{opacity:1;transform:translateY(-8px) scale(1.15)}}
  `;
  const stars = [
    {x:"8%",y:"12%",d:"0s"},{x:"92%",y:"18%",d:"0.2s"},{x:"15%",y:"75%",d:"0.4s"},
    {x:"85%",y:"70%",d:"0.1s"},{x:"50%",y:"8%",d:"0.3s"},{x:"25%",y:"40%",d:"0.5s"},
    {x:"75%",y:"45%",d:"0.15s"},{x:"5%",y:"50%",d:"0.35s"},
  ];

  // バイブレーション演出
  React.useEffect(()=>{
    if(navigator.vibrate) navigator.vibrate([60,40,60,40,140]);
  },[]);

  // 溶接スパーク（黄色い火花）
  const sparks = Array.from({length:18},(_,i)=>{
    const ang = (i/18)*Math.PI*2;
    const dist = 60+Math.random()*60;
    return {
      dx:`${Math.cos(ang)*dist}px`, dy:`${Math.sin(ang)*dist}px`,
      d:`${0.5+Math.random()*0.6}s`, delay:`${Math.random()*0.4}s`,
      size:2+Math.random()*3,
    };
  });

  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0F172A 0%,#1E0A3C 50%,#0F172A 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:F,padding:20,textAlign:"center",position:"relative",overflow:"hidden"}}>
      <style>{css}</style>

      {/* 画面全体 金色フラッシュ */}
      <div style={{position:"fixed",inset:0,zIndex:60,pointerEvents:"none",background:"radial-gradient(circle, #FFF7CC 0%, #FFD700 40%, #FF8C00 100%)",animation:"goldflash 0.8s ease forwards"}}/>

      {/* 背景の星 */}
      {stars.map((s,i)=>(
        <div key={i} style={{position:"absolute",left:s.x,top:s.y,fontSize:18,animation:`sparkle 0.8s ${s.d} infinite`}}>✨</div>
      ))}

      {/* 変身エフェクト枠 */}
      <div style={{position:"relative",marginBottom:24}}>
        <div style={{
          position:"absolute",inset:-30,borderRadius:"50%",
          background:`radial-gradient(circle, ${lv.color}55 0%, transparent 70%)`,
          animation:"float 2s ease-in-out infinite",
        }}/>

        {/* 溶接スパーク（黄色い火花が散る） */}
        {sparks.map((s,i)=>(
          <div key={i} style={{
            position:"absolute",left:"50%",top:"35%",
            width:s.size,height:s.size,borderRadius:"50%",background:"#FFE500",
            boxShadow:"0 0 6px 2px #FFA500",
            "--dx":s.dx,"--dy":s.dy,
            animation:`spark ${s.d} ${s.delay} ease-out infinite`,
          }}/>
        ))}

        {/* 進化時の炎パーティクル */}
        {[-50,-25,0,25,50].map((x,i)=>(
          <div key={i} style={{
            position:"absolute",left:`calc(50% + ${x}px)`,bottom:"-10px",
            fontSize:22+Math.abs(x)/4,
            animation:`fireflicker ${0.4+i*0.1}s ease-in-out infinite`,
            animationDelay:`${i*0.07}s`,
          }}>🔥</div>
        ))}

        <div style={{animation:"evolve 0.9s cubic-bezier(.34,1.56,.64,1) forwards"}}>
          <div style={{animation:"float 2s ease-in-out infinite"}}>
            <PixelWeldon size={180} mood="happy" bounce={false} col={lv.wCol} level={lv.level}/>
          </div>
        </div>
      </div>

      {/* テキスト */}
      <div style={{animation:"lvuptext 1s cubic-bezier(.34,1.56,.64,1) forwards",marginBottom:8}}>
        <div style={{fontSize:14,color:"#FFE500",letterSpacing:6,marginBottom:6,animation:"glow 1.5s infinite"}}>★★★ LEVEL UP! ★★★</div>
        <div style={{fontSize:60,fontWeight:900,color:"#FFE500",animation:"glow 1.5s infinite"}}>Lv.{lv.level}</div>
        <div style={{fontSize:20,color:lv.color,fontWeight:700,marginTop:4}}>{lv.name}</div>
      </div>

      <div style={{color:"#94A3B8",fontSize:13,marginBottom:12}}>
        {prevLv?.name} → <span style={{color:lv.color,fontWeight:700}}>{lv.name}</span>
      </div>

      {/* 変身メッセージ */}
      <div style={{
        background:`${lv.color}20`,border:`1px solid ${lv.color}`,
        borderRadius:12,padding:"12px 20px",maxWidth:280,marginBottom:16,
      }}>
        <div style={{color:lv.color,fontSize:13,fontWeight:700,lineHeight:1.6}}>{lv.evolveMsg}</div>
      </div>

      {/* STAGE解放通知 */}
      {lv.level===2&&<StageUnlock color="#1D4ED8" msg="🔓 STAGE 2「AW・ボイラー・水中」解放！"/>}
      {lv.level===3&&<StageUnlock color="#D97706" msg="🔓 STAGE 3「WES管理技術者」解放！"/>}
      {lv.level===4&&<StageUnlock color="#DC2626" msg="🔓 STAGE 4「AWS」解放！"/>}
      {lv.level===5&&<StageUnlock color="#7C3AED" msg="🔓 STAGE 5「IIW国際資格」解放！最高峰！"/>}
      {lv.level===6&&<StageUnlock color="#D4AC0D" msg="👑 IIW溶接エンジニア！伝説の称号！"/>}

      <button onClick={onNext} style={{
        marginTop:20,background:`linear-gradient(135deg,${lv.color},${lv.wCol})`,
        border:"none",borderRadius:12,padding:"14px 40px",
        color:"white",fontSize:15,fontWeight:900,cursor:"pointer",fontFamily:F,
        boxShadow:`0 4px 20px ${lv.color}50`,
      }}>結果を確認 →</button>
    </div>
  );
}

function StageUnlock({color, msg}){
  return(
    <div style={{
      background:`${color}20`,border:`1px solid ${color}`,
      borderRadius:8,padding:"8px 14px",
      color:color,fontSize:11,fontWeight:700,marginTop:8,
    }}>{msg}</div>
  );
}
