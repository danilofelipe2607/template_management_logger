"use client";
import Header from "../components/header";
import styles from "./home.module.css";
import { Chart } from "primereact/chart";
import Filter from "../components/filter";
import { mockData, mockData2, mockData3 } from "../mock";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = true;
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [router]);

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltips: {
        mode: "index",
        intersect: false,
      },
      legend: {
        labels: {
          color: "#3f3f46",
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#71717A",
        },
        grid: {
          color: "#e5e7eb",
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "#71717A",
        },
        grid: {
          color: "",
        },
      },
    },
  };

  return (
    <main className={styles.main}>
      <Header />
      <Filter />
      <div className={styles.card}>
        <Chart type="bar" data={mockData} options={options} />
      </div>

      <div className={styles.container}>
        <Chart
          type="bar"
          data={mockData2}
          options={{
            indexAxis: "y",
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
              legend: {
                labels: {
                  fontColor: "#3f3f46",
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "#71717A",
                  font: {
                    weight: 500,
                  },
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
              },
              y: {
                ticks: {
                  color: "#71717A",
                },
                grid: {
                  color: "",
                  drawBorder: false,
                },
              },
            },
          }}
        />
      </div>
      <div className={styles.containerPie}>
        <div style={{ width: "40%" }}>
          <Chart
            type="pie"
            data={mockData3}
            options={{
              plugins: {
                legend: {
                  labels: {
                    usePointStyle: true,
                  },
                },
              },
            }}
            className="w-30rem md:w-30rem"
          />
        </div>
      </div>
    </main>
  );
}
