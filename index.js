require('dotenv').config();
const PdgaApi = require('@kendelchopp/pdga-api');

/**
 * Demo of the PDGA API
 */
const demoPdgaApi = async () => {
  await PdgaApi.login({
    username: process.env.PDGA_USERNAME,
    password: process.env.PDGA_PASSWORD
  });

  const events = await PdgaApi.Event.search({ tournamentId: '47877' });
  console.log(events);

  const courses = await PdgaApi.Course.search({ courseId: '2146' });
  console.log(courses);

  const players = await PdgaApi.Player.search({ pdgaNumber: '180146' });
  console.log(players);

  const playerStats = await PdgaApi.Player.search({ pdgaNumber: '180146' });
  console.log(playerStats);

  const examplePlayer = players[0];
  const examplePlayerStats = await examplePlayer.getStats();
  console.log(examplePlayerStats);
};

demoPdgaApi();
