'use strict';


$(function( $, window ) {

  var _defaults = {
    x : 3, // tiles in x axis
    y : 3, // tiles in y axis
    gap: 2
  };

  $.prototype.splitInTiles = function( options ) {

    var o = $.extend( {}, _defaults, options );

    return this.each(function() {

      var $container = $(this),
      width = $container.width(),
      height = $container.height(),
      $img = $container.find('img'),
      n_tiles = o.x * o.y,
      wraps = [], $wraps;

      for ( var i = 0; i < n_tiles; i++ ) {
        wraps.push('<div class="tile"><div class="image"></div></div>');

      }

      $wraps = $( wraps.join('') );

      // Hide original image and insert tiles in DOM
      $img.hide().after( $wraps );

      // Set background
      $wraps.find(".image").css({
        width: (width / o.x) - o.gap,
        height: (height / o.y) - o.gap,
        marginBottom: o.gap +'px',
        marginRight: o.gap +'px',
        backgroundImage: 'url('+ $img.attr('src') +')'
      });


      // Adjust position
      $wraps.find(".image").each(function() {
        var pos = $(this).position();
        $(this).css( 'backgroundPosition', -pos.left +'px '+ -pos.top +'px' );
debugger;


      });
    // var $correct =

  $wraps= _.shuffle($wraps);

  $('.sliced').html($wraps);

  var $ttd1 = $('.tile').first().attr({'id': 'td1', 'data-num': '1'});
  var $ttd2 = $('.tile').first().next().attr({'id': 'td2', 'data-num': '2'});
  var $ttd3 = $('.tile').first().next().next().attr({'id': 'td3', 'data-num': '3'});
  var $ttd4 = $('.tile').first().next().next().next().attr({'id': 'td4', 'data-num': '4'});
  var $ttd5 = $('.tile').first().next().next().next().next().attr({'id': 'td5', 'data-num': '5'});
  var $ttd6 = $('.tile').last().prev().prev().prev().attr({'id': 'td6', 'data-num': '6'});
  var $ttd7 = $('.tile').last().prev().prev().attr({'id': 'td7', 'data-num': '7'});
  var $ttd8 = $('.tile').last().prev().attr({'id': 'td8', 'data-num': '8'});
  var $ttd9 = $('.tile').last().attr({'id': 'td9', 'data-num': '0'});

  $('.image').last().css('visibility', 'hidden');
  // $wraps= _.shuffle($wraps);
  //
  // $('.sliced').html($wraps);

  $('.tile').click(function() {


    var id=$(this).attr('id');
//alert(id)
  if(id=='td1')
  {
       if(isEmpty('td2')) swap(id,'td2');
       else if(isEmpty('td4')) swap(id,'td4');
  }
  if(id=='td2')
  {
       if(isEmpty('td1')) swap(id,'td1');
       else if(isEmpty('td3')) swap(id,'td3');
       else if(isEmpty('td5')) swap(id,'td5');
  }
  if(id=='td3')
  {
       if(isEmpty('td2')) swap(id,'td2');
       else if(isEmpty('td6')) swap(id,'td6');
  }
  if(id=='td4')
  {
       if(isEmpty('td1')) swap(id,'td1');
       else if(isEmpty('td5')) swap(id,'td5');
       else if(isEmpty('td7')) swap(id,'td7');
  }
  if(id=='td5')
  {
       if(isEmpty('td2')) swap(id,'td2');
       else if(isEmpty('td4')) swap(id,'td4');
       else if(isEmpty('td6')) swap(id,'td6');
       else if(isEmpty('td8')) swap(id,'td8');
  }
  if(id=='td6')
  {
       if(isEmpty('td9')) swap(id,'td9');
       else if(isEmpty('td5')) swap(id,'td5');
       else if(isEmpty('td3')) swap(id,'td3');
  }
  if(id=='td7')
  {
       if(isEmpty('td4')) swap(id,'td4');
       else if(isEmpty('td8')) swap(id,'td8');
  }
  if(id=='td8')
  {
       if(isEmpty('td7')) swap(id,'td7');
       else if(isEmpty('td5')) swap(id,'td5');
       else if(isEmpty('td9')) swap(id,'td9');
  }
  if(id=='td9')
  {
       if(isEmpty('td6')) swap(id,'td6');
       else if(isEmpty('td8')) swap(id,'td8');
  }

})

function isEmpty(id)
{
   var empty=false;

   var num=$('#'+id).attr('data-num')
   if(num==0) empty=true;

   return empty
}

function swap(id1,id2)
{
   var $td1=$('#'+id1);
   var $td2=$('#'+id2);

   var num1=$('#'+id1).attr('data-num')
   var num2=$('#'+id2).attr('data-num')

   var html1=$td1.html();
   var html2=$td2.html();

   $td1.html(html2).attr('data-num',num2);
   $td2.html(html1).attr('data-num',num1);
}

  });

 };

  function isEmpty(id)
  {
    var empty=false;

    var num = $('#'+id).attr('data-num')
    if(num === 0) empty=true;

    return empty;
  }

  function swap(id1,id2)
  {
    var $td1=$('#'+id1);
    var $td2=$('#'+id2);

    var num1=$('#'+id1).attr('data-num')
    var num2=$('#'+id2).attr('data-num')

    var html1=$td1.html();
    var html2=$td2.html();

    $td1.html(html2).attr('data-num',num2);
    $td2.html(html1).attr('data-num',num1);

    console.log('id1: ' + id1)
    console.log('id2: ' + id2)

  }

}( $, window ));

$('.sliced').splitInTiles();
