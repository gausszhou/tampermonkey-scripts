export function msTohhmmss(time) {
  let second = Math.floor(time / 1000);
  let minute = Math.floor(second / 60);
  let hour = Math.floor(minute / 60);
  minute = Math.floor(minute - hour * 60);
  second = Math.floor(second - minute * 60 - hour * 60 * 60);
  let ms = Math.floor(time - (second + minute * 60 + hour * 60 * 60));

  hour = "00" + hour;
  minute = "00" + minute;
  second = "00" + second;
  ms = ms + "000";

  hour = hour.substr(hour.length - 2, hour.length);
  minute = minute.substr(minute.length - 2, minute.length);
  second = second.substr(second.length - 2, second.length);
  ms = ms.substr(0, 3);
  return [hour, minute, second].join(":") + "." + ms;
}

// 生成字幕
export function GenerateSRTFromContent(captionTranslateContent) {
  var result = [];
  var index = 0;
  if (
    captionTranslateContent != null &&
    captionTranslateContent instanceof Array
  ) {
    for (var i = 0; i < captionTranslateContent.length; i++) {
      var item = captionTranslateContent[i];

      if (!item || !item.segs || !(item.segs instanceof Array)) {
        continue;
      }

      var text = [];
      for (var k = 0; k < item.segs.length; k++) {
        text.push(item.segs[k].utf8);
      }

      var displayText = text.join("").trim();
      displayText = displayText.replace(/\s+/gi, " ");

      var displayTime = [
        msTohhmmss(parseInt(item.tStartMs)),
        msTohhmmss(parseInt(item.tStartMs) + parseInt(item.dDurationMs))
      ].join(" --> ");

      if (displayText.length > 0) {
        result.push(++index);
        result.push(displayTime);
        result.push(displayText + "\n");
      }
    }
  }

  return result.join("\n");
}

export function GenerateSRTFromXML(captionTranslateXML) {
  let domparser = new DOMParser();
  let doc = domparser.parseFromString(captionTranslateXML, "text/xml");
  let textNodes = doc.getElementsByTagName("text");
  const result = [];
  Array.from(textNodes).forEach((textNode, index) => {
    const start = textNode.getAttribute("start");
    const duration = textNode.getAttribute("dur");
    const end = parseInt(start) + parseInt(duration);
    const displayTime = [msTohhmmss(start * 1000), msTohhmmss(end * 1000)].join(" --> ");
    const displayText = textNode.textContent.replace(/(&.*;)/g,"");
    result.push(++index);
    result.push(displayTime);
    result.push(displayText + "\n");
  });

  return result.join("\n");
}
