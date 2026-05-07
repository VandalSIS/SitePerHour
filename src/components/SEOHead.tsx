import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  lang?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0005_4_a-vibrant-psychedelic-illustrated-festiv_D5lOUmxbTqKV5GydP5fB0w_4fFsKLR4RrSArj5GnsbR5A.jpeg",
  canonicalUrl,
  structuredData,
  lang = "en"
}: SEOHeadProps) => {
  const siteUrl = "https://siteperhour.com";
  const fullTitle = title;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  const ogLocaleMap: Record<string, string> = {
    en: "en_US",
    ro: "ro_RO",
    ru: "ru_RU",
  };
  const ogLocale = ogLocaleMap[lang] || "en_US";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mihail Mihail - SitePerHour" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="MD" />
      <meta name="geo.placename" content="Chisinau" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* hreflang alternate links */}
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${canonicalUrl || '/'}`} />
      <link rel="alternate" hrefLang="ro" href={`${siteUrl}/ro${canonicalUrl || '/'}`} />
      <link rel="alternate" hrefLang="ru" href={`${siteUrl}/ru${canonicalUrl || '/'}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${canonicalUrl || '/'}`} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SitePerHour" />
      <meta property="og:locale" content={ogLocale} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@siteperhour" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
