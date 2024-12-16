// Jest 및 React Testing Library 예시
import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from '../Calendar';

describe('Calendar', () => {
  1it('현재 날짜가 캘린더 헤더에 표시되는지 확인', () => {
    render(<Calendar />);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    cons2t headerText = screen.getByRole('heading', { level: 1 });
    expect(headerText).toHaveTextContent(`${currentYear}년 ${currentMonth}`);
  });
});