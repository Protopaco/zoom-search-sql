const client = require('../lib/client');
// import our seed data:
// const usersData = require('./users.js');
// const meetingData = require('./meetings.js');
// const transcriptData = require('./transcripts.js');
// const chatData = require('./chats.js');
// const favData = require('./favorites.js');

// const teacherUser = require('./teacher-users.js');

// run();

// async function run() {
//   try {
//     await client.connect();

//     const users = await Promise.all(
//       usersData.map((user) => {
//         return client.query(
//           `
//                       INSERT INTO users (email, hash)
//                       VALUES ($1, $2)
//                       RETURNING *;
//                   `,
//           [user.email, user.hash]
//         );
//       })
//     );

    // const user = users[0].rows[0];

    // await Promise.all(
    //   meetingData.map((meeting) => {
    //     return client.query(
    //       `
    //                 INSERT INTO meetings (uuid, host_id, topic, start_time, share_url, duration, video_play_url, audio_play_url, transcript_url, chat_file, meeting_views, meeting_fav)
    //                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);
    //             `,
    //       [
    //         meeting.uuid,
    //         meeting.host_id,
    //         meeting.topic,
    //         meeting.start_time,
    //         meeting.share_url,
    //         meeting.duration,
    //         meeting.video_play_url,
    //         meeting.audio_play_url,
    //         meeting.transcript_url,
    //         meeting.chat_file,
    //         meeting.meeting_views,
    //         meeting.meeting_fav,
    //       ]
    //     );
    //   })
    // );

    // await Promise.all(
    //   transcriptData.map((transcript) => {
    //     return client.query(
    //       `
    //                   INSERT INTO transcripts (uuid, identifier, time_start, time_end, speaker, text, keywords)
    //                   VALUES ($1, $2, $3, $4, $5, $6, $7)
    //                   RETURNING *;
    //               `,
    //       [
    //         transcript.uuid,
    //         transcript.identifier,
    //         transcript.time_start,
    //         transcript.time_end,
    //         transcript.speaker,
    //         transcript.text,
    //         transcript.keywords,
    //       ]
    //     );
    //   })
    // );

    // await Promise.all(
    //   chatData.map((chat) => {
    //     return client.query(
    //       `
    //                   INSERT INTO chats (uuid, timestamp, speaker, text)
    //                   VALUES ($1, $2, $3, $4)
    //                   RETURNING *;
    //               `,
    //       [chat.uuid, chat.timestamp, chat.speaker, chat.text]
    //     );
    //   })
    // );

    // await Promise.all(
    //   favData.map((favorite) => {
    //     return client.query(
    //       `
    //                 INSERT INTO favorites (uuid, host_id, topic, start_time, timestamp, speaker, text, owner_id)
    //                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
    //             `,
    //       [
    //         favorite.uuid,
    //         favorite.host_id,
    //         favorite.topic,
    //         favorite.start_time,
    //         favorite.timestamp,
    //         favorite.speaker,
    //         favorite.text,
    //         favorite.owner_id,
    //       ]
    //     );
    //   })
    // );

//     console.log('seed data load complete');
//   } catch(err) {
//     console.log(err);
//   } finally {
//     client.end();
//   }
// }
