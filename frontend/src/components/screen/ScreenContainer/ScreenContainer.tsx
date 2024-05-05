import { FC, ReactNode } from "react";
import styles from "./ScreenContainer.module.scss";

interface ScreenContainerProps {
	children: ReactNode;
}

const ScreenContainer: FC<ScreenContainerProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default ScreenContainer;
