import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="130" r="120" />
    <rect x="0" y="285" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="343" rx="10" ry="10" width="280" height="72" />
    <rect x="10" y="433" rx="10" ry="10" width="100" height="40" />
    <rect x="133" y="430" rx="30" ry="30" width="144" height="47" />
  </ContentLoader>
)

export default PizzaBlockSkeleton

