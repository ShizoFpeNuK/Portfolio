import { COLORS_BUTTON } from "utils/colors/colorsButton";
import { CSSProperties, FC, MouseEventHandler } from "react";
import styles from "./ControlButtons.module.scss";
import Stand3D from "components/utils/Stand3D/Stand3D";
import Button3D from "components/buttons/Button3D/Button3D";
import useMainMonitorStore from "stores/useMainMonitorStore";

const enum BUTTON_LABEL {
	HOME = "home",
	PLAY = "play",
}

interface ControlButtonsProps {
	style?: CSSProperties;
}

const ControlButtons: FC<ControlButtonsProps> = ({ style }) => {
	const { actives, updateActive } = useMainMonitorStore();

	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		let element = e.target as HTMLElement;

		if (element.classList[0] !== styles.container) {
			while (element.role !== "button") {
				element = element.parentElement!;
			}

			if (element!.getAttribute("aria-label") === BUTTON_LABEL.HOME && !actives.isHomeActive) {
				updateActive("isHomeActive");
			}
			if (element!.getAttribute("aria-label") === BUTTON_LABEL.PLAY && !actives.isPlayActive) {
				updateActive("isPlayActive");
				return;
			}
		}
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
					ariaLabel={BUTTON_LABEL.HOME}
					active={actives.isHomeActive}
				>
					Home
				</Button3D>
				<Button3D
					zIndex3D={-900}
					bgColor={COLORS_BUTTON.YELLOW}
					ariaLabel={BUTTON_LABEL.PLAY}
					active={actives.isPlayActive}
				>
					Play
				</Button3D>
			</div>
		</Stand3D>
	);
};

export default ControlButtons;
