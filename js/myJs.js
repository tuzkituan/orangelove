const textConfig = {
  text1: "Em yêu hỡiiii!",
  text2: "Anh Cá có điều này muốn hỏi, em nhớ phải trả lời thật lòng nháaaa!!!!",
  text3: "Cam nhớ anh Tưn đúng hôngggg :3",
  text4: "Nếu em không trả lời mà thoát ra tức là muốn ra đường ngủ =.=",
  text5: "Nấu nâu nâu nầu",
  text6: "Dạ nhớ đến mất ngủ ạ",
  text7: "Đố em hôm nay là ngày gì nè. Đoán đúng có thưởng :*",
  text8: "Gửi cho anh <3",
  text9: "Ngày mình bắt đầu yêu nhau thắm thiết ó",
  text10: "Heeee! Anh biết mờ",
  text11:
   `
    Cam nè,
    mới đó mà đã 8 tháng mình chưa gặp nhau rồi.
    Anh cứ nghĩ tới 1 tháng nữa mình gặp nhau anh háo hức, tâm thế cứ nhớ về SG, để được gặp người yêu anh nè!
    Em ơi, em đừng buồn. Dù mình có hay giận dỗi cãi nhau nhưng mà dui đúng hông! 
    Anh á, nhiều lúc anh ngu ngơ làm em buồn em giận mãi. 
    Nhưng mà anh vẫn thương em nhiều lắm.
    Anh luôn muốn là một người có thể bên em mỗi khi em cần, là bờ vai để em tựa mỗi khi em mệt mỏi. 
    Hay là một người luôn luôn lắng nghe em nói. 
    Mình hãy cùng nhau nắm tay đi qua hết mọi vui buồn nhé Cam. Cây sẽ đơm hoa kết trái khi chúng mình cùng nhau vun trồng. He!
    Ài nớp diu sấu mệchhhhh <3`,
  text12: "Dạ em biết gòiiii bà noại",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Hé hé hé, Cam nhập đi =))'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#FF870E",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://t.me/lewisnguyen2804";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
