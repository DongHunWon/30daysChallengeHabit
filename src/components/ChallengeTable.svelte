<script>
    import Sticker from "./Sticker.svelte";

    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
</script>

<section class="challenge-table">
    <h2 class="sr-only">챌린지 스티커 표</h2>
    <div class="table-item-wrap">
        {#each days as day}
            <div class="table-item">{day}</div>
        {/each}
    </div>
    <Sticker />
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

    /* .table-item.selected {
        border: 2px solid #956BD9;
        color: #956BD9;
    } */

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

        /* .challenge-table .table-item:nth-child(5n) {
            margin: 0 0 10px 0;
        } */
    }
</style>