$(function () {
  //   Modals
  const holidays = [
    {
      elementName: ".NO22-14",
      html: `<div class='white-popup'>
                <div class='title-modal'>Aniversario de Algo<br>
                    <label>(10 de noviembre)</label>
                </div>
          <div class='content-modal'>El día festivo o día feriado es aquel que no es día laborable (en el ámbito laboral) o que no es día
            hábil (en el ámbito procesal), y puede ser el domingo (en la mayoría de los países del mundo), el sábado (en
            los países influidos por la cultura judía) o el viernes (en los países influidos por la cultura islámica),
            además de otros días declarados festivos. Además, un día festivo es una fecha del calendario que resalta de
            forma especial, y habitualmente suele ser feriado.</div>
          <div class='image-modal'>
            <img src='./assets/images2/descanso-dominical.png' alt=''>
          </div>
        </div>`,
    },
    {
      elementName: ".NO22-16",
      html: `<div class='white-popup'>
                <div class='title-modal'>Aniversario de Algo<br>
                    <label>(10 de noviembre)</label>
                </div>
          <div class='content-modal'>El día festivo o día feriado es aquel que no es día laborable (en el ámbito laboral) o que no es día
            hábil (en el ámbito procesal), y puede ser el domingo (en la mayoría de los países del mundo), el sábado (en
            los países influidos por la cultura judía) o el viernes (en los países influidos por la cultura islámica),
            además de otros días declarados festivos. Además, un día festivo es una fecha del calendario que resalta de
            forma especial, y habitualmente suele ser feriado.</div>
          <div class='image-modal'>
            <img src='./assets/images2/descanso-dominical.png' alt=''>
          </div>
        </div>`,
    },
    {
      elementName: ".NO22-24",
      html: `<div class='white-popup'>
                <div class='title-modal'>Aniversario de Algo<br>
                    <label>(10 de noviembre)</label>
                </div>
          <div class='content-modal'>El día festivo o día feriado es aquel que no es día laborable (en el ámbito laboral) o que no es día
            hábil (en el ámbito procesal), y puede ser el domingo (en la mayoría de los países del mundo), el sábado (en
            los países influidos por la cultura judía) o el viernes (en los países influidos por la cultura islámica),
            además de otros días declarados festivos. Además, un día festivo es una fecha del calendario que resalta de
            forma especial, y habitualmente suele ser feriado.</div>
          <div class='image-modal'>
            <img src='./assets/images2/descanso-dominical.png' alt=''>
          </div>
        </div>`,
    },
    {
      elementName: ".NO22-1",
      html: `<div class='white-popup'>
                <div class='title-modal'>Aniversario de Algo<br>
                    <label>(10 de noviembre)</label>
                </div>
          <div class='content-modal'>El día festivo o día feriado es aquel que no es día laborable (en el ámbito laboral) o que no es día
            hábil (en el ámbito procesal), y puede ser el domingo (en la mayoría de los países del mundo), el sábado (en
            los países influidos por la cultura judía) o el viernes (en los países influidos por la cultura islámica),
            además de otros días declarados festivos. Además, un día festivo es una fecha del calendario que resalta de
            forma especial, y habitualmente suele ser feriado.</div>
          <div class='image-modal'>
            <img src='./assets/images2/descanso-dominical.png' alt=''>
          </div>
        </div>`,
    },
  ];

  //   End modals

  // Calendar generating
  function generateCalendar() {
    p();
    var e = h();
    var r = 0;
    var u = false;
    calendarContent.empty();
    while (!u) {
      if (days[r] == e[0].weekday) {
        u = true;
      } else {
        calendarContent.append('<div class="blank"></div>');
        r++;
      }
    }
    for (var c = 0; c < 42 - r; c++) {
      if (c >= e.length) {
        calendarContent.append('<div class="blank"></div>');
      } else {
        var v = e[c].day;
        var m = g(new Date(t, n - 1, v))
          ? `<div class="today monthDay ${
              months[n - 1].substring(0, 2) +
              t.toString().substring(2, 4) +
              "-" +
              v
            }">`
          : `<div class="monthDay ${
              months[n - 1].substring(0, 2) +
              t.toString().substring(2, 4) +
              "-" +
              v
            }">`;
        calendarContent.append(m + "" + v + "</div>");
      }
    }
    var y = colorMonths[n - 1];
    header
      .css("background-color", y)
      .find("h1")
      .text(months[n - 1] + " " + t);
    wekdays.find("div").css("color", y);
    calendarContent.find(".today").css("background-color", y);
    d();
    setHolidays();
  }

  function h() {
    var e = [];
    for (var r = 1; r < v(t, n) + 1; r++) {
      e.push({ day: r, weekday: days[m(t, n, r)] });
    }
    return e;
  }

  function p() {
    wekdays.empty();
    for (var e = 0; e < 7; e++) {
      wekdays.append("<div>" + days[e].substring(0, 3) + "</div>");
    }
  }

  function d() {
    var t;
    var n = $("#calendar").css("width", e + "px");
    n.find((t = "#calendar_weekdays, #calendar_content"))
      .css("width", e + "px")
      .find("div")
      .css({
        width: e / 7 + "px",
        height: e / 7 + "px",
        "line-height": e / 7 + "px",
      });
    n.find("#calendar_header")
      .css({ height: e * (1 / 7) + "px" })
      .find('i[class^="icon-chevron"]')
      .css("line-height", e * (1 / 7) + "px");
  }

  function v(e, t) {
    return new Date(e, t, 0).getDate();
  }

  function m(e, t, n) {
    return new Date(e, t - 1, n).getDay();
  }

  function g(e) {
    return y(new Date()) == y(e);
  }

  function y(e) {
    return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();
  }

  function b() {
    var e = new Date();
    t = e.getFullYear();
    n = e.getMonth() + 1;
  }

  var e = 480;
  var t = 2013;
  var n = 9;
  var r = [];
  var months = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SETIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE",
  ];
  var days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  var colorMonths = [
    "#16a085",
    "#1abc9c",
    "#c0392b",
    "#27ae60",
    "#FF6860",
    "#f39c12",
    "#f1c40f",
    "#e67e22",
    "#2ecc71",
    "#e74c3c",
    "#d35400",
    "#2c3e50",
  ];
  var calendar = $("#calendar");
  var header = calendar.find("#calendar_header");
  var wekdays = calendar.find("#calendar_weekdays");
  var calendarContent = calendar.find("#calendar_content");
  b();
  generateCalendar();

  header.find('i[class^="icon-chevron"]').on("click", function () {
    var e = $(this);
    var r = function (e) {
      n = e == "next" ? n + 1 : n - 1;
      if (n < 1) {
        n = 12;
        t--;
      } else if (n > 12) {
        n = 1;
        t++;
      }
      generateCalendar();
    };

    if (e.attr("class").indexOf("left") != -1) {
      r("previous");
    } else {
      r("next");
    }
  });

  function setModal(elementName, html) {
    $(elementName).addClass("holidays");
    $(elementName).magnificPopup({
      items: [
        {
          src: $(html),
          type: "inline",
        },
      ],
      gallery: {
        enabled: false,
      },
      type: "image", // this is a default type
    });
  }

  function setHolidays() {
    holidays.forEach((day) => {
      setModal(day.elementName, day.html);
    });
  }
});
