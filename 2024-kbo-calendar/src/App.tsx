// pages/index.tsx
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, View } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = { ko };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// 샘플 일정 데이터
const events = [
  {
    title: '게임 A vs B',
    start: new Date(2024, 11, 15), // 2024년 1월 15일
    end: new Date(2024, 11, 15),
  },
  {
    title: '게임 C vs D',
    start: new Date(2024, 11, 20), // 2024년 1월 20일
    end: new Date(2024, 11, 20),
  },
];

const App: React.FC = () => {
  // 현재 날짜와 뷰 상태
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<View>('month');

  // 날짜 변경 핸들러
  const handleNavigate = (date: Date) => {
    setCurrentDate(date);
  };

  // 뷰 변경 핸들러
  const handleViewChange = (view: View) => {
    setCurrentView(view);
  };

  return (
    <div style={{ height: '100vh', padding: '1rem' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh' }}
        date={currentDate}
        view={currentView}
        onNavigate={handleNavigate}
        onView={handleViewChange}
      />
    </div>
  );
};

export default App;
