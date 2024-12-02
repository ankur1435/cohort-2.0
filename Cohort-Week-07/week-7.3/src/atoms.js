import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
});

export const jobskAtom = atom({
    key: "jobskAtom",
    default: 0
});

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const netoworkCountAtom = get(networkAtom);
        const jobsCountAtom = get(jobskAtom);
        const notificationsCountAtom = get(notificationsAtom);
        const messagingCountAtom = get(messagingAtom);
        return netoworkCountAtom + jobsCountAtom + notificationsCountAtom + messagingCountAtom;
    }
})