import { writable } from "svelte/store";

function createisModalOpen() {
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
    try {
        if (!("title" in data && "days" in data && Array.isArray(data.day))) {
            throw new Error();
        }
    } catch {
        data = {
            "title": "챌린지를 등록해주세요.",
            "days": Array(15).fill(0).map((e, i) => [i + 1, null])
        }
    }
    set(data);
    return {
        subscribe,
        dataSet: (data) => set(data),
    }
}

export const isModalOpen = createisModalOpen();
export const data = createData();