function talksAbout(node, string){
    if (node.nodeType == Node.ELEMENT_NODE){
        for (let child of node.childeNodes){
            if (talksAbout(child,string)){
                return true;

            }
        }
        return false;
    } else if (node.nodeType == Node.TEXT_NODE){
        return node.nodeValue.indexOf(string) >-1;
    }
}

console.log(talksAbout(document.body, "book"));
//true;

<body>
<p>My ostrich Gertrude:</p>
<p>
    <img id="gertrude" src="ostrich.png"></img>
</p>

<script>
    let ostrich = document.getElementById("gertrude");
    console.log(ostrich.src);
</script>

<h1>Mountains</h1>

<div id="mountains"></div>

</body>
