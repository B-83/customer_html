/**
 * 
 */

/* テーブルのサイズをウィンドウサイズに合わせて変更 */
$(window).on('load resize', function(){
	
	$(".table-responsive").height(window.innerHeight - 400);
});

var sth = false;

/* テーブルのサイズを検索欄に合わせて変更 */
$( function() {
	$('.search-area').click( function() {
		
		if (sth) {
			$(".table-responsive").height(window.innerHeight - 400);
			sth = false;
		} else {
			$(".table-responsive").height(window.innerHeight - 220);
			sth = true;
		}
	} );
} );

/* ----------------------管理者リストページ用--------------------- */

/* テーブルのサイズをウィンドウサイズに合わせて変更 */
$(window).on('load resize', function(){
	
	$(".admin-table").height(window.innerHeight - 164);
});





/* 顧客の(登録・編集)確認後OKクリックで詳細ページに画面遷移→完了ダイアログが表示されるようにする */
var customerSth = false;

$(function(){
	$('#customer-finish-btn').click(function() {
		
		location.href = '/customer/customer.html';
		customerSth = true;
	})
});


$(function(){
	
	if (customerSth) {
		$('#customer-entry-edit-finish').modal();
		customerSth = false;
	}
});