/* Exapand/Collapse with TAB key */
var expanded = false;

document.body.onload = () => {
  document.onkeydown = function (e) {
    if (e.keyCode === 9) {
      expanded = !expanded;
      document
        .querySelectorAll("details")
        .forEach((detail) => (detail.open = expanded));
      return false;
    }
  };
};
