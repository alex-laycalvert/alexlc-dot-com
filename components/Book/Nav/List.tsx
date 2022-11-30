import { v4 as uuid } from "uuid";
import Item, { PageItem } from "./Item";

import styles from "../../../styles/Book.module.scss";

interface Props {
    pages: PageItem[];
    color: string;
    selectedColor: string;
    selectedBackground: string;
    turnToPage: (name: string) => void;
    currentPage?: string;
    expanded: boolean;
}

export default function List({
    pages,
    color,
    selectedColor,
    selectedBackground,
    turnToPage,
    currentPage,
    expanded,
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
                    turnToPage={turnToPage}
                    isCurrentPage={page.name === currentPage}
                    expanded={expanded}
                />
            ))}
        </ul>
    );
}
