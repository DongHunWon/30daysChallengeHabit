<script>
    import Visitors from "./components/Visitors.svelte";
    import ProgressBar from "./components/ProgressBar.svelte";
    import ChallengeTable from "./components/ChallengeTable.svelte";
    import MainBtns from "./components/MainBtns.svelte";
    import SettingModal from "./components/SettingModal.svelte";
    import { isModal, data } from "./stores.js";

    $: localStorage.setItem('data', JSON.stringify($data));
</script>

<header class="header">
    <Visitors />
</header>
<main class="main-wrap">
    <div class="main-contents">
        <header class="contents-header">
            <h2>나의 챌린지</h2>
            <h1 class="challenge-title">{$data.title}</h1>
        </header>
        <article>
            <ProgressBar />
            <ChallengeTable />
            <MainBtns />
        </article>
    </div>
</main>

{#if $isModal}
    <SettingModal />
{/if}


<style>
    /* 헤더 */
    .header {
        background-color: #956BD9;
        height: 403px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        display: flex;
        justify-content: center;
    }

    /* 메인 컨텐츠 */
    .main-wrap {
        position: absolute;
        top: 116px;
        width: 100%;
    }

    /* 메인 컨텐츠 감싸는 요소 */
    .main-contents {
        width: 500px;
        margin: 0 auto;
    }


    /* 메인 컨텐츠 - 헤더 */
    .contents-header {
        text-align: center;
        margin-bottom: 90px;
    }

    .contents-header h2 {
        font-size: 18px;
        color: #FFF282;
        margin-bottom: 30px;
    }

    /* 챌린지 이름 */
    .challenge-title {
        font-size: 36px;
        font-weight: 700;
    }

    /* 메인 컨텐츠 - article */
    .main-contents article {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media all and (max-width: 480px) {
        .header {
            height: 267px;
        }

        .main-contents {
            top: 65px;
        }

        .contents-header {
            margin-bottom: 59px;
        }

        .contents-header h2 {
            font-size: 12px;
            margin-bottom: 16px;
        }

        .challenge-title {
            font-size: 18px;
        }
    }
</style>