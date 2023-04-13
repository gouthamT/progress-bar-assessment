import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.scss";
import { SelectionOptionValue, Progressbar, Select } from "../components";

const ProgressOptions = [
  { value: 1, label: "#progress 1" },
  { value: 2, label: "#progress 2" },
  { value: 3, label: "#progress 3" },
];

const ButtonList = [
  { value: -25, label: "-25" },
  { value: -10, label: "-10" },
  { value: 10, label: "+10" },
  { value: 25, label: "+25" },
];

export const App = () => {
  const [activeProgressbarValue, setActiveProgressbarValue] =
    useState<SelectionOptionValue>(1);
  const [progressMap, setProgressMap] = useState(
    ProgressOptions.map(({ value }) => ({ value, percentage: 0 }))
  );

  const onActiveProgressbarChange = (value: SelectionOptionValue) => {
    setActiveProgressbarValue(Number(value));
  };

  const onProgressChange = (value: number) => {
    const newProgressMap = progressMap.map((item) => {
      if (item.value === activeProgressbarValue) {
        const newPercentage = item.percentage + value;
        return {
          ...item,
          percentage: newPercentage < 0 ? 0 : newPercentage,
        };
      }
      return item;
    });
    setProgressMap(newProgressMap);
  };

  const activeProgress = progressMap.find(
    (item) => item.value === activeProgressbarValue
  );

  return (
    <>
      <Head>
        <title>Progress bar Assessment</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Progress Bar Demo</h1>
        {ProgressOptions.map(({ value, label }) => (
          <Progressbar
            key={value}
            percentage={
              progressMap.find((item) => item.value === value)?.percentage
            }
            ariaLabel={label}
            testId={`progress-bar-${value}`}
            className={styles.progressbar}
            id={`progress-bar-${value}`}
          />
        ))}
        <div className={styles.selectionContainer}>
          <Select
            options={ProgressOptions}
            value={activeProgressbarValue}
            onChange={onActiveProgressbarChange}
            ariaLabel="Select an option"
            ariaDescribedBy="select-description"
            testId="progress-selection"
            className={styles.select}
          />
          {ButtonList.map((bl) => (
            <button
              key={bl.value}
              aria-label={bl.value > 0 ? `Increase ${bl.label}` : `Decrease ${bl.label}`}
              aria-controls={`progress-bar-${activeProgressbarValue}`}
              onClick={() => onProgressChange(bl.value)}
              className={styles.button}
              data-testid={bl.value > 0 ? `increase-${Math.abs(bl.value)}` : `decrease-${Math.abs(bl.value)}`}
            >
              {bl.label}
            </button>
          ))}
        </div>
      </main>
    </>
  );
}
