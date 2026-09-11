(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,81770,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let i=()=>(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsxs)("defs",{children:[(0,t.jsxs)("linearGradient",{id:"blueTickGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:"#60A5FA"}),(0,t.jsx)("stop",{offset:"100%",stopColor:"#1E40AF"})]}),(0,t.jsx)("filter",{id:"blueGlow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,t.jsx)("feDropShadow",{dx:"0",dy:"0",stdDeviation:"1",floodOpacity:"0.3",floodColor:"#3B82F6"})})]}),(0,t.jsx)("path",{d:"M10.5213 2.62368C11.3147 1.75231 12.6853 1.75231 13.4787 2.62368L14.4989 3.74391C14.8998 4.18418 15.4761 4.42288 16.071 4.39508L17.5845 4.32435C18.7614 4.26934 19.7307 5.23857 19.6757 6.41554L19.6049 7.92905C19.5771 8.52388 19.8158 9.10016 20.2561 9.50111L21.3763 10.5213C22.2477 11.3147 22.2477 12.6853 21.3763 13.4787L20.2561 14.4989C19.8158 14.8998 19.5771 15.4761 19.6049 16.071L19.6757 17.5845C19.7307 18.7614 18.7614 19.7307 17.5845 19.6757L16.071 19.6049C15.4761 19.5771 14.8998 19.8158 14.4989 20.2561L13.4787 21.3763C12.6853 22.2477 11.3147 22.2477 10.5213 21.3763L9.50111 20.2561C9.10016 19.8158 8.52388 19.5771 7.92905 19.6049L6.41554 19.6757C5.23857 19.7307 4.26934 18.7614 4.32435 17.5845L4.39508 16.071C4.42288 15.4761 4.18418 14.8998 3.74391 14.4989L2.62368 13.4787C1.75231 12.6853 1.75231 11.3147 2.62368 10.5213L3.74391 9.50111C4.18418 9.10016 4.42288 8.52388 4.39508 7.92905L4.32435 6.41554C4.26934 5.23857 5.23857 4.26934 6.41554 4.32435L7.92905 4.39508C8.52388 4.42288 9.10016 4.18418 9.50111 3.74391L10.5213 2.62368Z",fill:"url(#blueTickGrad)",filter:"url(#blueGlow)"}),(0,t.jsx)("path",{d:"M10.0303 14.6894L7.30303 11.9621C7.01014 11.6692 7.01014 11.1943 7.30303 10.9014C7.59592 10.6085 8.07079 10.6085 8.36368 10.9014L10.0303 12.568L15.6363 6.96207C15.9292 6.66918 16.4041 6.66918 16.697 6.96207C16.9899 7.25496 16.9899 7.72983 16.697 8.02272L10.0303 14.6894Z",fill:"white",filter:"url(#blueGlow)"})]}),a=[{title:"Full-Stack Web Development",desc:"Master modern full-stack development with React, Node.js and databases",issuer:"Udemy",date:"Jan 2024",completionDate:"15 Jan 2024",certId:"CERT-2024-001",pdfLink:"#",previewImage:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",icon:"fa-solid fa-laptop-code",color:"#38bdf8",skills:["React","Node.js","MongoDB"],difficulty:"Advanced",duration:"60 hours",status:"Completed",verified:!0},{title:"Advanced CSS & Animations",desc:"Create stunning animations and responsive layouts with modern CSS",issuer:"Frontend Simplified",date:"Mar 2024",completionDate:"20 Mar 2024",certId:"CERT-2024-002",pdfLink:"#",previewImage:"https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop",icon:"fa-brands fa-css3-alt",color:"#ec4899",skills:["CSS3","GSAP","Responsive Design"],difficulty:"Intermediate",duration:"45 hours",status:"Completed",verified:!0},{title:"Python for AI & ML",desc:"Build AI applications and machine learning models with Python",issuer:"Coursera",date:"Dec 2023",completionDate:"28 Dec 2023",certId:"CERT-2023-001",pdfLink:"#",previewImage:"https://images.unsplash.com/photo-1677442d019cecf8f80f1a18a822a8b2efae6fa1?w=600&h=400&fit=crop",icon:"fa-solid fa-robot",color:"#f59e0b",skills:["Python","TensorFlow","Data Science"],difficulty:"Advanced",duration:"80 hours",status:"Completed",verified:!0}];e.s(["default",0,function(){let[e,o]=(0,r.useState)(null),n=e=>{e&&o(e)};return(0,t.jsxs)("section",{id:"certificates",style:{paddingTop:60},children:[(0,t.jsx)("style",{children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes bluePulse {
          0% { filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.5)); }
          100% { filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0.3)); }
        }
        .blue-tick-icon {
          animation: bluePulse 2s ease-in-out infinite;
          transition: transform 0.3s ease;
        }
        .cert-card:hover .blue-tick-icon {
          transform: scale(1.2) rotate(-10deg);
        }
        .cert-card {
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.6s ease-out both;
        }
        .cert-card:nth-child(1) { animation-delay: 0.1s; }
        .cert-card:nth-child(2) { animation-delay: 0.2s; }
        .cert-card:nth-child(3) { animation-delay: 0.3s; }
        .cert-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--c-color) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          border-radius: 24px;
        }
        .cert-card:hover::before {
          opacity: 0.04;
        }
        .cert-card:hover {
          transform: translateY(-8px);
          border-color: var(--c-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25), inset 0 0 30px rgba(255,255,255,0.03), 0 0 15px var(--c-color);
        }
        .cert-glow {
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: var(--c-color);
          filter: blur(60px);
          opacity: 0.1;
          border-radius: 50%;
          transition: all 0.5s ease;
          pointer-events: none;
        }
        .cert-card:hover .cert-glow {
          opacity: 0.15;
          transform: scale(1.2) translate(-15px, 15px);
        }
        .cert-icon {
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .cert-card:hover .cert-icon {
          transform: scale(1.1) rotate(-5deg);
          background: linear-gradient(135deg, var(--c-color), rgba(255,255,255,0.05)) !important;
          box-shadow: 0 8px 16px -6px var(--c-color);
        }
        .skill-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 18px;
          font-size: 10px;
          font-weight: 700;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--c-color);
          color: var(--c-color);
          text-transform: uppercase;
          letter-spacing: 0.4px;
          transition: all 0.3s ease;
        }
        .skill-badge:hover {
          background: var(--c-color);
          color: #fff;
          transform: scale(1.02);
          opacity: 0.9;
        }
        .difficulty-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 11px;
          font-size: 10px;
          font-weight: 700;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--c-color);
          color: var(--c-color);
        }
        .duration-info {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          color: var(--muted);
          font-weight: 500;
        }
        .pdf-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(12px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }
        .pdf-modal-content {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          width: 100%;
          max-width: 900px;
          height: 85vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .pdf-modal-iframe { width: 100%; height: 100%; border: none; border-radius: 0 0 20px 20px; background: #fff; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px) scale(0.96); } to { opacity: 1; transform: translateY(0) scale(1); } }
        .view-credential-btn {
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)) !important;
          position: relative;
          overflow: hidden;
        }
        .view-credential-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, var(--c-color), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          opacity: 0.3;
        }
        .view-credential-btn:hover::before {
          transform: translateX(100%);
        }
        .view-credential-btn:hover {
          background: var(--c-color) !important;
          color: #fff;
          border-color: var(--c-color);
          box-shadow: 0 8px 16px -4px var(--c-color);
          transform: translateY(-2px);
          opacity: 0.95;
        }
        .view-credential-btn:hover .arrow-icon {
          transform: translateX(4px) scale(1.08);
        }
        .modal-close-btn { transition: all 0.2s ease; }
        .modal-close-btn:hover {
          background: rgba(255,255,255,0.1);
          color: var(--text-primary);
        }
      `}),(0,t.jsxs)("div",{style:{marginBottom:48,textAlign:"center"},children:[(0,t.jsx)("div",{style:{color:"var(--accent)",fontSize:13,fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:12},children:"Achievements"}),(0,t.jsx)("h2",{style:{margin:"0 0 16px 0",fontSize:"clamp(28px, 5vw, 40px)",fontWeight:600,color:"var(--text-primary)",letterSpacing:"-0.02em"},children:"Certifications"}),(0,t.jsx)("div",{style:{color:"var(--muted)",fontSize:16,maxWidth:500,margin:"0 auto",lineHeight:1.6},children:"Official recognitions and completed coursework."})]}),(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 330px), 1fr))",gap:24},children:a.map(e=>(0,t.jsxs)("div",{className:"cert-card",onClick:()=>n(e.previewImage),style:{background:"var(--glass)",border:"1px solid var(--border)",borderRadius:28,padding:24,minHeight:420,"--c-color":e.color},children:[(0,t.jsx)("div",{className:"cert-glow"}),(0,t.jsxs)("div",{style:{position:"relative",zIndex:1,display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"space-between"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,gap:8,flexWrap:"wrap"},children:[(0,t.jsx)("div",{style:{display:"flex",alignItems:"center",gap:6},children:e.verified&&(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",background:`linear-gradient(135deg, ${e.color}25, ${e.color}10)`,border:`1.5px solid ${e.color}50`,borderRadius:10,backdropFilter:"blur(8px)"},children:[(0,t.jsx)("i",{className:"fa-solid fa-check-circle",style:{color:e.color,fontSize:13,textShadow:`0 0 8px ${e.color}40`}}),(0,t.jsx)("span",{style:{color:e.color,fontWeight:800,fontSize:10,letterSpacing:"0.6px",textTransform:"uppercase"},children:"VERIFIED"})]})}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"6px 12px",background:`linear-gradient(135deg, ${e.color}25, ${e.color}10)`,border:`1.5px solid ${e.color}50`,borderRadius:10,backdropFilter:"blur(8px)"},children:[(0,t.jsx)("i",{className:"fa-solid fa-circle-check",style:{color:e.color,fontSize:13,textShadow:`0 0 8px ${e.color}40`}}),(0,t.jsx)("span",{style:{color:e.color,fontWeight:800,fontSize:10,letterSpacing:"0.6px",textTransform:"uppercase"},children:e.status})]})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:16,gap:12},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",gap:12,flex:1,minWidth:0},children:[(0,t.jsx)("div",{className:"cert-icon",style:{width:48,height:48,borderRadius:14,background:`${e.color}15`,border:`2px solid ${e.color}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:e.color,flexShrink:0},children:(0,t.jsx)("i",{className:e.icon})}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,fontWeight:700,fontSize:12,color:"var(--text-primary)",letterSpacing:.2,marginBottom:3},children:[e.issuer," ",(0,t.jsx)("span",{className:"blue-tick-icon",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(i,{})})]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",rowGap:2},children:[(0,t.jsx)("span",{style:{fontSize:9,color:"var(--muted)",fontWeight:500},children:e.date}),(0,t.jsx)("span",{style:{fontSize:7,color:"var(--muted)"},children:"•"}),(0,t.jsxs)("span",{className:"duration-info",style:{fontSize:10},children:[(0,t.jsx)("i",{className:"fa-regular fa-hourglass-end",style:{fontSize:9}}),e.duration]})]})]})]}),(0,t.jsxs)("div",{className:"difficulty-badge",style:{fontSize:9,padding:"4px 8px",whiteSpace:"nowrap",flexShrink:0},children:[(0,t.jsx)("i",{className:"fa-solid fa-signal",style:{fontSize:9}}),e.difficulty]})]}),(0,t.jsxs)("div",{style:{flexGrow:1,marginBottom:16},children:[(0,t.jsx)("h3",{style:{margin:"0 0 8px 0",fontSize:17,fontWeight:700,color:"var(--text-primary)",lineHeight:1.35,maxHeight:"3.4em",overflow:"hidden"},children:e.title}),(0,t.jsx)("p",{style:{color:"var(--muted)",fontSize:12,lineHeight:1.4,margin:"0 0 12px 0"},children:e.desc}),(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:e.skills.map(e=>(0,t.jsx)("span",{className:"skill-badge",style:{padding:"3px 8px",fontSize:9},children:e},e))})]}),(0,t.jsx)("div",{style:{borderTop:`1px solid ${e.color}20`,paddingTop:12,marginBottom:14},children:(0,t.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:8,fontWeight:700,color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.4px",marginBottom:3},children:"Cert ID"}),(0,t.jsx)("div",{style:{fontSize:10,fontWeight:600,color:"var(--text-primary)",fontFamily:"monospace",wordBreak:"break-all"},children:e.certId})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:8,fontWeight:700,color:"var(--muted)",textTransform:"uppercase",letterSpacing:"0.4px",marginBottom:3},children:"Completed"}),(0,t.jsx)("div",{style:{fontSize:10,fontWeight:600,color:"var(--text-primary)"},children:e.completionDate})]})]})}),(0,t.jsxs)("button",{className:"view-credential-btn",onClick:t=>{var r;return r=e.previewImage,void(t.stopPropagation(),n(r))},disabled:!e.previewImage,style:{width:"100%",padding:"10px 14px",borderRadius:12,background:"rgba(255,255,255,0.05)",border:`2px solid ${e.color}40`,color:e.color,fontWeight:700,fontSize:11,cursor:e.previewImage?"pointer":"not-allowed",opacity:e.previewImage?1:.6,display:"flex",alignItems:"center",justifyContent:"center",gap:6,fontFamily:"inherit",letterSpacing:"0.2px",textTransform:"uppercase"},children:[(0,t.jsx)("i",{className:"fa-solid fa-image",style:{fontSize:10}})," Preview ",(0,t.jsx)("i",{className:"fa-solid fa-arrow-right arrow-icon",style:{transition:"transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",fontSize:8}})]})]})]},e.title))}),e&&(0,t.jsx)("div",{className:"pdf-modal-overlay",onClick:()=>o(null),children:(0,t.jsxs)("div",{className:"pdf-modal-content",onClick:e=>e.stopPropagation(),children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"16px 20px",borderBottom:"1px solid var(--border)",background:"rgba(255,255,255,0.02)"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10},children:[(0,t.jsx)("i",{className:"fa-solid fa-image",style:{color:"var(--accent)",fontSize:18}}),(0,t.jsx)("span",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:16},children:"Certificate Preview"})]}),(0,t.jsx)("button",{className:"modal-close-btn",onClick:()=>o(null),style:{background:"transparent",border:"none",color:"var(--muted)",cursor:"pointer",fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",width:32,height:32,borderRadius:8},children:(0,t.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,t.jsx)("div",{style:{flexGrow:1,background:"var(--card)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20},children:(0,t.jsx)("img",{src:e,alt:"Certificate Preview",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:12}})})]})})]})}])},30841,e=>{e.n(e.i(81770))}]);