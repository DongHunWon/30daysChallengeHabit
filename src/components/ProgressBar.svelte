<script>
    import { data } from "../stores.js";

    $: stickerCnt = $data.days.reduce((acc, cur) => {
        if (cur[1]) acc[0]++;
        return acc;
    }, [0, $data.days.length]);
    $: barStyle = `--bar-width: ${stickerCnt[0] / stickerCnt[1] * 100}%`
</script>

<section class="progress" style={barStyle}>
    <h2 class="sr-only">진행 상황 그래프</h2>
    <div class="progress-bar-cont">
        <div class="progress-bar"></div>
    </div>
    <div class="progress-success">성공! 🎉</div>
</section>

<style>
    /* 상태바 */
    .progress {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
    }

    /* 상태바 컨테이너 */
    .progress-bar-cont {
        width: 377px;
        height: 30px;
        border-radius: 20px;
        background-color: #FFF;
        box-sizing: border-box;
        padding: 3px 4px;
        margin-right: 12px;
    }

    /* 상태바 */
    /* progress-bar width는 진행상황에 맞춰서 변경 */
    .progress-bar {
        width: var(--bar-width, 0%);
        height: 100%;
        background: linear-gradient(270deg, #956BD9 0%, #FFE973 101.15%);
        border-radius: 20px;
    }

    /* 성공 문구 */
    .progress-success {
        font-size: 14px;
        font-weight: 700;
    }

    @media all and (max-width: 480px) {
        .progress {
            margin-bottom: 20px;
        }

        .progress-bar-cont {
            width: 261px;
            height: 20px;
            padding: 3px;
            margin-right: 8px;
        }

        .progress-success {
            font-size: 13px;
        }
    }
</style>