import { useState } from 'react';
import diaryData from './diaryData';
import DiaryCard from './components/DiaryCard';
import Menu from './components/Menu';
import './styles.css';

export default function App() {
  // Function to create DiaryCard components dynamically
  const renderDiaryCards = () => {
    return diaryData.map((data, index) => (
      <DiaryCard
        key={index} // You should use a unique key, 'index' is used here for simplicity
        date={data.date}
        rating={data.rating}
        emotions={data.emotions}
        activities={data.activities}
        note={data.note}
      />
    ));
  };

  return (
    <div>
      <Menu skip={false} />
      <main className='main-container'>
        <div className='sub-header'>
          <h3>Nisan Raporu</h3>
        </div>

        {/* Use the function to dynamically render DiaryCard components */}
        {renderDiaryCards()}
      </main>
    </div>
  );
}
