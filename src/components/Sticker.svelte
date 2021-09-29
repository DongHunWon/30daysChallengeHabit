<script>
    import { feelings, isSticker, data } from "../stores.js";
    import { afterUpdate } from "svelte";

    export let top;
    export let left;

    afterUpdate(() => {
        const selectSticker = document.querySelector(".select-sticker");
        selectSticker.style.top = top;
        selectSticker.style.left = left;
    });
</script>

<div class="select-sticker {$isSticker ? "active" : ""}">
    <h3>"오늘의 나는??</h3>
    <ul class="sticker-list" on:click>
        {#each $feelings as feeling, i}
            <li class="sticker-item" data-id={i}>
                <img src={feeling[1]} alt="sticker">
                <span>{feeling[0]}</span>
            </li>
        {/each}
    </ul>
</div>

<style>
    /* 스티커 선택 모달 */
    .select-sticker {
        display: none;
        position: absolute;
        /* left, top 값은 js에서 변경함 */
        /* left: 24px;
        top: 106px; */
        width: 318px;
        box-sizing: border-box;
        padding: 15px 16px 14px;
        background-color: #FFF;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        z-index: 1;
    }

    /* table-item 클릭시 active 클래스 추가 */
    .select-sticker.active {
        display: block;
    }

    .select-sticker h3 {
        color: #956BD9;
        font-size: 13px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 6px;
    }

    /* 스티커 리스트 */
    .sticker-list {
        display: flex;
        justify-content: space-between;
        color: #828282;
        font-size: 12px;
    }

    /* 스티커 아이템 */
    .sticker-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    /* 스티커 이미지 */
    .select-sticker img {
        width: 60px;
        height: 60px;
        margin-bottom: 5px;
    }

    @media all and (max-width: 480px) {
        .select-sticker {
            width: 236px;
        }

        .select-sticker h3 {
            font-size: 10px;
        }

        .sticker-list {
            font-size: 10px;
        }

        .select-sticker img {
            width: 42px;
            height: 42px;
        }
    }
</style>