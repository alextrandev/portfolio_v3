import Head from 'next/head';
import { useRouter } from 'next/router';
import { seoText } from '../lib/siteText';

const SITE_URL = 'https://alextran.dev';

// per-page meta tags; every route renders this once
export default function Seo({ title, description }) {
  const { pathname } = useRouter();
  const fullTitle = title ? `${title} | ${seoText.titleSuffix}` : seoText.siteName;
  const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seoText.ogSiteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}/thumbnails/portfolio-v3-thumbnail.webp`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
