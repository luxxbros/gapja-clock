import React, { useState, useEffect } from 'react';
import { cheongangColors, jijiColors } from '../utils/constants';
import { getYearGapja, getMonthGapja, getDayGapja, getTimeGapja } from '../utils/gapjaCalculations';

const GapjaClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return { hours, minutes, seconds };
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];
    return `${year}년 ${month}월 ${day}일 (${weekday})`;
  };

  // 동적으로 갑자 정보 계산
  const yearGapja = getYearGapja(currentTime);
  const dayGapja = getDayGapja(currentTime);
  // 월 갑자 계산 시 년간(年干)을 인자로 전달
  const monthGapja = getMonthGapja(currentTime, yearGapja.cheongan);
  // 시 갑자 계산 시 일간(日干)을 인자로 전달
  const timeGapja = getTimeGapja(currentTime, dayGapja.cheongan);

  const { hours, minutes, seconds } = formatTime(currentTime);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
        {/* 날짜 */}
        <div className="text-gray-600 text-[27px] mb-6 font-bold">
          {formatDate(currentTime)}
        </div>

        {/* 현재 시간 */}
        <div className="text-6xl font-bold text-blue-600 mb-8 tracking-[0.12675em]">
          {hours}:{minutes}<span className="text-3xl">:</span><span className="text-3xl">{seconds}</span>
        </div>

        {/* 전통 갑자 패널 */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2">
            {/* 시 */}
            <div className="text-center">
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-1"
                style={{
                  backgroundColor: cheongangColors[timeGapja.cheongan].bg,
                  color: cheongangColors[timeGapja.cheongan].text,
                }}
              >
                {timeGapja.cheongan}
              </div>
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold"
                style={{
                  backgroundColor: jijiColors[timeGapja.jiji].bg,
                  color: jijiColors[timeGapja.jiji].text,
                }}
              >
                {timeGapja.jiji}
              </div>
              <div className="text-xs text-gray-600 mt-1">시</div>
            </div>

            {/* 일 */}
            <div className="text-center">
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-1"
                style={{
                  backgroundColor: cheongangColors[dayGapja.cheongan].bg,
                  color: cheongangColors[dayGapja.cheongan].text,
                }}
              >
                {dayGapja.cheongan}
              </div>
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold"
                style={{
                  backgroundColor: jijiColors[dayGapja.jiji].bg,
                  color: jijiColors[dayGapja.jiji].text,
                }}
              >
                {dayGapja.jiji}
              </div>
              <div className="text-xs text-gray-600 mt-1">일</div>
            </div>

            {/* 월 */}
            <div className="text-center">
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-1"
                style={{
                  backgroundColor: cheongangColors[monthGapja.cheongan].bg,
                  color: cheongangColors[monthGapja.cheongan].text,
                }}
              >
                {monthGapja.cheongan}
              </div>
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold"
                style={{
                  backgroundColor: jijiColors[monthGapja.jiji].bg,
                  color: jijiColors[monthGapja.jiji].text,
                }}
              >
                {monthGapja.jiji}
              </div>
              <div className="text-xs text-gray-600 mt-1">월</div>
            </div>

            {/* 년 */}
            <div className="text-center">
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold mb-1"
                style={{
                  backgroundColor: cheongangColors[yearGapja.cheongan].bg,
                  color: cheongangColors[yearGapja.cheongan].text,
                }}
              >
                {yearGapja.cheongan}
              </div>
              <div
                className="border-2 border-black w-16 h-16 flex items-center justify-center text-2xl font-bold"
                style={{
                  backgroundColor: jijiColors[yearGapja.jiji].bg,
                  color: jijiColors[yearGapja.jiji].text,
                }}
              >
                {yearGapja.jiji}
              </div>
              <div className="text-xs text-gray-600 mt-1">년</div>
            </div>
          </div>
        </div>

        {/* 상세 정보 */}
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-blue-800 mb-2">
                {yearGapja.hangul}년&nbsp;&nbsp;{monthGapja.hangul}월&nbsp;&nbsp;{dayGapja.hangul}일&nbsp;&nbsp;{timeGapja.hangul}시
              </div>
            </div>
          </div>
        </div>

        {/* 갑자 설명 */}
        <div className="mt-6 text-sm text-gray-500 bg-gray-50 rounded-xl p-4">
          {/* 타이틀 */}
          <h1 className="text-xl text-blue-950 mb-2">산책처럼, 만세력 시계</h1>
          <p className="mb-2">
            만든이 : 산책처럼 6기 럭스
          </p>
          <p className="text-xs mb-2">
            윈도우 시스템 시간과 동기화되어 실시간 업데이트됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GapjaClock;
