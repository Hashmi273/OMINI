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
    if(location.pathname.endsWith('index.html')||location.pathname.endsWith('/'))document.body.classList.add('omini-login');
    makeMobileNavigation();fixNavigation();
    if('scrollRestoration' in history)history.scrollRestoration='auto';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();