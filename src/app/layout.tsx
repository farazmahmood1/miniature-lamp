import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";

export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Serverless GPU Infrastructure for Real-Time AI | Cerebrium",
  "description": "Deploy voice agents, video models, and LLMs on serverless GPUs with sub-second cold starts. Pay-per-second pricing. No Kubernetes.",
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Serverless GPU Infrastructure for Real-Time AI",
    "description": "Deploy voice agents, video models, and LLMs on serverless GPUs with sub-second cold starts. Pay-per-second pricing. No Kubernetes.",
    "type": "website",
    "siteName": "Cerebrium | Real-time serverless AI infrastructure",
    "images": [
      "https://www.datocms-assets.com/180613/1774904124-og-image.png?auto=format&fit=max&w=1200"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Serverless GPU Infrastructure for Real-Time AI",
    "description": "Deploy voice agents, video models, and LLMs on serverless GPUs with sub-second cold starts. Pay-per-second pricing. No Kubernetes.",
    "images": [
      "https://www.datocms-assets.com/180613/1774904124-og-image.png?auto=format&fit=max&w=1200"
    ]
  },
  "icons": {
    "icon": [
      {
        "url": "/assets/cloned/images/4527ce7f11fb.png",
        "type": "image/png",
        "sizes": "16x16"
      },
      {
        "url": "/assets/cloned/images/8cfdf1329d85.png",
        "type": "image/png",
        "sizes": "32x32"
      },
      {
        "url": "/assets/cloned/images/71cf6038762b.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "url": "/assets/cloned/images/b8c881d33a66.png",
        "type": "image/png",
        "sizes": "192x192"
      }
    ]
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <head>
        <script
          key="ditto-json-ld-0"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Cerebrium\",\"alternateName\":\"Cerebrium AI\",\"url\":\"", "\",\"logo\":\"https://www.datocms-assets.com/180613/1770487378-iiynr41hlhnjq7vtreipiv8k6eo.png?auto=format\\u0026w=512\",\"description\":\"Serverless GPU infrastructure for real-time AI workloads. Deploy voice agents, video models, LLMs, and any AI workload with sub-second cold starts and instant autoscaling.\",\"foundingDate\":\"2021\",\"sameAs\":[\"https://www.linkedin.com/company/cerebrium\",\"https://twitter.com/cerebriumai\",\"https://github.com/CerebriumAI\",\"https://www.youtube.com/@cerebrium\",\"https://www.crunchbase.com/organization/cerebrium\",\"https://www.producthunt.com/products/cerebrium\",\"https://www.g2.com/products/cerebrium\"],\"contactPoint\":[{\"@type\":\"ContactPoint\",\"contactType\":\"sales\",\"url\":\"", "/book-demo\",\"availableLanguage\":[\"en\"]},{\"@type\":\"ContactPoint\",\"contactType\":\"customer support\",\"url\":\"", "/contact\",\"availableLanguage\":[\"en\"]}]}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"Cerebrium\",\"url\":\"", "\",\"description\":\"Serverless GPU infrastructure for real-time AI workloads.\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"Cerebrium\",\"url\":\"", "\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://www.datocms-assets.com/180613/1770487378-iiynr41hlhnjq7vtreipiv8k6eo.png?auto=format\\u0026w=512\"}}}"].join(SITE_ORIGIN) }}
        />
        <script
          key="ditto-json-ld-2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ["{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Cerebrium\",\"applicationCategory\":\"DeveloperApplication\",\"applicationSubCategory\":\"Serverless GPU Infrastructure\",\"operatingSystem\":\"Cloud (Linux, multi-region)\",\"url\":\"", "\",\"description\":\"Serverless GPU platform for deploying real-time AI workloads — voice agents, video models, LLMs, and custom ML. Sub-second cold starts, instant autoscaling, pay-per-second billing.\",\"offers\":[{\"@type\":\"Offer\",\"name\":\"Standard\",\"description\":\"Pay-per-second GPU compute. No idle charges, no reservations.\",\"url\":\"", "/pricing\",\"priceCurrency\":\"USD\"},{\"@type\":\"Offer\",\"name\":\"Enterprise\",\"description\":\"Volume discounts, unlimited concurrent GPUs, dedicated Slack support, white-glove onboarding.\",\"url\":\"", "/pricing\"}],\"featureList\":[\"Sub-second cold starts\",\"Pay-per-second billing\",\"Instant autoscaling\",\"Multi-region deployment (US + EU)\",\"SOC 2, HIPAA, GDPR, ISO compliance\",\"Bring-your-own-code (any Python workload)\",\"GPU options: L4, L40s, A100, H100, H200\"],\"provider\":{\"@type\":\"Organization\",\"name\":\"Cerebrium\",\"url\":\"", "\"}}"].join(SITE_ORIGIN) }}
        />
      </head>
      <body className="block text-foreground [font-family:'Suisse_Int'l',_sans-serif] text-base font-medium not-italic leading-6 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr]" data-cid="n0">
        {children}
      </body>
    </html>
  );
}
