function fishTank (input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let fullVolumeOfTheAquarium = length * width * height;

    let volumeInLiters = fullVolumeOfTheAquarium / 1000 ;
   
    
    let takenUpSpace = percentage / 100;

    let totalVolumeWithSandAndAccessories = volumeInLiters * ( 1 - takenUpSpace );
    console.log(totalVolumeWithSandAndAccessories);
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
);
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)