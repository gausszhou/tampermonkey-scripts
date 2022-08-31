import "./styles/index.scss";
import { FxxkAds } from "./components/ad";
import { GenerateSRTFromContent, GenerateSRTFromXML } from "./components/utils";

(function () {

  let first_load = true;
  let captionUrl_1 = null; // zh
  let captionUrl_2 = null; // en
  let captionUrl_3 = null; // a.en
  let saveZhSubtitleButton = null; // zh button
  let saveEnSubtitleButton = null; // en button
  let saveEnAutoSubtitleButton = null; // en auto button
  let checkTranslateCaptionTimer = null;
  let captionDelayLoadTime = 50;

  function main() {
    FxxkAds();
    HookDataUpdate();
    HookVideoCreate();
    if (first_load) {
      first_load = false;
      setTimeout(() => {
        AddTranslationButton();
        HiddenDownloadSubtitleButton();
        ResetTranslateCaptionsUrl();
        GetTranslateCaptionsUrl();
        FetchTranslateCaptionsContent();
      }, 3000);
    }
  }

  main();

  // TODO

  function getVideoTitle() {
    return window.ytInitialPlayerResponse.videoDetails.title;
  }

  function getCaptionTracks() {
    try {
      const tracks =
        window.ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer
          .captionTracks;
      return tracks;
    } catch (err) {
      return [];
    }
  }

  function HasTranslateCaption() {
    try {
      window.ytInitialPlayerResponse.captions.playerCaptionsTracklistRenderer
        .captionTracks;
      return true;
    } catch (err) {
      return false;
    }
  }

  function GenerateCaptionsUrl(baseUrl, toLang) {
    var url = baseUrl;
    if (baseUrl) {
      if (toLang) {
        return url + "&fmt=json3&xorb=2&xobt=3&xovt=3&tlang=" + toLang;
      }
      return url;
    }
    return null;
  }

  function ResetTranslateCaptionsUrl() {
    captionUrl_1 = null;
    captionUrl_2 = null;
    captionUrl_3 = null;
  }
  function Wrap() {
    return arguments;
  }

  function HiddenDownloadSubtitleButton() {
    console.log("[info] HiddenDownloadSubtitleButton");
    if (saveEnAutoSubtitleButton.style.display === "inline-block") {
      saveEnAutoSubtitleButton.style.display = "none";
    }
    if (saveEnSubtitleButton.style.display === "inline-block") {
      saveEnSubtitleButton.style.display = "none";
    }
    if (saveZhSubtitleButton.style.display === "inline-block") {
      saveZhSubtitleButton.style.display = "none";
    }
  }

  function GetTranslateCaptionsUrl() {
    let videoId = window.ytInitialPlayerResponse.videoDetails.videoId;
    let videoTitle = window.ytInitialPlayerResponse.videoDetails.title;
    let videoAuthor = window.ytInitialPlayerResponse.videoDetails.author;
    let videoViewCount = window.ytInitialPlayerResponse.videoDetails.viewCount;
    let captionTracks = getCaptionTracks();

    if (captionTracks.length == 0) {
      console.log("[info] 当前视频没有字幕！！！");
    }
    let autoEnSubtitleUrl = null;
    let enSubtitleUrl = "";
    try {
      for (let i = 0; i < captionTracks.length; i++) {
        let item = captionTracks[i];
        if (item.vssId == "a.en") {
          autoEnSubtitleUrl = item.baseUrl;
        }
        if (item.vssId == "a.en") {
          autoEnSubtitleUrl = item.baseUrl;
        }
      }

      captionUrl_1 = GenerateCaptionsUrl(autoEnSubtitleUrl, "zh-Hans");
      captionUrl_2 = GenerateCaptionsUrl(enSubtitleUrl);
      captionUrl_3 = autoEnSubtitleUrl;

      console.log("[info] 欢迎使用 [油管字幕下载] 插件");
      console.log("[info] 视频标题: " + videoTitle);
      console.log("[info] 视频作者: " + videoAuthor);
      console.log("[info] 视频ID: " + videoId);
      console.log("[info] 播放数: " + videoViewCount);
      console.log(
        "[info] 字幕数: ",
        captionTracks.map((item) => item.vssId)
      );
      console.log("[info] 中文字幕: " + captionUrl_1);
      console.log("[info] 英文字幕: " + captionUrl_2);
      console.log("[info] 自动生成: " + captionUrl_3);
    } catch (e) {
      console.log("[info] 字幕获取失败");
    }
  }

  function FetchTranslateCaptionsContent() {
    if (captionUrl_1 !== null) {
      fetch(captionUrl_1)
        .then(function (response) {
          response.json().then(function (response) {
            const captionTranslateContent = response.events;
            const subtitleContent = GenerateSRTFromContent(
              captionTranslateContent
            );
            const fileContent =
              "data:text/plain;charset=utf-8," +
              encodeURIComponent(subtitleContent);
            const filename = "[中字]" + getVideoTitle() + ".srt";
            saveZhSubtitleButton.setAttribute("href", fileContent);
            saveZhSubtitleButton.setAttribute("download", filename);
            saveZhSubtitleButton.style.display = "inline-block";
            console.log("[info] 获取中文字幕：成功");
          });
        })
        .catch(function (err) {
          console.log("[info] 获取中文字幕：失败");
        });
    }

    if (captionUrl_2 !== null) {
      fetch(captionUrl_2)
        .then(function (response) {
          response.json().then(function (response) {
            const captionTranslateContent = response.events;
            const subtitleContent = GenerateSRTFromContent(
              captionTranslateContent
            );
            const fileContent =
              "data:text/plain;charset=utf-8," +
              encodeURIComponent(subtitleContent);
            const filename = "[英字]" + getVideoTitle() + ".srt";
            saveEnSubtitleButton.setAttribute("href", fileContent);
            saveEnSubtitleButton.setAttribute("download", filename);
            saveEnSubtitleButton.style.display = "inline-block";
            console.log("[info] 获取英文字幕: 成功");
          });
        })
        .catch(function (err) {
          console.log("[info] 获取英文字幕: 失败");
        });
    }

    if (captionUrl_3 !== null) {
      fetch(captionUrl_3)
        .then(function (response) {
          response.text().then(function (response) {
            const captionTranslateXML = response;
            const subtitleContent = GenerateSRTFromXML(captionTranslateXML);
            const fileContent =
              "data:text/plain;charset=utf-8," +
              encodeURIComponent(subtitleContent);
            const filename = "[英字自动生成]" + getVideoTitle() + ".srt";
            saveEnAutoSubtitleButton.setAttribute("href", fileContent);
            saveEnAutoSubtitleButton.setAttribute("download", filename);
            saveEnAutoSubtitleButton.style.display = "inline-block";
            console.log("[info] 获取自动生成字幕: 成功");
          });
        })
        .catch(function (err) {
          console.log("[info] 获取自动生成字幕: 失败");
        });
    }
  }

  function HookVideoCreate() {
    console.log("[info] HookVideoCreate");
    var createElement = document.createElement;
    // 监听Video标签的创建
    document.createElement = function (tagName, options) {
      let element = createElement.apply(document, Wrap(tagName, options));
      if (tagName.toLowerCase() === "video") {
        element.addEventListener("loadstart", function () {
          if (this.classList.contains("html5-main-video")) {
            if (checkTranslateCaptionTimer !== null) {
              clearInterval(checkTranslateCaptionTimer);
              checkTranslateCaptionTimer = null;
            }

            checkTranslateCaptionTimer = setInterval(function () {
              if (HasTranslateCaption()) {
                clearInterval(checkTranslateCaptionTimer);
                checkTranslateCaptionTimer = null;

                setTimeout(function () {
                  try {
                    AddTranslationButton();
                    HiddenDownloadSubtitleButton();
                    ResetTranslateCaptionsUrl();
                    GetTranslateCaptionsUrl();
                    FetchTranslateCaptionsContent();
                  } catch (err) {}
                }, captionDelayLoadTime);
              }
            }, 300);
          }
        });
        element.addEventListener("ended", function () {
          if (this.classList.contains("html5-main-video")) {
            HiddenDownloadSubtitleButton();
          }
        });
      }
      return element;
    };
  }

  function AddTranslationButton() {
    var coltrolPanel = document.querySelector(
      ".ytp-chrome-controls .ytp-right-controls"
    );
    if (
      coltrolPanel &&
      coltrolPanel.querySelector(".double-translation-plugin-btn") == null
    ) {
      // 管理面板
      if (document.getElementById("ytcc-downloader-panel")) return;

      // 保存中文字幕
      saveZhSubtitleButton = document.createElement("a");
      saveZhSubtitleButton.style.display = "none";
      const _saveZhSubtitleButton = document.createElement("button");
      _saveZhSubtitleButton.className =
        "double-translation-plugin-download-zhhans-subtitle-btn";
      _saveZhSubtitleButton.innerText = "中字";
      saveZhSubtitleButton.appendChild(_saveZhSubtitleButton);

      // 保存英文字幕
      const _saveEnSubtitleButton = document.createElement("button");
      _saveEnSubtitleButton.className =
        "double-translation-plugin-download-en-subtitle-btn";
      _saveEnSubtitleButton.innerText = "英字";
      saveEnSubtitleButton = document.createElement("a");
      saveEnSubtitleButton.style.display = "none";
      saveEnSubtitleButton.appendChild(_saveEnSubtitleButton);

      // 保存自动生成
      const _saveEnAutoSubtitleButton = document.createElement("button");
      _saveEnAutoSubtitleButton.className =
        "double-translation-plugin-download-en-subtitle-btn";
      _saveEnAutoSubtitleButton.innerText = "英字自动生成";
      saveEnAutoSubtitleButton = document.createElement("a");
      saveEnAutoSubtitleButton.style.display = "none";
      saveEnAutoSubtitleButton.appendChild(_saveEnAutoSubtitleButton);

      const panel = document.createElement("div");
      panel.id = "ytcc-downloader-panel";
      panel.style.position = "absolute";
      panel.style.bottom = "100%";
      panel.style.right = "0";

      panel.prepend(saveEnAutoSubtitleButton);
      panel.prepend(saveEnSubtitleButton);
      panel.prepend(saveZhSubtitleButton);
      coltrolPanel.prepend(panel);
      return true;
    }
  }

  function HookDataUpdate() {
    console.log("[info] HookDataUpdate");
    setInterval(function () {
      try {
        var pageManger = document.querySelector("#page-manager");
        if (pageManger !== null) {
          if (pageManger.isHook !== undefined) {
            return;
          }
          pageManger.isHook = true;
          var oldUpdatePageData = pageManger.updatePageData;
          var updatePageData = function (data) {
            try {
              window.ytInitialPlayerResponse = data.playerResponse;
              AddTranslationButton();
              HiddenDownloadSubtitleButton();
              ResetTranslateCaptionsUrl();
              GetTranslateCaptionsUrl();
              FetchTranslateCaptionsContent();
            } catch (err) {}

            return oldUpdatePageData.apply(this, arguments);
          };
          if (oldUpdatePageData !== updatePageData) {
            pageManger.updatePageData = updatePageData;
          }
        }
      } catch (err) {}
    }, 1000);
  }
  
})();
