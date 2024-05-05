import { CSSProperties, FC } from "react";
import styles from "./MainMonitor.module.scss";
import Stand3D from "components/utils/Stand3D/Stand3D";
import ScreenHome from "components/screen/ScreenHome/ScreenHome";
import ScreenPlay from "components/screen/ScreenPlay/ScreenPlay";
import useMainMonitorStore from "stores/useMainMonitorStore";

interface MainMonitorProps {
	style?: CSSProperties;
}

const MainMonitor: FC<MainMonitorProps> = ({ style }) => {
	const { actives } = useMainMonitorStore();

	return (
		<Stand3D
			style={style}
			zIndex3D={-1000}
		>
			<div className={styles.screenMonitor}>
				<div className={styles.screen}>
					<div className={styles.scrollingContent}>
						{actives.isHomeActive && <ScreenHome />}
						{actives.isPlayActive && <ScreenPlay />}
					</div>
				</div>
			</div>
		</Stand3D>
	);
};

export default MainMonitor;
