import { useDocumentHead } from '../hooks/useDocumentHead'

const SEOHead = ({ 
  title = "BKS - Security Analyst & Cloud Engineer", 
  description = "Professional portfolio of a Security Analyst and Cloud Engineer specializing in cybersecurity, cloud infrastructure, and web development.",
  keywords = "security analyst, cloud engineer, cybersecurity, aws, react developer, web development, portfolio",
  image = "/og-image.jpg",
  url = "https://bishal-k-shah.github.io/bks-portfolio/"
}) => {
  useDocumentHead({
    title,
    description,
    keywords,
    image,
    url,
    author: "BKS",
    robots: "index, follow",
    language: "EN",
    revisitAfter: "7 days",
    type: "website",
    siteName: "BKS Portfolio",
    locale: "en_US",
    twitterCard: "summary_large_image",
    twitterCreator: "@yourusername",
    structuredData: {
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
    }
  })

  return null // This component only manages document head, no UI
}

export default SEOHead