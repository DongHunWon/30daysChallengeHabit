<script>
    import Visitors from "./components/Visitors.svelte";
    import ProgressBar from "./components/ProgressBar.svelte";
    import ChallengeTable from "./components/ChallengeTable.svelte";
    import MainBtns from "./components/MainBtns.svelte";
    import SettingModal from "./components/SettingModal.svelte";
</script>

<header class="header">
    <Visitors />
</header>
<main>
    <header class="contents-header">
        <h2>나의 챌린지</h2>
        <h1 class="challenge-title">제주코딩베이스캠프 강의 완강하기</h1>
    </header>
    <article>
        <ProgressBar />
        <ChallengeTable />
        <MainBtns />
    </article>
</main>
<SettingModal />


<style>
</style>