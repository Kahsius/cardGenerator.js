window.onload = () => {
	var fitness = 0, fitTalent = 0, fitMaitrise = 0, maiSurTal = 2, c = null;
	var n = 20, min = 23, max = 26;
	var cg = new CardGenerator();

	// System.out.prvar("Nombre de cartes Ã  gÃ©nÃ©rer (10 par dÃ©faut): ");
	// String s = scan.nextLine();
	// if(s.equals("")){
	// 	n = 10;
	// } else {
	// 	n = Integer.parseInt(s);
	// }

	// System.out.prvar("Fitness min (20 par dÃ©faut): ");
	// s = scan.nextLine();
	// if(s.equals("")){
	// 	min = 20;
	// } else {
	// 	min = Double.parseDouble(s);
	// }

	// System.out.prvar("Fitness max (23 par dÃ©faut): ");
	// s = scan.nextLine();
	// if(s.equals("")){
	// 	max = 23;
	// } else {
	// 	max = Double.parseDouble(s);
	// }
	var text = 	"<table>" +
					"<tr>" +
						"<th class='larger'> Fitn </th>" +
						"<th class='larger'> T </th>" +
						"<th class='larger'> D </th>" +
						"<th> Talent </th>" +
						"<th> Maitrise </th>" +
					"</tr>";
	console.log("Creation des cartes");
	for(var i = 0; i < n; i++) {
		do {
			c = cg.generateCard();
			fitness = c.getFitness();
			fitTalent = c.getFitnessTalent();
			fitMaitrise = c.getFitnessMaitrise();
		} while(fitness > max
				|| fitness < min
				|| fitMaitrise < 0
				|| Math.abs(fitTalent/fitMaitrise) > 1/maiSurTal && fitMaitrise > 0);
		text += c.toHTML();
	}
	text += "</table>";
	document.getElementById('here').innerHTML = text;
}
