import { FC } from "react";
import styles from "./ScreenHome.module.scss";
import ScreenContainer from "../ScreenContainer/ScreenContainer";

const ScreenHome: FC = () => {
	return (
		<ScreenContainer>
			<h1 className={styles.header}>HOME PAGE</h1>
			<p className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec sapien sed mi
				volutpat luctus. Aenean elementum est lorem, posuere tempus massa.
				<br />
				Nunc a volutpat massa. Nulla vitae diam sed velit vestibulum scelerisque in id risus. Nulla
				facilisi.
				<br />
				Morbi quam ante, tempor a augue nec, euismod interdum libero. Sed imperdiet imperdiet magna
				in tincidunt. Vestibulum interdum lorem vitae eros feugiat, sit amet tristique metus
				aliquet. Cras pellentesque felis augue, finibus tristique enim dictum a. Vivamus vehicula
				quam massa, ac consectetur odio interdum eu.
				<br />
				Morbi quam ante, tempor a augue nec, euismod interdum libero. Sed imperdiet imperdiet magna
				in tincidunt. Vestibulum interdum lorem vitae eros feugiat, sit amet tristique metus
				aliquet. Cras pellentesque felis augue, finibus tristique enim dictum a. Vivamus vehicula
				quam massa, ac consectetur odio interdum eu.in tincidunt. Vestibulum interdum lorem vitae eros feugiat, sit amet tristique metus
				aliquet. Cras pellentesque felis augue, finibus tristique enim dictum a. Vivamus vehicula
				quam massa, ac consectetur odio interdum eu.
			</p>
		</ScreenContainer>
	);
};

export default ScreenHome;
