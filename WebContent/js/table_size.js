/**
 * テーブルサイズの変更
 */

/* テーブルのサイズをウィンドウサイズに合わせて変更 */
$(window).on('load resize', function(){
	
	// 検索エリアあり
	if ($(".table-responsive").length) {
		$(".table-responsive").height(window.innerHeight - 400);
	}
		
	// 検索エリアなし
	if ($(".admin-table").length) {
		$(".admin-table").height(window.innerHeight - 164);
	}
});


/* テーブルのサイズを検索エリアに合わせて変更 */
$('.search-area').click( function() {

	var tableSth = false;
	
	if (tableSth) {
		/* 検索エリアが開いているとき */
		$(".table-responsive").height(window.innerHeight - 400);
		tableSth = false;
	} else {
		/* 検索エリアが閉じているとき */
		$(".table-responsive").height(window.innerHeight - 220);
		tableSth = true;
	}
} );