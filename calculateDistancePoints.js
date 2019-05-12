const calculateDistancePoints = (distance, hillSize, kPoint) => {
  
  // Wielkość skoczni (normalna 60 pnk., duża 60 pnk., mamucia 120 pnk.)
  // Długość skoku (zaokrąglana do pół metra)
  // Punkt "K" (inny dla każdej skoczni)
  // Jest pięciu rzuri
  // Dla skoczni normalnej są to 2 punkty za każdy metr różnicy między odległością a punktem "K"
  // dla skoczni dużej jest to 1.8 punktu
  // dla skoczni mamuciej jest to 1.2 punktu
  // ważne jest to, że nota każdego sędziego jest liczbą między 0 a 20 (włącznie) i może być "połówką" (czyli np. 15.5) 
  // dwie skrajne noty (minimalną oraz maksymalną) się odrzuca, a następnie sumuje pozostałe trzy noty
  // punkty dodatkowe (2 punkty za każdy metr)
  // const hillsData = [
  //   {
  //     hillSize: "normal",
  //     defaultPoints: 60,
  //     pointsPerMeter: 2,
  //     kPoint: 98
  //   },
  //   {
  //     hillsize: "large",
  //     defaultPoints: 120,
  //     pointsPerMeter: 1.8,
  //     kPoint: 120
  //   },
  //   {
  //     hillsize: "mamucia",
  //     defaultPoints: 120,
  //     pointsPerMeter: 1.2,
  //     kPoint: 200
  //   }
  // ]
  // const large = 120;
  // const mamucia = 200;
  // const dots;
  // };
  if (hillSize === 'normal') {
    return (distance - kPoint) * 2 + 60;
	}
	else if (hillSize === 'large') {
		return (distance - kPoint) * 1.8 + 60;
	}
	else if (hillSize === 'flying') {
		return (distance - kPoint) * 1.2 + 120;
	}
	else {
		return 'Wrong hill size';
	}
};

  module.exports = calculateDistancePoints;


