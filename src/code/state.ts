import React from "react";
import { getWishes } from "./data";

export interface IWish {
	id: number;
	title: string;
	text: string;
	mediaType: string;
	source?: string;
	status: ElementStatus;
}

export enum ElementStatus {
	AvailableForViewing,
	Locked,
}

export function createState(inParentComponent: React.ReactNode) {
	return {
		wishesObject: null,

		wishes: [],

		selectedWish: null,

		headlines: {
			en: "Ilia's Science, Art and Wisdom Advent Calendar",
			bg: "Календар до Коледа с наука, изкуство и мъдрости",
		},

		headline: "",

		lang: "en",

		selectWish: function (inID: number, event: React.MouseEvent) {
			let target = event.target as HTMLElement;
			if (inID == -1 && target.className != "overlay") {
				event.stopPropagation();
				return;
			}

			let selectedWish = null;
			const wishes = this.state.wishes as IWish[];
			if (inID != -1) {
				selectedWish = wishes.filter((wish) => wish.id == inID)[0];
			}

			this.setState({ selectedWish: selectedWish });
		}.bind(inParentComponent),

		loadWishes: function () {
			const wishesObj = getWishes();
			this.setState((state: any) => {
				return {
					wishesObject: wishesObj,
					wishes: wishesObj[<"en" | "bg">this.state.lang],
					headline: state.headlines[<"en" | "bg">this.state.lang],
				};
			});
		}.bind(inParentComponent),

		setLang: function (inLang: "en" | "bg") {
			this.setState((state: any) => {
				console.log(state.headlines[<"en" | "bg">inLang]);
				return {
					lang: inLang,
					wishes: state.wishesObject[<"en" | "bg">inLang],
					headline: state.headlines[<"en" | "bg">inLang],
				};
			});
		}.bind(inParentComponent),
	};
}

export class Wish implements IWish {
	id: number;
	title: string;
	text: string;
	mediaType: "image" | "video";
	source: string | undefined;
	status: ElementStatus;

	constructor(id: number, text: string, mediaType: "image" | "video", title: string, source?: string) {
		this.id = id;
		this.text = text;
		this.title = title;
		this.mediaType = mediaType;
		this.source = source;
		this.status = this.setStatus();
	}

	setStatus(): ElementStatus {
		let date = new Date();

		if (date.getFullYear() > 2020) return ElementStatus.AvailableForViewing;
		if (date.getMonth() == 11 && this.id < date.getDate()) return ElementStatus.AvailableForViewing;
		return ElementStatus.Locked;
	}
}
