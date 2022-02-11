var yourName = prompt(`Enter your name:`);
var lovedPersonName = prompt(`Enter his/her name:`);

var lovecalc = Math.random() * 100;
var lovecalc = Math.floor(lovecalc) + 1;
if (yourName.length <= 2 || lovedPersonName.length <= 2) {
    alert(`Enter a valid name`);
    window.location.reload();
} else {
    document.querySelector("h1").innerHTML = "Hello, " + yourName;
    if (lovecalc <= 10) {
        alert(`You 2 are like oil and water`);
        alert(`because its only ` + lovecalc + ` %`);
        document.getElementById("leadtext").innerHTML =
            `Dr. Love thinks a relationship might work out between ` +
            yourName +
            ` and ` +
            lovedPersonName +
            `, but the chance is very small. A successful relationship is possible, but you both have to work on it. Do not sit back and think that it will all work out fine, because it might not be working out the way you wanted it to. Spend as much time with each other as possible. Again, the chance of this relationship working out is very small, so even when you do work hard on it, it still might not work out.`;
    } else if (lovecalc <= 30) {
        alert(`Too hard`);
        alert(`because its only ` + lovecalc + ` %`);
        document.getElementById("leadtext").innerHTML =
            `The chance of a relationship working out between ` +
            yourName +
            ` and ` +
            lovedPersonName +
            ` is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.`;
    } else if (lovecalc <= 60) {
        alert(
            `you have to confess your love to him/her, Maybe he/she also love you also but you don't actually know 😊`
        );
        alert(`because its only ` + lovecalc + ` %`);
        document.getElementById("leadtext").innerHTML =
            `The chance of a relationship working out between ` +
            yourName +
            ` and ` +
            lovedPersonName +
            ` is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.`;
    } else if (lovecalc <= 80) {
        alert(`There are some possibility but not sure.Work Hard`);
        alert(`because its ` + lovecalc + ` %`);
        document.getElementById("leadtext").innerHTML =
            `The chance of a relationship working out between ` + yourName +
            ` and ` +
            lovedPersonName +
            ` is not very big, but a relationship is very well possible, if the two of you really want it to, and are prepared to make some sacrifices for it. You'll have to spend a lot of quality time together. You must be aware of the fact that this relationship might not work out at all, no matter how much time you invest in it.`;
    }
    if (lovecalc > 80) {
        alert(
            `I'm totally sure that if you two try a little bit- it will be like cherry blossom👩‍❤️‍💋‍👩`
        );
        alert(`because your love possibility is ` + lovecalc + "%");
        document.getElementById("leadtext").innerHTML =
            `Dr. Love thinks that a relationship between ` + yourName + ` and ` + lovedPersonName + ` has a very good chance of being successful, but this doesn't mean that you don't have to work on the relationship. Remember that every relationship needs spending time together, talking with each other etc.`;
    }
}
