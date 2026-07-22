for (let pass = 1; pass <= 100; pass++){
    if (pass > 40){
        break;
    }
    if (pass % 5 == 0){
        continue;
    }
    console.log(pass);
}