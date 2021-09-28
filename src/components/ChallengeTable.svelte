<script>
    import Sticker from "./ChallengeTable/Sticker.svelte";
    import ChallengeItem from "./ChallengeTable/ChallengeItem.svelte";

    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
</script>

<section class="challenge-table">
    <h2 class="sr-only">챌린지 스티커 표</h2>
    <div class="table-item-wrap">
        {#each days as day}
            <ChallengeItem {day} />
        {/each}
    </div>
    <Sticker />
</section>

<style></style>