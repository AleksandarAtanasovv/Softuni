function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let totalRoom = width * height * length;
    let command = input[index];
    index++;
    let boxes = 0;
    while (command !== "Done") {
        boxes = Number(command);
        totalRoom -= boxes;
        if (totalRoom < 0) {
            break;
        }
        command = input[index];
        index++;
    }
    if (totalRoom >= 0) {
        console.log(`${Math.abs(totalRoom)} Cubic meters left.`);
    } else {
        console.log(
            `No more free space! You need ${Math.abs(totalRoom)} Cubic meters more.`
        )
    }
}
moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
