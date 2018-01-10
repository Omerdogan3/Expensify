import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {firebase, googleAuthProvider, database as default}; 




// database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
//   // child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });
  
//   // child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   });



// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });




// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Do for a run'
// });

// const firebaseNotes = {
//     notes: {
//         asd:{
//             title:'test1',
//             body: 'this is my first note'
//         },
//         asdasd:{
//             title:'test2',
//             body: 'this is my second note'
//         }
//     },
// };

// const notes = [{
//     id: 20,
//     body: 'this is my first note'
// },{
//     id: 21,
//     body: 'this is my second note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// });


// database.ref('location/city').once('value').then((snapshot)=>{
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e)=>{
//     console.log('Error fetching data',e);
// });


// database.ref().set({
//     name: 'Omer Dogan',
//     age: 26,
//     isSingle:false,
//     stressLevel:3,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location:{
//         city:'Philadelphia',
//         country:'US'
//     }
// }).then(()=>{
//     console.log('data is saved!');
// }).catch((e)=>{
//     console.log('This failed', e);
// });

// database.ref().set('This is my data');

// database.ref('attributes').set({
//     height: 1.95,
//     weight:80
// }).then(()=>{
//     console.log('Second set call worked!');
// }).catch((e)=>{
//     console.log('Things did not work!',e);
// });

// database.ref('isSingle').remove().then(()=>{
//     console.log('data was removed');
// }).catch((e)=>{
//     console.log('data could not removed!');
// })

// database.ref().update({
//     stressLevel: 12,
//     'location/city': 'Seatle',
//     'job/title': 'Manager'
// });






