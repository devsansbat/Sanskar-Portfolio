(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42884,e=>{"use strict";var a=e.i(43476);let n=[{icon:"fa-building",name:"TechNova Inc",desc:"Web Development"},{icon:"fa-shopping-cart",name:"ShopEase",desc:"E-commerce Platform"},{icon:"fa-graduation-cap",name:"EduLearn",desc:"Educational Portal"},{icon:"fa-robot",name:"AI Solutions",desc:"Chatbot Development"},{icon:"fa-mobile-alt",name:"AppCraft",desc:"Mobile Interface"},{icon:"fa-paint-brush",name:"DesignHub",desc:"UI/UX Design"}];e.s(["default",0,function(){return(0,a.jsxs)("section",{id:"clients",className:"section-divider",children:[(0,a.jsx)("style",{children:`
        .marquee-container {
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          padding: 8px 0; /* Added padding to prevent clipping on hover */
        }
        .marquee-content {
          display: flex;
          animation: marquee 50s linear infinite;
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .client-item {
          flex-shrink: 0;
          width: 200px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 0 12px;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--muted);
          transition: all 0.3s ease;
        }
        .client-item:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: scale(1.05);
          box-shadow: 0 0 15px -2px var(--accent-glow);
          background: rgba(124, 58, 237, 0.05);
        }
      `}),(0,a.jsxs)("div",{style:{marginBottom:24,textAlign:"center"},children:[(0,a.jsx)("h2",{style:{margin:0,fontSize:20,color:"var(--text-primary)"},children:"Trusted By"}),(0,a.jsx)("div",{style:{color:"var(--muted)",fontSize:14,marginTop:4},children:"A few of the clients and companies I've worked with."})]}),(0,a.jsx)("div",{className:"marquee-container",children:(0,a.jsx)("div",{className:"marquee-content",children:[...n,...n].map((e,n)=>(0,a.jsxs)("div",{className:"client-item",title:e.desc,children:[(0,a.jsx)("i",{className:`fas ${e.icon}`,style:{fontSize:22,color:"currentColor"}}),(0,a.jsx)("span",{style:{fontWeight:600,fontSize:15},children:e.name})]},`${e.name}-${n}`))})})]})}])},31804,e=>{e.n(e.i(42884))}]);