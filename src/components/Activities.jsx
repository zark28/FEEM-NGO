import React from 'react';
import ActivitiesCard from './ActivitiesCard';
const activities = [
  {
    img: 'icons/victims-support.svg',
    title: 'Sexual voilence',
    link: '/about/sexualVoilence',
    detailText:
      " We provide  services like medical check-up psychological and emotional support, guidance on legal issues, social support,advice and prophylaxis against STD's",
  },
  {
    img: 'icons/empowerment.svg',
    title: 'Leadership',
    link: '/about/leadership',
    detailText:
      'Female Leadership in every sector has been lagging behind. Female representation in leadership at the Global level especially in parliament was 25% as of 2015 (UN Women, 2015).',
    flow: '',
  },
  {
    img: 'icons/education.svg',
    title: 'Education on reproductive health',
    link: '/about/reproductiveHealth',
    detailText:
      'Sexual and reproductive health appears to be an area of concern as more girls keep getting pregnant abruptly.',
  },
  {
    img: 'icons/training.svg',
    title: 'Provision of livelihoods',
    link: '/about/livelihoods',
    detailText:
      ' Majority of women especially single mothers and widows are struggling to fend for their families',
  },
  {
    img: 'icons/return-to-school.svg',

    title: 'Keep vulnerable girls in school',
    link: '/about/school',
    detailText:
      'Girls drop out of school due to basically poverty and many other factors such as unplanned pregnancies',
  },

  {
    img: 'icons/opportunities.svg',

    title: 'Informed decision making',
    link: '/about/opportunities',
    detailText: ' We help women and girls make informed decision on',
  },
];

const Activities = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      {activities?.map((activity, i) => (
        <ActivitiesCard
          key={i}
          link={activity.link}
          title={activity.title}
          details={`${activity.detailText}`}
          img={activity.img}
          flow={
            i % 2 === 0
              ? `md:flex-row-reverse bg-primaryColor-light2`
              : `md:flex-row`
          }
        />
      ))}
    </div>
  );
};

export default Activities;
