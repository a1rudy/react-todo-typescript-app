import React from 'react';
import { useHistory } from 'react-router';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1 className='about-title'>Страница информации</h1>
      <p className='about-subtitle'>Приложение создано в учебных целях на React.js + TypeScript и представляет возможность вести список дел с сохранением данных в браузере.</p>
      <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  )
}