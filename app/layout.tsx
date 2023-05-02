export const runtime = 'edge';
export const preferredRegion = 'fra1';

export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
}
