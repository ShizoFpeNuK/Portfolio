import Stand3D from "components/utils/Stand3D/Stand3D";
import styles from "./MainMonitor.module.scss";
import { CSSProperties, FC } from "react";

interface MainMonitorProps {
	style?: CSSProperties;
}

const MainMonitor: FC<MainMonitorProps> = ({ style }) => {
	return (
		<Stand3D
			style={style}
			zIndex3D={-1000}
		>
			<div className={styles.screenMonitor}>
				<div className={styles.screen}>
					<div className={styles.textBody}>
						<h1 className={styles.textHeader}>HOME PAGE</h1>
						<p className={styles.text}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien sed mi
							volutpat luctus. Aenean elementum est lorem, posuere tempus massa.
							<br />
							Nunc a volutpat massa. Nulla vitae diam sed velit vestibulum scelerisque in id risus.
							Nulla facilisi.
							<br />
							Morbi quam ante, tempor a augue nec, euismod interdum libero. Sed imperdiet imperdiet
							magna in tincidunt. Vestibulum interdum lorem vitae eros feugiat, sit amet tristique
							metus aliquet. Cras pellentesque felis augue, finibus tristique enim dictum a. Vivamus
							vehicula quam massa, ac consectetur odio interdum eu.
						</p>
					</div>
				</div>
			</div>
		</Stand3D>
	);
};

export default MainMonitor;
