import styles from "./styles.module.css";
import * as React from "react";
import { IGoal } from "@/mock-data/model";
import Image from "next/image";

interface IProps {
  goal: IGoal;
}

export const GoalCard: React.FC<IProps> = ({ goal }) => {
  return (
    <div className={styles.goal_card}>
      <div className={styles.img_holder}>
        <Image src={goal.icon.src} alt={goal.title} width="80" height="80" />
      </div>

      <div className={styles.text_holder}>
          <h3 className={styles.title}>{goal.title}</h3>
          <p className={styles.details}>{goal.details}</p>
      </div>
    </div>
  );
};
