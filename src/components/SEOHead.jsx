import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "BKS - Security Analyst & Cloud Engineer", 
  description = "Professional portfolio of a Security Analyst and Cloud Engineer specializing in cybersecurity, cloud infrastructure, and web development.",
  keywords = "security analyst, cloud engineer, cybersecurity, aws, react developer, web development, portfolio",
  image = "/og-image.jpg",
  url = "https://your-portfolio-domain.com"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BKS" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="EN" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="BKS Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@yourusername" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#667eea" />
      <meta name="msapplication-TileColor" content="#667eea" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "BKS",
          "jobTitle": ["Security Analyst", "Cloud Engineer"],
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://linkedin.com/in/yourusername",
            "https://github.com/yourusername",
            "https://twitter.com/yourusername"
          ],
          "knowsAbout": [
            "Cybersecurity",
            "Cloud Computing",
            "AWS",
            "React",
            "Node.js",
            "Web Development"
          ],
          "alumniOf": {
            "@type": "Organization",
            "name": "Your University"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEOHead