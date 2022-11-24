import Image from "next/image";
import { v4 as uuid } from "uuid";
import Article from "../components/Article";

import styles from "../styles/Clients.module.scss";

export default function Clients() {
    const clients = [
        {
            name: "Essential Personnel",
            logo: "/assets/images/essential_personnel_logo.png",
            startDate: new Date("2022-06-15"),
        },
        {
            name: "Atlantic Avenue Mortgage",
            logo: "/assets/images/atlantic_avenue_mortgage_logo.jpg",
            startDate: new Date("2022-11-08"),
        },
    ];

    return (
        <Article>
            <div className={styles.container}>
                <p>Here are some of the clients and companies I&apos;ve worked with.</p>
                <div className={styles.clientsWrapper}>
                    <div className={styles.clients}>
                        {clients.map((client) => {
                            return (
                                <div key={uuid()} className={styles.client}>
                                    <Image
                                        className={styles.clientLogo}
                                        src={client.logo}
                                        alt="Client Logo"
                                        width={75}
                                        height={75}
                                    />
                                    <div className={styles.clientDetails}>
                                        <h3>{client.name}</h3>
                                        <div className={styles.clientStartDate}>
                                            Since {client.startDate.toLocaleDateString()}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Article>
    );
}
