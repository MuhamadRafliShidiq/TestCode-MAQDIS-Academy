import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			p={2}
			sx={{
				flexWrap: "wrap", // Ensure responsiveness by wrapping content
				gap: 2, // Adding gap between elements
			}}
		>
			{/* SEARCH BAR */}
			<Box
				display="flex"
				backgroundColor={colors.primary[400]}
				borderRadius="3px"
				maxWidth="200px" // Maximum width for larger screens
				width="50%" // Full width on small screens
				mb={{ xs: 2, md: 0 }} // Add bottom margin on small screens
			>
				<InputBase
					sx={{ ml: 2, flex: 1 }}
					placeholder="Search"
				/>
				<IconButton
					type="button"
					sx={{ p: 1 }}
				>
					<SearchIcon />
				</IconButton>
			</Box>

			{/* ICONS */}
			<Box
				display="flex"
				alignItems="center"
				gap={2} // Add space between icons
				sx={{
					flexWrap: "wrap", // Ensure icons wrap on small screens
					justifyContent: "flex-end", // Align icons to the right
					width: "auto",
				}}
			>
				<IconButton onClick={colorMode.toggleColorMode}>{theme.palette.mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
