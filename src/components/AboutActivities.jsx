import React from 'react';
import SupportCard from './SupportCard';

const AboutActivities = () => {
  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(' ')
        )}${suffix}`;

  const activities = [
    {
      img: 'victims-support.svg',

      title: 'Sexual voilence',
      link: '/about/sexualVoilence',
      detailText:
        " We provide services like medical check-up psychological and emotional support, guidance on legal issues, social support,advice and prophylaxis against STD's",
    },
    {
      img: 'empowerment.svg',
      title: 'Leadership',
      link: '/about/leadership',
      detailText:
        'Female Leadership in every sector has been lagging behind. Female representation in leadership at the Global level especially in parliament was 25% as of 2015 (UN Women, 2015).',
      flow: '',
    },
    {
      img: 'education.svg',
      title: 'Education on reproductive health',
      link: '/about/reproductiveHealth',
      detailText:
        'Sexual and reproductive health appears to be an area of concern as more girls keep getting pregnant abruptly.',
    },
    {
      img: 'training.svg',
      title: 'Provision of livelihoods',
      link: '/about/livelihoods',
      detailText:
        ' Majority of women especially single mothers and widows are struggling to fend for their families',
    },
    {
      img: 'return-to-school.svg',

      title: 'Return to school for dropped-out girls',
      link: '/about/school',
      detailText:
        'Girls and young women stop school due challenges, notable among them is financial. We try to meet the needs of selected girls by providing food, sanitary pads, uniforms, stationery ect.. and pay their fees to enable them successfully graduate school.',
    },

    {
      img: 'opportunities.svg',

      title: 'Informed decision making',
      link: '/about/opportunities',
      detailText: ' We help women and girls make informed decision on',
    },
  ];
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
      {activities?.map((activity, i) => (
        <SupportCard
          heading={activity.title}
          text={truncate(activity.detailText, 40, ` ...read more`)}
          img={activity.img}
          link={activity.link}
          key={i}
        />
      ))}
    </div>
  );
};

export default AboutActivities;
