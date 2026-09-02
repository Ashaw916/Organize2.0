require('dotenv').config({ path: require('path').resolve(__dirname, '..', '.env') });
const { sequelize, User, UserProfile, Articles, Events, Links, Videos, Invite, Auth } = require('../models');

async function upsertMany(Model, uniqueKey, items, options = {}) {
  for (const it of items) {
    const where = {};
    where[uniqueKey] = it[uniqueKey];
    await Model.findOrCreate({ where, defaults: it, ...options });
  }
}

async function seed() {
  console.log('Authenticating DB...');
  await sequelize.authenticate();
  console.log('Syncing models (non-destructive)...');
  await sequelize.sync();

  const t = await sequelize.transaction();
  try {
    // Users (create an admin user if not exists)
    const [adminUser] = await User.findOrCreate({
      where: { email: 'admin@example.com' },
      defaults: { password: 'password', date: new Date() },
      transaction: t,
    });

    // User profile for admin (idempotent by email)
    await UserProfile.findOrCreate({
      where: { email: adminUser.email },
      defaults: { organization: 'Example Org', website: '', facebook: '', instagram: '', twitter: '', date_added: new Date() },
      transaction: t,
    });

    const eventSeed = [
      {
        title: 'Protest planning meeting',
        start_date: '09/30/2020 03:00pm',
        end_date: '09/30/2020 06:00pm',
        date_added: new Date(),
        description: 'Gathering to plan and coordinate protest logistics',
        location: 'California State Capitol',
        organization: 'Lawyers United',
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
        source: 'https://www.usatoday.com/picture-gallery/news/2020/09/04/world-pays-tribute-chadwick-boseman/5712110002/',
        type: 'News Article',
      },
    ];

    const linkSeed = [
      { title: 'ACLU', date_added: new Date(), description: 'American Civil Liberties Union', url: 'https://www.aclu.org/guardians-freedom', type: 'Organization' },
    ];

    const videoSeed = [
      { title: 'Nightly news 01', date_added: new Date(), description: 'Nightly news September 1, 2020', src: 'https://www.youtube.com/embed/JU9g16VIVM8', type: 'Youtube video' },
    ];

    const inviteSeed = [
      { email: 'invitee@example.com', organization: 'Example Org', host: 'admin@example.com', date: new Date() },
    ];

    const authSeed = [
      { userId: adminUser.id, bool: true, date: new Date() },
    ];

    // Upsert in dependency order
    await upsertMany(Events, 'title', eventSeed, { transaction: t });
    await upsertMany(Articles, 'title', articleSeed, { transaction: t });
    await upsertMany(Links, 'title', linkSeed, { transaction: t });
    await upsertMany(Videos, 'title', videoSeed, { transaction: t });

    for (const inv of inviteSeed) {
      await Invite.findOrCreate({ where: { email: inv.email }, defaults: inv, transaction: t });
    }

    for (const a of authSeed) {
      // Auth has unique userId
      await Auth.findOrCreate({ where: { userId: a.userId }, defaults: a, transaction: t });
    }

    await t.commit();
    console.log('Seeding completed successfully.');
  } catch (err) {
    console.error('Seed failed, rolling back:', err);
    await t.rollback();
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
