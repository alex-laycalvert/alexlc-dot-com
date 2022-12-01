import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Client, { ClientInfo } from "./Client";

import styles from "../../styles/Clients.module.scss";

interface Props {
    clientBackground?: string;
}

export default function Clients({ clientBackground }: Props) {
    const clients: ClientInfo[] = [
        {
            id: "0",
            name: "Essential Personnel",
            logo: "/assets/images/essential_personnel_logo.png",
            desc: "EP is a holistic performance management and wellness solution purpose-built for the public sector",
            link: "https://essper.com",
        },
        {
            id: "1",
            name: "Atlantic Avenue Mortgage",
            logo: "/assets/images/atlantic_avenue_mortgage_logo.jpg",
            desc: "Lending solutions that take you home.",
            link: "https://atlanticavenuemortgage.com/",
        },
    ];

    const [selectedClient, setSelectedClient] = useState<ClientInfo | null>(null);

    return (
        <div className={styles.container}>
            <h2 className={styles.clientsHeader}>Clients</h2>
            <AnimateSharedLayout>
                <div className={styles.clients}>
                    {clients.map((client) => {
                        if (client.id === selectedClient?.id) {
                            return <div key={'empty' + client.id} className={styles.empty}></div>;
                        }
                        return (
                            <Client
                                key={client.id}
                                client={client}
                                onClick={(_e) => {
                                    setSelectedClient(client);
                                }}
                                selected={false}
                                background={clientBackground}
                            />
                        );
                    })}
                </div>
                <AnimatePresence>
                    {selectedClient && (
                        <div
                            className={styles.selectedClientWrapper}
                            onClick={(e: any) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setSelectedClient(null);
                            }}
                        >
                            <Client
                                client={selectedClient}
                                selected={true}
                                background={clientBackground}
                                onClick={(e) => e.stopPropagation()}
                                close={() => setSelectedClient(null)}
                            />
                        </div>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    );
}
