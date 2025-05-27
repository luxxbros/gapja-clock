import { cheongan, jiji, cheongangHangul, jijiHangul, animals, solarTermsByYear } from './constants';

/**
 * 년(年)의 갑자를 계산합니다.
 * 기준년도: 1984년은 甲子년 (60갑자 중 0번째)
 * 주의: 이 계산은 입춘(立春)을 기준으로 년도가 바뀝니다.
 */
export const getYearGapja = (date) => {
  const currentCalendarYear = date.getFullYear();
  const REFERENCE_YEAR = 1984; // 甲子년
  const REFERENCE_YEAR_GAPJA_INDEX = 0; // 甲子는 60갑자 중 0번째 (0-indexed)

  // Determine the actual year for Gapja calculation based on 立春
  let effectiveYear = currentCalendarYear;

  // Get available years in solarTermsByYear
  const yearsInData = Object.keys(solarTermsByYear).map(Number).sort((a, b) => a - b);
  const minYear = yearsInData[0];
  const maxYear = yearsInData[yearsInData.length - 1];

  // Function to get Ipchun date for a given year
  const getIpchunDate = (year) => {
    let lookupYear = year;
    if (year < minYear) {
      lookupYear = minYear;
      console.warn(`Solar term data not found for year ${year}. Using data from ${minYear} for Ipchun lookup.`);
    } else if (year > maxYear) {
      lookupYear = maxYear;
      console.warn(`Solar term data not found for year ${year}. Using data from ${maxYear} for Ipchun lookup.`);
    }

    const yearSolarTerms = solarTermsByYear[lookupYear];
    if (!yearSolarTerms) {
      console.error("Critical: No solar term data found for the determined lookup year for Ipchun.");
      return null;
    }
    const ipchun = yearSolarTerms.find(t => t.name === '立春');
    if (ipchun) {
      return new Date(year, ipchun.month, ipchun.day, ipchun.hour, ipchun.minute);
    }
    return null;
  };

  const ipchunCurrentYear = getIpchunDate(currentCalendarYear);

  if (ipchunCurrentYear && date < ipchunCurrentYear) {
    // If current date is before Ipchun of the current calendar year,
    // the year Gapja is for the previous calendar year.
    effectiveYear = currentCalendarYear - 1;
  }

  const yearOffset = effectiveYear - REFERENCE_YEAR;
  const gapjaIndex = (REFERENCE_YEAR_GAPJA_INDEX + yearOffset) % 60;

  const cheonganIndex = gapjaIndex % 10;
  const jijiIndex = gapjaIndex % 12;

  return {
    cheongan: cheongan[cheonganIndex],
    jiji: jiji[jijiIndex],
    hangul: cheongangHangul[cheonganIndex] + jijiHangul[jijiIndex],
    animal: animals[jijiIndex],
  };
};

/**
 * 일(日)의 갑자를 계산합니다.
 * 기준일: 2000년 1월 1일은 戊午일 (60갑자 중 54번째)
 */
export const getDayGapja = (date) => {
  const REFERENCE_DATE_DAY = new Date('2000-01-01T00:00:00Z'); // 戊午일
  const REFERENCE_DAY_GAPJA_INDEX = 54; // 戊午는 60갑자 중 54번째 (0-indexed)

  // UTC 기준으로 일수 차이 계산
  const diffTime = date.getTime() - REFERENCE_DATE_DAY.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const gapjaIndex = (REFERENCE_DAY_GAPJA_INDEX + diffDays) % 60;
  const cheonganIndex = gapjaIndex % 10;
  const jijiIndex = gapjaIndex % 12;

  return {
    cheongan: cheongan[cheonganIndex],
    jiji: jiji[jijiIndex],
    hangul: cheongangHangul[cheonganIndex] + jijiHangul[jijiIndex],
    animal: animals[jijiIndex],
  };
};

/**
 * 현재 날짜가 어떤 절기월에 속하는지 지지(Jiji) 인덱스를 반환합니다.
 * 제공된 연도별 절기 일자를 기반으로 합니다.
 * 데이터가 없는 연도의 경우, 가장 가까운 연도의 데이터를 사용합니다.
 */
