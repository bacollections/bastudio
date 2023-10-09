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

			<div className={styles.buttons_container}>
				<a
					target={"_blank"}
					href={"https://createweb3dapp.alchemy.com/#components"}
				>
					<div className={styles.button}>
						{/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
						<p>Canim Karim</p>
					</div>
				</a>
		</div>
	);
}
