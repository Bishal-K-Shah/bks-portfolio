import { useDocumentHead } from '../hooks/useDocumentHead'
import ogImage from '../assets/og-image.png'

const SEOHead = ({ 
  title = "Bishal Shah - Full Stack Developer & Network Engineer", 
  description = "Full Stack Developer specializing in React, WordPress, and modern web technologies. Building scalable web applications and CMS solutions for businesses across Australia.",
  keywords = "Bishal Shah, Full Stack Developer, WordPress Developer, React Developer, Web Development, CMS Development, PHP, JavaScript, Node.js, Australian Motorcyclist, Adventure Rider Magazine, Walkabout Australia, Newtwork Security, Cloud Computing, Docker, AWS",
  image = `https://bishal-k-shah.github.io${ogImage}`,
  url = "https://bishal-k-shah.github.io/"
}) => {
  useDocumentHead({
    title,
    description,
    keywords,
    image,
    url,
    author: "Bishal Shah",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    language: "en",
    revisitAfter: "7 days",
    type: "website",
    siteName: "Bishal Shah Portfolio",
    locale: "en_US",
    twitterCard: "summary_large_image",
    twitterCreator: "@bishalshah",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Bishal Shah",
      "alternateName": "Bishal K Shah",
      "jobTitle": "Full Stack Developer",
      "description": description,
      "url": url,
      "image": image,
      "email": "bishal.shah2344@gmail.com",
      "sameAs": [
        "https://github.com/Bishal-K-Shah",
        "https://linkedin.com/in/bishal-shah"
      ],
      "knowsAbout": [
        "Full Stack Development",
        "WordPress Development",
        "React",
        "JavaScript",
        "PHP",
        "Node.js",
        "CMS Development",
        "Web Application Development",
        "Cloud Computing",
        "Docker",
        "AWS"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "occupationLocation": {
          "@type": "Country",
          "name": "Australia"
        }
      },
      "workExample": [
        {
          "@type": "WebSite",
          "name": "Adventure Rider Magazine",
          "url": "https://advridermag.com.au/",
          "description": "WordPress-based adventure motorcycling magazine"
        },
        {
          "@type": "WebSite",
          "name": "Australian Motorcyclist",
          "url": "https://ausmotorcyclist.com.au/",
          "description": "Premier WordPress magazine for motorcycle enthusiasts"
        },
        {
          "@type": "WebSite",
          "name": "Walkabout Australia",
          "url": "https://walkaboutaustralia.org/",
          "description": "Cultural WordPress platform with e-commerce integration"
        }
      ]
    }
  })

  return null
}

export default SEOHead