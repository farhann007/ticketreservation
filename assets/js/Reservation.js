
var seatsett = {
               rows: 5,
               cols: 5,
               colss: 10,
               rowCssPrefix: 'row-',
               colCssPrefix: 'col-',
               seatWidth: 25,
               seatHeight: 25,
               seatCss: 'seat allSeat',
               selectedSeatCss: 'selectedSeat',
               selectingSeatCss: 'selectingSeat',
               disabledSeatCss: 'disabledSeat',
               allSeatCss: 'allSeat',
               selectmarginleft:-23,
               selectmargintop:-43
               
               
           };
           
         var init3 = function (reservedSeatcol) {
                var str = [], seatNo, className;
                for (i = 0; i < seatsett.rows; i++) {
                    for (j = 0; j < seatsett.colss; j++) {
                        seatNo = (i + j * seatsett.rows + 1);
                        className = seatsett.seatCss + ' ' + seatsett.rowCssPrefix + ' ' + seatsett.colCssPrefix ;
                        if ($.isArray(reservedSeatcol) && $.inArray(seatNo, reservedSeatcol) != -1) {
                            className += ' ' + seatsett.selectedSeatCss;
                        } 
                       
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * seatsett.seatHeight).toString() + 'px;left:' + (j * seatsett.seatWidth).toString() + 'px;margin-left:'+ (seatsett.selectmarginleft).toString()+'px;margin-top:'+ (seatsett.selectmargintop).toString()+'px";>' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place3').html(str.join(''));
            };

           var init2 = function (reservedSeatcol) {
                var str = [], seatNo, className;
                for (i = 0; i < seatsett.rows; i++) {
                    for (j = 0; j < seatsett.cols; j++) {
                        seatNo = (i + j * seatsett.rows + 1);
                        className = seatsett.seatCss + ' ' + seatsett.rowCssPrefix + i.toString() + ' ' + seatsett.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeatcol) && $.inArray(seatNo, reservedSeatcol) != -1) {
                            className += ' ' + seatsett.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * seatsett.seatHeight).toString() + 'px;left:' + (j * seatsett.seatWidth).toString() + 'px;margin-left:'+ (seatsett.selectmarginleft).toString()+'px;margin-top:'+ (seatsett.selectmargintop).toString()+'px";>' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place2').html(str.join(''));
            };

 var init4 = function (reservedSeatcol) {
                var str = [], seatNo, className;
                for (i = 0; i < seatsett.rows; i++) {
                    for (j = 0; j < seatsett.cols; j++) {
                        seatNo = (i + j * seatsett.rows + 1);
                        className = seatsett.seatCss + ' ' + seatsett.rowCssPrefix + i.toString() + ' ' + seatsett.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeatcol) && $.inArray(seatNo, reservedSeatcol) != -1) {
                            className += ' ' + seatsett.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * seatsett.seatHeight).toString() + 'px;left:' + (j * seatsett.seatWidth).toString() + 'px;margin-left:'+ (seatsett.selectmarginleft).toString()+'px;margin-top:'+ (seatsett.selectmargintop).toString()+'px";>' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place4').html(str.join(''));
            };

var settings = {
               rows: 1,
               cols: 25,
               rowCssPrefix: 'row-',
               colCssPrefix: 'col-',
               seatWidth: 25,
               seatHeight: 25,
               seatCss: 'seat allSeat',
               selectedSeatCss: 'selectedSeat',
               selectingSeatCss: 'selectingSeat',
               selectmarginleft:-23
               
               
           };
           
           var init = function (reservedSeat) {
                var str = [], seatNo, className;
                for (i = 0; i < settings.rows; i++) {
                    for (j = 0; j < settings.cols; j++) {
                        seatNo = (i + j * settings.rows + 1);
                        className = settings.seatCss + ' ' + settings.rowCssPrefix + i.toString() + ' ' + settings.colCssPrefix + j.toString();
                        if ($.isArray(reservedSeat) && $.inArray(seatNo, reservedSeat) != -1) {
                            className += ' ' + settings.selectedSeatCss;
                        }
                        str.push('<li class="' + className + '"' +
                                  'style="top:' + (i * settings.seatHeight).toString() + 'px;left:' + (j * settings.seatWidth).toString() + 'px;margin-left:'+ (settings.selectmarginleft).toString()+'px";>' +
                                  '<a title="' + seatNo + '">' + seatNo + '</a>' +
                                  '</li>');
                    }
                }
                $('#place1').html(str.join(''));
            };
            
            var bookedSeats = [5, 10, 25];
            init(bookedSeats);
            
            init2(bookedSeats);
init3(bookedSeats);
            init4();

var len = 5;
 var a = 0;
$('.allSeat').click(function () {
    
    if ($(this).hasClass(settings.selectedSeatCss)){
    alert('This seat is already reserved');
}
else if($(this).hasClass("allSeat")){
    $(this).toggleClass(settings.selectingSeatCss);
    }
    a++;
    if (a > len) {
        $('a').removeAttr('title');
        alert('You can select only'+ ' ' + len + ' ' + 'seats');
        // $('.seat').removeClass("allSeat");
        $(this).removeClass(settings.selectingSeatCss);         
    }
});
 
