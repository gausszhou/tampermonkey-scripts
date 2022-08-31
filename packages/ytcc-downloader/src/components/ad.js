export function FxxkAds() {
  setInterval(function () {
    try {
      isVideoAdsTime();
    } catch (err) {}
  }, 200);
}

function isVideoAdsTime() {
  var ad = document.querySelector(".ad-showing");
  var skipAdButton = document.querySelector(".ytp-ad-skip-button");
  // 底部广告
  var ads = document.querySelector(".ytp-ad-overlay-container");
  if (ads !== null) {
    ads.style.display = "none";
  }

  // 跳过广告
  if (skipAdButton) {
    skipAdButton.click();
  }
  return ad != null;
}

