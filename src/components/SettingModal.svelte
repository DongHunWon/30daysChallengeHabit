<script>
    import { isModal, data } from "../stores.js";

    function onSubmit(e) {
        e.preventDefault();
        const title = e.target["chellenge-name"].value;
        const challengeDay = e.target["challenge-term"].value;
        if (title.trim() === "") alert("챌린지 이름을 입력하세요.");
        else if (challengeDay === "") alert("챌린지 기간을 선택해주세요.");
        else {
            data.setData(title, Number(challengeDay));
            isModal.handler();
        }
    }
    
</script>

<section class="setting-modal">
    <div class="modal-wrap">
        <header>
            <h2>챌린지 설정</h2>
        </header>
        <form on:submit={onSubmit}>
            <article class="input">
                <div class="input-name">
                    <h3 class="input-title">챌린지 이름</h3>
                    <input type="text" name="chellenge-name" id="chellenge-name">
                </div>
                <div class="input-term">
                    <h3 class="input-title">챌린지 기간</h3>
                    <div class="input-wrap">
                        <input type="radio" name="challenge-term" id="15" value="15">
                        <label for="15">15일</label>
                        <input type="radio" name="challenge-term" id="25" value="25">
                        <label for="25">25일</label>
                        <input type="radio" name="challenge-term" id="30" value="30">
                        <label for="30">30일</label>
                    </div>
                </div>
            </article>
            <section class="modal-buttons">
                <h2 class="sr-only">모달 버튼 리스트</h2>
                <button type="button" class="cancel-btn" on:click={isModal.handler}>취소하기</button>
                <button type="submit" class="save-btn fill">저장하기</button>
            </section>
        </form>
    </div>
</section>

<style>
    /* 챌린지 수정 - 모달창 */
    .setting-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #4F4F4F;
        background-color: rgba(0, 0, 0, 0.2);
    }

    /* 챌린지 수정 모달 wrapper */
    .modal-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 426px;
        background-color: #FFF;
        box-sizing: border-box;
        padding: 28px 25px;
        border-radius: 20px;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    }

    .setting-modal header h2 {
        font-size: 16px;
        font-weight: 700;
        padding-bottom: 20px;
        text-align: center;
    }

    /* input */
    .input {
        padding: 22px 0;
        border-top: 1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
        margin-bottom: 22px;
    }

    /* 챌린지 이름 설정하기 */
    .input-name {
        margin-bottom: 20px;
    }

    /* 데이터 제목 스타일 */
    .input-title {
        font-size: 14px;
        margin-bottom: 10px;
    }

    /* 챌린지 이름 input 스타일 */
    .input-name input[type=text] {
        width: 100%;
        height: 36px;
        border: 1px solid #BDBDBD;
        border-radius: 5px;
        box-sizing: border-box;
        padding: 0 10px;
    }

    /* 챌린지 기간 설정 스타일 */
    /* radio 버튼을 보이지 않게 설정 */
    .input-term input[type=radio] {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    /* label 스타일 */
    .input-term input[type=radio] + label {
        display: inline-block;
        width: 112px;
        height: 36px;
        padding: 11px 0;
        border-radius: 5px;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
    }

    /* radio 버튼을 클릭했을 때 label 스타일 */
    .input-term input[type=radio]:checked + label {
        border: none;
        border-radius: 5px;
        background-color: #828282;
        color: #FFF;
    }

    /* 버튼 정렬을 위한 input wrapper */
    .input-wrap {
        display: flex;
        justify-content: space-between;
    }

    /* 챌린지 설정 모달 - 버튼 */
    .modal-buttons {
        display: flex;
        justify-content: space-between;
    }

    /* 취소 버튼 */
    .modal-buttons .cancel-btn {
        width: 132px;
    }

    /* 저장 버튼 */
    .modal-buttons .save-btn {
        width: 226px;
    }

    @media all and (max-width: 480px) {
        .setting-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            color: #4F4F4F;
            background-color: rgba(0, 0, 0, 0.2);
        }

        .modal-wrap {
            width: 330px;
            padding: 26px 25px;
        }

        .setting-modal header h2 {
            font-size: 14px;
            padding-bottom: 22px;
        }

        .input-title {
            font-size: 12px;
            margin-bottom: 10px;
        }

        .input-term input[type=radio] + label {
            width: 86px;
            padding: 12px 0;
            font-size: 12px;
        }

        .modal-buttons .cancel-btn {
            width: 96px;
        }

        .modal-buttons .save-btn {
            width: 176px;
        }
    }
</style>