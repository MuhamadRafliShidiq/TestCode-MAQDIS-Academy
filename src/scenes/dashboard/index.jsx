import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const data = [
		{ id: 1, name: "Rafli", email: "rafli@example.com", kontak: "08123456789", posisi: "Admin", statuslamaran: "Lulus" },
		{ id: 2, name: "Kang Shidiq", email: "kang@example.com", kontak: "08123456789", posisi: "Manager", statuslamaran: "Lulus" },
		{ id: 3, name: "Kang Zidan", email: "zidan@example.com", kontak: "08123456789", posisi: "Staff", statuslamaran: "Tidak Lulus" },
	];

	return (
		<Box m="20px">
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography
					variant="h4"
					fontWeight="bold"
					color={colors.grey[100]}
				>
					Dashboard
				</Typography>
			</Box>

			{/* Tabel */}
			<Box
				mt="20px"
				p="20px"
				borderRadius="8px"
				backgroundColor={colors.primary[400]}
			>
				<Typography
					variant="h5"
					fontWeight="bold"
					color={colors.grey[100]}
					mb="10px"
				>
					User Data
				</Typography>
				<Box
					sx={{
						overflowX: "auto",
						"@media (max-width: 600px)": {
							fontSize: "12px", // Mengurangi ukuran font pada perangkat kecil
						},
					}}
				>
					<table
						style={{
							width: "100%",
							borderCollapse: "collapse",
							color: colors.grey[100],
						}}
					>
						<thead>
							<tr>
								<th
									style={{
										textAlign: "left",
										padding: "10px",
										borderBottom: `1px solid ${colors.grey[700]}`,
									}}
								>
									ID
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "10px",
										borderBottom: `1px solid ${colors.grey[700]}`,
									}}
								>
									Nama
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "10px",
										borderBottom: `1px solid ${colors.grey[700]}`,
									}}
								>
									Email
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "10px",
										borderBottom: `1px solid ${colors.grey[700]}`,
									}}
								>
									Kontak
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "10px",
										borderBottom: `1px solid ${colors.grey[700]}`,
									}}
								>
									Posisi
								</th>
								<th
									style={{
										textAlign: "left",
										padding: "10px",
										borderBottom: `1px solid ${colors.grey[700]}`,
									}}
								>
									Status Lamaran
								</th>
							</tr>
						</thead>
						<tbody>
							{data.map((user) => (
								<tr key={user.id}>
									<td
										style={{
											padding: "10px",
											borderBottom: `1px solid ${colors.grey[700]}`,
										}}
									>
										{user.id}
									</td>
									<td
										style={{
											padding: "10px",
											borderBottom: `1px solid ${colors.grey[700]}`,
										}}
									>
										{user.name}
									</td>
									<td
										style={{
											padding: "10px",
											borderBottom: `1px solid ${colors.grey[700]}`,
										}}
									>
										{user.email}
									</td>
									<td
										style={{
											padding: "10px",
											borderBottom: `1px solid ${colors.grey[700]}`,
										}}
									>
										{user.kontak}
									</td>
									<td
										style={{
											padding: "10px",
											borderBottom: `1px solid ${colors.grey[700]}`,
										}}
									>
										{user.posisi}
									</td>
									<td
										style={{
											padding: "10px",
											borderBottom: `1px solid ${colors.grey[700]}`,
										}}
									>
										{user.statuslamaran}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
