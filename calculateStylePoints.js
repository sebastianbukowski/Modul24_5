const calculateStylePoints = (styleNotes) => {
//  Punkty za wiatr oraz belkę to dodatkowe punkty, której mają rekompensować warunki na skoczni i przez to     sprawiać, że wyniki są bardziej sprawiedliwe. Jeśli skoczkowi wiatr wieje pod narty, to wtedy dostanie        punkty ujemne (bo łatwiej  mu dalej dolecieć, więc jego nota za odległość będzie większa).

//  Podobnie jest z belką startową: jeśli sędziowie zdecydują np. o jej obniżeniu, to zawodnik będzie miał      mniejszą prędkość, więc doleci bliżej, za co należą mu się dodatkowe punkty rekompensaty.

//  Dla nas istotne jest, że obie te wartości to dwie liczby, które mogą być dodatnie lub ujemne.
     
//     const max = Math.max(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
//     const min = Math.min(styleNotes[0], styleNotes[1], styleNotes[2], styleNotes[3], styleNotes[4]);
//       return styleNotes[0] + styleNotes[1] + styleNotes[2] + styleNotes[3] + styleNotes[4] - max - min;

// }
      return styleNotes.sort().slice(1,4).reduce((a,b)  => a + b)
}
  module.exports = calculateStylePoints;