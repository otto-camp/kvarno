import Script from "next/script";

export default function Head() {
  return (
    <>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Create HTML Card — Kvarno</title>
      <meta name="title" content="Create Your Own Card" />
      <meta
        name="description"
        content="Create professional and customizable HTML cards for your website with Kvarno's HTML Card Generator. Multiple style options, templates, and valid code for seamless integration. Upgrade your website's design now."
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://kvarno.netlify.app/create-card"
      />
      <meta property="og:title" content="Create Your Own Card" />
      <meta
        property="og:description"
        content="Create professional and customizable HTML cards for your website with Kvarno's HTML Card Generator. Multiple style options, templates, and valid code for seamless integration. Upgrade your website's design now."
      />
      <meta property="og:image" content="/logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://kvarno.netlify.app/create-card"
      />
      <meta property="twitter:title" content="Create Your Own Card" />
      <meta
        property="twitter:description"
        content="Create professional and customizable HTML cards for your website with Kvarno's HTML Card Generator. Multiple style options, templates, and valid code for seamless integration. Upgrade your website's design now."
      />
      <meta property="twitter:image" content="/logo.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href="https://kvarno.netlify.app/create-card" />
      <Script
        id="google-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P7J4MD8');`,
        }}
      ></Script>
    </>
  );
}
