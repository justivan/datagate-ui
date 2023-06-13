// var singleFetch = new Choices("#choices-single-remote-fetch", {
//   allowHTML: false,
//   searchPlaceholderValue: "Search",
// })
//   .setChoices(function () {
//     return fetch("https://api.discogs.com/artists/391170/releases?token=QBRmstCkwXEvCjTclCpumbtNwvVkEzGAdELXyRyW")
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         return data.releases.map(function (release) {
//           return { label: release.title, value: release.title };
//         });
//       });
//   })
//   .then(function (instance) {
//     instance.setChoiceByValue("Fake Tales Of San Francisco");
//   });

var multipleFetch = new Choices("#tags", {
  allowHTML: false,
  maxItemCount: 5,
  searchEnabled: false,
  removeItemButton: true,
  classNames: {
    containerInner: "choices__inner min-h-[96px]",
  },
}).setChoices(function () {
  return fetch("https://api.discogs.com/artists/55980/releases?token=QBRmstCkwXEvCjTclCpumbtNwvVkEzGAdELXyRyW")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.releases.map(function (release) {
        return { value: release.title, label: release.title };
      });
    });
});
