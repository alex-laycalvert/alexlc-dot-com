import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useClients } from "../../hooks/clients";
import Client, { ClientInfo } from "./Client";

import styles from "../../styles/Clients.module.scss";

interface Props {
    clientBackground?: string;
}

export default function Clients({ clientBackground }: Props) {
    const clients = useClients();
    const [selectedClient, setSelectedClient] = useState<ClientInfo | null>(null);

    return (
        <div className={styles.clientsWrapper}>
            <h2 className={styles.clientsHeader}>Clients</h2>
            <hr className={styles.clientsDivider} />
            Here are the clients I have done work for in the past.
            <div className={styles.clients}>
                {clients.map((client) => {
                    if (client.id === selectedClient?.id) {
                        return <div key={"empty" + client.id} className={styles.empty}></div>;
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
        </div>
    );
}
