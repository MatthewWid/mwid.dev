"use client";

import {FocusEventHandler, useEffect, useRef, useState} from "react";
import Image from "next/image";
import {clsx} from "clsx";
import {roboto} from "@/assets/fonts/roboto";
import copy from "@/assets/images/icons/copy.svg";
import styles from "./email.module.scss";
import {email} from "./email.constants";

export const Email = () => {
	const [showCopiedText, setShowCopiedText] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(
		() => () => {
			clearTimeout(timerRef.current);
		},
		[]
	);

	const onClickCopy = () => {
		clearTimeout(timerRef.current);

		navigator.clipboard.writeText(email);

		setShowCopiedText(true);

		timerRef.current = setTimeout(() => {
			setShowCopiedText(false);
		}, 5000);
	};

	const onFocusInput: FocusEventHandler<HTMLInputElement> = (event) => {
		event.currentTarget.select();
	};

	return (
		<div className={styles.email}>
			<button
				title="Copy to clipboard"
				onClick={onClickCopy}
				className={styles.copy}
			>
				<Image src={copy} alt="Email icon" width={24} height={24} />
				<p
					className={clsx(
						styles["copy-text"],
						showCopiedText && styles["copy-text-show"],
						roboto.className
					)}
				>
					Copied!
				</p>
			</button>
			<input
				type="text"
				value={email}
				size={email.length}
				readOnly
				onFocus={onFocusInput}
				className={clsx(styles.input, roboto.className)}
			/>
		</div>
	);
};
