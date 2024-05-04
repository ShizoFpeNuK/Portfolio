import { COLORS_BUTTON } from "utils/colors/colorsButton";
import { CSSProperties, FC, MouseEventHandler } from "react";
import styles from "./ControlButtons.module.scss";
import Stand3D from "components/utils/Stand3D/Stand3D";
import Button3D from "components/buttons/Button3D/Button3D";

interface ControlButtonsProps {
	style?: CSSProperties;
}

const ControlButtons: FC<ControlButtonsProps> = ({ style }) => {
	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		// const element = e.target as HTMLElement;

		// if (element.tagName === "BUTTON") {
		// 	console.log(element?.getAttribute("aria-label") + "1");
		// 	return;
		// }

		// const parent = element.parentElement;

		// if (parent!.tagName === "BUTTON") {
		// 	console.log(parent!.getAttribute("aria-label") + "2");
		// 	return;
		// }

		// console.log(element);
		// console.log(parent);
	};

	return (
		<Stand3D
			style={style}
			zIndex3D={-1000}
		>
			<div
				className={styles.container}
				onClick={handleClick}
			>
				<Button3D
					zIndex3D={-900}
					bgColor={COLORS_BUTTON.GREEN}
					ariaLabel="home"
				>
					Play
				</Button3D>
				<Button3D
					zIndex3D={-900}
					bgColor={COLORS_BUTTON.YELLOW}
					ariaLabel="play"
				>
					Watch
				</Button3D>
			</div>
		</Stand3D>
	);
};

export default ControlButtons;
