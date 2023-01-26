import Script from 'next/script';

export default function Head() {
  return (
    <>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="google-site-verification"
        content="UfExZvP8OMttLFbO1FiDBWJe9aKIqYcnaFQYu-nc3iY"
      />
      <title>Kvarno — Your Design Buddy</title>
      <meta name="title" content="Kvarno — Your Design Buddy" />
      <meta
        name="description"
        content="Discover the ultimate CSS and HTML tools for effortless customization and maximum compatibility. Our user-friendly tools make web design a breeze and take the hassle out of creating responsive, cross-browser compatible websites."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kvarno.netlify.app/" />
      <meta property="og:title" content="Kvarno — Your Design Buddy" />
      <meta
        property="og:description"
        content="Discover the ultimate CSS and HTML tools for effortless customization and maximum compatibility. Our user-friendly tools make web design a breeze and take the hassle out of creating responsive, cross-browser compatible websites."
      />
      <meta property="og:image" content="/logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://kvarno.netlify.app/" />
      <meta property="twitter:title" content="Kvarno — Your Design Buddy" />
      <meta
        property="twitter:description"
        content="Discover the ultimate CSS and HTML tools for effortless customization and maximum compatibility. Our user-friendly tools make web design a breeze and take the hassle out of creating responsive, cross-browser compatible websites."
      />
      <meta property="twitter:image" content="/logo.png" />
      <link rel="canonical" href="https://kvarno.netlify.app/" />
      <link rel="manifest" href="/manifest.json" />
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
