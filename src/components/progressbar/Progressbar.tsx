import classnames from "classnames";
import styles from "./Progressbar.module.scss";

export interface ProgressbarProps {
  percentage?: number;
  ariaLabel: string;
  testId: string;
  className?: string;
  id: string;
}

export const Progressbar = ({
  percentage = 0,
  ariaLabel,
  testId,
  className,
  id
}: ProgressbarProps) => (
  <div
    role="progressbar"
    id={id}
    aria-valuemin={0}
    aria-valuenow={percentage}
    aria-label={ariaLabel}
    className={classnames(styles.progressBar, className)}
    data-maxexceeded={percentage > 100}
    data-testid={testId}
  >
    <span className={styles.label}>{percentage}%</span>
    <div className={styles.progress} style={{ width: `${percentage}%` }} />
  </div>
);
