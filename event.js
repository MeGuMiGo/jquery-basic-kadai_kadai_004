$(function(){
  $(window).on({
    'load':() => {
     console.log('loadイベントが発生しました'); 
     },
    'scroll':() => {
     console.log('scrollイベントが発生しました');
     },
  })
});


// $(window).on(イベント, () => {}); 　<課題からの参考コード>

// $('window').on('load', function(){
//   console.log('loadイベントが発生しました');
// }); 
