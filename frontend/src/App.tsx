import styles from "./App.module.scss";
import { FC } from "react";
import MainMonitor from "./components/app/MainMonitor/MainMonitor";
import ControlButtons from "components/app/ControlButtons/ControlButtons";

const App: FC = () => {
	return (
		<div className={styles.app}>
			<div className={styles.flexContainer}>
				<ControlButtons style={{ width: "33.33333%", flex: "0 1 33.33333%" }} />
				<MainMonitor style={{ width: "66.66666%", flex: "0 0 66.66666%" }} />
			</div>
		</div>
	);
};

export default App;
