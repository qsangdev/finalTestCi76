import React from "react";

const Test2 = () => {
  const data = [
    { name: "Liverpool", points: 80, GD: 50 },
    { name: "MU", points: 80, GD: 51 },
    { name: "Chelsea", points: 81, GD: 50 },
    { name: "Arsenal", points: 80, GD: 50 },
    { name: "Fullham", points: 80, GD: 50 },
  ];

  // const newArray = data.sort((a, b) => {
  //   if (a.points > b.points) {
  //     return -1;
  //   } else if (a.points === b.points) {
  //     if (a.GD > b.GD) {
  //       return -1;
  //     } else if (a.GD === b.GD) {
  //       if (a.name > b.name) {
  //         return 1;
  //       }
  //       return -1;
  //     }
  //     return 1;
  //   }
  //   return 1;
  // });

  const newArray = data.sort((a, b) =>
    a.points > b.points
      ? -1
      : a.points === b.points
      ? a.GD > b.GD
        ? -1
        : a.GD === b.GD
        ? a.name > b.name
          ? 1
          : -1
        : 1
      : 1
  );

  for (var i in newArray) {
    newArray[i].position = i + 1;
  }
  console.log(newArray);
  return <div>Test2:</div>;
};

export default Test2;
