import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import styles from "../../styles/Clients.module.scss";

export default function Clients() {
    const clients = [
        {
            name: "Essential Personnel",
            logo: "/assets/images/essential_personnel_logo.png",
            desc: "EP is a holistic performance management and wellness solution purpose-built for the public sector",
            link: "https://essper.com",
        },
        {
            name: "Atlantic Avenue Mortgage",
            logo: "/assets/images/atlantic_avenue_mortgage.jpg",
            desc: "Lending solutions that take you home.",
            link: "https://atlanticavenuemortgage.com/",
        },
    ];

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [selectedClient, setSelectedClient] = useState<any>(null);

    return (
        <div
            className={styles.container}
            onClick={() => {
                setSelectedId(null);
                setSelectedClient(null);
            }}
        >
            {clients.map((client) => {
                return (
                    <motion.button
                        key={client.name}
                        className={styles.client}
                        layoutId={client.name}
                        onClick={() => {
                            setSelectedId(client.name);
                            setSelectedClient(client);
                        }}
                    >
                        {client.name}
                    </motion.button>
                );
            })}
            <AnimatePresence>
                {selectedId && (
                    <motion.div className={styles.selected} layoutId={selectedId}>
                        asdf
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
