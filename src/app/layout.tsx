import "./globals.css";

type Props = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
    return (
        <html>
            <body className="h-screen w-full font-raleway">{children}</body>
        </html>
    );
};

export default RootLayout;
