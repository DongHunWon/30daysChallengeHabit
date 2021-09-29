<script>
    import { isModalOpen } from "../stores.js";
</script>

<section class="main-buttons">
    <h2 class="sr-only">메인 버튼 리스트</h2>
    <button type="button" class="setting-btn fill" on:click={isModalOpen.handler}>챌린지 설정하기</button>
    <div class="btn-right">
        <button type="button" class="save-btn">저장하기</button>
        <button type="button" class="share-btn">공유하기</button>
    </div>
</section>

<style>
    /* 메인 버튼 리스트 */
    .main-buttons {
        display: flex;
        justify-content: space-between;
        width: 446px;
    }

    /* 챌린지 설정하기 버튼 */
    .setting-btn {
        width: 140px;
    }

    /* 저장, 공유 버튼 */
    .save-btn, .share-btn {
        width: 96px;
    }

    .save-btn {
        margin-right: 12px;
    }

    @media all and (max-width: 480px) {
        .main-buttons {
            width: 322px;
        }

        .setting-btn {
            width: 120px;
        }

        .save-btn, .share-btn {
            width: 78px;
        }

        .save-btn {
            margin-right: 8px;
        }
    }
</style>