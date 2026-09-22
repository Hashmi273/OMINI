(function(){
  const MOBILE_BREAKPOINT=768;
  function injectStyles(){
    if(document.getElementById('omini-mobile-system')) return;
    const style=document.createElement('style');
    style.id='omini-mobile-system';
    style.textContent=`
      html{scroll-behavior:auto}
      *,*:before,*:after{box-sizing:border-box}
      button,a,input,select,textarea{touch-action:manipulation}
      input,select,textarea{font-size:16px}
      @media(max-width:768px){
        html,body{width:100%;max-width:100%;overflow-x:hidden!important}
        body{min-height:100dvh!important;height:auto!important;overflow-y:auto!important}
        .omini-mobile-menu{display:flex!important;align-items:center;justify-content:center;width:38px;height:38px;min-width:38px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;color:#334155;cursor:pointer}
        .omini-mobile-back{display:flex!important;align-items:center;justify-content:center;width:38px;height:38px;min-width:38px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;color:#334155;cursor:pointer}
        .omini-mobile-overlay{display:none;position:fixed;inset:0;background:rgba(15,23,42,.38);z-index:9998;backdrop-filter:blur(1px)}
        .omini-mobile-overlay.show{display:block}
        body.omini-has-sidebar aside,
        body.omini-has-sidebar aside.sidebar{position:fixed!important;left:-290px!important;top:0!important;bottom:0!important;width:280px!important;max-width:88vw!important;height:100dvh!important;z-index:9999!important;transition:left .22s ease!important;box-shadow:12px 0 32px rgba(15,23,42,.16)!important;overflow:hidden!important;background:#fff!important}
        body.omini-has-sidebar aside.omini-mobile-open,
        body.omini-has-sidebar aside.sidebar.omini-mobile-open{left:0!important}
        body.omini-has-sidebar aside nav,
        body.omini-has-sidebar aside.sidebar nav{overflow-y:auto!important;-webkit-overflow-scrolling:touch!important}
        body.omini-has-sidebar aside.sidebar .brandcopy,
        body.omini-has-sidebar aside.sidebar .navcopy,
        body.omini-has-sidebar aside.sidebar .section,
        body.omini-has-sidebar aside.sidebar .profilecopy{display:block!important}
        body.omini-has-sidebar aside.sidebar .nav{justify-content:flex-start!important}
        body.omini-has-sidebar aside.sidebar .mobile-menu-btn{display:none!important}
        body.omini-has-sidebar aside.sidebar .w-10,
        body.omini-has-sidebar aside.sidebar .w-9{flex-shrink:0!important}
        body.omini-has-sidebar aside.sidebar .profilecopy{display:block!important}
        body.omini-has-sidebar main,body.omini-has-sidebar .main,body.omini-has-sidebar .flex-1.min-w-0{width:100%!important;min-width:0!important;max-width:100%!important}
        body.omini-has-sidebar main>header,body.omini-has-sidebar header{min-height:60px!important;height:60px!important;padding-left:10px!important;padding-right:10px!important;position:sticky!important;top:0!important;z-index:50!important;display:flex!important;align-items:center!important}
        body.omini-has-sidebar main .overflow-y-auto,body.omini-has-sidebar .scroll{height:auto!important;min-height:calc(100dvh - 60px)!important;overflow:visible!important;-webkit-overflow-scrolling:touch!important}
        body.omini-has-sidebar main .p-8,body.omini-has-sidebar main .p-6,body.omini-has-sidebar main .p-5,body.omini-has-sidebar main .p-4{padding:14px!important}
        body.omini-has-sidebar main .grid{grid-template-columns:1fr!important}
        body.omini-has-sidebar main .grid-cols-2,body.omini-has-sidebar main .grid-cols-3,body.omini-has-sidebar main .grid-cols-4,body.omini-has-sidebar main .grid-cols-5,body.omini-has-sidebar main .grid-cols-6{grid-template-columns:1fr!important}
        body.omini-has-sidebar main .flex-row{flex-direction:column!important}
        body.omini-has-sidebar main .overflow-x-auto,body.omini-has-sidebar main .overflow-hidden:has(table){overflow-x:auto!important;-webkit-overflow-scrolling:touch!important}
        body.omini-has-sidebar main table{min-width:720px!important}
        body.omini-has-sidebar main th,body.omini-has-sidebar main td{white-space:nowrap!important}
        body.omini-has-sidebar main input,body.omini-has-sidebar main select,body.omini-has-sidebar main textarea{min-height:42px!important;width:100%;max-width:100%}
        body.omini-has-sidebar main button{min-height:42px!important}
        body.omini-menu-locked{overflow:hidden!important}
      }
      @media(max-width:768px){
        body.omini-login{overflow-y:auto!important;height:auto!important;min-height:100dvh!important}
        body.omini-login .h-screen{height:auto!important;min-height:100dvh!important}
        body.omini-login>div.relative.z-10{min-height:100dvh!important;height:auto!important}
        body.omini-login header{padding:12px 16px!important;min-height:56px!important}
        body.omini-login main{flex-direction:column!important;justify-content:flex-start!important;align-items:stretch!important;gap:18px!important;padding:18px 16px 24px!important;min-height:0!important}
        body.omini-login main>div:first-child{width:100%!important;height:150px!important;min-height:150px!important;justify-content:center!important;overflow:hidden!important}
        body.omini-login main>div:first-child h1{font-size:32px!important}
        body.omini-login main>div:first-child svg{opacity:.32!important}
        body.omini-login main>div:last-child{width:100%!important;max-width:460px!important;margin:0 auto!important;padding:24px!important;border-radius:20px!important}
        body.omini-login footer{display:none!important}
      }
    `;
    document.head.appendChild(style);
  }
  function modernizePortal(){
    document.body.classList.add('omini-modern-portal');
    if(!document.getElementById('omini-modern-portal-theme')){
      const style=document.createElement('style'); style.id='omini-modern-portal-theme';
      style.textContent=`
        :root{--omini-bg:#f6f8fc;--omini-card:#fff;--omini-border:#e5e9f0;--omini-text:#172033;--omini-muted:#748096;--omini-primary:#5b35d5}
        body.omini-modern-portal{background:var(--omini-bg)!important;color:var(--omini-text)!important}
        body.omini-modern-portal aside{background:#fff!important;border-right:1px solid var(--omini-border)!important;box-shadow:none!important}
        body.omini-modern-portal main,body.omini-modern-portal .main{background:var(--omini-bg)!important}
        body.omini-modern-portal main>header,body.omini-modern-portal .main>header{background:#fff!important;border-bottom:1px solid var(--omini-border)!important;box-shadow:none!important}
        body.omini-modern-portal main .bg-white.rounded-xl,body.omini-modern-portal main .bg-white.rounded-2xl,body.omini-modern-portal main .bg-white.rounded-3xl,body.omini-modern-portal main .card{border:1px solid var(--omini-border)!important;box-shadow:0 4px 16px rgba(15,23,42,.045)!important}
        body.omini-modern-portal main input,body.omini-modern-portal main select,body.omini-modern-portal main textarea{border-color:var(--omini-border)!important;border-radius:9px!important;background:#fff}
        body.omini-modern-portal main thead{background:#f8fafc!important}
        body.omini-modern-portal main button{border-radius:9px}
        body.omini-modern-portal .omini-profile-chip{display:flex;align-items:center;gap:9px;margin-left:12px;padding:4px 7px 4px 5px;border:1px solid var(--omini-border);border-radius:10px;background:#fff;cursor:pointer}
        body.omini-modern-portal .omini-profile-avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#5b35d5,#2563eb);color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800}
        body.omini-modern-portal .omini-profile-copy{line-height:1.15;text-align:left}
        body.omini-modern-portal .omini-profile-name{font-size:11px;font-weight:700;color:#172033}
        body.omini-modern-portal .omini-profile-role{font-size:9px;color:#8a94a6;margin-top:2px}
        @media(max-width:768px){body.omini-modern-portal .omini-profile-chip{margin-left:6px;padding:3px}body.omini-modern-portal .omini-profile-copy{display:none}body.omini-modern-portal main>header,body.omini-modern-portal header{min-height:60px!important;height:60px!important}}
      `;
      document.head.appendChild(style);
    }
    document.querySelectorAll('main>header,.main>header').forEach(header=>{
      if(header.querySelector('.omini-profile-chip')) return;
      const profile=document.createElement('button'); profile.type='button'; profile.className='omini-profile-chip'; profile.setAttribute('aria-label','User profile');
      profile.innerHTML='<span class="omini-profile-avatar">P</span><span class="omini-profile-copy"><span class="omini-profile-name">Parvez</span><span class="omini-profile-role">Enterprise Admin</span></span><i class="fa-solid fa-chevron-down text-[9px] text-slate-400 hidden sm:block"></i>';
      header.appendChild(profile);
    });
  }

  function installFinalSidebar(){
    let aside=document.querySelector('aside');
    const path=location.pathname.toLowerCase();
    const sidebarPages=['rcs-bot.html','whatsapp-bot.html','live-inbox.html','whatsapp-agents.html'];
    if(!aside && sidebarPages.some(n=>path.endsWith(n))){
      aside=document.createElement('aside');
      aside.setAttribute('aria-label','ZION navigation');
      document.body.insertBefore(aside, document.body.firstElementChild);
      document.body.style.display='flex';
      document.body.style.minHeight='100vh';
      const main=document.querySelector('main');
      if(main){main.style.flex='1';main.style.minWidth='0';}
    }
    if(!aside || aside.dataset.zionFinalSidebar==='1') return;
    aside.dataset.zionFinalSidebar='1';
    aside.className='zion-final-sidebar';
    const is=n=>path.endsWith(n);
    const active=names=>names.some(n=>is(n));
    const item=(href,icon,label,sub,on)=>'<a href="'+href+'" class="zion-nav-item '+(on?'is-active':'')+'"><span class="zion-nav-icon"><i class="'+icon+'"></i></span><span class="zion-nav-copy"><b>'+label+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</span></a>';
    const sub=(href,label,on)=>'<a href="'+href+'" class="zion-subitem '+(on?'is-active':'')+'">'+label+'</a>';
    const group=(id,icon,label,links,on)=>'<div class="zion-nav-group"><button type="button" class="zion-nav-group-btn '+(on?'is-open':'')+'" data-zion-toggle="'+id+'"><span class="zion-nav-group-left"><span class="zion-nav-icon"><i class="'+icon+'"></i></span><span class="zion-nav-copy"><b>'+label+'</b></span></span><i class="fa-solid fa-chevron-down zion-chevron"></i></button><div id="'+id+'" class="zion-submenu '+(on?'is-open':'')+'">'+links+'</div></div>';
    const campaigns=active(['send-sms.html','rcs-campaign.html','whatsapp-campaign.html']);
    const reports=active(['reports.html','summary-report.html','details-report.html','campaign-report.html','cta-report.html','stats-report.html','archive-report.html','rcs-reports.html','whatsapp-reports.html']);
    const templates=active(['sms-templates.html','rcs-templates.html','whatsapp-templates.html','templates.html']);
    const aiAgents=active(['live-inbox.html','rcs-bot.html','whatsapp-bot.html','rcs-bots.html','whatsapp-automation.html','whatsapp-agents.html']);
    aside.innerHTML='<div class="zion-sidebar-brand"><a href="home.html"><img class="immense-sidebar-logo" src="assets/immense-smart-solutions-logo.webp" alt="Immense Smart Solutions"><span><strong>IMMENSE <em>CPaaS</em></strong><small>SMART SOLUTIONS</small></span></a></div><nav class="zion-sidebar-nav"><div class="zion-nav-section">OVERVIEW</div>'+item('home.html','fa-solid fa-house','Home','',is('home.html'))+item('dashboard.html','fa-solid fa-chart-line','Dashboard','',is('dashboard.html'))+'<div class="zion-nav-section messaging">MESSAGING</div>'+group('zion-campaigns','fa-solid fa-paper-plane','Campaigns',sub('send-sms.html','SMS Campaign',is('send-sms.html'))+sub('rcs-campaign.html','RCS Campaign',is('rcs-campaign.html'))+sub('whatsapp-campaign.html','WhatsApp Campaign',is('whatsapp-campaign.html')),campaigns)+group('zion-reports','fa-solid fa-chart-column','Reports',sub('reports.html','Overview Report',is('reports.html'))+sub('campaign-report.html','Campaign Report',is('campaign-report.html'))+sub('summary-report.html','Summary Report',is('summary-report.html'))+sub('details-report.html','Details Report',is('details-report.html'))+sub('cta-report.html','CTA Report',is('cta-report.html'))+sub('stats-report.html','Stats Report',is('stats-report.html'))+sub('archive-report.html','Archive Report',is('archive-report.html')),reports)+group('zion-templates','fa-solid fa-file-lines','Templates',sub('sms-templates.html','SMS Templates',is('sms-templates.html'))+sub('rcs-templates.html','RCS Templates',is('rcs-templates.html'))+sub('whatsapp-templates.html','WhatsApp Templates',is('whatsapp-templates.html')),templates)+group('zion-ai-agents','fa-solid fa-robot','AI Agents',sub('live-inbox.html','Live Inbox',is('live-inbox.html'))+sub('rcs-bot.html','RCS Chat Bot',is('rcs-bot.html')||is('rcs-bots.html'))+sub('whatsapp-bot.html','WhatsApp Chat Bot',is('whatsapp-bot.html')||is('whatsapp-automation.html'))+sub('whatsapp-agents.html','WhatsApp Agents',is('whatsapp-agents.html')),aiAgents)+group('zion-dlt','fa-solid fa-building-shield','DLT / Compliance',sub('dlt-dashboard.html','DLT Dashboard',is('dlt-dashboard.html'))+sub('dlt-entities.html','Entities (PE & TM)',is('dlt-entities.html'))+sub('dlt-sender-ids.html','Sender IDs',is('dlt-sender-ids.html'))+sub('dlt-templates.html','DLT Templates',is('dlt-templates.html')),active(['dlt-dashboard.html','dlt-entities.html','dlt-sender-ids.html','dlt-templates.html']))+'<div class="zion-nav-section manage">MANAGE</div>'+item('groups.html','fa-solid fa-users','Contacts & Groups','',is('groups.html'))+item('credit-report.html','fa-solid fa-wallet','Credits & Wallet','',is('credit-report.html'))+item('api-integration.html','fa-solid fa-code','API & Integration','',is('api-integration.html'))+item('settings.html','fa-solid fa-gear','Settings','',is('settings.html'))+'</nav><div class="zion-sidebar-profile"><span class="zion-profile-avatar">P</span><span><b>Parvez</b><small>Enterprise Admin</small></span><i class="fa-solid fa-arrow-right-from-bracket"></i></div>';
    if(!document.getElementById('zion-final-sidebar-style')){const style=document.createElement('style');style.id='zion-final-sidebar-style';style.textContent="aside.zion-final-sidebar{width:224px!important;min-width:224px!important;max-width:224px!important;height:100vh!important;display:flex!important;flex-direction:column!important;background:#fff!important;border-right:1px solid #e7ebf1!important;box-shadow:none!important;z-index:100!important}.immense-sidebar-logo{width:42px;height:42px;object-fit:contain;border-radius:9px;background:#fff;flex:0 0 auto}.zion-sidebar-brand a>span:nth-child(2){min-width:0}.zion-sidebar-brand{height:64px;display:flex;align-items:center;padding:0 14px;border-bottom:1px solid #eef1f5;flex:0 0 auto}.zion-sidebar-brand a{display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit;width:100%}.zion-brand-mark{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#5b35d5,#2563eb);color:#fff;display:flex;align-items:center;justify-content:center;font-size:16px}.zion-sidebar-brand strong{display:flex;align-items:center;gap:4px;font-size:15px;line-height:1;color:#172033}.zion-sidebar-brand em{font-style:normal;font-size:8px;padding:3px 5px;border-radius:4px;color:#fff;background:#5b35d5}.zion-sidebar-brand small{display:block;margin-top:5px;font-size:7px;font-weight:700;letter-spacing:.04em;color:#9aa3b2}.zion-sidebar-nav{flex:1;min-height:0;overflow-y:auto;padding:14px 10px 12px}.zion-nav-section{font-size:9px;font-weight:800;color:#98a2b3;letter-spacing:.08em;padding:8px 12px 7px}.zion-nav-section.messaging{margin-top:5px}.zion-nav-section.manage{margin-top:8px}.zion-nav-item,.zion-nav-group-btn{width:100%;min-height:38px;display:flex;align-items:center;text-decoration:none;border:0;background:transparent;color:#526078;border-radius:9px;margin:2px 0;padding:5px 10px;box-sizing:border-box;font-family:inherit;cursor:pointer}.zion-nav-item:hover,.zion-nav-group-btn:hover{background:#f7f8fb;color:#27344a}.zion-nav-item.is-active{background:#f1edff;color:#5b35d5}.zion-nav-icon{width:28px;height:28px;min-width:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;color:#68758a}.zion-nav-item.is-active .zion-nav-icon{color:#5b35d5}.zion-nav-copy{display:flex;flex-direction:column;text-align:left;min-width:0;margin-left:8px}.zion-nav-copy b{font-size:12px;line-height:1.15;font-weight:650;white-space:nowrap}.zion-nav-copy small{font-size:8px;color:#9aa3b2;margin-top:2px}.zion-nav-group-left{display:flex;align-items:center;min-width:0}.zion-nav-group-btn.is-open{background:#f1edff;color:#5b35d5}.zion-nav-group-btn.is-open .zion-nav-icon{color:#5b35d5}.zion-chevron{margin-left:auto;font-size:9px;color:#8792a4;transition:transform .16s}.zion-nav-group-btn.is-open .zion-chevron{transform:rotate(180deg)}.zion-submenu{display:none;margin:0 0 5px 16px;padding:3px 0 3px 10px;border-left:1px solid #e5e9f0}.zion-submenu.is-open{display:block}.zion-subitem{display:flex;align-items:center;min-height:34px;padding:6px 10px;border-radius:8px;color:#56637a;text-decoration:none;font-size:11px;font-weight:600}.zion-subitem:hover{background:#f7f8fb;color:#27344a}.zion-subitem.is-active{background:#edf4ff;color:#2563eb}.zion-sidebar-profile{height:62px;flex:0 0 auto;border-top:1px solid #eef1f5;display:flex;align-items:center;gap:9px;padding:10px 12px;background:#fff}.zion-profile-avatar{width:34px;height:34px;border-radius:10px;background:#111d35;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px}.zion-sidebar-profile span:nth-child(2){display:flex;flex-direction:column;min-width:0}.zion-sidebar-profile b{font-size:11px;color:#243047}.zion-sidebar-profile small{font-size:9px;color:#9aa3b2;margin-top:2px}.zion-sidebar-profile>i{margin-left:auto;color:#94a0b2;font-size:11px}@media(max-width:768px){aside.zion-final-sidebar{position:fixed!important;left:-290px!important;top:0!important;width:280px!important;min-width:280px!important;max-width:280px!important;height:100dvh!important;transition:left .22s ease!important;z-index:9999!important}aside.zion-final-sidebar.omini-mobile-open{left:0!important}}";document.head.appendChild(style);}
    aside.querySelectorAll('[data-zion-toggle]').forEach(btn=>btn.addEventListener('click',()=>{const t=document.getElementById(btn.getAttribute('data-zion-toggle'));if(!t)return;const open=!t.classList.contains('is-open');t.classList.toggle('is-open',open);btn.classList.toggle('is-open',open);}));
  }

  function makeMobileNavigation(){
    const aside=document.querySelector('aside');
    if(!aside) return false;
    document.body.classList.add('omini-has-sidebar');
    let overlay=document.querySelector('.omini-mobile-overlay');
    if(!overlay){overlay=document.createElement('div');overlay.className='omini-mobile-overlay';document.body.appendChild(overlay);}
    const header=document.querySelector('main header, .main header, body>div header, header');
    if(header && !header.querySelector('.omini-mobile-menu')){
      const menu=document.createElement('button');menu.type='button';menu.className='omini-mobile-menu';menu.setAttribute('aria-label','Open menu');menu.innerHTML='<i class="fa-solid fa-bars"></i>';
      const back=document.createElement('button');back.type='button';back.className='omini-mobile-back';back.setAttribute('aria-label','Go back');back.innerHTML='<i class="fa-solid fa-arrow-left"></i>';back.style.marginLeft='6px';
      const title=document.createElement('div');title.className='omini-mobile-title';title.textContent=document.title.split(' - ')[0].split(' | ')[0]||'ZION CPaaS';title.style.cssText='display:block;min-width:0;flex:1;font-size:14px;font-weight:700;color:#172033;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-left:10px';
      header.insertBefore(menu,header.firstChild);header.insertBefore(back,menu.nextSibling);header.insertBefore(title,back.nextSibling);
      const openMenu=()=>{aside.classList.add('omini-mobile-open');overlay.classList.add('show');document.body.classList.add('omini-menu-locked');if(!history.state||history.state.ominiMenu!==true)history.pushState({ominiMenu:true},'',location.href)};
      const closeMenu=()=>{aside.classList.remove('omini-mobile-open');overlay.classList.remove('show');document.body.classList.remove('omini-menu-locked')};
      const goBack=()=>{if(aside.classList.contains('omini-mobile-open')){closeMenu();return}if(history.length>1)history.back();else location.href='home.html'};
      menu.addEventListener('click',openMenu);back.addEventListener('click',goBack);overlay.addEventListener('click',closeMenu);
      aside.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<=MOBILE_BREAKPOINT)closeMenu()}));
      window.addEventListener('popstate',closeMenu);window.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
    }
    return true;
  }
  function fixNavigation(){
    document.querySelectorAll('a').forEach(a=>{if(a.textContent.trim().toLowerCase()==='home')a.setAttribute('href','home.html')});
    document.querySelectorAll('a[href*="rcs-bots.html"]').forEach(a=>a.href='rcs-bot.html');
    document.querySelectorAll('a[href*="whatsapp-bots.html"]').forEach(a=>a.href='whatsapp-bot.html');
  }
  function init(){
    injectStyles();
    modernizePortal();
    installFinalSidebar();
    if(location.pathname.endsWith('index.html')||location.pathname.endsWith('/'))document.body.classList.add('omini-login');
    makeMobileNavigation();fixNavigation();applyImmenseBranding();
    if('scrollRestoration' in history)history.scrollRestoration='auto';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();