function row1() {
  for (let i = 0; i < 12; i++) {
    if (i >= 4 && i <= 8) {
      document.querySelector(`.row-1 > .col-${i}`).classList.add("red");
    }
  }
}

function row2() {
  for (let i = 0; i < 12; i++) {
    if (i >= 3 && i <= 11) {
      document.querySelector(`.row-2 > .col-${i}`).classList.add("red");
    }
  }
}

function row3() {
  for (let i = 0; i < 12; i++) {
    if (i >= 3 && i <= 5) {
      document.querySelector(`.row-3 > .col-${i}`).classList.add("brown");
    } else if ((i >= 6 && i <= 7) || i == 9) {
      document.querySelector(`.row-3 > .col-${i}`).classList.add("pink");
    } else if (i == 8) {
      document.querySelector(`.row-3 > .col-${i}`).classList.add("black");
    }
  }
}

function row4() {
  for (let i = 0; i < 12; i++) {
    if (i == 2 || i == 4) {
      document.querySelector(`.row-4 > .col-${i}`).classList.add("brown");
    }
    if (i >= 3 && i <= 5) {
      document.querySelector(`.row-4 > .col-${i}`).classList.add("pink");
    } else if ((i >= 6 && i <= 7) || i >= 9) {
      document.querySelector(`.row-4 > .col-${i}`).classList.add("pink");
    } else if (i == 8) {
      document.querySelector(`.row-4 > .col-${i}`).classList.add("black");
    }
  }
}

function row5() {
  for (let i = 0; i < 13; i++) {
    if (i == 2 || i == 4 || i == 5) {
      document.querySelector(`.row-5 > .col-${i}`).classList.add("brown");
    }
    if (i >= 3 && i <= 5) {
      document.querySelector(`.row-5 > .col-${i}`).classList.add("pink");
    } else if ((i >= 6 && i <= 8) || i >= 10) {
      document.querySelector(`.row-5 > .col-${i}`).classList.add("pink");
    } else if (i == 9) {
      document.querySelector(`.row-5 > .col-${i}`).classList.add("black");
    }
  }
}

function row6() {
  for (let i = 0; i < 13; i++) {
    if (i == 2 || i == 3) {
      document.querySelector(`.row-6 > .col-${i}`).classList.add("brown");
    }
    if (i >= 4 && i <= 7) {
      document.querySelector(`.row-6 > .col-${i}`).classList.add("pink");
    } else if (i >= 8 && i < 12) {
      document.querySelector(`.row-6 > .col-${i}`).classList.add("black");
    }
  }
}

function row7() {
  for (let i = 0; i < 13; i++) {
    if (i >= 4 && i <= 10) {
      document.querySelector(`.row-7 > .col-${i}`).classList.add("pink");
    }
  }
}

function row8() {
  for (let i = 0; i < 13; i++) {
    if (i >= 4 && i <= 8) {
      if (i == 5) {
        document.querySelector(`.row-8 > .col-${i}`).classList.add("blue");
      }
      document.querySelector(`.row-8 > .col-${i}`).classList.add("red");
    }
  }
}

function row9() {
  for (let i = 0; i < 13; i++) {
    if (i >= 2 && i <= 11) {
      if (i == 5 || i == 8) {
        document.querySelector(`.row-9 > .col-${i}`).classList.add("blue");
      }
      document.querySelector(`.row-9 > .col-${i}`).classList.add("red");
    }
  }
}

function row10() {
  for (let i = 0; i < 13; i++) {
    if (i >= 1 && i <= 12) {
      if (i >= 5 && i <= 8) {
        document.querySelector(`.row-10 > .col-${i}`).classList.add("blue");
      }
      document.querySelector(`.row-10 > .col-${i}`).classList.add("red");
    }
  }
}

function row11() {
  for (let i = 0; i < 13; i++) {
    if (i >= 3 && i <= 10) {
      if (i >= 4 && i <= 9) {
        if (i == 5 || i == 8) {
          document.querySelector(`.row-11 > .col-${i}`).classList.add("yellow");
        }
        document.querySelector(`.row-11 > .col-${i}`).classList.add("blue");
      }
      document.querySelector(`.row-11 > .col-${i}`).classList.add("red");
    }
  }
}

function row12() {
  for (let i = 0; i < 13; i++) {
    if (i >= 4 && i <= 9) {
      document.querySelector(`.row-12 > .col-${i}`).classList.add("blue");
    }
  }
}

function row13() {
  for (let i = 0; i < 13; i++) {
    if (i >= 3 && i <= 10) {
      document.querySelector(`.row-13 > .col-${i}`).classList.add("blue");
    }
  }
}

function row14() {
  for (let i = 0; i < 13; i++) {
    if (i >= 3 && i <= 5 || i >=8 && i<=10) {
      document.querySelector(`.row-14 > .col-${i}`).classList.add("blue");
    }
  }
}

function row15() {
  for (let i = 0; i < 13; i++) {
    if (i >= 2 && i <= 4 || i >=9 && i<=11) {
      document.querySelector(`.row-15 > .col-${i}`).classList.add("brown");
    }
  }
}

function row16() {
  for (let i = 0; i < 13; i++) {
    if (i >= 1 && i <= 4 || i >=9 && i<=12) {
      document.querySelector(`.row-16 > .col-${i}`).classList.add("brown");
    }
  }
}