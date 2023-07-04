import "@/styles/globals.css";

type Props = {
    children: React.ReactNode;
};

export const metadata = {
    title: "Alex L-C",
    description: "All about me",
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body className="font-raleway">{children}</body>
        </html>
    );
}
