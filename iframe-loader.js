window.onload = () => {
  const iframeContainer = document.getElementById("iframe-container");
  const iframe = document.createElement("iframe");
  iframe.src = "https://katienorthage.wixsite.com/portfolio";
  iframe.style =
    "width:100%; height:100vh; border:none; position:absolute; top:-50px;";
  iframeContainer.appendChild(iframe);
};
