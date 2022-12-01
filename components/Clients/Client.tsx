import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as icons from "../icons";

import styles from "../../styles/Clients.module.scss";

export interface ClientInfo {
    id: string;
    name: string;
    logo: string;
    desc: string;
    link: string;
}

interface Props {
    client: ClientInfo;
    selected: boolean;
    onClick?: (e: React.MouseEvent) => void;
    close?: () => void;
    background?: string;
}

export default function Client({ client, onClick, close, selected, background }: Props) {
    return (
        <motion.div
            className={`${styles.client} ${selected ? styles.selected : ""}`}
            layoutId={client.id}
            onClick={onClick}
            style={{
                background,
            }}
        >
            <div className={styles.clientHeaderWrapper}>
                <Image
                    className={styles.clientLogo}
                    src={client.logo}
                    alt={client.name + " Logo"}
                    width={selected ? 80 : 60}
                    height={selected ? 80 : 60}
                />
                <h3 className={styles.clientName}>{client.name}</h3>
                {selected && (
                    <>
                        <Link
                            className={styles.clientLink}
                            href={client.link}
                            target="_blank"
                            onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                if (close) {
                                    close();
                                }
                            }}
                        >
                            Visit
                        </Link>
                        <button
                            className={styles.closeButton}
                            onClick={() => {
                                if (close) {
                                    close();
                                }
                            }}
                        >
                            <icons.CloseX />
                        </button>
                    </>
                )}
            </div>
            {selected && (
                <>
                    <hr className={styles.clientDivider} />
                    <p className={styles.clientDesc}>{client.desc}</p>
                </>
            )}
        </motion.div>
    );
}
