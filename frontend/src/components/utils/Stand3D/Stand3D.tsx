import styles from "./Stand3D.module.scss";
import { CSSProperties, FC, ReactNode } from "react";

interface Stand3DProps {
	style?: CSSProperties;
	children?: ReactNode;
	zIndex?: number | string;
	zIndex3D?: number | string;
}

const Stand3D: FC<Stand3DProps> = ({ children, style, zIndex, zIndex3D }) => {
	return (
		<div
			className={styles.container}
			style={style}
		>
			<div
				className={styles.stand}
				style={{ zIndex: zIndex ?? 0 }}
			>
				{children}
			</div>
			<div
				className={styles.stand3D}
				style={{ zIndex: zIndex3D ?? 0 }}
			/>
		</div>
	);
};

export default Stand3D;
