import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const variantBase = defineStyle(() => {
	return {
		bg: "pink.500",
		color: "brown.500",
		fontFamily: "heading",
		_hover: {
			bg: "pink.600",
		},
	};
});

const variantYellow = defineStyle(() => {
	return {
		bg: "yellow.500",
		color: "brown.500",
		fontFamily: "heading",
		_hover: {
			bg: "yellow.600",
		},
	};
});

const variants = {
	base: variantBase,
	yellow: variantYellow,
};

const sizes = {
	md: defineStyle({
		h: "4rem",
		px: "2rem",
		borderRadius: "0",
	}),
};

export const buttonTheme = defineStyleConfig({
	variants,
	sizes,
	defaultProps: {
		variant: "base",
	},
});
