function safeAttrValue(name, value) {

  var reg = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;

  if (name === "href" || name === "src") {

    value = value.trim();
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      // 如果href和src属性不是链接则清空，防止href="javascript:alert(/xss/)"这种情形
      return "";
    }
  } else if (name === "background") {

    if (reg.test(value)) {
      // 如果包含javascript脚本则清空
      return "";
    }
  }

  // escape `<>"` before returns
  var REGEXP_QUOTE = /"/g;
  var REGEXP_LT = /</g;
  var REGEXP_GT = />/g;
  value = value.replace(REGEXP_QUOTE, "&quot;").replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
  return value;
}
