<script></script>

<section class="setting-modal">
    <div class="modal-wrap">
        <header>
            <h2>챌린지 설정</h2>
        </header>
        <form action="">
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
                        <input type="radio" name="challenge-term" id="30">
                        <label for="30" value="30">30일</label>
                    </div>
                </div>
            </article>
            <section class="modal-buttons">
                <h2 class="sr-only">모달 버튼 리스트</h2>
                <button type="button" class="cancel-btn">취소하기</button>
                <button type="submit" class="save-btn fill">저장하기</button>
            </section>
        </form>
    </div>
</section>