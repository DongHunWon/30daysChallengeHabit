<script>
    import Sticker from "./Sticker.svelte";
    import { data, isSticker, feelings } from "../stores.js";

    let selectedItem = -1;
    let stickerBoxPosition = {top: 0, left: 0};

    // table item 클릭 이벤트
    function itemClick(e) {
        const select = e.target.closest("div.table-item");
        if (select) {
            if (selectedItem !== select.dataset.id) {
                // 전과 다른 item을 선택했을 시 스티커창 표시
                if (!$isSticker) isSticker.handler();
                stickerPosition(select);
                selectedItem = select.dataset.id;
            } else {
                // 똑같은 item을 선택했을 시 스티커창 제거
                isSticker.handler();
                select.classList.remove("selected");
                selectedItem = -1;
            }
        }
    }

    // 스티커창 위치 조정
    function stickerPosition(selectItem) {
        const idx = selectItem.dataset.id % 5;
        const tableItemWidth = selectItem.offsetWidth + parseInt(window.getComputedStyle(selectItem).getPropertyValue("margin-bottom"), 10);
        stickerBoxPosition.top = `${tableItemWidth + selectItem.offsetTop}px`;
        stickerBoxPosition.left = idx < 1 ? `${selectItem.offsetLeft}px` : `${selectItem.offsetLeft - selectItem.offsetWidth * idx - selectItem.style.marginTop}px`;
    }

    // 스티커 클릭 이벤트
    function stickerClick(e) {
        const select = e.target.closest("li");
        if (select && selectedItem !== -1) {
            data.setSticker(selectedItem, select.dataset.id);
            isSticker.handler();
        }
    }
</script>

<section class="challenge-table">
    <h2 class="sr-only">챌린지 스티커 표</h2>
    <div class="table-item-wrap" on:click={itemClick}>
        {#each $data.days as day, i}
            <div class="table-item {i === Number(selectedItem) ? "selected" : ""}" data-id={i} >
                {#if day[1]}
                    <img src={$feelings[day[1]][1]} alt={$feelings[day[1]][0]} />
                {:else}
                    {day[0]}
                {/if}
            </div>
        {/each}
    </div>
    <Sticker on:click={stickerClick} {...stickerBoxPosition} />
</section>

<style>
    /* 챌린지 테이블 */
    .challenge-table {
        position: relative;
        width: 446px;
        background-color: #FFF;
        border-radius: 20px;
        box-sizing: border-box;
        padding: 24px 24px 12px;
        box-shadow: 0px 0px 8px rgba(149, 107, 217, 0.38);
        margin-right: 0;
        margin-bottom: 40px;
    }

    /* 챌린지 테이블 wrapper */
    .table-item-wrap {
        display: flex;
        flex-wrap: wrap;
    }

    /* 날짜와 스티커가 들어갈 div */
    .table-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        box-sizing: border-box;
        background-color: #FFE973;
        border-radius: 15px;
        margin: 0 12px 12px 0;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
    }

    .table-item.selected {
        border: 2px solid #956BD9;
        color: #956BD9;
    }

    /* table-item 중 5의 배수 자식들은 margin-right=0 */
    .challenge-table .table-item:nth-child(5n) {
        margin: 0 0 12px 0;
    }

    @media all and (max-width: 480px) {
        .challenge-table {
            width: 322px;
            padding: 16px 16px 6px;
            margin-bottom: 33px;
        }

        .table-item {
            width: 50px;
            height: 50px;
            margin: 0 10px 10px 0;
            font-size: 14px;
        }

        .challenge-table .table-item:nth-child(5n) {
            margin: 0 0 10px 0;
        }
    }
</style>