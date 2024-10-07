import React, { Suspense } from "react";

import styles from "../../styles/HOC/PagesLazyLoader.module.scss";
import { CircularProgress } from "@mui/material";

const PagesLazyLoader = (Component) => {
  return (
    <Suspense
      fallback={
        <div className={styles.loading_wrapper}>
          <CircularProgress />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};

export default PagesLazyLoader;
