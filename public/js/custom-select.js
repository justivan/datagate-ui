var singleFetch = new Choices("#choices-single-remote-fetch", {
  allowHTML: false,
  searchPlaceholderValue: "Search for an Arctic Monkeys record",
})
  .setChoices(function () {
    return fetch("https://api.discogs.com/artists/391170/releases?token=QBRmstCkwXEvCjTclCpumbtNwvVkEzGAdELXyRyW")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data.releases.map(function (release) {
          return { label: release.title, value: release.title };
        });
      });
  })
  .then(function (instance) {
    instance.setChoiceByValue("Fake Tales Of San Francisco");
  });

var multipleFetch = new Choices("#choices-multiple-remote-fetch", {
  allowHTML: false,
  placeholder: true,
  placeholderValue: "Pick an Strokes record",
  maxItemCount: 5,
  searchEnabled: false,
  removeItemButton: true,
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