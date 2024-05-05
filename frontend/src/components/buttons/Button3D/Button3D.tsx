import { COLORS_BUTTON } from "utils/colors/colorsButton";
import { CSSProperties, FC, ReactNode } from "react";
import styles from "./Button3D.module.scss";
import classNames from "classnames";

interface Button3DProps {
	style?: CSSProperties;
	bgColor?: COLORS_BUTTON;
	children?: ReactNode;
	zIndex?: number | string;
	zIndex3D?: number | string;
	ariaLabel?: string;
	active?: boolean;
}

const Button3D: FC<Button3DProps> = ({
	children,
	style,
	bgColor,
	zIndex,
	zIndex3D,
	ariaLabel,
	active,
}) => {
	return (
		<div
			className={classNames(styles.container, active ? styles.activeButton : "")}
			style={style}
			aria-label={ariaLabel}
			role="button"
		>
			<div
				className={classNames(styles.stand, styles[`${bgColor}`])}
				style={{
					zIndex: zIndex ?? 0,
				}}
			>
				<div className={classNames(styles.shine, styles[`${bgColor}`])} />
				<div>{children}</div>
			</div>
			<div
				className={classNames(styles.stand3D, styles[`${bgColor}`])}
				style={{ zIndex: zIndex3D ?? 0 }}
			/>
		</div>
	);
};

export default Button3D;
