type Props = {
    id?: string;
    children: React.ReactNode;
    center?: boolean;
};

const PageSection: React.FC<Props> = ({ id, children, center = false }) => {
    return (
        <div
            id={id}
            className={`flex h-screen w-full flex-col ${
                center ? "items-center justify-center" : ""
            }`}
        >
            {children}
        </div>
    );
};

export default PageSection;
