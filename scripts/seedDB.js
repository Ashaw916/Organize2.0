require('dotenv').config();
const { sequelize, Events, Articles, Links, Videos, User, UserProfile } = require('../models');

async function seed() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    const eventSeed = [
      {
        title: 'Protest planning meeting',
        start_date: '09/30/2020 03:00pm',
        end_date: '09/30/2020 06:00pm',
        date_added: new Date(),
        description: 'Gathering to plan and coordinate protest logistics',
        location: 'california state capitol',
        organization: 'Lawyers United',
        start_time: '3:00pm',
        event_url: 'https://www.google.com/',
      },
      {
        title: 'City budget hearing',
        start_date: '09/22/2020 12:00pm',
        end_date: '09/22/2020 03:00pm',
        date_added: new Date(),
        description: 'City budget hearing, community members can speak to local impact',
        location: 'City Hall: 915 I Street, Sacramento, CA 95814',
        organization: 'Volunteers United',
        start_time: '12:00pm',
        event_url: 'https://www.google.com/',
      },
    ];

    const articleSeed = [
      {
        title: 'World Pays Tribute to ChadWick Boseman',
        author: 'Multiple',
        body: 'Photos illustrating tribute to recently passed Icon',
        date_added: new Date(),
        description: 'Photos illustrating tribute to recently passed Icon',
        source:
          'https://www.usatoday.com/picture-gallery/news/2020/09/04/world-pays-tribute-chadwick-boseman/5712110002/',
        type: 'News Article',
      },
    ];

    const linkSeed = [
      { title: 'ACLU', date_added: new Date(), description: 'American Civil Liberties Union', url: 'https://www.aclu.org/guardians-freedom', type: 'Organization' },
    ];

    const videoSeed = [
      { title: 'Nightly news 01', date_added: new Date(), description: 'Nightly news September 1, 2020', src: 'https://www.youtube.com/embed/JU9g16VIVM8', type: 'Youtube video' },
    ];

    await Events.bulkCreate(eventSeed);
    console.log('Events inserted');

    await Articles.bulkCreate(articleSeed);
    console.log('Articles inserted');

    await Links.bulkCreate(linkSeed);
    console.log('Links inserted');

    await Videos.bulkCreate(videoSeed);
    console.log('Videos inserted');

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
