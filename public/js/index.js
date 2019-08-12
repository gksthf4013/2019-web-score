var scoreURL = {
	site: "https://webmir.co.kr/score",
	cURL: site + "/score_in.php",
	rURL: site + "/score_li.php",
	uURL: site + "/score_up.php",
	dURL: site + "/score_del.php"
}

getList();
function getList() {
	$.ajax({
		type: "post",
		url: scoreURL.rURL,
		data: "data",
		dataType: "dataType",
		success: function (response) {
			
		}
	});
}