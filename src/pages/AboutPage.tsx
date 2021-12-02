import React from 'react';
import { useHistory } from 'react-router';

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eos qui sed. Quae veritatis libero sint atque amet placeat facere fuga quis alias commodi repudiandae laudantium delectus at mollitia deleniti ea numquam necessitatibus, labore perferendis architecto aliquam, a illum. Ex ipsa omnis nostrum, eaque odit eum facilis aliquid voluptatum eligendi modi adipisci alias reprehenderit, quo minus distinctio et dignissimos. Iusto, officiis! Fugit, perspiciatis nisi neque exercitationem maxime iste obcaecati repellat cupiditate ex a cumque nemo nam odio, tempore eos natus officia ratione voluptatum iusto in dignissimos accusantium, beatae praesentium modi! Consequatur corrupti culpa modi voluptatibus vero maiores repellendus totam ab.</p>
      <button className='btn' onClick={() => history.push('/')}>Обратно к списку дел</button>
    </>
  )
}