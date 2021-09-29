import { writable, readable } from "svelte/store";

function createModalOpen() {
    const { subscribe, update } = writable(false);
    return {
        subscribe,
        handler: () => update(v => !v),
    }
}

function createStickerOpen() {
    const { subscribe, update } = writable(false);
    return {
        subscribe,
        handler: () => update(v => !v),
    }
}

function createData() {
    const { subscribe, set, update} = writable();
    // localStorage에 데이터 불러오기
    let data = JSON.parse(localStorage.getItem('data'));
        if (!("title" in data && "days" in data && Array.isArray(data.day))) {
            console.log('여기?')
        }
        else {
            data = {
                "title": "챌린지를 등록해주세요.",
                "days": Array(15).fill(0).map((e, i) => [i + 1, null])
            }
        }
    set(data);

    return {
        subscribe,
        setData: (title, day) => {
            const days = Array(day).fill(0).map((e, i) => [i + 1, null]);
            set({title, days});
        },
        setSticker: (day, stickerIdx) => update(v => {
            const { title, days } = v;
            days[day][1] = stickerIdx;
            return { title, days };
        })
    }
}

export const isModal = createModalOpen();
export const isSticker = createStickerOpen();
export const data = createData();
export const feelings = readable([
    ["신남", "http://drive.google.com/uc?export=view&id=17IDBY9fCejJ5nCqQcwK34pIqFgDe_fav"],
    ["기가막힘", "http://drive.google.com/uc?export=view&id=1VcOjsI56H5r210Q_8J0wHhQ89DOneZNy"],
    ["굿!", "http://drive.google.com/uc?export=view&id=1685GrdPc58lnuimssBKGozohZWlhVZAX"],
    ["(...)", "http://drive.google.com/uc?export=view&id=1Ygo1mXWWBeL6F_l9KHap9oH77Fdnxd57"]
]);