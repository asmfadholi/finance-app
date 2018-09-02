// import jChallenge from '@/views/example/jChallenge';
// import jChallenge1 from '@/views/example/jChallenge1';
// import jTableServer from '@/views/example/jTableServer';
// // import jWrapper from '@/layouts/jWrapper';
// import jProfilePage from '@/views/profile/jProfilePage';
// import jTableClient from '@/views/example/jTableClient';
// import jListPage from '@/views/company-team/jListPage';
// import jCompanyProfilePage from '@/views/comp-profile/jCompanyProfilePage';
// import jEmployee from '@/views/company/jEmployee';
// import jFormTeam from '@/views/company/jFormTeam';
// import jCreate from '@/views/example/jCreate';
// import jDetail from '@/views/example/jDetail';
// // import stores from '@/stores/index';
//
//
// export default [
//   {
//     path: '/wrapper',
//     name: 'jWrapper',
//     component: jChallenge,
//     beforeEnter(to, from, next) {
//       const idToken = localStorage.getItem('idToken');
//       const userId = localStorage.getItem('userId');
//       if (idToken) {
//         next(`/wrapper/${userId}`);
//       } else {
//         next('/');
//       }
//     },
//     meta: {
//       requiresAuth: false,
//       layout: 'jWrapper',
//       title: 'Form',
//     },
//   },
//   {
//     path: '/wrapper/:id',
//     name: 'jWrapper params',
//     component: jChallenge,
//     beforeEnter(to, from, next) {
//       const userId = to.params.id;
//       if (userId === '8e334eddcb2b8e7a11756f7da53a70b7938f0199ed899b01ca0739c6416bb69ab3186b2bf683f262becacba5dc07ed65cccf437fd5f1e94b59c7d4828d46caec') {
//         next();
//       } else {
//         next('/');
//       }
//     },
//     meta: {
//       layout: 'jWrapper',
//       title: 'Form',
//     },
//   },
//   {
//     path: '/challenge',
//     name: 'jChallenge',
//     component: jChallenge,
//     meta: {
//       layout: 'jWrapper',
//     },
//   },
//   {
//     path: '/challenge/1',
//     name: 'jChallenge1',
//     component: jChallenge1,
//     meta: {
//       layout: 'jWrapper',
//     },
//   },
//   {
//     path: '/tableclient',
//     name: 'jTableClient',
//     component: jTableClient,
//     meta: {
//       layout: 'jWrapper',
//     },
//   },
//   {
//     path: '/server',
//     name: 'jTableServer',
//     component: jTableServer,
//     meta: {
//       layout: 'jWrapper',
//     },
//   },
//   {
//     path: '/company/team',
//     name: 'jListPage',
//     component: jListPage,
//     meta: {
//       layout: 'jWrapper',
//       title: 'Company Team',
//     },
//   },
//   {
//     path: '/company/profile-page',
//     name: 'jCompanyProfilePage',
//     component: jCompanyProfilePage,
//     meta: {
//       layout: 'jWrapper',
//       title: 'Company Profile',
//     },
//   },
//   {
//     path: '/user/profile-page',
//     name: 'jProfilePage',
//     component: jProfilePage,
//     meta: {
//       layout: 'jWrapper',
//       title: 'User Profile',
//     },
//   },
//   {
//     path: '/company/employee',
//     name: 'jEmployee',
//     component: jEmployee,
//     meta: {
//       layout: 'jWrapper',
//       title: 'Company Employee',
//     },
//   },
//   {
//     path: '/company/employee/group/create',
//     name: 'jFormTeam',
//     component: jFormTeam,
//     meta: {
//       layout: 'jWrapper',
//     },
//   },
//   {
//     path: '/create',
//     name: 'Create',
//     component: jCreate,
//     meta: {
//       layout: 'jWrapper',
//     },
//   },
//   {
//     path: '/detail',
//     name: 'Detail',
//     component: jDetail,
//     meta: {
//       layout: 'jWrapper',
//     },
//   },
// ];
