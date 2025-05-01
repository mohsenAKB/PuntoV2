export const analytics = {
  hotjar: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5043235,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
  clarity: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nwagvikgmg");
  `,
  raychat: `  
  window.RAYCHAT_TOKEN = "5dde2f19-cc12-41be-b12e-4a1c23b1cdfe";
    (function () {
      d = document;
      s = d.createElement("script");
      s.src = "https://widget-react.raychat.io/install/widget.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();`,
  googleAnalytics: `  
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TGHZZEQQET"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TGHZZEQQET');
</script>`,
  matomo: `
<!-- Matomo -->
 var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.punto.ir/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
<!-- End Matomo Code -->`,
};
