/**
 * ダイアログサイズの変更
 */

/* テーブルのサイズをウィンドウサイズに合わせて変更 */
$(window).on('load resize', function(){

		$(".modal-tall").height(window.innerHeight - 225);
		$(".modal-tall").css('overflow-y', 'auto');
});