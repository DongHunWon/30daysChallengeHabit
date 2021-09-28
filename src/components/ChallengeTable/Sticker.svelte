<script>
    const feelings = [
        ["신남", "http://drive.google.com/uc?export=view&id=17IDBY9fCejJ5nCqQcwK34pIqFgDe_fav"],
        ["기가막힘", "http://drive.google.com/uc?export=view&id=1VcOjsI56H5r210Q_8J0wHhQ89DOneZNy"],
        ["굿!", "http://drive.google.com/uc?export=view&id=1685GrdPc58lnuimssBKGozohZWlhVZAX"],
        ["(...)", "http://drive.google.com/uc?export=view&id=1Ygo1mXWWBeL6F_l9KHap9oH77Fdnxd57"]
    ]
</script>

<div class="select-sticker">
    <h3>"오늘의 나는??</h3>
    <ul class="sticker-list">
        {#each feelings as feeling}
            <li class="sticker-item">
                <img src={feeling[1]} alt="sticker">
                <span>{feeling[0]}</span>
            </li>
        {/each}
    </ul>
</div>