const DEFAULT_NUMBER_OF_CLIENTS = 10;

interface Options {
    test?: boolean;
    numberOfClients?: number;
}

export function useClients(options?: Options): ClientInfo[] {
    // TODO: Make this pull from a database that can be added to externally
    let clients: ClientInfo[] = [];
    if (options?.test) {
        let numberOfClients = options?.numberOfClients;
        if (!numberOfClients) {
            numberOfClients = DEFAULT_NUMBER_OF_CLIENTS;
        }
        for (let i = 0; i < numberOfClients; i++) {
            clients.push({
                id: `${i}`,
                name: "Essential Personnel",
                logo: "/assets/images/essential_personnel_logo.png",
                desc: "EP is a holistic performance management and wellness solution purpose-built for the public sector",
                link: "https://essper.com",
            });
        }
    } else {
        clients = [
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
    }
    return clients;
}