const getSolarMonthJijiIndex = (date) => {
  const currentYear = date.getFullYear();
  const yearsInData = Object.keys(solarTermsByYear).map(Number).sort((a, b) => a - b);
  const minYear = yearsInData[0];
  const maxYear = yearsInData[yearsInData.length - 1];

  // 현재 연도의 데이터가 없으면, 가장 가까운 연도의 데이터를 사용
  let dataLookupYear = currentYear;
  if (currentYear < minYear) {
    dataLookupYear = minYear;
    console.warn(`Solar term data not found for year ${currentYear}. Using data from ${minYear}.`);
  } else if (currentYear > maxYear) {
    dataLookupYear = maxYear;
    console.warn(`Solar term data not found for year ${currentYear}. Using data from ${maxYear}.`);
  }

  const yearSolarTerms = solarTermsByYear[dataLookupYear];
  if (!yearSolarTerms) {
    console.error("Critical: No solar term data found for the determined lookup year.");
    return -1;
  }

  let solarMonthJijiIndex = -1;

  // 현재 연도의 절기 데이터와 경계 처리를 위한 이전/다음 연도의 절기 데이터를 수집
  const relevantSolarTerms = [];

  // 현재 연도의 절기 추가
  yearSolarTerms.forEach(term => {
    relevantSolarTerms.push({
      ...term,
      date: new Date(currentYear, term.month, term.day, term.hour, term.minute)
    });
  });

  // 이전 연도의 '大雪' (자월 시작) 추가 (경계 처리)
  const prevYearDataLookup = dataLookupYear - 1;
  const prevYearSolarTerms = solarTermsByYear[prevYearDataLookup] || solarTermsByYear[minYear];
  if (prevYearSolarTerms) {
    const prevYearDaeseol = prevYearSolarTerms.find(t => t.name === '大雪');
    if (prevYearDaeseol) {
      relevantSolarTerms.push({
        ...prevYearDaeseol,
        date: new Date(currentYear - 1, prevYearDaeseol.month, prevYearDaeseol.day, prevYearDaeseol.hour, prevYearDaeseol.minute)
      });
    }
  }

  // 다음 연도의 '小寒' (축월 시작) 추가 (경계 처리)
  const nextYearDataLookup = dataLookupYear + 1;
  const nextYearSolarTerms = solarTermsByYear[nextYearDataLookup] || solarTermsByYear[maxYear];
  if (nextYearSolarTerms) {
    const nextYearSohan = nextYearSolarTerms.find(t => t.name === '小寒');
    if (nextYearSohan) {
      relevantSolarTerms.push({
        ...nextYearSohan,
        date: new Date(currentYear + 1, nextYearSohan.month, nextYearSohan.day, nextYearSohan.hour, nextYearSohan.minute)
      });
    }
  }

  // 날짜 순으로 정렬
  relevantSolarTerms.sort((a, b) => a.date.getTime() - b.date.getTime());

  // 현재 날짜가 속하는 절기월 찾기
  for (let i = relevantSolarTerms.length - 1; i >= 0; i--) {
    if (date >= relevantSolarTerms[i].date) {
      solarMonthJijiIndex = relevantSolarTerms[i].jijiIndex;
      break;
    }
  }

  return solarMonthJijiIndex;
};

/**
 * 월(月)의 갑자를 계산합니다.
 * 주의: 이 함수는 24절기의 연도별 실제 일자를 반영하지만, 절기의 정확한 시각과 지역별 경도를 고려하지 않으므로
 * 실제 만세력의 월 간지와 다를 수 있습니다.
 */
export const getMonthGapja = (date, yearCheongan) => {
  // 24절기 기반으로 월의 지지(Jiji) 인덱스 결정
  const jijiIndex = getSolarMonthJijiIndex(date);

  // 년간(年干)에 따른 寅月(인월, 지지 인덱스 2)의 천간 시작점
  const yearCheonganIndex = cheongan.indexOf(yearCheongan);
  let startMonthCheonganOffset; // 寅月의 천간 인덱스 (甲=0, 乙=1, ...)
  if (yearCheonganIndex === 0 || yearCheonganIndex === 5) startMonthCheonganOffset = 2; // 甲/己년 -> 丙寅月
  else if (yearCheonganIndex === 1 || yearCheonganIndex === 6) startMonthCheonganOffset = 4; // 乙/庚년 -> 戊寅月
  else if (yearCheonganIndex === 2 || yearCheonganIndex === 7) startMonthCheonganOffset = 6; // 丙/辛년 -> 庚寅月
  else if (yearCheonganIndex === 3 || yearCheonganIndex === 8) startMonthCheonganOffset = 8; // 丁/壬년 -> 庚寅月
  else if (yearCheonganIndex === 4 || yearCheonganIndex === 9) startMonthCheonganOffset = 0; // 戊/癸년 -> 甲寅月

  // 寅月(지지 인덱스 2)을 기준으로 현재 월의 지지까지의 오프셋 계산
  const monthOffsetFromIn = (jijiIndex - 2 + 12) % 12;

  // 현재 월의 천간 인덱스 계산
  const cheonganIndex = (startMonthCheonganOffset + monthOffsetFromIn) % 10;

  return {
    cheongan: cheongan[cheonganIndex],
    jiji: jiji[jijiIndex],
    hangul: cheongangHangul[cheonganIndex] + jijiHangul[jijiIndex],
    animal: animals[jijiIndex],
  };
};

