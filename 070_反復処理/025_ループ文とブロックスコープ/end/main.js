for(let i = 0; i < 5; i++) {
	// for文ではオブジェクトが再生成されるため、constが記述できる
	const j = i * 2;
	setTimeout(function() {
		console.log(j);
	}, 1000);
}
