export const mockData = {
  labels: ["dados1", "dados2", "dados3", "dados4", "dados5", "dados6"],
  datasets: [
    {
      type: "bar",
      label: "STATUS 1",
      backgroundColor: "blue",
      data: [50, 25, 12, 48, 90, 76],
    },
    {
      type: "bar",
      label: "STATUS 2",
      backgroundColor: "green",
      data: [21, 84, 24, 75, 37, 65],
    },
    {
      type: "bar",
      label: "STATUS 3",
      backgroundColor: "yellow",
      data: [41, 52, 24, 74, 23, 21],
    },
  ],
};

export const mockData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "blue",
      borderColor: "blue",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "My Second dataset",
      backgroundColor: "pink",
      borderColor: "pink",
      data: [28, 48, 40, 19, 86, 27, 90],
    },
  ],
};

export const mockData3 = {
  labels: ["A", "B", "C"],
  datasets: [
    {
      data: [540, 325, 702],
      backgroundColor: ["blue", "yellow", "green"],
      hoverBackgroundColor: ["blue", "yellow", "green"],
    },
  ],
};

export const mockStatus = [
  { name: "Error", code: "Error" },
  { name: "Done", code: "Done" },
  { name: "Cancel", code: "Cancel" },
  { name: "Finish", code: "Finish" },
  { name: "Stop", code: "Stop" },
];
