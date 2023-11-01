// DeepCopy Test

function copyObject(obj) {
  // 원시 자료형 또는 null, undefined 인 경우 그대로 반환
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return obj;
  }

  // Date 객체인 경우 복사
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // RegExp 객체인 경우 복사
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // Set 객체인 경우 복사
  if (obj instanceof Set) {
    return new Set([...obj]);
  }

  // Map 객체인 경우 복사
  if (obj instanceof Map) {
    return new Map([...obj]);
  }

  // 기본 객체
  var object1 = {};
  for (var key in obj) {
    object1[key] = copyObject(obj[key]);
  }

  return object1;
}

module.exports = copyObject;
