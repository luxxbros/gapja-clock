export const cheongan = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const cheongangHangul = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];

export const jiji = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
export const jijiHangul = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];

export const animals = ['쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'];

// 24절기 중 월의 시작을 결정하는 12개의 절기(節)의 연도별 실제 날짜 및 해당 지지 인덱스
// 월은 0부터 시작 (0: Jan, 1: Feb, ...)
export const solarTermsByYear = {
  2025: [
    { name: '小寒', month: 0, day: 5, hour: 11, minute: 33, jijiIndex: 1 }, // 丑月 (축월)
    { name: '立春', month: 1, day: 3, hour: 23, minute: 10, jijiIndex: 2 }, // 寅月 (인월)
    { name: '驚蟄', month: 2, day: 5, hour: 17, minute: 7, jijiIndex: 3 }, // 卯月 (묘월)
    { name: '清明', month: 3, day: 4, hour: 21, minute: 49, jijiIndex: 4 }, // 辰月 (진월)
    { name: '立夏', month: 4, day: 5, hour: 14, minute: 57, jijiIndex: 5 }, // 巳月 (사월)
    { name: '芒種', month: 5, day: 5, hour: 18, minute: 57, jijiIndex: 6 }, // 午月 (오월)
    { name: '小暑', month: 6, day: 7, hour: 5, minute: 5, jijiIndex: 7 }, // 未月 (미월)
    { name: '立秋', month: 7, day: 7, hour: 14, minute: 52, jijiIndex: 8 }, // 申月 (신월)
    { name: '白露', month: 8, day: 7, hour: 17, minute: 52, jijiIndex: 9 }, // 酉月 (유월)
    { name: '寒露', month: 9, day: 8, hour: 9, minute: 41, jijiIndex: 10 }, // 戌月 (술월)
    { name: '立冬', month: 10, day: 7, hour: 11, minute: 7, jijiIndex: 11 }, // 亥月 (해월) - Retained from previous data
    { name: '大雪', month: 11, day: 7, hour: 1, minute: 5, jijiIndex: 0 }, // 子月 (자월) - Retained from previous data
  ],
  2026: [
    { name: '小寒', month: 0, day: 5, hour: 17, minute: 11, jijiIndex: 1 },
    { name: '立春', month: 1, day: 4, hour: 4, minute: 48, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 5, hour: 22, minute: 45, jijiIndex: 3 },
    { name: '清明', month: 3, day: 5, hour: 3, minute: 27, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 5, hour: 20, minute: 35, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 6, hour: 0, minute: 35, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 7, hour: 10, minute: 43, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 7, hour: 20, minute: 30, jijiIndex: 8 },
    { name: '白露', month: 8, day: 8, hour: 0, minute: 30, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 8, hour: 15, minute: 19, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 7, hour: 16, minute: 45, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 7, hour: 6, minute: 43, jijiIndex: 0 }, // Retained from previous data
  ],
  2027: [
    { name: '小寒', month: 0, day: 5, hour: 22, minute: 50, jijiIndex: 1 },
    { name: '立春', month: 1, day: 4, hour: 10, minute: 27, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 6, hour: 4, minute: 24, jijiIndex: 3 },
    { name: '清明', month: 3, day: 5, hour: 9, minute: 6, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 6, hour: 2, minute: 14, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 6, hour: 6, minute: 14, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 7, hour: 16, minute: 22, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 8, hour: 2, minute: 9, jijiIndex: 8 },
    { name: '白露', month: 8, day: 8, hour: 6, minute: 9, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 8, hour: 20, minute: 58, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 7, hour: 22, minute: 24, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 7, hour: 12, minute: 22, jijiIndex: 0 }, // Retained from previous data
  ],
  2028: [
    { name: '小寒', month: 0, day: 6, hour: 4, minute: 28, jijiIndex: 1 },
    { name: '立春', month: 1, day: 4, hour: 16, minute: 5, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 6, hour: 10, minute: 2, jijiIndex: 3 },
    { name: '清明', month: 3, day: 5, hour: 14, minute: 44, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 6, hour: 7, minute: 52, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 6, hour: 11, minute: 52, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 7, hour: 22, minute: 0, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 8, hour: 7, minute: 47, jijiIndex: 8 },
    { name: '白露', month: 8, day: 8, hour: 11, minute: 47, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 9, hour: 2, minute: 36, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 8, hour: 4, minute: 3, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 7, hour: 18, minute: 0, jijiIndex: 0 }, // Retained from previous data
  ],
  2029: [
    { name: '小寒', month: 0, day: 6, hour: 10, minute: 7, jijiIndex: 1 },
    { name: '立春', month: 1, day: 4, hour: 21, minute: 44, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 6, hour: 15, minute: 41, jijiIndex: 3 },
    { name: '清明', month: 3, day: 5, hour: 20, minute: 23, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 6, hour: 13, minute: 31, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 6, hour: 17, minute: 31, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 8, hour: 3, minute: 39, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 8, hour: 13, minute: 26, jijiIndex: 8 },
    { name: '白露', month: 8, day: 8, hour: 17, minute: 26, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 9, hour: 8, minute: 15, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 8, hour: 9, minute: 42, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 7, hour: 23, minute: 39, jijiIndex: 0 }, // Retained from previous data
  ],
  2030: [
    { name: '小寒', month: 0, day: 6, hour: 15, minute: 45, jijiIndex: 1 },
    { name: '立春', month: 1, day: 5, hour: 3, minute: 22, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 6, hour: 21, minute: 19, jijiIndex: 3 },
    { name: '清明', month: 3, day: 6, hour: 2, minute: 1, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 6, hour: 19, minute: 9, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 6, hour: 23, minute: 9, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 8, hour: 9, minute: 17, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 8, hour: 19, minute: 4, jijiIndex: 8 },
    { name: '白露', month: 8, day: 8, hour: 23, minute: 4, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 9, hour: 13, minute: 53, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 8, hour: 15, minute: 21, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 8, hour: 5, minute: 18, jijiIndex: 0 }, // Retained from previous data
  ],
  2031: [
    { name: '小寒', month: 0, day: 6, hour: 21, minute: 24, jijiIndex: 1 },
    { name: '立春', month: 1, day: 5, hour: 9, minute: 1, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 7, hour: 2, minute: 58, jijiIndex: 3 },
    { name: '清明', month: 3, day: 6, hour: 7, minute: 40, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 7, hour: 0, minute: 48, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 7, hour: 4, minute: 48, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 8, hour: 14, minute: 56, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 9, hour: 0, minute: 43, jijiIndex: 8 },
    { name: '白露', month: 8, day: 9, hour: 4, minute: 43, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 9, hour: 19, minute: 32, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 8, hour: 21, minute: 0, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 8, hour: 11, minute: 57, jijiIndex: 0 }, // Retained from previous data
  ],
  2032: [
    { name: '小寒', month: 0, day: 7, hour: 3, minute: 2, jijiIndex: 1 },
    { name: '立春', month: 1, day: 5, hour: 14, minute: 39, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 7, hour: 8, minute: 36, jijiIndex: 3 },
    { name: '清明', month: 3, day: 6, hour: 13, minute: 18, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 7, hour: 6, minute: 26, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 7, hour: 10, minute: 26, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 8, hour: 20, minute: 34, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 9, hour: 6, minute: 21, jijiIndex: 8 },
    { name: '白露', month: 8, day: 9, hour: 10, minute: 21, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 10, hour: 1, minute: 10, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 9, hour: 2, minute: 39, jijiIndex: 11 }, // Retained from previous data
    { name: '大설', month: 11, day: 8, hour: 17, minute: 36, jijiIndex: 0 }, // Retained from previous data
  ],
  2033: [
    { name: '小寒', month: 0, day: 7, hour: 8, minute: 41, jijiIndex: 1 },
    { name: '立春', month: 1, day: 5, hour: 20, minute: 18, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 7, hour: 14, minute: 15, jijiIndex: 3 },
    { name: '清明', month: 3, day: 6, hour: 18, minute: 57, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 7, hour: 12, minute: 5, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 7, hour: 16, minute: 5, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 9, hour: 2, minute: 13, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 9, hour: 12, minute: 0, jijiIndex: 8 },
    { name: '白露', month: 8, day: 9, hour: 16, minute: 0, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 10, hour: 6, minute: 49, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 9, hour: 8, minute: 18, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 8, hour: 23, minute: 15, jijiIndex: 0 }, // Retained from previous data
  ],
  2034: [
    { name: '小寒', month: 0, day: 7, hour: 14, minute: 19, jijiIndex: 1 },
    { name: '立春', month: 1, day: 6, hour: 1, minute: 56, jijiIndex: 2 },
    { name: '驚蟄', month: 2, day: 7, hour: 19, minute: 53, jijiIndex: 3 },
    { name: '清明', month: 3, day: 7, hour: 0, minute: 35, jijiIndex: 4 },
    { name: '立夏', month: 4, day: 7, hour: 17, minute: 43, jijiIndex: 5 },
    { name: '芒種', month: 5, day: 7, hour: 21, minute: 43, jijiIndex: 6 },
    { name: '小暑', month: 6, day: 9, hour: 7, minute: 51, jijiIndex: 7 },
    { name: '立秋', month: 7, day: 9, hour: 17, minute: 38, jijiIndex: 8 },
    { name: '白露', month: 8, day: 9, hour: 21, minute: 38, jijiIndex: 9 },
    { name: '寒露', month: 9, day: 10, hour: 12, minute: 27, jijiIndex: 10 },
    { name: '立冬', month: 10, day: 9, hour: 13, minute: 57, jijiIndex: 11 }, // Retained from previous data
    { name: '大雪', month: 11, day: 9, hour: 4, minute: 54, jijiIndex: 0 }, // Retained from previous data
  ],
};

