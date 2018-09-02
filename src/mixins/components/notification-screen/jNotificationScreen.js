// /* eslint-disable import/no-duplicates,import/prefer-default-export,object-shorthand */
// /* eslint-disable no-unused-expressions,no-unused-vars,key-spacing */
// import { mapState, mapActions } from 'vuex';
//
// export const jNotificationScreen = {
//   data() {
//     return {
//       // loading after mounted
//       loadings_screen: false,
//     };
//   },
//   computed: {
//     ...mapState('jNotificationScreen', ['info_screen', 'problem_screen', 'success_screen', 'loading_screen']),
//   },
//   methods: {
//     ...mapActions('jNotificationScreen', ['toggleInfo', 'toggleProblem', 'toggleSuccess', 'toggleLoading']),
//   },
//   watch:{
//     // noinspection JSAnnotator
//     // loading when move to another path
//     '$route'(to, from) {
//       const loading = this.$refs.loadingScreen;
//       loading.showLoadingScreen();
//       setTimeout(() => {
//         loading.closeLoadingScreen();
//       }, 600);
//     },
//     // trigger info_screen
//     info_screen() {
//       const info = this.$refs.infoScreen;
//       if (this.info_screen === true) {
//         info.toggleInfoScreen();
//         this.toggleInfo();
//       }
//     },
//     // trigger problem_screen
//     problem_screen() {
//       const problem = this.$refs.problemScreen;
//       if (this.problem_screen === true) {
//         problem.toggleProblemScreen();
//         this.toggleProblem();
//       }
//     },
//     // trigger success_screen
//     success_screen() {
//       const success = this.$refs.successScreen;
//       if (this.success_screen === true) {
//         success.toggleSuccessScreen();
//         this.toggleSuccess();
//       }
//     },
//     // tigger loading_screen
//     loading_screen() {
//       const loading = this.$refs.loadingScreen;
//       if (this.loading_screen === true) {
//         loading.showLoadingScreen();
//       } else {
//         loading.closeLoadingScreen();
//       }
//     },
//   },
//   mounted() {
//     // execute loading screen after mounted for example after login auth
//     this.loadings_screen = true;
//     const loading = this.$refs.loadingScreen;
//     this.loadings_screen === true ? loading.showLoadingScreen() : '';
//     setTimeout(() => {
//       loading.closeLoadingScreen();
//     }, 1500);
//   },
// };
