const ans = document.getElementById("display")
function appendd(s) {
    ans.value += s;
}
function clr() {
    ans.value = "";
}

function res() {
    exp = ans.value;
    a = [];
    num = "";
    for (i = 0; i < exp.length; i++) {
        if (".0123456789".includes(exp[i])) {
            num += exp[i];
        }
        else {
            if (num) {
                a.push(num);
                num = "";
                a.push(exp[i])

            }
        }
    }
    if (num) {
        a.push(num);
    }

    for (i = 0; i < a.length; i++) {
        switch (a[i]) {
            case "*":
                var r = Number(a[i - 1]) * Number(a[i + 1]);
                a.splice(i - 1, 3, r);
                i = -1;
                break;
            case "/":
                b = Number(a[i - 1]) / Number(a[i + 1]);
                a.splice(i - 1, 3, b);
                i = -1;
                break;
            case "%":
                c = Number(a[i - 1]) % Number(a[i + 1]);
                a.splice(i - 1, 3, c);
                i = -1;
                break;
            case "+":
                d = Number(a[i - 1]) + Number(a[i + 1]);
                a.splice(i - 1, 3, d);
                i = -1;
                break;
            case "-":
                e = Number(a[i - 1]) + Number(a[i + 1]);
                a.splice(i - 1, 3, e);
                i = -1;
        }

    }
    ans.value = a.join("");


}


