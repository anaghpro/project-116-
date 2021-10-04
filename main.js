function preload() {
    cilun_nak = loadImage('https://i.postimg.cc/gJ1gcbJ9/cilun-noj.png')

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poznat = ml5.poseNet(video, mudal_ludad());
    poznat.on("pose", gotPoses)
}

function mudal_ludad() {
    console.log("not neeeded*its loaded*");
}

function draw() {
    image(video, 0, 0, 300, 300);
    /*
    fill(255, 0, 0);
    stroke(255, 255, 255);
    circle(nak_ak, nak_dui, 30);
*/
image(cilun_nak,nak_ak-95,nak_dui-180,190,215)
}

nak_ak = 69;
nak_dui = 56;

function tak_futoo() {
    save("cilown futoo.png");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log(results[0].pose.nose.y);
        console.log(results[0].pose.nose.x);
        nak_ak = results[0].pose.nose.x;
        nak_dui = results[0].pose.nose.y;
    }
}