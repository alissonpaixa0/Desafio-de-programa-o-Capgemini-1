let n = [1, 5, 3, 4, 2];
let nSorted = n.sort((a, b) => a - b);
let newN = [];
let pars = 0;

for(i = nSorted.length-1; i > 0; i--) {
    newN[i] = nSorted[nSorted.length - 1] - nSorted[i-1];
    if(newN[i] == 2) {
        pars = pars + 1;
    }
}
for(i = nSorted.length-2; i > 0; i--) {
    newN[i] = nSorted[nSorted.length - 2] - nSorted[i-1];
    if(newN[i] == 2) {
        pars = pars + 1;
    }
}
for(i = nSorted.length-3; i > 0; i--) {
    newN[i] = nSorted[nSorted.length - 3] - nSorted[i-1];
    if(newN[i] == 2) {
        pars = pars + 1;
    }
}
for(i = nSorted.length-4; i > 0; i--) {
    newN[i] = nSorted[nSorted.length - 4] - nSorted[i-1];
    if(newN[i] == 2) {
        pars = pars + 1;
    }
}
for(i = nSorted.length-5; i > 0; i--) {
    newN[i] = nSorted[nSorted.length - 5] - nSorted[i-1];
    if(newN[i] == 2) {
        pars = pars + 1;
    }
}



console.log(pars);