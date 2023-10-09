import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					bucak<span>studio</span>
				</h1>
				<p>
					Metaverse that take you to{" "}
					<span>WEB3</span>
				</p>
			</header>
		</div>
	);
}
