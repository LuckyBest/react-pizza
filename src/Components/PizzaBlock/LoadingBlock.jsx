import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={290}
      height={490}
      viewBox="0 0 290 490"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="134" cy="110" r="106" />
      <rect x="97" y="340" rx="0" ry="0" width="1" height="2" />
      <rect x="12" y="275" rx="0" ry="0" width="1" height="1" />
      <rect x="0" y="230" rx="3" ry="3" width="280" height="26" />
      <rect x="0" y="266" rx="6" ry="6" width="280" height="84" />
      <rect x="5" y="365" rx="4" ry="4" width="82" height="31" />
      <rect x="147" y="358" rx="19" ry="19" width="130" height="48" />
    </ContentLoader>
  );
}

export default LoadingBlock;
