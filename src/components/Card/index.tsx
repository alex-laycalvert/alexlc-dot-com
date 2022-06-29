import React from "react";

interface Props {
    title: string;
    content?: string;
    footer?: string;
    borderColor?: string;
    titleTextColor?: string;
    titleBgColor?: string;
    contentTextColor?: string;
    contentBgColor?: string;
    footerTextColor?: string;
    footerBgColor?: string;
}

const Card: React.FC<Props> = ({
    title,
    content,
    footer,
    borderColor,
    titleTextColor,
    titleBgColor,
    contentTextColor,
    contentBgColor,
    footerTextColor,
    footerBgColor,
}) => {
    return (
        <div>
            <h1>This is a test card</h1>
            title: {title}
            content: {content}
            footer: {footer}
            borderColor: {borderColor}
            titleTextColor: {titleTextColor}
            titleBgColor: {titleBgColor}
            contentTextColor: {contentTextColor}
            contentBgColor: {contentBgColor}
            footerTextColor: {footerTextColor}
            footerBgColor:
        </div>
    );
};

export default Card;