export const cheongangColors = {
  '甲': { bg: '#00af50', text: '#ffffff' }, // 청색 (목)
  '乙': { bg: '#00af50', text: '#ffffff' }, // 청색 (목)
  '丙': { bg: '#fe0000', text: '#ffffff' }, // 적색 (화)
  '丁': { bg: '#fe0000', text: '#ffffff' }, // 적색 (화)
  '戊': { bg: '#ffc000', text: '#000000' }, // 황색 (토)
  '己': { bg: '#ffc000', text: '#000000' }, // 황색 (토)
  '庚': { bg: '#ffffff', text: '#000000' }, // 백색 (금)
  '辛': { bg: '#ffffff', text: '#000000' }, // 백색 (금)
  '壬': { bg: '#404040', text: '#ffffff' }, // 흑색 (수)
  '癸': { bg: '#404040', text: '#ffffff' }  // 흑색 (수)
};

export const jijiColors = {
  '子': { bg: '#404040', text: '#ffffff' }, // 흑색 (수)
  '丑': { bg: '#404040', text: '#ffffff' }, // 흑색 (토)
  '寅': { bg: '#00af50', text: '#ffffff' }, // 청색 (목)
  '卯': { bg: '#00af50', text: '#ffffff' }, // 청색 (목)
  '辰': { bg: '#ffc000', text: '#000000' }, // 황색 (토)
  '巳': { bg: '#fe0000', text: '#ffffff' }, // 적색 (화)
  '午': { bg: '#fe0000', text: '#ffffff' }, // 적색 (화)
  '未': { bg: '#ffc000', text: '#000000' }, // 황색 (토)
  '申': { bg: '#ffffff', text: '#000000' }, // 백색 (금)
  '酉': { bg: '#ffffff', text: '#000000' }, // 백색 (금)
  '戌': { bg: '#ffc000', text: '#000000' }, // 황색 (토)
  '亥': { bg: '#404040', text: '#ffffff' }  // 흑색 (수)
};
