function showsCalculator(input){

    let showName = (input[0]);
    let seasonCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let duration = Number(input[3]);


    let adDuration = (duration / 100) * 20; 

    let episodeDurationWithAds = duration + adDuration;

    let seasonWithLastEpisode = seasonCount * 10;

    

    let totalTimeNeededToWatchTheShow = episodeDurationWithAds * episodeCount * seasonCount + seasonWithLastEpisode;

    console.log(`Total time needed to watch the ${showName} series is ${totalTimeNeededToWatchTheShow} minutes.`);
  

}
showsCalculator(["Lucifer",
"3",
"18",
"55"])
showsCalculator(["Game of Thrones",
"7",
"10",
"50"])
showsCalculator(["Riverdale",
"3",
"21",
"45"])