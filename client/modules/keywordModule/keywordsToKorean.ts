function keywordsToKorean(keyword: string): string {
  const keywordsMap = new Map();

  keywordsMap.set("relaxing", "휴식");
  keywordsMap.set("photo", "SNS");
  keywordsMap.set("natural", "자연");
  keywordsMap.set("active", "액티비티");
  keywordsMap.set("local", "지역문화");
  keywordsMap.set("cheap", "가성비");
  keywordsMap.set("learn", "경험");
  return keywordsMap.get(keyword);
}

export default keywordsToKorean;
