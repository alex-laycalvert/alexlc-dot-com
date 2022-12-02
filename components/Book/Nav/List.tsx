import { v4 as uuid } from "uuid";
import Item, { PageItem } from "./Item";

import styles from "../../../styles/Book.module.scss";

interface Props {
    pages: PageItem[];
    color: string;
    selectedColor: string;
    selectedBackground: string;
    currentPage?: string;
    expanded: boolean;
    onNavigate: () => void;
}

export default function List({
    pages,
    color,
    selectedColor,
    selectedBackground,
    currentPage,
    expanded,
    onNavigate
}: Props) {
    return (
        <ul className={styles.navItemList}>
            {pages.map((page) => (
                <Item
                    key={uuid()}
                    item={page}
                    color={color}
                    selectedColor={selectedColor}
                    selectedBackground={selectedBackground}
                    isCurrentPage={page.name === currentPage}
                    expanded={expanded}
                    onNavigate={onNavigate}
                />
            ))}
        </ul>
    );
}
