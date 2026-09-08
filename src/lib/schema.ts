import type { Locale } from "@/lib/i18n/config";

export function getOrganizationSchema(locale: Locale) {
  const baseUrl = `https://siteperhour.com/${locale}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://siteperhour.com/#organization",
      name: "SitePerHour",
      alternateName: ["Site Per Hour", "SitePerHour Web Development & Digital Marketing"],
      description:
        "Full-service digital agency in Chișinău, Moldova. Web development, mobile apps, Google & Meta Ads, CRM, SEO and digital marketing.",
      url: baseUrl,
      logo: "https://siteperhour.com/favicon.ico",
      image: "https://siteperhour.com/hero-bg.svg",
      inLanguage: locale,
      founder: {
        "@type": "Person",
        name: "Mihail Mihail",
        jobTitle: "Full-Stack Web Developer & Digital Marketing Specialist",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chișinău",
        addressCountry: "MD",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+37379331104",
        email: "mihail.mihai2001@gmail.com",
        contactType: "customer service",
        availableLanguage: ["English", "Romanian", "Russian"],
      },
      areaServed: "Worldwide",
      serviceType: [
        "Web Development",
        "Google Ads",
        "Meta Ads",
        "CRM Automation",
        "SEO",
        "Digital Marketing",
        "Mobile App Development",
        "E-commerce Development",
      ],
      priceRange: "$$",
      sameAs: [
        "https://github.com/JeremyHustlin",
        "https://www.facebook.com/profile.php?id=100005960117941",
      ],
    },
  ];
}
