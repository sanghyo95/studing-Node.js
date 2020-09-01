// proces.argv

process.argv.forEach(function (item, index) {
  console.log(index + " :" + typeof item + " : ", item);

  if (item == "--exit") {
    let exitTime = Number(process.argv[index + 1]);
    setTimeout(function () {
      process.exit();
    }, exitTime);
  }
});