/**
 * 시(時)의 갑자를 계산합니다.
 * 일간(日干)에 따른 시진(時辰)의 천간 시작점과 십이지지(地支)를 기반으로 합니다.
 * 정확한 시진 계산 (30분 기준)
 */
export const getTimeGapja = (date, dayCheongan) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const totalMinutes = hour * 60 + minute;

  let jijiIndex;
  if (totalMinutes >= 1410 || totalMinutes < 90) jijiIndex = 0;  // 자시 (23:30~01:29)
  else if (totalMinutes >= 90 && totalMinutes < 210) jijiIndex = 1;   // 축시 (01:30~03:29)
  else if (totalMinutes >= 210 && totalMinutes < 330) jijiIndex = 2;  // 인시 (03:30~05:29)
  else if (totalMinutes >= 330 && totalMinutes < 450) jijiIndex = 3;  // 묘시 (05:30~07:29)
  else if (totalMinutes >= 450 && totalMinutes < 570) jijiIndex = 4;  // 진시 (07:30~09:29)
  else if (totalMinutes >= 570 && totalMinutes < 690) jijiIndex = 5;  // 사시 (09:30~11:29)
  else if (totalMinutes >= 690 && totalMinutes < 810) jijiIndex = 6;  // 오시 (11:30~13:29)
    else if (totalMinutes >= 810 && totalMinutes < 930) jijiIndex = 7;  // 미시 (13:30~15:29)
    else if (totalMinutes >= 930 && totalMinutes < 1050) jijiIndex = 8; // 신시 (15:30~17:29)
    else if (totalMinutes >= 1050 && totalMinutes < 1170) jijiIndex = 9; // 유시 (17:30~19:29)
    else if (totalMinutes >= 1170 && totalMinutes < 1290) jijiIndex = 10; // 술시 (19:30~21:29)
    else jijiIndex = 11; // 해시 (21:30~23:29)

  // 일간(日干)에 따른 시진 천간 계산
  // 甲己日: 甲子時, 乙庚日: 丙子時, 丙辛日: 戊子時, 丁壬日: 庚子時, 戊癸日: 壬子時
  const dayCheonganIndex = cheongan.indexOf(dayCheongan);
  let startHourCheonganOffset; // 子時의 천간 인덱스
  if (dayCheonganIndex === 0 || dayCheonganIndex === 5) startHourCheonganOffset = 0; // 甲/己日 -> 甲子時
  else if (dayCheonganIndex === 1 || dayCheonganIndex === 6) startHourCheonganOffset = 2; // 乙/庚日 -> 丙子時
  else if (dayCheonganIndex === 2 || dayCheonganIndex === 7) startHourCheonganOffset = 4; // 丙/辛日 -> 戊子時
  else if (dayCheonganIndex === 3 || dayCheonganIndex === 8) startHourCheonganOffset = 6; // 丁/壬日 -> 庚子時
  else if (dayCheonganIndex === 4 || dayCheonganIndex === 9) startHourCheonganOffset = 8; // 戊/癸日 -> 壬子時

  const hourCheonganIndex = (startHourCheonganOffset + jijiIndex) % 10;

  return {
    cheongan: cheongan[hourCheonganIndex],
    jiji: jiji[jijiIndex],
    hangul: cheongangHangul[hourCheonganIndex] + jijiHangul[jijiIndex],
    animal: animals[jijiIndex],
    timeRange: getTimeRange(jijiIndex)
  };
};

// 시진별 시간 범위 표시
const getTimeRange = (jijiIndex) => {
  const timeRanges = [
    '23:30~01:29', // 자시
    '01:30~03:29', // 축시
    '03:30~05:29', // 인시
    '05:30~07:29', // 묘시
    '07:30~09:29', // 진시
    '09:30~11:29', // 사시
    '11:30~13:29', // 오시
    '13:30~15:29', // 미시
    '15:30~17:29', // 신시
    '17:30~19:29', // 유시
    '19:30~21:29', // 술시
    '21:30~23:29'  // 해시
  ];
  return timeRanges[jijiIndex];
};
