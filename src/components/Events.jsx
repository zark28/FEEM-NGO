import React, { useEffect, useState } from 'react';
import ActivitiesCard from './ActivitiesCard';
import sanityClient from '../sanityClient';

const Events = () => {
  const [allEvents, setAllEvents] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"&&(*[_type == "category"&&title=="events"][0]._id in categories[]._ref)]{
          title,
          slug,
          "author": author->name,
          "date":publishedAt,
          "body":body[].children[].text,
          mainImage{
            asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setAllEvents(data))
      .catch(console.error);
  }, [allEvents]);
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      {allEvents &&
        allEvents?.map((event, i) => (
          <ActivitiesCard
            key={i}
            title={event.title}
            details={event.body}
            img={event.mainImage.asset.url}
            flow={i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}
          />
        ))}
    </div>
  );
};

export default Events;
